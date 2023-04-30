import React from 'react'
import styles from './commons/style'


function About() {
  return (
    <div className='flex' style={{backgroundImage:"/images/world-removebg-preview.png", backgroundRepeat:"no-repeat"}}>
        <div style={{width:"1000px", marginLeft:'50px', position:"sticky", top:'0px'}}>
            <h1 className='text-orange-500 font-semibold px-4 mb-4 mt-4 ss:text-[40px] text-center text-[20px] font-poppins'>About Us</h1>
            <p className={`${styles.paragraph} text-sm px-4 mb-2 text-primary`}>We are a Kenyan based company that started in 2010 after realizing the demand for manpower and
high number of unemployed youth in the country. In 2011 we opened up a branch in Uganda after
meeting all the necessary requirements, in 2013 we extended to Tanzania and 2013 we also opened up a
branch in Ghana due to our clients’ demands that had business interests in these places.</p>
<p className={`${styles.paragraph} text-sm px-4 mb-2 text-primary`}>We are a close-knit organized team that consists of drive, dynamic and talented achievers.
Among us are professionals in administrative and human resources with strong management and
recruitment background</p>

<p className={`${styles.paragraph} text-sm px-4 mb-2 text-primary`}>Crossin eagle logistics is a multiple service provider with top professionals from many different
industries. The company is built on a solid foundation of over 5 years experience of its management
and its employees.</p>

<p className={`${styles.paragraph} text-sm px-4 mb-2 text-primary`}>We are able to provide many services to our customers in the Middle East. The company was setup with
diversity of services and solutions in mind. Our intention is to provide quality service at a standard
unmatched by others</p>
<p className={`${styles.paragraph} text-sm px-4 mb-2 text-primary`}>Should you wish to utilize our services or you have any queries regarding our services, please do not
hestitate to contact us for more details. We guarantee quality services and our rates are competitive.</p>

<div>
    <img className='ml-10' src='/images/world-removebg-preview.png' />
</div>
        </div>

        <div style={{width:"400px", marginLeft:'30px'}}>
            <div style={{}}>
                <h1 className='text-orange-500 text-center font-semibold px-4 mb-4 mt-4 ss:text-[40px] text-[20px] font-poppins'>Our Vision</h1>
                <p className={`${styles.paragraph} text-sm mb-2 text-primary`}>To be the most reliable and efficient manpower ,property and transport
provider offering a broad spectrum of related services
excellence and renowned for ourintegrityand abilityto deliver.</p>
<p className={`${styles.paragraph} text-sm mb-2 text-primary`}>We go to extraordinally lengths to satisfy and delight our customers. We want to meet or exceed their
expectations and knowthat bydoing sowe turn customersinto advocatesfor our business.Wewant to serve our
customers completely, efficiently, knowledgeablyand flair.</p>
            </div>
            <div style={{}}>
                <h1 className='text-orange-500 text-center font-semibold px-4 mb-4 mt-4 ss:text-[40px] text-[20px] font-poppins'>Our Mission</h1>
                <p className={`${styles.paragraph} text-sm mb-2 text-primary`}>To be the leading provider of manpower services ,property management and a transport partner
to our clients with the highest level of service and offering an
excellent orientated approach in addressing all their manpower requirements and business related
ideas with a comprehensive guarantee of satisfaction.</p>
<p className={`${styles.paragraph} text-sm mb-2 text-primary`}>To build relationships with our clients by gaining a thorough understanding of their business and
requirementsthereby sharing their vision and assisting by developing and realizing the vision with them. Werate
integrityfirst on ourlist ofstrengths.</p>
            </div>
        </div>
    </div>
  )
}

export default About