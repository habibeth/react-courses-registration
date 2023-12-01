import React from 'react';
import { IoBookOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";

export default function Course({ course }) {
    const { title, img, description, price, duration } = course;
    console.log(img)
    return (
        <div className='mt-8 p-2 bg-white rounded-xl'>
            <img className='h-36 w-full rounded-lg' src={img} alt="" />
            <h2 className='text-lg font-semibold mt-4'>{title}</h2>
            <p className='text-sm font-normal text-gray-500 mt-2'>{description}</p>
            <div className="flex justify-between items-center mt-5 mb-6">
                <div className="flex items-center text-gray-500">
                    <LuDollarSign /><span className='text-base font-medium'>Price: {price}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <IoBookOutline className='mt-1' /><span className='ml-1 text-base font-medium'> Credit: {duration} hr</span>
                </div>
            </div>
            <button className='w-full bg-sky-500 py-2 rounded-xl text-lg font-semibold text-white'>Select</button>
        </div>
    )
}
