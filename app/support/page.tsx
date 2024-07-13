import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';
import { Button, Grid } from '@mui/material';
import { FaChevronRight, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Support"
};

const Support = () => {
  return (
    <div className='overflow-hidden'>
      <div className='w-full h-12 bg-black'>
      </div>
      <div>
        <Image src='/support/firstimg.svg' alt='photo' width={2000} height={1000} className=' mx-auto' />
        <p className='absolute text-white text-[42px] font-medium text-center ml-[565px] -mt-[360px]'>Apple Support</p>
      </div>
      <Grid container justifyContent={'center'} gap={10} textAlign={'center'} marginTop={3}>
        <Grid>
          <Image src='/support/iphone.svg' alt='photo' width={70} height={100} className='cursor-pointer' />
          <p>iPhone</p>
        </Grid>
        <Grid>
          <Image src='/support/imac.svg' alt='photo' width={70} height={100} className='cursor-pointer' />
          <p>Mac</p>
        </Grid>
        <Grid>
          <Image src='/support/ipad.svg' alt='photo' width={70} height={100} className='cursor-pointer' />
          <p>iPad</p>
        </Grid>
        <Grid>
          <Image src='/support/applewatch.svg' alt='photo' width={70} height={100} className='cursor-pointer' />
          <p>Watch</p>
        </Grid>
        <Grid>
          <Image src='/support/airpods.svg' alt='photo' width={70} height={100} className='cursor-pointer' />
          <p>AirPods</p>
        </Grid>
        <Grid>
          <Image src='/support/applemusic.svg' alt='photo' width={70} height={100} className='cursor-pointer' />
          <p>Music</p>
        </Grid>
        <Grid>
          <Image src='/support/appletv.svg' alt='photo' width={70} height={100} className='cursor-pointer' />
          <p>TV</p>
        </Grid>
      </Grid>
      <hr className='mt-40  border-gray-300' />
      <Grid container justifyContent={'space-around'} alignItems={'center'} paddingY={3}>
        <Grid>
          <div className='border-r border-gray-300 pr-44'>
            <Image src="/support/promopass.svg" alt='photo' width={45} height={20} className='mx-auto' />
            <Button className='normal-case'>Forgot Apple ID or  password</Button>
          </div>
        </Grid>
        <Grid>
          <div className='border-r border-gray-300 pr-44'>
            <Image src="/support/promorepair.svg" alt='photo' width={40} height={20} className='mx-auto' />
            <Button className='normal-case'>Apple Repair</Button>
          </div>
        </Grid>
        <Grid>
          <Image src="/support/promosubs.svg" alt='photo' width={40} height={20} className='mx-auto' />
          <Button className='normal-case'>Billing and subscriptions</Button>
        </Grid>
      </Grid>
      <hr className=' border-gray-300 mb-20' />
      <div>
        <p className='text-3xl font-semibold text-center'>Search for topics</p>
        <div className='text-center my-3'>
          <input type="text" placeholder="      Search Support" className='border-2 rounded-md border-gray-300 pr-[500px] py-2 justify-center text-xl' />
        </div>
      </div>
      <hr className='mt-20 border-gray-300' />
      <Grid container justifyContent={'center'} marginTop={5}>
        <Grid>
          <Image src="/support/promoios.svg" alt="photo" width={400} height={500} className='mx-auto' />
        </Grid>
        <Grid>
          <p className='text-4xl font-semibold'>Update to iOS 16</p>
          <p className='my-5 text-xl'>Explore all-new personalization features,<br /> privacy and security enhancements, and <br /> more ways to communicate seamlessly.</p>
          <Button className='normal-case -ml-2 text-lg'>Learn how to get the latest</Button>
        </Grid>
      </Grid>
      <div>
        <Image src="/support/secondimg.svg" alt='photo' width={2000} height={1000} className='mx-auto my-14' />
        <div className='-mt-[350px] ml-[250px] absolute '>
          <p className='text-[43px] font-semibold text-white'>Get Support</p>
          <p className='text-lg my-3 text-white'>Choose a product and we’ll find you the best <br /> solution.</p>
          <Button className='normal-case -ml-2 text-blue-400'>Start now</Button> <br />
          <Button className='normal-case -ml-2 my-1 text-blue-400'>Download the Apple Support app</Button>
        </div>
      </div>
      <Grid container justifyContent={'center'} marginTop={5}>
        <Grid>
          <p className='text-4xl font-semibold'>Trade in with Apple</p>
          <p className='my-5 text-xl'>Turn an eligible device into credit towards a <br /> new one, or recycle it for free. Apple Trade In <br /> is good for you and the planet.</p>
          <Button className='normal-case -ml-2 text-lg'>Learn more</Button>
        </Grid>
        <Grid>
          <Image src="/support/promogive.svg" alt="photo" width={400} height={500} className='mx-auto' />
        </Grid>
      </Grid>
      <hr className='border-gray-300 my-10' />
      <Grid container justifyContent={'center'} marginY={7}>
        <Grid>
          <Image src="/support/promoacc.svg" alt="photo" width={400} height={500} className='mx-auto' />
        </Grid>
        <Grid>
          <p className='text-4xl font-semibold'>Accidents happen. <br /> AppleCare+ covers <br /> them.</p>
          <p className='my-5 text-xl leading-8'>Get unlimited repairs for accidental damage <br /> protection, 24/7 priority access to Apple <br /> experts, and more.</p>
          <Button className='normal-case -ml-2 text-lg'>Learn more about AppleCare+</Button>
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'} marginTop={5}>
        <Grid>
          <p className='text-4xl font-semibold'>My Support</p>
          <p className='my-5 text-xl'>Get up to date information about your Apple <br /> products in one place including repairs, tech <br /> support cases, and much more.</p>
          <Button className='normal-case -ml-2 text-lg'>Sign in to My Support</Button>
        </Grid>
        <Grid>
          <Image src="/support/promosetup.svg" alt="photo" width={400} height={500} className='mx-auto' />
        </Grid>
      </Grid>
      <div className='text-center my-10'>
        <p className='text-xl font-semibold'>Safe and reliable repairs</p>
        <p className='my-5 leading-7'>At Apple, every product we make is built to last. We design durable, easy-to-use devices with <br /> innovative features that customers depend on, all while protecting their privacy and data. Customers <br /> should have access to safe, reliable, and secure repairs with genuine Apple parts if they need them.</p>
        <p>Learn more about Apple’s approach to expanding access to safe and reliable repairs.<Button className='normal-case -ml-1.5'>View (PDF)</Button></p>
      </div>
      <div className='text-center my-10'>
        <p className='text-xl font-semibold'>Beware of counterfeit parts</p>
        <p className='my-5 leading-7'>Some counterfeit and third party power adapters and batteries may not be designed properly and could <br /> result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we <br /> recommend visiting an<Button className='normal-case -mx-1'>Apple Store</Button>or <Button className='normal-case -mx-1'>Apple Authorized Service Provider</Button>. If you need a replacement <br />adapter to charge your Apple device, we recommend getting an Apple power adapter.</p>
        <p className='leading-7'>Also non-genuine replacement displays may have compromised visual quality and may fail to work <br /> correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</p>
      </div>
      <hr className='border-gray-300 my-10' />
      <div className='flex justify-center'>
        <Image src="support/promocard.svg" alt='photo' width={300} height={500} />
        <div className='ml-10 mt-5'>
          <p className='text-3xl font-semibold'>Be aware of gift card scams</p>
          <Button className='normal-case -ml-1.5 text-[17px]'>Learn more</Button>
        </div>
      </div>
      <hr className='border-gray-300 my-10' />
      <div className='w-[700px] ml-[300px]'>
        <p className='text-2xl font-semibold'>Apple Service Programs</p><br />
        <Button className='normal-case  -ml-2 -mt-5'>Apple Watch Series 6 Service Program for Blank Screen Issue</Button><br />
        <Button className='normal-case  -ml-2'>iPhone 12 and iPhone 12 Pro Service Program for No Sound Issues</Button><br />
        <Button className='normal-case  -ml-2'>iPhone 11 Display Module Replacement Program for Touch Issues</Button><br />
        <Button className='normal-case  -ml-2'>15-inch MacBook Pro Battery Recall Program</Button><br />
        <Button className='normal-case  -ml-2'>Apple Three-Prong AC Wall Plug Adapter Recall Program</Button><br />
        <Button className='normal-case  -ml-2'>See all programs</Button>
      </div>
      <div className='text-center w-[300px] mx-auto my-14'>
        <p className='text-sm'>Stay Connected with Apple Support</p>
        <div className='flex justify-center my-5'>
          <Link href="https://www.x.com/apple" target='_blank' className='text-gray-800'><FaTwitter className='text-4xl' /></Link><Link href='https://www.youtube.com/apple'target='_blank' className='text-gray-800 ml-5'><FaYoutube className='text-4xl' /></Link>
        </div>
      </div>
      <hr className='border-gray-300' />
      <div className='ml-24 mt-10'>
        <div className='flex items-center'>
          <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
          <FaChevronRight className='text-gray-500 mx-5 mt-1' />
          <Link href="/support" className='my-0.5 text-gray-700'>Support</Link>
        </div>
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
      </div>
    </div>


  )
}

export default Support