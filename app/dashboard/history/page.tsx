"use client"
import { db } from '@/utils/db'
import React, { useEffect, useState } from 'react'
import { AIOutput } from '@/utils/schema'
import HistoryCard from './_components/HistoryCard'

const History = () => {
    const [history, setHistory] = useState<any>()

    const getFromDb = async () => {
        const result = await db.select().from(AIOutput)
        setHistory(result.reverse())
    }

    useEffect(() => {
        getFromDb()
    }, [])
    return (
        <div className='bg-white m-3 rounded-lg p-5 border'>
            <div>
                <h2 className='text-4xl font-bold'>History</h2>
                <p className='text-sm text-neutral-400'>Search your previously generated AI content</p>
            </div>
            <div className='mt-5'>
                {/* grid header */}
                <div className='border bg-neutral-200 font-bold grid grid-cols-[2fr_2fr_1fr_1fr_1fr] p-2'>
                    <p>TEMPLATE</p><p>AI RESP</p><p>DATE</p><p>WORDS</p><p>COPY</p>
                </div>
                {/* grid content */}
                <div className='grid grid-cols-1'>
                    {history && history.map((item:any, idx:any) => (
                        <HistoryCard key={idx} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default History