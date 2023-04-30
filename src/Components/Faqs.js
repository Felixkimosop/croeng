import React, { useState } from 'react';
import styles from './commons/style';

function Faqs() {
const [activeIndex, setActiveIndex] = useState(-1);

const toggleActive = (index) => {
if (activeIndex === index) {
setActiveIndex(-1);
} else {
setActiveIndex(index);
}
};

const faqs = [
{
question: '1. What is Competitive Manpower International Limited?',
answer: 'Competitive Manpower International Limited is a Kenyan based company that provides manpower services.',
},
{
question: '2. When was Competitive Manpower International Limited founded?',
answer: 'Competitive Manpower International Limited was founded in 2010.',
},
{
question: '3. Why was Competitive Manpower International Limited founded?',
answer: 'Competitive Manpower International Limited was founded to meet the demand for manpower and address the high number of unemployed youth in Kenya.',
},
{
question: '4. Where does Competitive Manpower International Limited operate?',
answer: 'Competitive Manpower International Limited operates in Kenya, Uganda, Tanzania, and Ghana.',
},
{
question: '5. What kind of team does Competitive Manpower International Limited have?',
answer: 'Competitive Manpower International Limited has a close-knit organized team consisting of dynamic and talented achievers with professional backgrounds in administrative and human resources.',
},
{
question: '6. What kind of services does Competitive Manpower International Limited provide?',
answer: 'Competitive Manpower International Limited is a multiple service provider with professionals from various industries, and is built on over 5 years of experience in management and recruitment. The company provides quality services and solutions in manpower, among other services.',
},
{
question: '7. How long has the management and employees of Competitive Manpower International Limited been in the industry?',
answer: 'The management and employees of Competitive Manpower International Limited have been in the industry for over 5 years.',
},
{
question: '8. What is the intention of Competitive Manpower International Limited in providing their services?',
answer: 'The intention of Competitive Manpower International Limited is to provide quality services at a standard unmatched by others.',
},
{
question: '9. How can customers contact Competitive Manpower International Limited?',
answer: 'Customers can contact Competitive Manpower International Limited for more details and to utilize their services through their website or by email/phone.',
},
];

return (
<div className="p-6 " style={{width:"1000px", marginLeft:"200px"}}>
<h2 className="text-xl font-bold  text-orange-500 mb-4 text-center">Frequently Asked Questions</h2>
{faqs.map((faq, index) => (
<div
key={index}
className="border-b pb-6 mb-6 cursor-pointer"
onClick={() => toggleActive(index)}
>
<h3 className="text-lg font-bold mb-2">{faq.question}</h3>
{activeIndex === index && (
<p className={`${styles.paragraph} text-sm px-4 mb-2 text-primary`}>{faq.answer}</p>
)}
</div>
))}
</div>
);
}

export default Faqs;