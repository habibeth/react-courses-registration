import { Toaster } from "react-hot-toast";
import PropTypes from 'prop-types'
export default function Bookmarks({totalCredit, coursePrice, courseName, totalHour}) {
    
    return (
        <div className='w-1/3 mt-8 '>
            <div className="ml-6 bg-white rounded-lg p-5">
                <h2 className="text-lg font-bold text-sky-500 pb-4 border-b-2 mb-4">Credit Hour Remaining {totalHour} hr</h2>
                <h3 className="text-xl font-bold mb-5">Course Name</h3>
                <ol className="mb-6">
                    {
                        courseName?.map((cName,idx)=><li key={idx}>{cName.title}</li>)
                    }
                </ol>
                <h2 className="text-base font-medium py-4 border-y-2 mb-4">Total Credit Hour : { totalCredit } <Toaster/></h2>   
                <h2 className="text-lg font-semibold">Total Price : {coursePrice} USD</h2>            
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    totalCredit: PropTypes.number.isRequired,
    coursePrice: PropTypes.number.isRequired,
    courseName: PropTypes.array.isRequired,
    totalHour: PropTypes.number.isRequired,
}