import { Member } from "@prisma/client"
import admin from "firebase-admin"

export type MemberAuth = admin.auth.DecodedIdToken
export type AuthGuid = MemberAuth["uid"]
export type MemberDb = Member
