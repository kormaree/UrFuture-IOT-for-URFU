import api from "./client";

export interface TopCourseRecommendation {
    course_id: number;
    course: string;
    discipline: string;
    semester: number;
    weight: number;
}

export interface CourseRecommendation {
    discipline: string;
    course: string | null;
    weight: number | null;
}

export interface SemesterRecommendations {
    semester: number;
    courses: CourseRecommendation[];
}

export async function fetchTopCourses(): Promise<TopCourseRecommendation[]> {
    const response = await api.get<TopCourseRecommendation[]>('/recommendations/');
    return response.data;
}

export async function fetchRecommendations(): Promise<SemesterRecommendations[]> {
    const response = await api.get<SemesterRecommendations[]>('/recommendations/by-discipline/');
    return response.data;
}
