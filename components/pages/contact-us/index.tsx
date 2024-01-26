import React from 'react'
import ContactForm from './components/contactForm'
import Locations from '@/components/ui/locations'
import DecorativeBackground from '@/components/ui/decorativeBackground'

const ContactUs = () => {
    return (
        <main>
            <ContactForm />
            <Locations />
            <DecorativeBackground className="translate-y-[-445px] right-0" />
        </main>
    )
}

export default ContactUs
