"use client"
import React, { useState, use } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'

interface PROPS {
    params: Promise<{ "template-slug": string }>
    slug: string,
}

const CreateNewContent = (props: PROPS) => {
    const params = use(props.params)
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == params["template-slug"])
    const [loading, setLoading] = useState(false)
    const [aiOutput, setAiOutput] = useState<string>('')

    const GenerateAIContent = async (formData: any) => {
        setLoading(true)
        const prompt = selectedTemplate?.aiPrompt
        const finalAIprompt = JSON.stringify(formData) + ", " + prompt
        const result = await chatSession.sendMessage(finalAIprompt)
        setAiOutput(result.response.text())
        setLoading(false)
    }

    return (
        <div className='p-10'>
            <Link href={'/dashboard'}>
                <Button><ArrowLeft /> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 py-5'>
                {/* formsection */}
                <FormSection userFormInput={(v: any) => GenerateAIContent(v)} selectedTemplate={selectedTemplate} loading={loading} />
                {/* outputsection */}
                <OutputSection aiOutput={aiOutput}/>
            </div>
        </div>
    )
}

export default CreateNewContent