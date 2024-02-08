import store from "@/store"

export type Credentials = ReturnType<typeof store.getState>['auth']['credentials']
export type AuthUserRole = NonNullable<Credentials>['role']
