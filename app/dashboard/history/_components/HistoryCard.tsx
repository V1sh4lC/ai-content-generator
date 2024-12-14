import Templates from '@/app/(data)/Templates'
import Image from 'next/image'
import React from 'react'

interface PROPS {
    aiResponse: string,
    createdAt: string,
    formData: string,
    id: number,
    templateSlug: string,
}

const HistoryCard = (props: PROPS) => {
    const template: any = Templates.find((item) => item.slug == props.templateSlug)

    return (

        <div className='flex flex-col gap-5 sm:gap-0 sm:grid sm:grid-cols-[2fr_2fr_1fr_1fr_1fr] py-8 border-b-2 font-medium'>
            <div className='flex items-center gap-3'>
                {template?.icon && <Image src={template?.icon} alt='icon' width={30} height={30} className=''/>}
                <span className=''>{template ? template.name : "nill"}</span>
            </div>
            <p className='line-clamp-3 pr-5'>{props.aiResponse}</p>
            <p>{props.createdAt}</p>
            <p>{props.aiResponse.length}</p>
            <button onClick={()=>navigator.clipboard.writeText(props.aiResponse)} className='text-primary cursor-pointer'><span className='hover:bg-neutral-100 p-1 rounded-md'>Copy</span></button>
        </div>
    )
}

export default HistoryCard