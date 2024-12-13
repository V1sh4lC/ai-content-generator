import React from 'react'
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, TabletSmartphoneIcon, User } from "lucide-react";

interface PROPS {
    icon: any;
    heading: string;
    desc: string;
}

const FeaturesCard = (props: PROPS) => {
    return (
        <div className=" flex flex-col gap-1">
            <div className="bg-primary text-primary-foreground w-fit p-3 rounded-xl">{props?.icon}</div>
            <p className="text-lg font-semibold">{props?.heading}</p>
            <p className="text-zinc-500">Responsive, and mobile-first project on the web.</p>
            <p className="flex gap-1 items-center text-primary ">Learn more <ChevronRightIcon /></p>
        </div>
    )
}

export default FeaturesCard