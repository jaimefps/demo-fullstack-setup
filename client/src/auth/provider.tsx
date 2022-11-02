import React, { useState, useEffect, useContext } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth, member } from "./member"

export type MemberAuth = ReturnType<typeof member.current>
export const AuthContext = React.createContext(null as MemberAuth)
export const AuthProvider: FCC = ({ children }) => {
  const [member, setMember] = useState<MemberAuth>(null)
  useEffect(() => {
    const listener = onAuthStateChanged(auth, setMember)
    return () => listener()
  }, [])
  return <AuthContext.Provider value={member}>{children}</AuthContext.Provider>
}

export const useMemberAuth = () => {
  return useContext(AuthContext)
}
