import React, { ReactElement } from 'react'

interface IEmptyArea {
    icon?: ReactElement;
    text?: string;
}
const EmptyArea = ({ icon, text }: IEmptyArea) => {
    return (
        <div className='w-full h-full flex justify-center items-center p-4'>
            <div>
                {icon}
                {text}
            </div>
        </div>
    )
}

export default EmptyArea