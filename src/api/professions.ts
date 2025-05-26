import api from './client';

export interface Profession {
    id: number;
    name: string;
    discipline: string;
    semester: string;
}

export interface ProfessionDetail {
    id: number;
    name: string;
    description: string;
    knowledge: string[];
    skills: string[];
    tags: string[];
}

export async function fetchProfessions(category?: string): Promise<Profession[]> {
    const params = category ? { category } : {};
    const resp = await api.get<Profession[]>('/professions/', { params });
    return resp.data;
}


export async function fetchProfessionDetail(id: number): Promise<ProfessionDetail> {
    const response = await api.get<ProfessionDetail>(`/professions/${id}/`);
    return response.data;
}