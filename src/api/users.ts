import api from './client';

export async function updateUserProfession(professionId: number): Promise<void> {
    await api.patch('/users/me/profession/', {
        profession: professionId
    });
}