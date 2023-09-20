import { create } from 'zustand'
import { useAuthStore } from './'
import {
  startCreateNote,
  startDeletingNote,
  startLoadNotes,
  startSaveNote,
  startUploadingFiles
} from '../helpers'

export const useJournalStore = create((set, get) => ({
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  setSaving: () => {
    set({
      isSaving: true,
      messageSaved: ''
    })
  },
  setActiveNote: (activeNote) => {
    set({
      active: activeNote,
      messageSaved: ''
    })
  },
  addNewEmptyNote: async () => {
    get().setSaving()
    const { uid } = useAuthStore.getState().userAuth
    const noteTemplate = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: []
    }
    const note = await startCreateNote(uid, noteTemplate)

    // Adding note to state
    set((state) => ({
      isSaving: false,
      notes: [note, ...state.notes]
    }))
    get().setActiveNote(note)
  },
  setNotes: async () => {
    const { uid } = useAuthStore.getState().userAuth
    const notesFromDB = await startLoadNotes(uid)
    set({
      notes: notesFromDB
    })
  },
  saveNote: async () => {
    get().setSaving()
    const { uid } = useAuthStore.getState().userAuth
    await startSaveNote(uid, get().active)
    get().updateNote()
  },
  updateNote: () => {
    const { id, title, body } = get().active
    set((state) => ({
      isSaving: false,
      notes: state.notes.map((note) => {
        return note.id === id ? { ...note, title, body } : note
      }),
      messageSaved: `${title}, successfully updated`
    }))
  },
  deleteNote: () => {
    const { id } = get().active
    const { uid } = useAuthStore.getState().userAuth
    startDeletingNote(uid, get().active)

    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
      active: null
    }))
  },
  clearNotesLogout: () => {
    set({
      isSaving: false,
      messageSaved: '',
      notes: [],
      active: null
    })
  },
  uploadFiles: async (files) => {
    get().setSaving()
    const photosUrls = await startUploadingFiles(files)
    get().setPhotosToActiveNote(photosUrls)
    console.log(get().active)
  },
  setPhotosToActiveNote: (imageUrls) => {
    set((state) => ({
      active: {
        ...state.active,
        imageUrls: [...state.active.imageUrls, ...imageUrls]
      },
      isSaving: false
    }))
  }
}))
