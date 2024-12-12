"use client"
import React, { useState } from 'react'
import SubscriptionPlan from './_components/SubscriptionPlan'
import axios from 'axios'
import { db } from '@/utils/db'
import { UserSubscription } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
// import Razorpay from 'razorpay'

const Billing = () => {

    const [loading, setLoading] = useState(false)
    const { user } = useUser()

    const CreateSubcription = async () => {
        setLoading(true)
        await axios.post('/api/create-subscription', {})
            .then(response => {
                console.log(response)
                OnPayment(response.data.id)
            }, (error) => {
                setLoading(false)
            })
    }

    const OnPayment = (subId: string) => {
        const options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            "subscription_id": subId,
            "name": "Vishal web solutions",
            description: "monthly subscription",
            handler: async (response: any) => {
                console.log(response)
                if (response) {
                    saveSubscription(response?.razorpay_payment_id)
                }
                setLoading(false)
            }
        }
        // @ts-ignore
        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    const saveSubscription = async (paymentId:string) => {
        const result = await db.insert(UserSubscription).values({
            email: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            active: true,
            paymentId: paymentId,
            joinDate: moment().format('DD/MM/YYYY'),
        })
        console.log(result)
        if (result) {
            window.location.reload()
        }
    }

    const features1 = ["10,000 Words/Month", "50+ Content Templates", "Unlimited Download & Copy", "1Month of History"]
    const features2 = ["1,00,000 Words/Month", "50+ Template Access", "Unlimited Download & Copy", "1 Year of History"]

    return (
        <div className='mt-20'>
            <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            <h2 className='text-center text-4xl font-bold'>Upgrade with monthly plan</h2>
            <div className='border flex justify-center items-center h-full gap-10 py-10'>
                <SubscriptionPlan onPayment={CreateSubcription} ctaLink='/' ctaText='Currently active plan' features={features1} name='free' price={99.99} variant={"secondary"} />
                <SubscriptionPlan loading={loading} onPayment={CreateSubcription} ctaLink='/' ctaText='Get Started' features={features2} name='Monthly' price={999.99} variant={"default"} />
            </div>
        </div>
    )
}

export default Billing