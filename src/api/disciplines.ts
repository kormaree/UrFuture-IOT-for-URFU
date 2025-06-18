import api from "./client";

export interface Discipline {
    id: number;
    name: string | null;
    category: string;
}

export interface SemesterDisciplines {
    semester: number;
    courses: Discipline[];
}

export async function fetchSemesterDisciplines(): Promise<SemesterDisciplines[]> {
    const response = await api.get<SemesterDisciplines[]>('/disciplines/');
    return response.data;
}

