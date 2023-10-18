import React from 'react';
import { Link } from 'react-router-dom';
import categoriesData from '../utils/CategoriesData.json';

const CategoriesPage = () => {
  return (
    <div className="flex items-center  justify-center min-h-screen h-full bg-gray-100">
       <div className="md:w-6/12 w-full bg-white p-8 rounded shadow-md gap-4 flex flex-col">
        <h1 className='text-3xl font-bold text-center'>Co-curricular Categories</h1>
        <div className=' bg-primary p-4'>
        <ul className="flex flex-col gap-1 text-md ">
        {categoriesData.map((category,i) => (
            <div key={i} className='flex items-center gap-1 hover:text-white text-lg '>
                <span>{i+1 +'.'}</span>
                 <Link className='underline font-semibold  '  to={`/add/${category}`}>
                 {category}
       </Link>
            </div>
        ))}
      </ul>
        </div>
      
        </div>
    </div>
  );
};

export default CategoriesPage;