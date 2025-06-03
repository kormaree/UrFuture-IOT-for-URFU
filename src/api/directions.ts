import api from "./client";

export interface Direction {
    id: number;
    name: string;
    description: string;
    name_text: string;
}

export async function fetchDirections(): Promise<Direction[]> {
    const response = await api.get<Direction[]>('/directions/');
    return response.data;
}

export async function fetchDirectionDetail(id: number): Promise<Direction> {
    const response = await api.get<Direction>(`/directions/${id}/`);
    return response.data;
}