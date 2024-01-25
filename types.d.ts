type ProejctHeader = {
    title: string,
    description: string,
}

type ProjectType = {
    imgSrc: string,
    title: string,
    description: string
}

type DesignType = {
    header: ProejctHeader,
    projects: ProjectType[],
    routesTo: string[]
}

type DesignCardType = {
    Context: string,
    url: string,
    ImgDesktop: string,
    ImgMobile: string,
    ImgTablet: string,
    className?: string
}