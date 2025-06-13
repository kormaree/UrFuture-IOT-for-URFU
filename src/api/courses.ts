import api from './client';

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Course {
    id: number;
    name: string;
    discipline: string;
    semester: string;
}

export interface CourseDetail {
    id: number;
    name: string;
    description: string;
    knowledge: string[];
    skills: string[];
    tags: string[];
}


export async function fetchCourses(
    page: number = 1,
    pageSize: number = 9,
    semester?: string,
    discipline?: string
): Promise<PaginatedResponse<Course>> {
    const params: Record<string, any> = { page };
    if (pageSize) params.page_size = pageSize;
    if (semester) params.semester = semester;
    if (discipline) params.discipline = discipline;
    const response = await api.get<PaginatedResponse<Course>>('/courses/', { params });
    return response.data;
}


export async function fetchCourseDetail(id: number): Promise<CourseDetail> {
    const response = await api.get<CourseDetail>(`/courses/${id}/`);
    return response.data;
}