import React from 'react';
import Data from '../utils/db.json'

export default function recomended() {
    const product = Data.products

    return <div className='md:mx-24 mt-14'>
        <p className='font-primary text-3xl md:text-4xl'>Recomended For You</p>

        <div className='flex gap-1 md:gap-9 flex-wrap mt-10'>
            {product.map((data =>
                <div className='card-product' key={data.id}>
                    <img src={"/img/product/" + data.gambar} alt="" style={{ objectFit: 'cover', width: 250, height: 200 }} className='rounded-t-md' />
                    <div className='mt-2 ml-6 mb-6'>
                        <p className='font-primary text-gray-500'>{data.nama}</p>
                        <img src="/img/special/rating.png" alt="" className='w-20 mt-1' />
                        <p className='font-primary text-gray-700 mt-3 font-bold'>{`Rp. ${data.harga.toLocaleString("id-ID")}`}</p>
                    </div>
                </div>
            ))}

            <button className='btn-see'>see all</button>
        </div>
    </div>;
}
