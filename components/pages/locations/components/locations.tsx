import MaxWidthContainer from '@/components/ui/maxWidthContainer'
import React from 'react'
import Location from './location'

const LocationsComponent = () => {
    return (
        <MaxWidthContainer bottomMargin={true} expands={true}>
            <Location name="Canada"
                office={{ name: 'Central', street: '3886 Wellington Street', building: 'Toronto, Ontario M9C 3J5' }}
                contact={{ email: 'contact@designo.co', number: '+1 253-863-8967' }}
                delay='300'
                />
            <Location name="Australia"
                office={{ name: 'AU', street: '19 Balonne Street', building: 'New South Wales 2443' }}
                contact={{ email: 'contact@designo.au', number: '(02) 6720 9092' }}
                flipped={true}
                delay='200'
                />
            <Location name="United Kingdom"
                office={{ name: 'UK', street: '13 Colorado Way', building: 'Rhyd-y-fro SA8 9GA' }}
                contact={{ email: 'contact@designo.uk', number: '078 3115 1400' }}
                delay='100'
            />
        </MaxWidthContainer>
    )
}

export default LocationsComponent
