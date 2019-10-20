import {ActionCreator} from "redux";
import {CourseCreateAction, CourseTypes} from "../CourseTypes";
import {Course} from "../../components/courses/CoursesPage";

export const createCourse: ActionCreator<CourseCreateAction> = (course: Course) => {
  return {
      type: CourseTypes.CREATE,
      course
  }
};