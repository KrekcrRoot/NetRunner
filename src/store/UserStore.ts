import { defineStore } from 'pinia'

export interface UserToken {
    accessToken: string
    refreshToken: string
}

export interface UserJwt {
    scope: string
    sid: string
    email_verified: boolean
    preferred_username: string
    given_name: string
    family_name: string
    email: string
    resource_access: {
        'netrunner-courses-client': {
            roles: Array<string>
        }
    }
}

export const useUserStore = defineStore({
    id: 'User',
    state: () => ({
        tokens: {
            accessToken: '',
            refreshToken: '',
        } as UserToken,
    }),
    getters: {
        isLogged(): boolean {
            return this.tokens.accessToken !== ''
        },
        email(): string {
            return this.payload.email
        },
        roles(): Array<string> {
            return this.payload.resource_access["netrunner-courses-client"].roles
        },
        payload(): UserJwt {
            return JSON.parse(atob(this.tokens.accessToken.split('.')[1]))
        },
    },
    actions: {
        logout() {
            this.tokens.accessToken = ''
            this.tokens.refreshToken = ''
        },
    },
    persist: true,
})