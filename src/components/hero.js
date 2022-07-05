import React from 'react';
import data from '../utils/db.json'

export default function hero() {

    const satu = data.hero[0]
    const dua = data.hero[1]
    const tiga = data.hero[2]

    return <div className='mt-10'>
        <div className='flex flex-col md:flex-row mx-auto md:justify-around md:mx-24'>

            <div className='hero1'>
                <img src={"/img/hero/" + satu.gambar} alt="" className='h-32 w-32 mx-auto md:w-44 md:h-44' />
                <p className='font-primary text-2xl font-bold'>{satu.nama}</p>
            </div>

            <div className='flex flex-col text-center'>
                <div className='hero2'>
                    <img src={"/img/hero/" + dua.gambar} alt="" className='h-32 w-32 mx-auto md:w-32 md:h-32' />
                    <p className='font-primary text-xl font-bold'>{dua.nama}</p>
                </div>
                <div className='hero3'>
                    <img src={"/img/hero/" + tiga.gambar} alt="" className='md:w-40 md:h-28 mx-auto' />
                    <p className='font-primary text-xl font-bold'>{tiga.nama}</p>
                </div>
            </div>

        </div>
    </div>;
}
