import { secrets } from "../secrets"

export function config() {
  return {
    secrets: secrets(),
    firebase: {
      apiKey: "AIzaSyDDKGjQw_TDJefWpU8kFJzoK1vDY1JAd84",
      authDomain: "events-prospect-dev.firebaseapp.com",
      projectId: "events-prospect-dev",
      storageBucket: "events-prospect-dev.appspot.com",
      messagingSenderId: "894888285660",
      appId: "1:894888285660:web:4289a8377d4a7aa8eaab19",
    },
  }
}
