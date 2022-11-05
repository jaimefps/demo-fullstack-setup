import { config } from "../config"
import { initializeApp } from "firebase/app"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
  getAuth,
} from "firebase/auth"

const { firebase, secrets } = config()
const firebaseApp = initializeApp(firebase)
export const auth = getAuth(firebaseApp)

export const member = {
  current() {
    return auth.currentUser
  },
  token() {
    return member.current()?.getIdToken()
  },
  create(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  },
  login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  },
  dev() {
    return signInWithEmailAndPassword(
      auth,
      secrets.dev.email,
      secrets.dev.password
    )
  },
  logout() {
    return signOut(auth)
  },
  password: {
    reset(email: string) {
      return sendPasswordResetEmail(auth, email)
    },
    update(newPassword: string) {
      return updatePassword(auth.currentUser!, newPassword)
    },
  },
}

if (process.env.NODE_ENV === "development") {
  // @ts-ignore: for development only:
  window.member = member
}
