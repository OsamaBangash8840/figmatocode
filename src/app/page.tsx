
import Image1 from  '@/app/assests/undraw_happy_news_hxmt.png'
import Image2 from  '@/app/assests/Section3Img2.png'
import Image3 from  '@/app/assests/Img4.png'
import Hero from './components/Hero'
import SecondSection from './components/SecondSection'
import ThirdSection from  './components/thirdSection'
import ForthSection from './components/ForthSection';

export default function Home() {

  const sectionThreeData = [
    {
      id: 1,
      title: 'Light, Fast & Powerful',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.',
      image: Image1,
      buttonText: 'Learn More',
    },
    {
      id: 2,
      title: 'Light, Fast & Powerful',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.',
      image: Image2,
      buttonText: 'Learn More',
    },
     {
      id: 3,
      title: 'Light, Fast & Powerful',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.',
      image: Image3,
      buttonText: 'Purchase Now',
    },

  ]

  return (
    <>
      <Hero />
      <SecondSection />
      {sectionThreeData.map((sectionData,id)=>(
        <ThirdSection 
        key={id}
        title={sectionData.title}
        description={sectionData.description}
        image={sectionData.image}
        buttonText={sectionData.buttonText}/>
      ))} 
      <ForthSection/>
    </>
  );
}
