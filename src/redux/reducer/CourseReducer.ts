import {CoursesAction, CoursesState, CourseTypes} from "../CourseTypes";
import {Reducer} from "redux";

const initialCourseState: CoursesState = {
    courses: []
};

export const coursesReducer: Reducer<CoursesState, CoursesAction> = (state = initialCourseState, action) => {
    switch (action.type) {
        case CourseTypes.CREATE:
            return {
                courses: [...state.courses, {...action.course}]
            };
        case CourseTypes.LOAD:
            return {
                courses: action.courses
            };
        default:
            return state;
    }
};