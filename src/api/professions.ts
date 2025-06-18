import api from './client';

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Profession {
    id: number;
    name: string;
}

export interface ProfessionDetail {
    id: number;
    name: string;
    description: string;
    knowledge: string[];
    skills: string[];
    tags: string[];
}


export async function fetchProfessions(
    page: number = 1,
    pageSize?: number,
    category?: string
): Promise<PaginatedResponse<Profession>> {
    const params: Record<string, any> = { page };
    if (pageSize) params.page_size = pageSize;
    if (category) params.category = category;
    const response = await api.get<PaginatedResponse<Profession>>('/professions/', { params });
    return response.data;
}

export async function fetchAllProfessions(): Promise<Profession[]> {
    const response = await api.get<Profession[]>('/professions/all');
    return response.data;
}

export async function fetchProfessionDetail(id: number): Promise<ProfessionDetail> {
    const response = await api.get<ProfessionDetail>(`/professions/${id}/`);
    return response.data;
}