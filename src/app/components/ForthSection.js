import DesktopImg from '../assests/desktop.png'; // Correct the path to your image

export default function ForthSection() {
    return (
        <div>
            {/* Background Image Section */}
            <div
                className="sm:h-[100vh] h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${DesktopImg.src})` }} // Use the imported image's src here
            >
                {/* Content inside the div */}
                {/* Text Section */}
                <div className='flex flex-col items-center'>
                    <h1 className="sm:text-[36px] text-[24px] mt-10 sm:mt-[140px] font-medium leading-[48px]">
                        A Price To Suit Everyone
                    </h1>
                    <p className='sm:w-[650px] text-center sm:mt-6 mt-2 text-customBlue sm:text-[16px] text-[13px] sm:leading-[26px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

                    <h2 className='sm:text-[50px] text-[30px] text-customPurple mt-4 sm:mt-8'>$40</h2>
                    <h3 className='text-customPurple text-[16px]'>UI Design Kit</h3>
                    <h4 className='text-gray-700 text-[14px] mt-3 sm:mt-12'>See, One price. Simple.</h4>
                    <button className='bg-black py-2 px-14 text-white mt-3'>Purchase Now</button>
                </div>
            </div>


        </div>
    );
}
