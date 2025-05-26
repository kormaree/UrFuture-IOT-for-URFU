import api from "./client";

export interface Recommendation {
    course_id: number;
    course: string;
    discipline: string;
    semester: number;
    weight: number;
}

export async function fetchRecommendations(): Promise<Recommendation[]> {
    const response = await api.get<Recommendation[]>('/recommendations/');
    return response.data;
}