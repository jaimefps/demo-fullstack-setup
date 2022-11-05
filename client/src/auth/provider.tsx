import React, { useState, useEffect, useContext, useMemo } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth, member } from "./member"

export type AuthProviderValue = {
  member: ReturnType<typeof member.current>
  loading: boolean
}

const init: AuthProviderValue = {
  member: null,
  loading: true,
}

export const AuthContext = React.createContext(init as AuthProviderValue)

export const AuthProvider: FCC = ({ children }) => {
  const [value, setValue] = useState<AuthProviderValue>(init)
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (member) => {
      setValue({
        member,
        loading: false,
      })
    })
    return () => {
      listener()
    }
  }, [])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useMemberAuth = () => {
  return useContext(AuthContext)
}
