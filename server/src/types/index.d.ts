type un<T> = T | undefined | null

type MemberDb = import("@prisma/client").Member
type MemberAuth = import("firebase-admin").auth.DecodedIdToken
type MemberInfo = { memberDb: MemberDb; memberAuth: MemberAuth }
