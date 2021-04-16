import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
            title: 'Wedding Ceremony',
            img : 'https://image.freepik.com/free-photo/groom-putting-wedding-ring-bride-finger-wedding-ceremony_182527-2447.jpg',
            price : 5000
        },
        {
            title: 'marriage Ceremony',
            img : 'https://image.freepik.com/free-photo/groom-putting-wedding-ring-bride-finger-wedding-ceremony_182527-2447.jpg',
            price : 5000
        },
        {
            title: 'Birthday Ceremony',
            img : 'https://image.freepik.com/free-photo/groom-putting-wedding-ring-bride-finger-wedding-ceremony_182527-2447.jpg',
            price : 5000
        },
        {
            title: 'love Ceremony',
            img : 'https://image.freepik.com/free-photo/groom-putting-wedding-ring-bride-finger-wedding-ceremony_182527-2447.jpg',
            price : 5000
        }

    ]
    return (
        <section className='container-fluid'>
            <h2 className="text-center py-4">This Services We Provide</h2>
            <div className="row">
            {
                serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
            }
            </div>
        </section>
    );
};

export default Services;