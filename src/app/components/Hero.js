import Image from "next/image"
import HeroImg from '@/app/assests/Hero.png'
import Link from "next/link"

export default function Hero() {
    return (
        <div className="sm:mt-[-40px] grid grid-cols-1 sm:grid-col-2 overflow-hidden">
            <div className="h-full w-full sm:ml-12  ">
                <Image src={HeroImg}
                    // height={100}
                    // width={1440}
                />
            </div>
            <div className="sm:mt-[-480px] sm:w-[500px]  sm:ml-24">
                <h1 className="sm:text-[40px] text-[18px] flex justify-center  ml-3 font-medium sm:leading-[66px]">Introduce Your Product Quickly & Effectively</h1>
                <p className="sm:text-[18px] text-[14px] sm:leading-[30px] ml-[50px] mr-[30px] sm:ml-[1px] flex justify-center mt-4 ">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus.<br />
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="space-x-5 mt-12 sm:ml-[-100px] flex justify-center">
                    <Link href={'/ui-kit'} className="bg-black py-2 px-10 text-white rounded " >Purchase Ui Kit</Link>
                    <Link href={'/about'} className="bg-white py-2 px-10 text-black border-2 rounded-sm border-black">Learn More</Link>
                </div>
            </div>
            <div></div>
        </div>
    )
}
