import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type UserDetails = {
    role: string | null
    name: string | null
    setRole: (role: string | null) => void
    setName: (name: string | null) => void
    logOut: () => void
}

export const useUser = create<UserDetails>()(
    persist(
        (set) => ({
            role: null,
            setRole: (role) => set({ role }),
            name: null,
            setName: (name) => set({ name }),
            logOut: () => set({
                role: null, 
                name: null
            })
        }),
        {
            name: 'user-auth-storage', 
            storage: createJSONStorage(() => localStorage), 
        }
    )
)