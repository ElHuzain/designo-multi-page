import React from 'react'
import AboutUsContainerComponent from './aboutUsContainerComponent'

const TheRealDeal = () => {
  return (
    <AboutUsContainerComponent
      title="The real deal"
      content={[
        'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
        'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
      ]}
      img={"real-deal"}
      bg={"bg-lighter_peach"}
      ltr={false}
      bottomMargin={true}

      bgDecoration={{
        mobile: <img alt='background-decoration' className="absolute bottom-0 h-full object-cover left-0 z-0" src="/assets/shared/desktop/bg-pattern-three-circles.svg" />,
        tablet: <img alt='background-decoration' className="absolute right-0 top-[-50%] z-0" src="/assets/shared/desktop/bg-pattern-three-circles.svg" />,
        desktop: <img alt='background-decoration' className="absolute left-[-50%] bottom-[0] z-0" src="/assets/shared/desktop/bg-pattern-three-circles.svg"/>,
      }}

    />
  )
}

export default TheRealDeal
