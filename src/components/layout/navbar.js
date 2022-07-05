import React from 'react';

export default function navbar() {
    return <div>
        <div className='nav'>
            <p className='text-3xl font-semibold font-serif'>Tumbas</p>

            {/* search */}
            <div className='flex w-2/4 bg-primary items-center rounded-lg md:ml-4 hidden md:flex'>
                <input type="text" className='w-11/12 border-2 border-primary rounded-md shadow-sm h-10 p-3' placeholder='Search product ...' />
                <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className='md:hidden bg-primary rounded-lg p-2'>
                <svg className="w-5 h-5 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>

            {/* cart */}
            <svg className="w-10 h-10 md:ml-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

            {/* sign up */}
            <button className='w-32 h-10 rounded-lg border-2 border-primary hover:bg-primary hover:text-white hover:border-none hidden md:block font-primary'>sign up</button>
            <svg className="w-10 h-10 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
    </div>;
}
