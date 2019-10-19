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

const CoursesPage: React.FC = (props) => {

    return (
        <>
            <h2>Courses</h2>

        </>
    );
};

export default CoursesPage;