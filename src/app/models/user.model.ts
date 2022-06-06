export type AccessPermission = 'master' | 'moderator' | 'user' | 'denied';

export interface UserModel {
    id: number
    cpf: string
    password: string
    
    data: {
        name: string
        email: string

        sector: string
        ocuppation: string
        permission: AccessPermission

        birthday: [number, number, number]

        imageProfile?: 1 | 2 | 3 | 4 | 5 | 6
    }
}