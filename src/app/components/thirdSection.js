import Image from "next/image";
import Link from "next/link";

export default function ThirdSection({ title, description, image, buttonText }) {
    return (
        <div className='grid mt-[30px] sm:grid-cols-2'>
            {/* Image section - order switched for mobile */}
            <div className="order-2 sm:order-1 mt-10 ml-9 sm:mt-20 sm:ml-[200px] sm:mb-[120px]">
                <Image
                    src={image}
                    alt={title}
                />
            </div>

            {/* Text section - order switched for mobile */}
            <div className="order-1 sm:order-2 sm:mt-[10rem] px-10 mt-10 sm:ml-[80px]">
                <h2 className="sm:text-[36px] text-[24px] ml-10 font-medium sm:leading-[48px]">{title}</h2>
                <p className="mt-3 text-[16px] text-customBlue ml-10 leading-[26px] sm:w-[480px]">{description}</p>
                <button className="py-2 px-10 mt-4 ml-10 bg-black text-white">
                    <Link href={'/about'}>
                        {buttonText}
                    </Link>
                </button>
            </div>
        </div>
    );
}
