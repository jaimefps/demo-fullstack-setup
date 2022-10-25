type un<T> = T | undefined | null

type MemberAuth = import("./imports").MemberAuth
type MemberDb = import("./imports").MemberDb

type MemberInfo = {
  memberDb: MemberDb
  memberAuth: MemberAuth
}

declare namespace Express {
  interface RequestLocals {
    memberAuth?: MemberAuth
    memberDb?: MemberDb
  }
  export interface Request extends RequestLocals {
    locals: RequestLocals
  }
}
