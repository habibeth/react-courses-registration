import './App.css'
import Courses from './components/Courses/Courses'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { useState } from 'react'
import toast from 'react-hot-toast'

function App() {
    const [courses, setCourses] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [coursePrice, setCoursePrice] = useState(0);
    const [courseName, setCourseName] = useState([]);
    const [totalHour, setTotalHour] = useState(20);
    const notify = () => toast.error('Please Select Minimum 20 Credit');

    const handleCoursesData = (course) => {
        const newCourses = [...courses, course];        
       
        let totalPrice=0;
        let subTotalCredit=0;
        let getTotalHour=0;

        for(const getCourse of newCourses){
            totalPrice += getCourse.price;
            subTotalCredit+= getCourse.duration;
            getTotalHour = getCourse.duration;
        }
        // console.log(totalPrice);
        // console.log(subTotalCredit);
        if(subTotalCredit>=0 && subTotalCredit<=20){            
            setTotalCredit(subTotalCredit);
            setCourseName(newCourses);
            setCoursePrice(totalPrice);
            const remaining = totalHour - getTotalHour;
            setTotalHour(remaining);
        }
        else{
            notify()
        }
        // console.log(courseName)
        // console.log(totalCourseName)
        // console.log(subTotalCredit)
        setCourses(newCourses)
    }
    
    // console.log('data is coming soon', courses);

    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <div className="md:flex">
                <Courses handleCoursesData={handleCoursesData}></Courses>
                <Bookmarks 
                totalCredit={totalCredit}
                coursePrice={coursePrice}
                totalHour={totalHour}
                courseName={courseName}
                ></Bookmarks>
            </div>
        </div>
    )
}

export default App
