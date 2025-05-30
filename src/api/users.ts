import api from './client';

export interface UserProfessionDetail {
    profession: number;
    profession_name: string;
}

export async function fetchUserProfessionDetail(): Promise<UserProfessionDetail> {
    return (await api.get('/users/me/profession/')).data;
}

export async function updateUserProfession(professionId: number): Promise<void> {
    await api.patch('/users/me/profession/', {
        profession: professionId
    });
}