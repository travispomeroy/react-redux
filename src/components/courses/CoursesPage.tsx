import React from "react";

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
}

export default class CoursesPage extends React.Component<{}, {course: Course;}> {
    constructor(props: Readonly<{}>) {
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
        alert(this.state.course.title);
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
            </form>
        );
    }
}