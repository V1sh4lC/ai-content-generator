"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'

interface PROPS {
    params: {
        'template-slug': string
    }
    slug: string,
}

const CreateNewContent = (props: PROPS) => {

    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params["template-slug"])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 grid-[1fr_2fr] gap-5 p-5'>
            {/* formsection */}
            <FormSection userFormInput={(v:any) => console.log(v)} selectedTemplate={selectedTemplate} />
            {/* outputsection */}
            <OutputSection />
        </div>
    )
}

export default CreateNewContent