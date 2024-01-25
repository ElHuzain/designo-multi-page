import Design from '@/components/pages/designs'
import { redirect } from 'next/navigation';
import React from 'react'

const allowedRoutes = ['web', 'app', 'graphic'];

const page = ({ params }: any) => {

    if (!allowedRoutes.includes(params.design.toLowerCase())) redirect('/home')

    return (
        <Design data={data[params.design]} />
    )
}

// To do: create type for "data" object.

const data: any = {
    "web": {
        header: {
            title: 'Web',
            description: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
        },

        projects: [
            {
                imgSrc: 'web-design/desktop/image-express.jpg',
                title: 'EXPRESS',
                description: 'A multi-carrier shipping website for ecommerce businesses',
            },
            {
                imgSrc: 'web-design/desktop/image-transfer.jpg',
                title: 'TRANSFER',
                description: 'Site for low-cost money transfers and sending money within seconds',
            },
            {
                imgSrc: 'web-design/desktop/image-photon.jpg',
                title: 'PHOTON',
                description: 'A state-of-the-art music player with high-resolution audio and DSP effects',
            },
            {
                imgSrc: 'web-design/desktop/image-builder.jpg',
                title: 'BUILDER',
                description: 'Connects users with local contractors based on their location',
            },
            {
                imgSrc: 'web-design/desktop/image-blogr.jpg',
                title: 'BLOGR',
                description: 'Blogr is a platform for creating an online blog or publication',
            },
            {
                imgSrc: 'web-design/desktop/image-camp.jpg',
                title: 'CAMP',
                description: 'Get expert training in coding, data, design, and digital marketing',
            }
        ],

        routesTo: [
            '/app',
            '/graphic'
        ],
    },

    "app": {
        header: {
            title: 'App',
            description: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
        },

        projects: [
            {
                imgSrc: 'app-design/desktop/image-airfilter.jpg',
                title: 'AIRFILTER',
                description: 'Solving the problem of poor indoor air quality by filtering the air',
            },
            {
                imgSrc: 'app-design/desktop/image-eyecam.jpg',
                title: 'EYECAM',
                description: 'Product that lets you edit your favorite photos and videos at any time',
            },
            {
                imgSrc: 'app-design/desktop/image-faceit.jpg',
                title: 'FACEIT',
                description: 'Get to meet your favorite internet superstar with the faceit app',
            },
            {
                imgSrc: 'app-design/desktop/image-todo.jpg',
                title: 'TODO',
                description: 'A todo app that features cloud sync with light and dark mode',
            },
            {
                imgSrc: 'app-design/desktop/image-loopstudios.jpg',
                title: 'LOOPSTUDIOS',
                description: 'A VR experience app made for Loopstudios',
            }
        ],

        routesTo: [
            '/web',
            '/graphic'
        ],
    },

    "graphic": {
        header: {
            title: 'Graphic',
            description: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
        },

        projects: [
            {
                imgSrc: 'graphic-design/desktop/image-change.jpg',
                title: 'Tim Brown',
                description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
            },
            {
                imgSrc: 'graphic-design/desktop/image-boxed-water.jpg',
                title: 'Boxed Water',
                description: 'A simple packaging concept made for Boxed Water',
            },
            {
                imgSrc: 'graphic-design/desktop/image-science.jpg',
                title: 'Science!',
                description: 'A poster made in collaboration with the Federal Art Project',
            }
        ],

        routesTo: [
            '/app',
            '/web',
        ],
    },
}


export default page