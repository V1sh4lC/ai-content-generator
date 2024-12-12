"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'

const UsageTrack = () => {
    const { user } = useUser()
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);

    useEffect(() => {
        GetData()
    }, [user])

    const GetData = async () => {
        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        GetTotalUsage(result)
    }

    const GetTotalUsage = (result:any) => {
        let total:number = 0;
        result.forEach((el:any) => {
            total = total + Number(el.aiResponse?.length)
        })
        setTotalUsage(total)
        console.log(total)
    }

  return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full'
                        style={{ width: `${(totalUsage/10000)*100}%` }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/10,000 Credits used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
        </div>
    )
}

export default UsageTrack