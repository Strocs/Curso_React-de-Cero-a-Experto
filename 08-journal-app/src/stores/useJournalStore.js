import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { create } from 'zustand'
import { FirebaseDB } from '../firebase/config'
import { loadNotes } from '../helpers/loadNotes'
import { useAuthStore } from './'

export const useJournalStore = create((set, get) => ({
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  creatingNewNote: () => {
    set({
      isSaving: true
    })
  },
  setActiveNote: (activeNote) => {
    set({
      active: activeNote
    })
  },
  addNewEmptyNote: async () => {
    get().creatingNewNote()
    const { uid } = useAuthStore.getState().userAuth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imageUrls: []
    }
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))

    await setDoc(newDoc, newNote)
    newNote.id = newDoc.id

    // Adding note to state
    set((state) => ({
      isSaving: false,
      notes: [newNote, ...state.notes]
    }))
    get().setActiveNote(newNote)
  },
  setNotes: async () => {
    const { uid } = useAuthStore.getState().userAuth
    if (!uid) throw new Error('You must be logged in to save notes')
    const notesFromDB = await loadNotes(uid)
    set({
      notes: notesFromDB
    })
    console.log(get().notes)
  },
  setSaving: () => {},
  updateNote: () => {},
  deleteNoteById: () => {}
}))
