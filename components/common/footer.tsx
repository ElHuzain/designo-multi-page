import React from 'react'
import MaxWidthContainer from '../ui/maxWidthContainer'
import { Button } from '@/components/ui/button'

const Footer = () => {

  return (
    <div>

      <div className="flex flex-col relative">
        <MaxWidthContainer>

          <div className="items-center  overflow-hidden rounded-[15px] relative justify-between flex gap-8 flex-col lg:flex-row px-6 lg:px-[95px] bg-primary py-[72px]">

            {/* Background decoration */}
            <img alt='bg-decoration' src='/assets/shared/desktop/bg-pattern-call-to-action.svg' className="absolute z-[0] h-[584px] object-cover right-0 translate-y-[-50%] top-[50%]" />

            {/* Content */}
            <div className="text-white z-20 text-center lg:text-left">
              <h2 className="text-[35px] font-[500] flex flex-col mb-2"><span className="mb-[-15px]">{"Let's talk about"}</span> <span>your project</span></h2>
              <p className="leading-[26px] max-w-[450px]">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>

            {/* CTA */}
            <Button variant="secondary" className="z-20 h-fit w-fit">GEt in touch</Button>

          </div >
        </MaxWidthContainer >

        {/* This is a black box in the bottom (merges with the footer) */}
        <div className="bg-black z-[-1] bottom-0 absolute w-full h-[50%] md:h-[86px] lg:h-[72px]"></div>
      </div>

      {/* Actual footer */}
      < footer className="pb-[64px] md:pb[80px] lg:pb[72px] pt-[64px] md:pt-[80px] lg:pt-[72px] w-full bg-black" >
        <MaxWidthContainer className="relative">

          <img alt='designo-logo' className="w-[196px] h-6 md:mb-10" src='/assets/shared/desktop/logo-light.png' />

          <hr className=' border-[#333136] my-[32px] md:my-[40px]' />

          <ul className="text-white font-[300] tracking-[2px] flex top-0 lg:right-[42px] xl:right-0 gap-[42px] absolute">
            <li>OUR COMPANY</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
          </ul>

          <div className="flex text-[#8E8D8E]">

            {/* Address & Emails */}
            <address className="grow-[0.5]"><span className="font-bold">Designo Central Office</span><br />
              3886 Wellington Street<br />Toronto, Ontario M9C 3J5</address>

            <address className="font-bold grow">Contact Us (Central Office)
              <br />P : +1 253-863-8967
              <br />M : contact@designo.co</address>

            {/* Contacts */}
            <ul className="flex h-full justify-end items-end gap-[9px]">
              <li><a href='https://www.facebook.com/ahmed.huzain.96/'><img className='hover:brightness-125 cursor-pointer' alt='facebook-link' src='/assets/shared/desktop/icon-facebook.svg' /></a></li>
              <li><a href='https://www.youtube.com/c/AhmedHuzain'><img className='hover:brightness-125 cursor-pointer' alt='youtube-link' src='/assets/shared/desktop/icon-youtube.svg' /></a></li>
              <li><a href='https://twitter.com/'><img className='hover:brightness-125 cursor-pointer' alt='twitter-link' src='/assets/shared/desktop/icon-twitter.svg' /></a></li>
              <li><a href='https://www.pinterest.com/ahmedhuzain/'><img className='hover:brightness-125 cursor-pointer' alt='pinterest-link' src='/assets/shared/desktop/icon-pinterest.svg' /></a></li>
              <li><a href='https://www.instagram.com/el_huzain98/'><img className='hover:brightness-125 cursor-pointer' alt='instagram-link' src='/assets/shared/desktop/icon-instagram.svg' /></a></li>
            </ul>

          </div>

        </MaxWidthContainer>
      </footer >

    </div >
  )

}

export default Footer
