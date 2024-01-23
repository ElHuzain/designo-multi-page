import React from 'react'
import AboutUsContainerComponent from './aboutUsContainerComponent'

const WorldClassTalent = () => {
  return (
    <AboutUsContainerComponent
      title="World-class talent"
      content={[
        'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
        'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
      ]}
      img={"world-class-talent"}
      bg={"bg-lighter_peach"}
      ltr={true}
      bottomMargin={true}
    />
  )
}

export default WorldClassTalent
