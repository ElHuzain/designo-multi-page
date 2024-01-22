import React from 'react'
import MaxWidthContainer from '../ui/maxWidthContainer'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div>
      160 105 121
      <MaxWidthContainer className="translate-y-[90px] rounded-[15px] bg-primary">
        <div className="relative items-center overflow-hidden justify-between flex px-[95px] py-[72px]">

          {/* Background decoration */}
          <img alt='bg-decoration' src='/assets/shared/desktop/bg-pattern-call-to-action.svg' className="absolute z-[-1] right-0 top-[-50%]" />

          <div className="text-white">
            <h2 className="text-[35px] font-[500] flex flex-col mb-2"><span className="mb-[-15px]">Let's talk about</span> <span>your project</span></h2>
            <p className="leading-[26px]">Ready to take it to the next level? Contact us today and find out how<br /> our expertise can help your business grow.</p>
          </div>
          <Button variant="secondary" className="h-fit w-fit">GEt in touch</Button>

        </div >

      </MaxWidthContainer >

  {/* Actual footer */ }
  < footer className = "h-[300px] w-full bg-black" ></footer >
    </div >
  )
}

export default Footer
