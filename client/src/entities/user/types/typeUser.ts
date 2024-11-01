export type User = {
  name: string | undefined
  email: string | undefined
  message: string | undefined
}

export type OutputUser = User & {
  status?: string | undefined
}
