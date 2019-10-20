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

export interface Author {
    id: bigint;
    name: string;
}

export interface CoursesPageState {
    courses: Course[];
    actions: typeof courseActions;
}

class CoursesPage extends React.Component<CoursesPageState, {course: Course;}> {
    constructor(props: Readonly<CoursesPageState>) {
        super(props);
        this.state = {
            course: {
                id: "",
                title: "",
                slug: "",
                authorId: 0,
                category: ""
            }
        };
    }

    private handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    };

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const course: Course = {
            ...this.state.course,
            title: event.target.value
        };

        this.setState({course});
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title}/>
                <input type="submit" value="Save"/>
                {
                    this.props.courses.map(x => (
                        <div key={x.title}>{x.title}</div>
                    ))
                }
            </form>
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