export type IStudent = {
    courses: Array<{
        courseId: string;
        progress: Array<string>;
    }>;
    recommendCourses: Array<string>;
    dailyStreak: Array<{
        day: string;
        date: number;
        active: boolean;
    }>;
};
