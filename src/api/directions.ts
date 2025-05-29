import api from "./client";

export interface Direction {
    id: number;
    name: string;
}

export async function fetchDirections(): Promise<Direction[]> {
    const response = await api.get<Direction[]>('/directions/');
    return response.data;
}