import React from 'react'
import type { Metadata } from "next";
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { FaChevronRight, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
export const metadata: Metadata = {
  title: "Tv & Home",
};

const Tv = () => {
  return (
    <div className='overflow-hidden'>
      <div className='w-full h-12 bg-black'>
      </div>
      <Grid container className='flex justify-center gap-12 mt-10 h-fit text-center mx-auto' spacing={2}>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/appletv4k.svg" alt='photo' width={70} height={70} className='mt-0.5 mx-auto cursor-pointer' />
          <p className='mt-3.5'>Apple TV 4K</p>
          <p className='text-orange-600 '>New</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/appletv.svg" alt='photo' width={50} height={70} className='mx-auto cursor-pointer' />
          <p className='mt-3.5'>Apple TV app</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/appletv+.svg" alt='photo' width={90} height={70} className='mt-2 mx-auto cursor-pointer' />
          <p className='mt-5'>Apple TV+</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/homepod.svg" alt='photo' width={50} height={70} className='mt-1 mx-auto cursor-pointer' />
          <p className='mt-3.5'>HomePod</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/homeapp.svg" alt='photo' width={55} height={70} className='mx-auto cursor-pointer' />
          <p className='mt-3.5'>Home app</p>
        </Grid>
        <Grid item xs={12} sm={5} md={3} lg={1} xl={1}>
          <Image src="/tv/accessories.svg" alt='photo' width={30} height={70} className='mx-auto cursor-pointer' />
          <p className='mt-3.5'>Accessories</p>
        </Grid>
      </Grid>
      <div className='bg-blue-600 py-4'>
        <p className='text-white text-center text-md'>MLS Season Pass. Stream every Major League Soccer match. Coming soon.* Notify Me</p>
      </div>
      <Image src="/tv/herotv.svg" alt='photo' width={1400} height={700} className='mx-auto mb-20 cursor-pointer' />
      <Image src="/tv/herohomepod.svg" alt='photo' width={1400} height={700} className='mx-auto cursor-pointer' />
      <div>
        <p className='text-center text-7xl font-bold -mt-10'>The future hits home.</p>
        <p className='text-center text-xl mt-5 text-gray-500'>Simply connect your favorite devices and transform your house into a remarkably smart,<br /> convenient, and entertaining home. Control lights, locks, and thermostats with your <br /> iPhone — or just your voice. Play any song, in any room, from anywhere. And elevate movie <br /> night with theater-like picture and sound. All with the security and privacy of Apple.</p>
        <p className='text-xs text-center mt-2 text-gray-500'>Stream Luck on the Apple TV app</p>
      </div>
      <Grid>
        <Grid container justifyContent={'center'} marginTop={10} gap={10}>
          <Grid >
            <div className='text-center'>
              <p className='text-lg font-bold my-3'>HomePod mini </p>
              <p className='text-2xl font-bold'>Room-filling sound <br /> in every room.</p>
              <p className='my-5 font-medium'>$99</p>
              <Button variant='contained' className='rounded-full normal-case mr-5'>Buy</Button>
              <Button className='normal-case'>Learn more</Button>
            </div>
            <Image src="/tv/fililing.svg" alt='photo' width={550} height={400} className='cursor-pointer' />
          </Grid>
          <Grid >
            <div className='text-center'>
              <p className='text-orange-600 -mt-4'>New</p>
              <Image src="/tv/4klogo.svg" alt='photo' width={70} height={400} className='mx-auto my-3 cursor-pointer' />
              <p className='text-2xl font-bold'>The Apple experience. <br /> Cinematic in every sense.</p>
              <p className='my-5 font-medium'>Starting at $129</p>
              <Button className='normal-case  rounded-full mr-5' variant='contained'>Buy</Button>
              <Button className='normal-case'>Learn more</Button>
            </div>
            <Image src="/tv/4ktv.svg" alt='photo' width={550} height={400} className='cursor-pointer' />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'}>
        <Grid>
          <Image src="/tv/foundation.svg" alt='photo' width={700} height={500} className='cursor-pointer' />
        </Grid>
        <Grid>
          <div className='text-center my-20 mx-10'>
            <Image src="/tv/homeicon.svg" alt='photo' width={50} height={500} className='mx-auto cursor-pointer' />
            <p className='text-lg font-bold'>Home</p>
            <p className='text-3xl font-bold'>The foundation for <br /> a smarter home.</p>
            <Button className='normal-case text-lg'>Learn more</Button>
          </div>
        </Grid>
      </Grid>
      <p className='text-center text-5xl font-bold mt-40 leading-tight'>Every reason to turn your <br /> house into a smart home.</p>
      <Grid container marginTop={5} justifyContent={'space-around'} marginLeft={10}>
        <Grid>
          <div className='text-center'>
            <p className='text-center font-bold text-lg'>Easily control your home <br /> from anywhere with your <br /> favorite devices.</p>
            <Button className='normal-case'>Learn more about the Home app</Button>
          </div>
          <Image src="/tv/control.svg" alt='photo' width={320} height={500} className='mx-auto cursor-pointer' />
        </Grid>
        <Grid>
          <div className='text-center'>
            <p className='text-center font-bold text-lg'>Seamlessly connected <br /> entertainment in every room.</p>
            <Button className='normal-case'>Learn more about HomePod mini</Button>
          </div>
          <Image src="/tv/connected.svg" alt='photo' width={300} height={400} className='cursor-pointer' />
        </Grid>
        <Grid>
          <div className='text-center'>
            <p className='text-center font-bold text-lg'>Run it all with your voice.</p>
            <Button className='normal-case'>Learn more about Siri</Button>
          </div>
        </Grid>
        <Grid>
          <div className='text-center'>
            <p className='text-lg text-center font-bold'>All with the security <br /> and privacy of Apple.</p>
            <Button className='normal-case'>Learn more about Privacy</Button>
          </div>
          <Image src="/tv/privacy.svg" alt='photo' width={250} height={400} className='-ml-7 cursor-pointer mt-10' />
        </Grid>
      </Grid>
      <Image src="/tv/leftright.svg" alt='photo' width={70} height={400} className='mx-auto cursor-pointer -mt-8' />
      <p className='text-center text-5xl font-bold mt-40 leading-tight'>Accessories. Around your <br /> home and across your devices.</p>
      <div className='text-center'>
        <Button className='normal-case text-lg my-3'>Shop accessories</Button>
      </div>
      <Grid container marginTop={7} justifyContent={'space-around'} marginLeft={15}>
        <Grid>
          <div className='text-center'>
            <p className='text-lg font-bold'>Lighting</p>
            <p className='text-gray-500'>Put your routine on a timer. Or set <br /> the mood with bulbs and switches.</p>
            <Button className='normal-case'>Shop Lights & Bulbs, <br /> Outlets, and Switches</Button>
          </div>
          <Image src="/tv/lighting.svg" alt='photo' width={300} height={400} className='mx-auto cursor-pointer' />
          <p className='text-xs text-gray-500 text-center'>Nanoleaf A19 Bulb</p>
        </Grid>
        <Grid>
          <div className='text-center'>
            <p className='text-lg font-bold'>Security</p>
            <p className='text-gray-500'>Keep an eye on what matters most <br /> with cameras, doorbells, and more.</p>
            <Button className='normal-case'>Shop Cameras and Sensors <br /> <br /></Button>
          </div>
          <Image src="/tv/security.svg" alt='photo' width={300} height={400} className='mx-auto cursor-pointer' />
          <p className='text-xs text-gray-500 text-center'>Logitech Circle View Wired Doorbell</p>
        </Grid>
        <Grid>
          <div className='text-center'>
            <p className='text-lg font-bold'>Comfort</p>
            <p className='text-gray-500'>Turn up the heat or keep your cool <br /> with temperature controls and fans.</p>
            <Button className='normal-case'>Shop Thermostats <br /><br /></Button>
          </div>
          <Image src='/tv/comfort.svg' alt='photo' width={300} height={400} className='mx-auto cursor-pointer' />
          <p className='text-center text-gray-500 text-xs'>ecobee SmartThermostat with Voice Control</p>
        </Grid>
        <Grid>
          <div className='text-center'>
            <p className='text-lg font-bold'>Entry</p>
            <p className='text-gray-500'>Unlock more ways to access your home <br /> with locks and garage door openers.</p>
            <Button className='normal-case'>Shop Sensors and Locks1</Button>
          </div>
          <Image src='/tv/entry.svg' alt='photo' width={200} height={400} className='mx-auto cursor-pointer ml-2' />
          <p className='text-xs text-gray-500 text-center -mt-6'>Yale Assure Lock SL <br /> Touchscreen Deadbolt – Black</p>
        </Grid>
      </Grid>
      <Image src='/tv/leftright.svg' alt='photo' width={70} height={400} className='mx-auto cursor-pointer mt-10' />
      <p className='text-center text-5xl font-bold mt-40 leading-tight'>Watch, sing, play, and work out. <br /> On the big screen.</p>

      <div>
        <Image src='/tv/whitescreen.svg' alt='photo' width={1100} height={300} className='mx-auto cursor-pointer mt-10' />
      </div>

      <Grid container justifyContent={'center'} gap={5}>
        <Grid>
          <div className='flex w-fit ml-14'>
            <Image src='/store/applelogoblack.svg' alt='photo' width={20} height={30} className='mx-auto' />
            <p className='text-3xl font-medium'>tv</p>
            <FaPlus className='mt-2.5 text-xl text-gray-900' />
          </div>
          <div className='text-center'>
            <p className='text-center'>Stream award-winning <br /> Apple Originals on <br /> every screen.</p>
            <Button variant='contained' className='normal-case rounded-full mt-3 text-xs'>Try it free</Button> <br />
            <Button className='normal-case text-xs mt-2'>Learn more</Button>
          </div>
        </Grid>
        <Grid>
          <div className='flex w-fit ml-9'>
            <Image src='/store/applelogoblack.svg' alt='photo' width={20} height={30} className='mx-auto  mt-0.5' />
            <p className='text-3xl font-medium'>Music</p>
          </div>
          <div className='text-center'>
            <p>Access all your favorite <br /> songs and sing along <br /> with lyrics view.</p>
            <Button variant='contained' className='normal-case rounded-full mt-3 text-xs'>Try it free</Button> <br />
            <Button className='normal-case text-xs mt-2'>Learn more</Button>
          </div>
        </Grid>
        <Grid>
          <div className='flex w-fit ml-4 '>
            <Image src='/store/applelogoblack.svg' alt='photo' width={20} height={30} className='mx-auto' />
            <p className='text-3xl font-medium '>Fitness</p>
            <FaPlus className='mt-2.5 text-xl text-gray-900' />
          </div>
          <div className='text-center'>
            <p>From HIIT to Meditation,<br /> there’s something for <br />everyone.</p>
            <Button variant='contained' className='normal-case rounded-full mt-3 text-xs'>Try it free</Button> <br />
            <Button className='normal-case text-xs mt-2'>Learn more</Button>
          </div>
        </Grid>
        <Grid>
          <div className='flex w-fit ml-6'>
            <Image src='/store/applelogoblack.svg' alt='photo' width={20} height={30} className='mx-auto mt-0.5' />
            <p className='text-3xl font-medium'>Arcade</p>
          </div>
          <div className='text-center'>
            <p>Over 200 incredibly fun <br /> games. No ads. No in- <br />app purchases.</p>
            <Button variant='contained' className='normal-case rounded-full mt-3 text-xs'>Try it free</Button> <br />
            <Button className='normal-case text-xs mt-2'>Learn more</Button>
          </div>
        </Grid>
      </Grid>

      <div className='flex justify-around rounded-xl  my-20 mx-10' id='giv'>
        <div className='text-center mt-32 my-5'>
          <Image src="/iphone/givlogo.svg" alt='' width={80} height={60} className='mx-auto' />
          <p className='text-7xl font-bold text-white'>Give WOW.</p>
          <Button variant='text' className='normal-case text-lg'>Shop the Holiday Gift Guide</Button>
        </div>
        <div>
          <Image src="/tv/givimg.svg" alt='photo' width={450} height={60} className='' />
        </div>
      </div>

      <Grid container justifyContent={'space-around'} marginBottom={10}>
        <Grid marginLeft={15}>
          <Image src="/tv/icon1.svg" alt='photo' width={45} height={60} className='' />
          <div className='text-center'>
            <p className='text-lg font-bold '>Fast, free delivery</p>
            <p>Or pick up available items at an <br /> Apple Store.</p>
            <Button className='normal-case'>Learn more</Button>
          </div>
        </Grid>
        <Grid marginRight={20}>
          <Image src="/tv/icon2.svg" alt='photo' width={45} height={60} className='' />
          <div className='text-center ml-3'>
            <p className='text-lg font-bold '>Get help buying</p>
            <p>Have a question? Call a <br /> Specialist or chat online. <br />Call 1-800-MY-APPLE.</p>
            <Button className='normal-case'>Contact us</Button>
          </div>
        </Grid>
      </Grid>

      <div className='text-gray-500 ml-24'>
        <hr className='w-[1200px] border border-gray-300' />
        <p>* MLS Season Pass requires a subscription.</p>
        <div className='ml-5 my-3'>
          <p className='leading-9'>
            Product availability varies by country. <br />
            New subscribers only. $6.99/month after free trial. Plan automatically renews until cancelled. Terms apply. <br />
            New subscribers only. $10.99/month after free trial. Plan automatically renews until cancelled. Terms apply. <br />
            Apple Watch required. New subscribers only. $9.99/month after free trial. Plan automatically renews after trial until cancelled. Terms apply. <br />
            New subscribers only. $4.99/month after free trial. Plan automatically renews until cancelled. Terms apply. <br />
          </p>
        </div>
        <p>“coastline” written by mehro.</p>
      </div>
      <div className='ml-24'>
        <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
        <hr className='w-[1200px] border border-gray-300' />
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
        <div className='flex items-center'>
          <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
          <FaChevronRight className='text-gray-300 mx-5 mt-1' />
          <Link href="/tv" className='my-0.5 text-gray-600'>TV & HOME</Link>
        </div>
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
      </div>



    </div >
  )
}

export default Tv