import {Course} from "../components/courses/CoursesPage";

export enum CourseTypes {
    CREATE = "CREATE_COURSE",
    LOAD = "LOAD_COURSES"
}

export interface CourseCreateAction {
    type: CourseTypes.CREATE,
    course: Course
}

export interface CoursesLoadAction {
    type: CourseTypes.LOAD,
    courses: Course[]
}

export interface CoursesState {
    readonly courses: Course[]
}

export type CoursesAction = CourseCreateAction | CoursesLoadAction;