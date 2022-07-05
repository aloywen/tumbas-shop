import React from 'react';
import Data from '../utils/db.json'

export default function category() {
    const data = Data.category
    return <div>
        <div className='category'>
            <div className='category-items'>
                {data.map((data) =>
                    <div key={data.id} className='text-lg md:text-xl mt-2 ml-4 md:ml-0 text-white font-primary'>{data.nama}</div>
                )}
            </div>
        </div>
    </div>;
}
