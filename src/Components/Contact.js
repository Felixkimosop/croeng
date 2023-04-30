import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col md:flex-row justify-center text-center'>
      <div className='md:ml-20'>
        <h1 className='text-orange-500 text-center mt-20'>Contact Information</h1>
        <div className='flex flex-col md:flex-row gap-10'>
          <div>
            <div>
              <h3 className='text-orange-500 mt-4'>Head Office</h3>
              <p className='text-sm'>1st Floor Rm FF5</p>
              <p className='text-sm'>Watersys Plaza</p>
              <p className='text-sm'>P.o Box 16013-00100</p>
              <p className='text-sm'>NAIROBI</p>
              <p className='text-sm'>Tel: +254 716392180</p>

              <p className='text-sm mt-4'>Globe Roundabout</p>
              <p className='text-sm'>House No. 19</p>
              <p className='text-sm'>Keekrock Road</p>
              <p className='text-sm'>Nairobi</p>
              <p className='text-sm'>info@competitivemanpower.com</p>
            </div>
          </div>
          <div>
            <div>
              <h3 className='text-orange-500 mt-4'>Uganda Office</h3>
              <p className='text-sm'>Beta House, 2nd floor Suite 2A</p>
              <p className='text-sm'>Ntinda Kigowa</p>
              <p className='text-sm'>P.O Box 26078</p>
              <p className='text-sm'>Kampala</p>
              <p className='text-sm'>Tel: +256 787111423</p>
            </div>
            <div>
              <h3 className='text-orange-500 mt-4'>Tanzania Office</h3>
              <p className='text-sm'>Masela Plaza 3rd Floor</p>
              <p className='text-sm'>Rumumba Avenue,</p>
              <p className='text-sm'>Morogoro Road</p>
              <p className='text-sm'>Suite 314, 316, 317</p>
              <p className='text-sm'>P.O Box 751308</p>
              <p className='text-sm'>Dar es salaam</p>
              <p className='text-sm'>Tel: +255 717221221</p>
            </div>
            <div>
              <h3 className='text-orange-500 mt-4'>Dubai Office</h3>
              <p className='text-sm'>Dubai Marina</p>
              <p className='text-sm'>Jewellary &Complex</p>
              <p className='text-sm'>DMCC, Dubai</p>
              <p className='text-sm'>Mob. +971551677193/+971561950632</p>
              <p className='text-sm'>Email: dubai@competivemanpower.com</p>
            </div>
          </div>
        </div>
      </div>
    <div style={{marginLeft:"350px",width:"400px"}}>
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got an issue? Contact us today</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-orange-500 rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
    </div>
  )
}

export default Contact