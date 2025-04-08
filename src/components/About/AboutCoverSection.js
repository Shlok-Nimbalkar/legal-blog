import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image 
              src={profileCharacter} 
              alt="CodeBucks" 
              className='w-full max-w-3xl xs:w-3/4 md:w-2/3 h-auto object-contain object-center'
              priority
              sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
                To Empower, To Decode, To Defend.
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
                This Mantra defines our purpose. This blog was created to educate, inform and empower others. In this blog, we dive into a variety of topics in the field of law; from social and political matters, to the corporate world and beyond. We discuss with evidence. Not with bias, but with nuance. Complex problems deserve complex discussions. This is an open and free space for everyone. <em>Email: <span className="normal-case">contact@nimbalkar.in</span></em>
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection