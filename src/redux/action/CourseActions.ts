import {ActionCreator, AnyAction, Dispatch} from "redux";
import {CourseCreateAction, CoursesLoadAction, CoursesState, CourseTypes} from "../CourseTypes";
import {Course} from "../../components/courses/CoursesPage";
import * as courseApi from "../../api/courseApi";
import {ThunkAction} from "redux-thunk";


export const createCourse: ActionCreator<CourseCreateAction> = (course: Course) => {
  return {
      type: CourseTypes.CREATE,
      course
  }
};

export const loadCourseSuccess: ActionCreator<CoursesLoadAction> = (courses: Course[]) => {
    return {
        type: CourseTypes.LOAD,
        courses
    };
};

export const loadCourses: ActionCreator<ThunkAction<Promise<AnyAction>, CoursesState, null, CoursesLoadAction>> = () => {
  return (dispatch: Dispatch) => {
        return courseApi.getCourses()
            .then(x => dispatch(loadCourseSuccess(x)))
            .catch(x => {throw x});
  };
};