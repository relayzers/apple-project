import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
export const metadata: Metadata = {
  title: "Accessories",
};

const Accessories = () => {
  return (
    <div>
      <div className='w-full h-12 bg-black'>
      </div>
      <div className='flex justify-between mx-52 py-2 sticky z-40'>
        <p className='text-3xl -ml-14 font-semibold'>Accessories</p>
        <p className='text-lg mt-1.5'>Browse all</p>
      </div>
      <hr className='border-gray-300 sticky z-10' />
      <Grid container className='flex justify-around'>
        <Grid marginTop={17} marginLeft={19}>
          <p className='text-4xl font-bold'>Mix. Match. <br /> MagSafe.</p>
          <p className='my-5 font-semibold'>Snap on a case, wallet, wireless <br /> charger, or battery pack.</p>
          <Button className='normal-case text-lg -ml-2'>Shop MagSafe</Button>
        </Grid>
        <Grid marginLeft={3}>
          <Image src="/accessories/magsafe.svg" alt='photo' width={1000} height={700} className='sticky -mt-20' />
        </Grid>
      </Grid>
      <div>
        <p className='text-3xl font-semibold text-center mt-14'>Find the accessories you’re looking for.</p>
        <div className='text-center my-3'>
          <input type="text" placeholder="      Search Accessories" className='border-2 rounded-md border-gray-300 pr-[350px] py-2 justify-center text-xl' />
        </div>
      </div>
      <div className='flex justify-center mt-10 '>
        <p className='text-xl '>Browse by Product </p>
        <p className='text-xl text-gray-500 ml-10'> Browse by Category</p>
      </div>
      <hr className='border-gray-300 mt-2 w-[900px] mx-auto' />
      <Grid container className='flex justify-around w-[1000px] mx-auto' marginTop={3}>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1} className='1'>
          <div className='rounded-full p-3 border-gray-300 border'>
            <Image src="/accessories/iconmac.svg" alt='photo' width={100} height={50} className='mx-auto' />
          </div>
          <div>
            <p className='text-center'>Mac</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1} className='2'>
          <div className='rounded-full border border-gray-300 p-3'>
            <Image src="/accessories/iconipad.svg" alt='photo' width={100} height={50} className='mx-auto' />
          </div>
          <div>
            <p className='text-center'>iPad</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1} className='3'>
          <div className='rounded-full p-3 border border-gray-300'>
            <Image src="/accessories/iconiphone.svg" alt='photo' width={100} height={50} className='mx-auto' />
          </div>
          <div>
            <p className='text-center'>iPhone</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1} className='4'>
          <div className='p-3 border border-gray-300 rounded-full'>
            <Image src="/accessories/iconwatch.svg" alt='photo' width={100} height={50} className='mx-auto' />
          </div>
          <div>
            <p className='text-center'>Watch</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1} className='5'>
          <div className='rounded-full border p-3 border-gray-300'>
            <Image src="/accessories/icontv.svg" alt='photo' width={100} height={50} className='mx-auto' />
          </div>
          <div className='text-center'>Tv & Home</div>
        </Grid>
      </Grid>
      <hr className='border-gray-300 my-5 w-[900px] mx-auto mb-40' />
      <p className='font-bold text-4xl text-center'>Holiday Gifts</p>
      <Grid container justifyContent={'space-around'} marginY={10}>
        <Grid>
          <Image src="/accessories/airpods.svg" alt='photo' width={300} height={700} className='mx-auto' />
          <div className='text-center'>
            <p className='text-xs text-orange-500'>Free Engraving</p>
            <p className='font-semibold mt-1.5'>AirPods (2nd generation)</p><br />
            <p>$129.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/ipencil.svg" alt='photo' width={300} height={700} className='mx-auto' />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>Free Engraving</p>
            <p className='font-semibold mt-1'>Apple Pencil (2nd generation)</p><br />
            <p>$129.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/powerbank.svg" alt='photo' width={300} height={700} className='mx-auto' />
          <div className='text-center -mt-1'>
            <br />
            <p className='font-semibold'>MagSafe Battery Pack</p> <br />
            <p>$129.00</p>
          </div>
        </Grid>
      </Grid>
      <div className='text-center'>
        <Button className='normal-case mb-20'>Shop holiday gifts</Button>
      </div>
      <div className='flex justify-around rounded-xl  my-20 mx-10' id='giv'>
        <div className='text-center mt-32 my-5'>
          <Image src="/iphone/givlogo.svg" alt='' width={80} height={60} className='mx-auto' />
          <p className='text-7xl font-bold text-white'>Give WOW.</p>
          <Button variant='text' className='normal-case text-lg'>Shop the Holiday Gift Guide</Button>
        </div>
        <div>
          <Image src="/accessories/givimg.svg" alt='photo' width={450} height={60} className='' />
        </div>
      </div>
      <p className='text-center font-bold text-5xl'> Featured iPhone Accessories</p>
      <Grid container justifyContent={'space-around'} marginY={10}>
        <Grid>
          <Image src="/accessories/14case.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='font-bold my-5'>iPhone 14 Silicone Case with MagSafe <br /> - Lilac</p>
            <p>$49.00</p>
            <Image src="/accessories/14ase.svg" alt='photo' width={300} height={50} className='mx-auto my-2' />
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/charger.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <br />
            <p className='font-bold mt-3'>MagSafe Charger</p> <br /><br />
            <p className='-mt-1.5'>$39.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/14promaxcase.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='font-bold my-5'>iPhone 14 Pro Max Leather Case <br /> with MagSafe - Ink</p>
            <p>$59.00</p>
            <Image src="/accessories/14promaxase.svg" alt='photo' width={300} height={50} className='mx-auto my-2' />
          </div>
        </Grid>
      </Grid>
      <div className='text-center'>
        <Button className='normal-case mb-20'>Shop all iPhone accessories</Button>
      </div>
      <p className='text-center font-bold text-5xl'>Featured iPad Accessories</p>
      <Grid container justifyContent={'space-around'} marginY={10}>
        <Grid>
          <Image src="/accessories/keyboard1.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='my-5 font-bold'>Magic Keyboard Folio for <br /> iPad (10th generation)</p>
            <p>$249.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/ipencil2.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <br />
            <p className='my-5 font-bold mt-3'>Apple Pencil (1st generation)</p><br />
            <p className='-mt-0.5'>$99.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/keyboard2.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <br />
            <p className='font-bold my-5 mt-3'>Magic Keyboard for iPad Pro <br /> 12.9‑inch (6th generation) - Black</p><br />
            <p className='-mt-6'>$349.00</p>
            <Image src='/accessories/keyboardase.svg' alt='photo' width={300} height={300} className='mx-auto mt-5' />
          </div>
        </Grid>
      </Grid>
      <div className='text-center'>
        <Button className='normal-case mb-20'>Shop all iPad accessories</Button>
      </div>
      <p className='text-center font-bold text-5xl'>Apple Watch Bands</p>
      <Grid container justifyContent={'space-around'} marginY={10}>
        <Grid>
          <Image src='/accessories/pink.svg' alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='my-5 font-bold '>Starlight Sport Band</p>
            <p>$49.00</p>
          </div>
          <Image src='/accessories/pinkase.svg' alt='photo' width={300} height={300} />
        </Grid>
        <Grid>
          <Image src='/accessories/red.svg' alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='my-5 font-bold '>Elderberry Sport Loop</p>
            <p>$49.00</p>
          </div>
          <Image src='/accessories/redase.svg' alt='photo' width={300} height={300} />
        </Grid>
        <Grid>
          <Image src='/accessories/green.svg' alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='my-5 font-bold '>Rainforest Braided Solo Loop</p>
            <p>$99.00</p>
          </div>
          <Image src='/accessories/greenase.svg' alt='photo' width={300} height={300} />
        </Grid>
      </Grid>
      <div className='text-center'>
        <Button className='normal-case mb-20'>Shop all band</Button>
      </div>
      <p className='text-center font-bold text-5xl'>AirTag</p>
      <Grid container justifyContent={'space-around'} marginY={10}>
        <Grid>
          <Image src="/accessories/airtag.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>Free Engraving</p>
            <p className='font-bold my-5'>AirTag</p>
            <p>$29.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/airtags.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>Free Engraving</p>
            <p className='font-bold my-5'>AirTag 4 pack</p>
            <p>$99.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/airtagss.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <br />
            <p className='font-bold my-5 mt-3'>AirTag Leather Key Ring - Forest Green</p>
            <p>$35.00</p>
            <Image src="/accessories/airtagase.svg" alt='photo' width={300} height={300} className='mx-auto mt-7' />
          </div>
        </Grid>
      </Grid>
      <div className='text-center'>
        <Button className='normal-case mb-20'>Shop AirTag</Button>
      </div>
      <p className='text-center font-bold text-5xl'>Sound Essentials</p>
      <Grid container justifyContent={'space-around'} marginY={10}>
        <Grid>
          <Image src="/accessories/airpod.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='font-bold my-5'>AirPods Pro (2nd generation)</p>
            <p>$249.00</p>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/homepod.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-orange-500 text-xs'>New</p>
            <p className='font-bold my-5'>HomePod mini - Blue</p>
            <p>$99.00</p>
            <Image src="/accessories/homepodase.svg" alt='photo' width={300} height={300} className='mx-auto mt-10' />
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/beats.svg" alt='photo' width={300} height={300} />
          <div className='text-center'>
            <p className='text-xs text-orange-500'>Free Engraving</p>
            <p className='font-bold my-5'>Beats Fit Pro True Wireless Earbuds <br /> — Stone Purple</p>
            <p>$199.00</p>
            <Image src="/accessories/beatsase.svg" alt='photo' width={300} height={300} className='mx-auto mt-5' />
          </div>
        </Grid>
      </Grid>
      <div className='text-center'>
        <Button className='normal-case mb-40'>Shop Headphones and Speakers</Button>
      </div>
      <Grid container justifyContent={'space-around'} marginY={10} width={1000} marginX={30}>
        <Grid>
          <Image src="/accessories/box.svg" alt='photo' width={50} height={100} className='mx-auto' />
          <div className='text-center'>
            <p className='font-bold text-lg'>Fast, free delivery</p>
            <p>Choose free delivery or pick up <br /> available items at an Apple Store.</p>
            <Button className='normal-case'>Learn more</Button>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/box2.svg" alt='photo' width={50} height={100} className='mx-auto' />
          <div className='text-center'>
            <p className='font-bold text-lg'>Free and easy returns</p>
            <p>Complete your return online or <br /> take it to an Apple Store.</p>
            <Button className='normal-case'>Learn more</Button>
          </div>
        </Grid>
        <Grid>
          <Image src="/accessories/box3.svg" alt='photo' width={66} height={100} className='mx-auto' />
          <div className='text-center'>
            <p className='font-bold text-lg'>Get 3% Daily Cash back <br /> with Apple Card</p>
            <p>And pay over time, interest-free when you  <br /> choose to check out with Apple Card Monthly <br /> Installments.</p>
            <Button className='normal-case'>Learn more</Button>
          </div>
        </Grid>
      </Grid>
      <p className='text-start w-[1100px] mx-auto text-sm text-gray-400'>Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only in the U.S. to select at checkout for certain Apple products purchased at Apple
        Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit.See
        <Link href="https://support.apple.com/kb/HT211204" target='_blank' className='text-blue-500'> https://support.apple.com/kb/HT211204 </Link>
        for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 13.99% to 24.99% based on creditworthiness. Rates as of October 1, 2022. If you choose the pay-in-full or one-time-payment option for an ACMI-eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your card’s variable APR. See the
        Apple Card Customer Agreement
        for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Sprint, Verizon, or T-Mobile.
        <br /> To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings - General - Software Update. Tap Download and Install.
        <br /> Available for qualifying applicants in the United States.
        <br /> Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        <br />†† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.</p>
        <div className='ml-24'>
        <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
        <hr className='w-[1200px] border border-gray-300' />
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
        <div className='flex items-center'>
          <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
          <FaChevronRight className='text-gray-300 mx-5 mt-1' />
          <Link href="/accessories" className='my-0.5 text-gray-600'>Accessories</Link>
        </div>
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
      </div>
    </div>
  )
}

export default Accessories