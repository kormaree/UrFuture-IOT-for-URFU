import api from './client';

export interface UserProfessionDetail {
    profession: number;
    profession_name: string;
}

export async function updateUserProfession(professionId: number): Promise<void> {
    await api.patch('/users/me/profession/', {
        profession: professionId
    });
}