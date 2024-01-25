import React, { ReactElement } from 'react'

interface IEmptyArea {
    icon?: ReactElement;
    text?: string;
}
const EmptyArea = ({ icon, text }: IEmptyArea) => {
    return (
        <div className='w-full h-full flex justify-center items-center p-10'>
            <div className='flex justify-center items-center flex-col'>
                {icon}
                <p className='text-gray-500 text-center font-inter text-sm font-semibold'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default EmptyArea