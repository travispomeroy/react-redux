import {Course} from "../components/courses/CoursesPage";

export enum CourseTypes {
    CREATE = "CREATE_COURSE"
}

export interface CourseCreateAction {
    type: CourseTypes.CREATE,
    course: Course
}

export interface CoursesState {
    readonly courses: Course[]
}

export type CoursesAction = CourseCreateAction;