"use client"
import { Form } from '@/components/Form';
import { MailIcon, PhoneIcon, HomeIcon } from 'lucide-react';
import React from 'react'

const Contacts = () => {
  return (
    <section className='min-h-screen py-12 xl:px-12'>
      <div className="container mx-auto px-4">
        <div className='grid xl:grid-cols-2 gap-12 xl:gap-24 pt-12 xl:h-[480px] mb-12 xl:mb-24'>
          <div className='flex flex-col justify-center w-full'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              <span className="font-medium">Hello There 👋</span>
            </div>
            <h1 className='h1 max-w-md mb-8'>Let&apos;s Work Together</h1>
            <p className='subtitle max-w-[600px]'>Looking for a dedicated developer to bring your ideas to life? I am eager to collaborate on innovative projects that make a difference. Let&apos;s create something exceptional!</p>
          </div>
          <div className='hidden xl:flex w-full bg-developer bg-top bg-contain bg-no-repeat'>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-12 xl:gap-24 mb-24 xl:mb-32'>
          <div className='flex flex-col gap-y-6 xl:gap-y-10 text-base xl:text-lg'>
            <div className='flex items-center gap-x-4'>
              <MailIcon size={24} className='text-primary' />
              <div>hamiz.muzaffer77@gmail.com</div>
            </div>
            <div className='flex items-center gap-x-4'>
              <PhoneIcon size={24} className='text-primary' />
              <div >+923312893020</div>
            </div>
            <div className='flex items-center gap-x-4'>
              <HomeIcon size={24} className='text-primary' />
              <div>Karachi,Pakistan</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contacts;