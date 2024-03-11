'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import DegreeIcon from '../../../public/readingLogo.png'
import { experienceData } from '@/app/data';


const ExperienceAccordion = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='hover:shadow-3xl hover:shadow-light-accentColor'>
            <div className="border-[1px] cursor-pointer rounded-[5px] border-[hsla(0,0%,83%,.397)] transition-all duration-1000 ease-in ">
                <div
                    onClick={() => setOpen(!open)}
                    className="flex justify-between items-center dark:bg-dark-projectCard py-4 px-5 ">
                    <div className="font-bold">Work</div>
                    <span className='text-2xl text-light-text dark:text-dark-text'>{open ? '-' : '+'}</span>
                </div>

                <div className={`overflow-hidden transition-all duration-1000 ${open ? 'max-h-[1000px]' : 'max-h-0'}`}>
                    {/* Conditionally render content */}
                    {open && (
                        <div className="px-5 py-3 ">
                            {/* Content goes here */}
                            {/* <div className="border-light-accentColor border p-2 rounded-[5px] flex lg:flex-row flex-col justify-center">
                                <div className="lg:w-[20%] p-3 flex justify-center">
                                    <Image
                                        className='h-20 w-auto'
                                        src={DegreeIcon}
                                        alt={''}
                                    />
                                </div> */}

                                {/* Card Details */}
                                {/* <div className="w-full">
                                    <div className="flex justify-between item-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row  "> */}
                                        {/* Card Heading */}
                                        {/* <div className="flex flex-col sm:items-start items-center ">
                                            <div className='text-[17px] font-bold text-light-text dark:text-dark-text'>Full Stack Developer</div>
                                            <div className=' text-[17px] lg:font-semibold dark:text-dark-secondaryText text-light-secondaryText'>company</div>
                                        </div> */}
                                        {/*Company and Date */}

                                        {/* <div className="flex flex-col items-center">
                                            <div className='text-base font-medium dark:text-dark-secondaryText text-light-secondaryText'>date</div>
                                            <div className='text-base font-medium dark:text-dark-secondaryText text-light-secondaryText'>place</div>
                                        </div>
                                    </div> */}
                                    {/* Company Description */}

                                    {/* <p className="mt-1 text-justify text-base text-light-text dark:text-dark-text">
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExperienceAccordion