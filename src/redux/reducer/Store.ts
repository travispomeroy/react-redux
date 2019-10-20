import {applyMiddleware, combineReducers, createStore, Store, compose} from "redux";
import {coursesReducer} from "./CourseReducer";
import {CoursesState} from "../CourseTypes";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";

export interface ApplicationState {
   courses: CoursesState
}

const rootReducer = combineReducers<ApplicationState>({
   courses: coursesReducer
});

export default function configureStore(): Store<ApplicationState> {
   return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}