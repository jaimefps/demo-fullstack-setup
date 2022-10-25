import credentials from "../../secrets/firebase-dev.json"
import * as admin from "firebase-admin"

// side-effect:
const certInfo = credentials as admin.ServiceAccount
const credential = admin.credential.cert(certInfo)
admin.initializeApp({ credential })

class Authenticator {
  auth: admin.auth.Auth

  constructor() {
    this.auth = admin.auth()
  }

  verifyToken(token: string) {
    return this.auth.verifyIdToken(token)
  }
}

export const AuthSingleton = new Authenticator()
