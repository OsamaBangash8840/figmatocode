import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className="sm:h-[240px] bg-lightPurple">
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:pt-[70px] pt-[30px]">
                <div className=" mx-auto">
                    <p className="text-[14px] font-medium text-gray-600 ">©2023 Yourcompany</p>
                </div>
                <div className="mx-auto  ">
                    <h1 className="font-black text-[26px] text-customPurple">
                        Landing
                    </h1>
                </div>
                <div className="mx-auto">
                    <button className="py-1 px-3 bg-black text-white">Purchase Now</button>
                </div>
            </div>
            <hr className='w-[80%] h-[1px] mx-auto mt-3 sm:mt-10 border-none bg-customHr' />
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="sm:ml-40 mx-auto space-x-8 sm:space-x-14 mt-3 sm:mt-7 text-customBlue">
                    <Link href="/home">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                <div className="flex justify-end mr-[150px] pb-3 items-center space-x-4 mt-7">
                    <FaFacebook className="text-socialColor" />
                    <FaTwitter className="text-socialColor" />
                    <FaInstagram className="text-socialColor" />
                </div>
            </div>
        </div>
    )
}
