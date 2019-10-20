import React from "react";
import {connect} from "react-redux";
import {ApplicationState} from "../../redux/reducer/Store";
import * as courseActions from "../../redux/action/CourseActions";
import {bindActionCreators} from "redux";

export interface Course {
    id: string;
    title: string;
    slug: string;
    authorId: number;
    category: string;
}

export interface CoursesPageState {
    courses: Course[];
    actions: typeof courseActions;
}

class CoursesPage extends React.Component<CoursesPageState> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <h2>Courses</h2>
                {
                    this.props.courses.map(x => <div key={x.title}>{x.title}</div>)
                }
            </>
        );
    }
}

const mapStateToProps = (store: ApplicationState) => {
    return {
        courses: store.courses.courses
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);