import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { HiHomeModern } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
           <div className="max-w-7xl w-full">
            <FloatingNav navItems={[{name: 'Home', link: '/', icon: <HiHomeModern/>}]} />
            <Hero/>
            <Grid/>
           </div>
    </main>
  );

}