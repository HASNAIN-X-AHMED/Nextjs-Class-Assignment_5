import React from 'react'
import Image from 'next/image'
import Header from './Header/Header'


const page = () => {
  return (
    <div className='h-screen ' >
      <Header />
      
 <div className='flex justify-center items-start m-10'>
  <div className='w-1/2 mt-[100]'>
  <h1 className='text-[23px] font-bold font-[Libre Bodoni] leading-10 tracking-[2.5%]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE  </h1>
  <p className='text-[20px] text-[#a29875] mt-[15]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

  <button className='bg-[#A29875] text-[white] w-[160px] h-[30px] mt-[15] hover:bg-[#A29875] rounded-2xl'>Explore Now</button>

  </div>
  <div className='mb-[100] ml-[100]'>
    <Image src={'/image/figmapic.1.png'} alt='image' width={300} height={300} />

  </div>
 </div>
  </div>
  )
}

export default page
