import React from 'react'
import Image from 'next/image'
import Icon from  '@/app/assests/Icon.png'
import SecondImg from '@/app/assests/undraw_mobile_login_ikmv.png'

export default function SecondSection() {
    return (
        <div className='grid sm:grid-cols-2 mt-10 sm:mt-[150px] sm:ml-24 '>
            <div>
                <h1 className='sm:text-[36px] text-[24px] px-5 sm:leading-[48px]'>Light, Fast & Powerful</h1>
                <p className='text-customBlue sm:text-[16px] text-[13px] px-5 sm:leading-[26px] mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. <br />
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className='mt-12 sm:grid flex mb-[140px] ml-8 sm:grid-cols-2'>
                    <div >
                        <Image
                        src={Icon}
                        />
                        <h2 className='mt-5 sm:text-[16px] text-[14px] leading-[26px]'>Title Goes Here</h2>
                        <p className='mt-2 sm:text-[12px] text-[10px] leading-[18px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div>
                        <Image 
                        src={Icon}
                        />
                        <h2 className='mt-5 sm:text-[16px] text-[14px] leading-[26px]'>Title Goes Here</h2>
                        <p 
                        className='mt-2 sm:text-[12px] text-[10px] leading-[18px]'
                        >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                </div>
            </div>
            <div className='mt-[-100px]'>
                <Image src={SecondImg} />
            </div>
        </div>
    )
}
