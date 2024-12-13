"use client"
import React, { useState, use, useContext } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS {
    params: Promise<{ "template-slug": string }>
    slug: string,
}

const CreateNewContent = (props: PROPS) => {
    const params = use(props.params)
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == params["template-slug"])
    const [loading, setLoading] = useState(false)
    const [aiOutput, setAiOutput] = useState<string>('')
    const { user } = useUser()
    const router = useRouter()
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)


    const GenerateAIContent = async (formData: any) => {
        if (totalUsage >= 10000 && !userSubscription) {
            console.log('please upgrade')
            router.push('/dashboard/billing')
            return
        }
        setLoading(true)
        const prompt = selectedTemplate?.aiPrompt
        const finalAIprompt = JSON.stringify(formData) + ", " + prompt
        const result = await chatSession.sendMessage(finalAIprompt)
        setAiOutput(result.response.text())
        await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, result.response.text())
        setLoading(false)
        setUpdateCreditUsage(Date.now())
    }

    const SaveInDb = async (formData: any, slug: any, aiResponse: string) => {
        console.log('SaveInDb function called');
        console.log('Form Data:', formData);
        console.log('Slug:', slug);
        console.log('AI Response:', aiResponse);

        try {
            console.log('Attempting to insert into database...');
            const formattedDate = moment().format('DD/MM/YYYY'); // Corrected format
            console.log('Formatted Date:', formattedDate);

            const result = await db.insert(AIOutput).values({
                formData: JSON.stringify(formData), // Ensure formData is a string if required
                templateSlug: slug,
                aiResponse: aiResponse,
                createdBy: user?.primaryEmailAddress?.emailAddress as string,
                createdAt: formattedDate,
            });

            console.log('Insert Result:', result);
        } catch (error) {
            console.error('Error inserting into database:', error);
        }

        console.log('SaveInDb function completed');
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
                <OutputSection aiOutput={aiOutput} />
            </div>
        </div>
    )
}

export default CreateNewContent