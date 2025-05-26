import api from './client';
import { fetchProfessionDetail, type ProfessionDetail } from './professions';

export async function fetchUserProfessionDetail(): Promise<ProfessionDetail> {
    const professionId = (await api.get('/users/me/profession/')).data.profession;
    const response = fetchProfessionDetail(professionId);
    return response;
}

export async function updateUserProfession(professionId: number): Promise<void> {
    await api.patch('/users/me/profession/', {
        profession: professionId
    });
}