import React from 'react';
import styles from './commons/style';

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <div className="bg-white p-4 shadow-lg">
        <h1 className="text-orange-500 font-semibold mb-4 text-2xl text-center font-poppins lg:text-4xl">
          About Us
        </h1>
        <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
          We are a Kenyan based company that started in 2010 after realizing the demand for manpower and high number of unemployed youth in the country. In 2011 we opened up a branch in Uganda after meeting all the necessary requirements, in 2013 we extended to Tanzania and 2013 we also opened up a branch in Ghana due to our clients’ demands that had business interests in these places.
        </p>
        <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
          We are a close-knit organized team that consists of drive, dynamic and talented achievers. Among us are professionals in administrative and human resources with strong management and recruitment background
        </p>
        <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
          Crossin eagle logistics is a multiple service provider with top professionals from many different industries. The company is built on a solid foundation of over 5 years experience of its management and its employees.
        </p>
        <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
          We are able to provide many services to our customers in the Middle East. The company was setup with diversity of services and solutions in mind. Our intention is to provide quality service at a standard unmatched by others
        </p>
        <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
          Should you wish to utilize our services or you have any queries regarding our services, please do not hesitate to contact us for more details. We guarantee quality services and our rates are competitive.
        </p>
      </div>
      <div className="bg-white p-4 shadow-lg">
        <div className="mb-8">
          <h1 className="text-orange-500 font-semibold mb-4 text-2xl text-center font-poppins lg:text-4xl">
            Our Vision
          </h1>
          <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
            To be the most reliable and efficient manpower, property and transport provider offering a broad spectrum of related services excellence and renowned for our integrity and ability to deliver.
          </p>
          <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
            We go to extraordinarily lengths to satisfy and delight our customers. We want to meet or exceed their expectations and know that by doing so we turn customers into advocates for our business. We want to serve our customers completely, efficiently, knowledgeably and flair.
          </p>
        </div>
        <div>
          <h1 className="text-orange-500 font-semibold mb-4 text-2xl text-center font-poppins lg:text-4xl">
            Our Mission
          </h1>
          <p className={`${styles.paragraph} text-sm mb-4 text-primary`}>
            To be the leading provider of manpower services, property management and a transport partner to our clients with the highest level of service and offering an excellent </p>

<p className={`${styles.paragraph} text-sm mb-2 text-primary`}>To build relationships with our clients by gaining a thorough understanding of their business and
requirementsthereby sharing their vision and assisting by developing and realizing the vision with them. Werate
integrityfirst on ourlist ofstrengths.</p>
            </div>
        </div>
    </div>
  )
}

export default About