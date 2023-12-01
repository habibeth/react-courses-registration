import React, { useEffect, useState } from 'react'
import Course from '../Course/Course';

export default function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    // console.log(courses)
    return (
        <div className='w-2/3'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                {
                    courses.map(course=> <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    )
}
