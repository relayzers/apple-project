import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Store"
};

const Store = () => {
  return (
    <div className='overflow-hidden'>
      <div className='w-full h-12 bg-black'>
      </div>
      <p className='text-center mt-5 mb-32'>The Apple Shopping Event is coming. From November 25 to 28 get an Apple Gift Card when you buy an eligible product.**</p>
      <div className='flex justify-around ml-16'>
        <div>
          <div>
            <p className='text-gray-500 text-6xl font-bold'><span className='text-black'>Store.</span> The best way to buy <br /> the products you love.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <Image src="/Store/avatar2.svg" alt='photo' width={40} height={50} className='-mt-3' />
            <div>
              <p className='text-md  font-bold ml-2'>Need shopping help?</p>
              <Button className='normal-case -mt-3'>Ask a Specialist</Button>
            </div>
          </div>
          <div className='flex items-center my-5'>
            <Image src="/Store/avatar.svg" alt='photo' width={40} height={50} className='-mt-3' />
            <div>
              <p className='text-md font-bold ml-2'>Visit an Apple Store</p>
              <Button className='normal-case -mt-3'>Find one near you</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex  justify-end mb-16'>
        <div>
          <Image alt='photo' src="/store/mac-nav.svg" width={100} height={50} className='mr-14' />
          <p className='ml-10'>Mac</p>
        </div>
        <div>
          <Image alt='photo' src="/Store/iphone-nav.svg" width={100} height={50} className='mr-12' />
          <p className='ml-7'>iPhone</p>
        </div>
        <div>
          <Image alt='photo' src="/store/ipad-nav.svg" width={100} height={50} className='mr-12' />
          <p className='ml-9'>iPad</p>
        </div>
        <div>
          <Image alt='photo' src="/store/watch-nav.svg" width={100} height={50} className='mr-14' />
          <p className='ml-2'>Apple Watch</p>
        </div>
        <div>
          <Image alt='photo' src="/store/airpods-nav.svg" width={100} height={50} className='mr-12' />
          <p className='ml-6'>AirPods</p>
        </div>
        <div>
          <Image alt='photo' src="/store/airtag-nav.svg" width={100} height={50} className='mr-12' />
          <p className='ml-7'>AirTag</p>
        </div>
        <div>
          <Image alt='photo' src="/store/appletv-nav.svg" width={100} height={50} className='mr-14' />
          <p className='ml-2'>Apple TV 4K</p>
        </div>
        <div>
          <Image alt='photo' src="/store/homepod-nav.svg" width={100} height={50} className='mr-12' />
          <p className='ml-1'>Homepod mini</p>
        </div>
        <div>
          <Image alt='photo' src="/store/accessories-nav.svg" width={70} height={50} className='-mt-2 ml-2' />
          <p className='ml-8'>Access</p>
        </div>
      </div>
      <div>
        <p className='ml-40 text-gray-500 font-bold text-3xl mb-5'><span className='text-black'>The latest.</span> Take a look at what’s new, right now.</p>
      </div>
      <Grid marginLeft={22} container gap={2} marginBottom={7}>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-500 font-druk'>IPHONE 14</p>
              <p className='text-2xl my-2 font-bold'>Big and bigger.</p>
              <p className='text-lg'>From $799.00 or $33.29/mo. for 24 mo. <br />before trade*</p>
            </div>
            <Image src="/store/iphone14card.svg" alt='photo' width={400} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div>
            <div className='absolute m-10'>
              <p className='text-xs  text-gray-300 font-druk'>APPLE WATCH SERIES 8</p>
              <p className='text-2xl my-2 font-bold text-white'>A healthy leap ahead.</p>
              <p className='text-lg text-white'>From $399 or $16.62/mo. for 24 mo.</p></div>
            <Image src="/store/watchcard.svg" alt='photo' width={400} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div>
            <div className='absolute m-10'>
              <p className='text-xs  text-gray-500 font-druk'>IPAD</p>
              <p className='text-2xl my-2 font-bold'>Lovable. Drawable. Magical.</p>
              <p className='text-lg'>From $449 or $37.41/mo.for 12 mo.</p>
            </div>
            <Image src="/store/ipadcard.svg" alt='photo' width={400} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
      </Grid>
      <div>
        <p className='ml-40 text-gray-500 font-bold text-3xl mb-5'><span className='text-black'>The holidays are here.</span> And so is the best way to shop.</p>
      </div>
      <Grid marginLeft={22} container gap={2} marginBottom={7}>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300 font-druk'>APPLE SHOPPING EVENT</p>
              <p className='text-2xl my-2 font-bold text-white'>Get an Apple Gift Card <br /> with an eligible product.**</p>
              <p className='text-lg text-white font-thin'>November 25 to 28.</p>
            </div>
            <Image src="/store/announcecard.svg" alt='photo' width={400} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div>
            <div className='absolute m-10'>
              <p className='text-xs  text-gray-300 font-druk'>HOLIDAY GIFT GUIDE</p>
              <p className='text-2xl my-2 font-bold text-white'>Give WOW.</p>
              <p className='text-lg text-white'>Find the perfect gift for <br /> everyone on your list.</p></div>
            <Image src="/store/holidaycard.svg" alt='photo' width={400} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div>
            <div className='absolute m-10'>
              <p className='text-xs  text-gray-500 font-druk'>APPLE SPECIALIST</p>
              <p className='text-2xl my-2 font-bold'>Shop one on one with a <br /> Specialist. Online or in store.</p>
            </div>
            <Image src="/store/specialistcard.svg" alt='photo' width={405} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
      </Grid>
      <div>
        <p className='ml-40 text-gray-500 font-bold text-3xl mb-10'><span className='text-black'>The Apple Store difference.</span> Even more reasons to shop with us.</p>
      </div>
      <div className='flex justify-around ml-24 my-6  mb-20'>
        <div>
          <Image src="/store/card1.svg" alt='photo' width={50} height={50} />
          <p >Enjoy <span id='card1'>two-hour <br /> delivery</span>  from an Apple <br /> Store, <span id='card1'>free delivery</span>, or <br /> <span id='card1'>easy pickup.</span></p>
        </div>
        <div>
          <Image src="/store/card2.svg" alt='photo' width={50} height={50} />
          <p >Free <span id='card2'>extended <br /> returns</span>  between now <br />and 1/8/23.°</p>
        </div>
        <div>
          <Image src="/store/card3.svg" alt='photo' width={50} height={50} />
          <p> <span id='card3'>Trade in your current <br />device.</span> Get credit <br />toward a new one.</p>
        </div>
        <div>
          <Image src="/store/card4.svg" alt='photo' width={50} height={50} />
          <p>Pay in full or <span id='card4'>pay over <br /> time.</span> Your choice.</p>
        </div>
      </div>
      <div>
        <p className='ml-40 text-gray-500 font-bold text-3xl mb-5'><span className='text-black'>Accessories.</span> Put the finishing touch on their favorite gift.</p>
      </div>

      <Grid marginLeft={20} container gap={2} marginBottom={7}>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300 font-druk'>APPLE SHOPPING EVENT</p>
              <p className='text-2xl my-2 font-bold text-white'>Get an Apple Gift Card <br /> with an eligible product.**</p>
              <p className='text-lg text-white font-thin'>November 25 to 28.</p>
            </div>
            <Image src="/store/holidaycase.svg" alt='photo' width={400} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div className='shadow-2xl rounded-2xl mb-10 w-full'>
            <div className='ml-10'>
              <Image src="/store/14procase.svg" alt='photo' width={244} height={400} className='mt-14 ml-10' />
              <Image src="/store/14proase.svg" alt='photo' width={265} height={400} className='ml-8 mr-16' />
            </div>
            <div className='ml-10'>
              <p className=' text-orange-600'>New</p>
              <p className='my-2 font-bold'>iPhone 14 Pro Max Leather          <br /> Case with MagSafe - <br /> <br /></p>
              <p className='text-lg'>$59.00</p>
            </div>
          </div>
        </Box>
        <Box>
          <div className='shadow-2xl rounded-2xl mb-10 w-full'>
            <div className='ml-10'>
              <Image src="/store/14case.svg" alt='photo' width={244} height={400} className='mt-14 ml-10' />
              <Image src="/store/14ase.svg" alt='photo' width={265} height={400} className='ml-8 mr-16' />
            </div>
            <div className='ml-10'>
              <p className=' text-orange-600'>New</p>
              <p className='my-2 font-bold'>iPhone 14 Plus Silicone Case <br /> with MagSafe - Succulent <br /><br /></p>
              <p className='text-lg'>$49.00</p>
            </div>
          </div>
        </Box>

      </Grid>
      <div>
        <p className='ml-40 text-gray-500 font-bold text-3xl mb-5'><span className='text-black'>Paired up Gifts.</span> Accessories that perfectly connect with their favorites.</p>
      </div>
      <Grid marginLeft={22} container gap={2} marginBottom={7}>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300'></p>
              <p className='text-2xl my-2 font-bold'>Better Together.</p>
              <p className='text-lg text-white font-thin'></p>
            </div>
            <Image src="/store/accessoriescard.svg" alt='photo' width={400} height={400} className='rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div className='shadow-2xl rounded-2xl mb-10 w-full'>
            <div className='ml-10'>
              <Image src="/store/chargercard.svg" alt='photo' width={254} height={400} className='mt-14 ml-8 mr-16' />
              <br /><br />
            </div>
            <div className='ml-10'>
              <p className=' text-orange-600'>New</p>
              <p className='my-2 font-bold'>mophie 3-in-1 stand <br /> for MagSafe Charger<br /> <br /></p>
              <p className='text-lg'>$89.95</p>
            </div>
          </div>
        </Box>
        <Box>
          <div className='shadow-2xl rounded-2xl mb-10 w-full'>
            <div className='ml-10'>
              <Image src="/store/airtagcard.svg" alt='photo' width={240} height={400} className='mt-14 ml-10' />
              <Image src="/store/airtagase.svg" alt='photo' width={260} height={400} className='ml-8 mr-16' />
            </div>
            <div className='ml-10'>
              <p className=' text-orange-600'>New</p>
              <p className='my-2 font-bold'>Belkin Secure Holder with <br /> Key Ring for AirTag – Black<br /><br /></p>
              <p className='text-lg'>$49.00</p>
            </div>
          </div>
        </Box>
      </Grid>
      <div>
        <p className='ml-40 text-gray-500 font-bold text-3xl mb-5'><span className='text-black'>The Apple experience.</span> Do even more with Apple products and services.</p>
      </div>
      <Grid marginLeft={22} container gap={2} marginBottom={7}>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300'>APPLE TV+</p>
              <p className='text-2xl my-2 font-bold text-white'>New Apple Originals <br /> every month.</p>
              <p className='text-lg text-white font-thin'></p>
            </div>
            <Image src="/store/appletvcard.svg" alt='photo' width={400} height={400} className=' rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300'></p>
              <p className='text-2xl my-2 font-bold'>Six Apple services. <br /> One easy subscription.</p>
              <p className='text-lg text-white font-thin'></p>
            </div>
            <Image src="/store/subscriptionscard.svg" alt='photo' width={400} height={400} className=' rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300'>NEW</p>
              <p className='text-2xl my-2 font-bold'>We've got you covered.</p>
              <p className='text-md '>AppleCare+ now comes with unlimited <br />repairs for accidental damage protection.</p>
            </div>
            <Image src="/store/image.jpeg" alt='photo' width={400} height={400} className=' rounded-2xl shadow-2xl' />
          </div>
        </Box>
      </Grid>
      <div>
        <p className='ml-40 text-gray-500 font-bold text-3xl mb-5'><span className='text-black'>Special stores.</span> Exclusive savings for businesses, school, and more.</p>
      </div>
      <Grid marginLeft={22} container gap={2} marginBottom={7}>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300'>EDUCATION</p>
              <p className='text-2xl my-2 font-bold'>Save on Mac or iPad <br /> with education pricing.</p>
              <p className='text-md '></p>
            </div>
            <Image src="/store/educard.svg" alt='photo' width={400} height={400} className=' rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300'>BUSINESS</p>
              <p className='text-2xl my-2 font-bold text-white'>From enterprise to <br /> small business, we’ll <br /> work with you.</p>
              <p className='text-md '></p>
            </div>
            <Image src="/store/businesscard.svg" alt='photo' width={400} height={400} className=' rounded-2xl shadow-2xl' />
          </div>
        </Box>
        <Box>
          <div className='rounded-lg'>
            <div className='absolute m-10 '>
              <p className='text-xs  text-gray-300'>GOVERNMENT</p>
              <p className='text-2xl my-2 font-bold text-white'>Special pricing is <br />available for state, local, <br /> and federal agencies.1</p>
              <p className='text-md '></p>
            </div>
            <Image src="/store/govcard.svg" alt='photo' width={400} height={400} className=' rounded-2xl shadow-2xl' />
          </div>
        </Box>
      </Grid>
      <div>
        <p className='ml-40 font-bold text-3xl mb-5'>Quick Links</p>
        <div className='flex ml-40 font-semibold'>
          <p className='cursor-pointer p-3 mr-5 bg-gray-100 rounded-full'>Order Status</p>
          <p className='cursor-pointer p-3 mr-5 bg-gray-100 rounded-full'>Shopping Help</p>
          <p className='cursor-pointer p-3 mr-5 bg-gray-100 rounded-full'>Returns</p>
        </div>
      </div>
      <p className='text-gray-400 text-start w-5/6 mx-auto mt-10'>
        * Pricing for iPhone 14 and iPhone 14 Plus includes a $30 connectivity discount that requires activation with AT&T, T-Mobile, Sprint, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&T, T-Mobile, Sprint, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement. Additional iPhone Payments terms are here. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount. <br /><br />
        ** Offer valid on qualifying purchases of eligible Apple products from November 25, 2022, to November 28, 2022, at a qualifying location. Offer subject to availability. While supplies last. Customers shall receive a discount equal to the value of the Promotion Product (depending on their purchase) off the price of the Eligible Product, but will be charged for all items in their cart. Important notice regarding the checkout receipt and monthly statement for Apple Card Monthly Installment (ACMI) purchases with this promotion: A purchase of an Eligible Product made when selecting ACMI (a 0% APR payment option available only in the U.S.) as the payment type at checkout will receive an instant credit equal to the cost of the Promotion Product (Apple Gift Card) deducted from the price of the Eligible Product at the time of purchase. You will be charged one ACMI installment plan for the Eligible Product discounted by the instant credit. The value of the Promotion Product (i.e. the value of the Apple Gift Card) will also be charged in a separate second ACMI installment plan for the same number of months as the discounted Eligible Product. The total combined amount charged over the 2 separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, you will receive and be charged for the Promotion Product (Apple Gift Card) in the amount of the applicable instant credit. ACMI is subject to credit approval and credit limit. Variable APRs for Apple Card other than ACMI range from 13.99% to 24.99% based on creditworthiness. Rates as of October 1, 2022. If you choose the pay-in-full or one-time-payment option for an ACMI-eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI transactions and are subject to your standard purchase APR. See the Apple Card Customer Agreement at https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card. Except for ACMI, this offer cannot be combined with other Apple promotion(s) or financing offers that are directed to individual end-user customers in the qualifying location. This offer also cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Some method of payment types are not accepted under this offer. See checkout for details. Availability of in-store promotion offerings may be limited by Apple Store location closures as a result of COVID-19. Additional restrictions apply. View full terms and conditions of offer here. <br /><br />
        ◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only in the U.S. to select at checkout for certain Apple products purchased at Apple Store locations,
        apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204
        for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 13.99% to 24.99% based on creditworthiness. Rates as of October 1, 2022. If you choose the pay-in-full or one-time-payment option for an ACMI-eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement
        for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile. <br /><br />† Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at special storefronts. The last month’s payment for each product will be the product’s purchase price, less all other payments at the monthly payment amount.
        <br /><br /> To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings - General - Software Update. Tap Download and Install.
        <br /><br />Available for qualifying applicants in the United States.Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        <br /><br />° Items purchased by carrier financing are not eligible for extended returns and are subject to the Standard Return Policy.
        <br /><br /> 1. Special pricing available to qualified customers. To learn more about how to start qualifying toward special pricing, talk to an Apple Specialist in a store or give us a call at <br />1‑800‑MY‑APPLE.
        †† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.
      </p>
      <div className='ml-28 mt-10'>
        <hr id='hr'/>
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
        <div className='flex items-center'>
          <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
          <FaChevronRight className='text-gray-500 mx-5 mt-1' />
          <Link href="/appstore" className='my-0.5 text-gray-700'>Apple Store Online</Link>
        </div>
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
      </div>
    </div >

  )
}

export default Store