import api from './client';

export interface Profession {
    id: number;
    name: string;
    discipline: string;
    semester: string;
}

export async function fetchProfessions(category?: string): Promise<Profession[]> {
    const params = category ? { category } : {};
    const resp = await api.get<Profession[]>('/professions/', { params });
    return resp.data;
}