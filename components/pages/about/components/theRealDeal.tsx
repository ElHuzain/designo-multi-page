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
    />
  )
}

export default TheRealDeal
