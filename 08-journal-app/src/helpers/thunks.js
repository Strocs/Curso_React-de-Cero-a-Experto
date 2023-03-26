import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from 'firebase/firestore/lite'
import { FirebaseDB } from '../firebase/config'
import { fileUpload } from './fileUpload'

export const startLoadNotes = async (uid = '') => {
  if (!uid) throw new Error('You must be logged in')

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
  const docs = await getDocs(collectionRef)
  const notes = []
  docs.forEach((doc) => {
    notes.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return notes
}

export const startCreateNote = async (uid = '', note) => {
  if (!uid) throw new Error('You must be logged in')

  const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
  await setDoc(newDoc, note)
  note.id = newDoc.id

  return note
}

export const startSaveNote = async (uid = '', activeNote) => {
  if (!uid) throw new Error('You must be logged in')
  const noteToFireStore = { ...activeNote }
  delete noteToFireStore.id

  const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)
  await setDoc(docRef, noteToFireStore, { merge: true })
}

export const startUploadingFiles = async (files = []) => {
  const filesUploadPromises = []
  for (const file of files) {
    filesUploadPromises.push(fileUpload(file))
  }

  const photosUrl = await Promise.all(filesUploadPromises)
  return photosUrl
}
