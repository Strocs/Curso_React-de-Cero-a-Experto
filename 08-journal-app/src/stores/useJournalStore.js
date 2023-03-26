import { create } from 'zustand'
import { useAuthStore } from './'
import { loadNotes, createNote, saveNote } from '../helpers'

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
    const note = await createNote(uid, noteTemplate)

    // Adding note to state
    set((state) => ({
      isSaving: false,
      notes: [note, ...state.notes]
    }))
    get().setActiveNote(note)
  },
  setNotes: async () => {
    const { uid } = useAuthStore.getState().userAuth
    const notesFromDB = await loadNotes(uid)
    set({
      notes: notesFromDB
    })
  },
  saveSaving: async () => {
    get().setSaving()
    const { uid } = useAuthStore.getState().userAuth
    await saveNote(uid, get().active)
    get().updateNotes()
  },
  updateNotes: () => {
    const { id, title, body } = get().active
    set((state) => ({
      isSaving: false,
      notes: state.notes
        .map((note) => {
          return note.id === id ? { ...note, title, body } : note
        }),
      messageSaved: `${title}, successfully updated`
    }))
  },
  deleteNoteById: () => {}
}))
