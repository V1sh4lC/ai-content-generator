import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRightIcon, Settings2, SquareChartGanttIcon, TabletSmartphoneIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturesCard from "./dashboard/_components/FeaturesCard";

const featuresList = [
  {
    icon: <TabletSmartphoneIcon />,
    heading: "25+ templates",
    desc: "Responsive, and mobile-first project on the web.",
  },
  {
    icon: <Settings2 />,
    heading: "Customizable",
    desc: "Component are easily customized and extendable.",
  },
  {
    icon: <BookOpen />,
    heading: "Free to Use",
    desc: "Every component and plugin is well documented.",
  },
  {
    icon: <SquareChartGanttIcon />,
    heading: "24/7 Support",
    desc: "Contact us 24 hour a day, 7 days a week.",
  }
]

export default function Home() {
  return (
    <div className="relative">
      {/* header */}
      <div className="border-b flex justify-between px-16 py-3 items-center shadow-md bg-white">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
        <div className="flex gap-3 border-l px-5">
          <User />
          <p>Get Started</p>
        </div>
      </div>

      <div className="magicpattern absolute top-0 left-0"></div>
      {/* hero */}
      <div className="flex justify-center items-center flex-col gap-10 py-32">
        <h1 className="text-6xl font-bold">AI Content <span className="text-primary">Generator</span></h1>
        <p className="max-w-[700px] text-center">Revolutionize your content creation with out AI-powered app, delivering engging and high-quality text in seconds.</p>
        <Link href={"/dashboard"} className="bg-primary text-white flex gap-3 p-3 rounded-lg">Get started <ChevronRightIcon /></Link>
      </div>

      {/* features */}
      <div className=" grid grid-cols-4 max-w-[1500px] m-auto">
        {featuresList.map((item, idx) => (
          <FeaturesCard key={idx} icon={item.icon} heading={item.heading} desc={item.desc}/>
        ))}
      </div>
    </div>
  );
}
