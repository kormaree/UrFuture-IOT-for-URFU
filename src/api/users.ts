import api from './client';

export interface UserProfessionDetail {
    profession: number;
    profession_name: string;
}

export interface UserProfileUpdate {
    first_name?: string;
    last_name?: string;
    patronymic?: string;
    academic_group?: string;
    email?: string;
    current_password?: string;
    new_password?: string;
    new_password_confirm?: string;
}

export async function updateUserProfession(professionId: number): Promise<void> {
    await api.patch('/users/me/profession/', {
        profession: professionId
    });
}

export async function updateUserProfile(data: UserProfileUpdate): Promise<void> {
    await api.patch('/users/me/update/', data);
}