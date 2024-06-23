import { Box, Button, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { FaApple } from "react-icons/fa";

const page = () => {

  return (
    <div>
      <div className='w-full h-14 bg-black'>
      </div>
      <div className='flex'>
        <div className='bg-black text-center w-full'>
          <p className='text-6xl text-white  sticky mt-20'>Apple Shopping Event</p>
          <p className='text-3xl  text-gray-400 my-3 sticky'>From November 25 to 28, get an Apple Gift <br /> Card when you buy an eligible product</p>
          <Button variant='text' className='normal-case sticky'>Get an early look</Button>
          <Image src="/Home/iphoneimg.svg" alt='photo' width={1500} height={1000} className='-mt-72 mx-auto' />
        </div>
      </div>
      <div>
        <Image src="/Home/divimg.svg" alt='photo' width={1500} height={1000} className='mx-auto sticky my-5' />
      </div>
      <div className='text-center sticky mt-20'>
        <p className='text-5xl font-bold'>iPhone 14</p>
        <p className='text-xl my-3 font-semibold'>Big and bigger.</p>
        <div>
          <Button className="normal-case font-semibold">Learn more</Button>
          <Button className="normal-case font-semibold">Buy</Button>
        </div>
      </div>
      <div>
        <Image src="/Home/divimg2.svg" alt='photo' width={1500} height={1000} className='mx-auto -mt-48' />
      </div>
      <Grid container spacing={1} justifyContent={'center'} gap={1} marginTop={2}>
        <Box position={'sticky'}>
          <div className='absolute mx-10   text-center mt-10 w-11/12'>
            <p className='text-white text-4xl font-bold'>iPhone 14 Pro</p>
            <p className='text-white text-2xl'>Pro. Beyond.</p>
            <Button className='normal-case text-lg'>Learn more</Button>
            <Button className='normal-case text-lg'>Buy</Button>
          </div>
          <Image src="/Home/divimg3.svg" alt='photo' width={700} height={1000} className='mx-auto mt-2' />
        </Box>
        <Box >
          <div className='absolute   text-center mt-10 w-2/4'>
            <p className='text-4xl font-bold'>iPad</p>
            <p className='text-2xl'>Lovable. Drawable. Magical.</p>
            <Button className='normal-case text-lg'>Learn more</Button>
            <Button className='normal-case text-lg'>Buy</Button>
          </div>
          <Image src="/Home/divimg4.svg" alt='photo' width={700} height={1000} className='mx-auto mt-2' />
        </Box>
        <Box >
          <div className='absolute   text-center mt-10 w-2/4'>
            <Image src="/Home/applegiftlogo.svg" alt='photo' width={40} height={40} className='mx-auto' />
            <p className='text-4xl font-bold'>AirPods</p>
            <p className='text-2xl'>Share the joy.</p>
            <Button className='normal-case text-lg'>Shop</Button>
          </div>
          <Image src="/Home/divimg5.svg" alt='photo' width={700} height={1000} className='mx-auto ' />
        </Box>
        <Box >
          <div className='absolute   text-center mt-10 w-2/4'>
            <div className='ml-5'>
              <p className='text-white text-4xl mx-64 absolute'><FaApple /></p>
              <p className='text-white text-4xl ml-5 font-bold'>WATCH</p>
            </div>
            <p className='text-red-600 font-semibold'>SERIES 8</p>
            <p className='text-2xl text-white'>A healthy leap ahead.</p>
            <Button className='normal-case text-lg'>Learn more</Button>
            <Button className='normal-case text-lg'>Buy</Button>
          </div>
          <Image src="/Home/divimg6.svg" alt='photo' width={700} height={1000} className='mx-auto ' />
        </Box>
        <Box >
          <div className='absolute   text-center mt-10 w-2/4'>
            <div className='ml-5'>
              <p className=' text-4xl mx-64 absolute'><FaApple /></p>
              <p className=' text-4xl ml-5 font-bold'>WATCH</p>
            </div>
            <p className='text-orange-600  font-semibold'>ULRTA</p>
            <p className='text-2xl'>Adventure awaits.</p>
            <Button className='normal-case text-lg'>Learn more</Button>
            <Button className='normal-case text-lg'>Buy</Button>
          </div>
          <Image src="/Home/divimg7.svg" alt='photo' width={700} height={1000} className='mx-auto ' />
        </Box>
        <Box >
          <div className='absolute   text-center mt-10 w-2/4'>
            <div className='ml-5'>
              <p className=' text-4xl mx-72 absolute mt-0.5'><FaApple /></p>
              <p className=' text-4xl ml-8 font-bold'>Card</p>
            </div>
            <p className='text-2xl'>Get up to 3% Daily Cash back <br /> with every purchase.</p>
            <Button className='normal-case text-lg'>Learn more</Button>
            <Button className='normal-case text-lg' >Apply now</Button>
          </div>
          <Image src="/Home/divimg8.svg" alt='photo' width={700} height={1000} className='mx-auto ' />
        </Box>
      </Grid>
      <Grid display={"flex"} marginTop={2} gap={10}>
        <Box>
          <Image src="/Home/divimg9.svg" alt='photo' width={117.5} height={500} />
        </Box>
        <Box>
          <Image src="/Home/divimg11.png" alt='photo' width={1200} height={500} />
        </Box>
        <Box>
          <Image src="/Home/divimg10.svg" alt='photo' width={117.5} height={500} />
        </Box>
      </Grid>
      <p className='text-6xl -mt-8 text-center'>.<span className='text-gray-300'>..........</span></p>
      <div>
        <p className='text-gray-400 text-start w-5/6 mx-auto mt-10'>1. Offer valid on qualifying purchases of eligible Apple products from November 25, 2022, to November 28, 2022, at a qualifying location. Offer subject to availability. While supplies last. Customers shall receive a discount equal to the value of the Promotion Product (depending on their purchase) off the price of the Eligible Product, but will be charged for all items in their cart. Important notice regarding the checkout receipt and monthly statement for Apple Card Monthly Installment (ACMI) purchases with this promotion: A purchase of an Eligible Product made when selecting ACMI (a 0% APR payment option available only in the U.S.) as the payment type at checkout will receive an instant credit equal to the cost of the Promotion Product (Apple Gift Card) deducted from the price of the Eligible Product at the time of purchase. You will be charged one ACMI installment plan for the Eligible Product discounted by the instant credit. The value of the Promotion Product (i.e. the value of the Apple Gift Card) will also be charged in a separate second ACMI installment plan for the same number of months as the discounted Eligible Product. The total combined amount charged over the 2 separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, you will receive and be charged for the Promotion Product (Apple Gift Card) in the amount of the applicable instant credit. ACMI is subject to credit approval and credit limit. Variable APRs for Apple Card other than ACMI range from 13.99% to 24.99% based on creditworthiness. Rates as of October 1, 2022. If you choose the pay-in-full or one-time-payment option for an ACMI-eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI transactions and are subject to your standard purchase APR. See the Apple Card Customer Agreement at <span className='text-gray-700 cursor-pointer'>https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf</span> for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch. Available for qualifying applicants in the United States. If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about accessing this offer or applying for Apple Card. Except for ACMI, this offer cannot be combined with other Apple promotion(s) or financing offers that are directed to individual end-user customers in the qualifying location. This offer also cannot be combined with the Apple Employee Purchase Plan or business loyalty pricing. Some method of payment types are not accepted under this offer. See checkout for details. Availability of in-store promotion offerings may be limited by Apple Store location closures as a result of COVID-19. Additional restrictions apply. View full terms and conditions of offer <span className='text-gray-700 cursor-pointer'>here.</span></p>
      </div>
    </div >
  )
}

export default page