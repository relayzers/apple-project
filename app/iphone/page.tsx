
import React from 'react'
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { FaChevronRight, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "iPhone",
};

const Iphone = () => {

  return (
    <div className='overflow-x-hidden'>
      <div className='w-full h-12 bg-black'>
      </div>
      <Grid container justifyContent={'space-evenly'} className='mx-auto' marginBottom={5}>
        <Box>
          <Image src="/Iphone/14prolight.svg" alt='photo' width={50} height={60} className='mt-4  mx-auto' />
          <p className='text-xs text-center'>iPhone 14 Pro <br /> <span className='text-orange-600'>New</span></p>
        </Box>
        <Box>
          <Image src="/iphone/14light.svg" alt='photo' width={48} height={60} className='mt-4 mx-auto' />
          <p className='text-xs text-center'>iPhone 14 <br /> <span className='text-orange-600'>New</span></p>
        </Box>
        <Box>
          <Image src="/iphone/13light.svg" alt='photo' width={44} height={60} className='mt-4 mx-auto' />
          <p className='text-xs text-center'>iPhone 13</p>
        </Box>
        <Box>
          <Image src="/iphone/selight.svg" alt='photo' width={25.5} height={60} className='mt-3 mx-auto' />
          <p className='text-xs text-center'>iPhone SE</p>
        </Box>
        <Box>
          <Image src="/iphone/12light.svg" alt='photo' width={27} height={60} className='mt-4 mx-auto' />
          <p className='text-xs text-center mt-0.5'>iPhone 12</p>
        </Box>
        <Box>
          <Image src="/iphone/comparelight.svg" alt='photo' width={45} height={60} className='mt-6 mx-auto' />
          <p className='text-xs text-center mt-1'>Compare</p>
        </Box>
        <Box>
          <Image src="/iphone/airpodslight.svg" alt='photo' width={40} height={60} className='mt-5 mx-auto' />
          <p className='text-xs text-center mt-1.5'>AirPods</p>
        </Box>
        <Box>
          <Image src="/iphone/airtaglight.svg" alt='photo' width={39} height={60} className='mt-2 mx-auto' />
          <p className='text-xs text-center mt-0.5'>AirTag</p>
        </Box>
        <Box>
          <Image src="/iphone/accessorieslight.svg" alt='photo' width={40} height={60} className='mt-6 mx-auto' />
          <p className='text-xs text-center mt-0.5'>Accessories</p>
        </Box>
        <Box>
          <Image src="/iphone/applecardlight.svg" alt='photo' width={40} height={60} className='mt-4 mx-auto' />
          <p className='text-xs text-center mt-1'>Apple Card </p>
        </Box>
        <Box>
          <Image src="/iphone/ioslight.svg" alt='photo' width={40} height={60} className='mt-2 mx-auto' />
          <p className='text-xs text-center mt-1'>iOS 16</p>
        </Box>
        <Box>
          <Image src="/iphone/iphonelight.svg" alt='photo' width={72} height={60} className='mt-2 mx-auto' />
          <p className='text-xs text-center items-center mt-0.5'>Shop iPhone</p>
        </Box>
      </Grid>
      <hr />
      <br />
      <div className='text-center'>
        <p className="text-gray-500">New</p>
        <p className='text-xl font-bold mt-5'>iPhone 14</p>
        <p id='big' className='text-5xl font-extrabold mt-5 h-20'>Big and bigger</p>
        <p className='my-5'>From $33.29/mo. for 24 mo. or $799 before trade‑in1</p>
        <div className='mb-5'>
          <Button variant='contained' className='normal-case rounded-full mr-10'>Buy</Button>
          <Button className='normal-case text-lg'>Learn more</Button>
        </div>
        <div className='ml-5 mb-5'>
          <Image src="/iphone/iphoneimg.svg" alt='photo' width={700} height={700} className='mx-auto' />
        </div>
      </div>
      <div className='w-full h-20 bg-black'>
      </div>
      <div className='text-center bg-black w-full sticky'>
        <div className='w-full'>
          <p className="text-gray-300 sticky">New</p>
          <p className='text-xl font-bold mt-5 text-white'>iPhone 14 Pro </p>
          <p id='pro' className='text-5xl font-extrabold mt-5 h-20'>Pro. Beyond</p>
          <p className='mb-5 text-white'>From $41.62/mo. for 24 mo. or $999 before trade‑in1</p>
          <div className='mb-5'>
            <Button variant='contained' className='normal-case rounded-full mr-10'>Buy</Button>
            <Button className='normal-case text-lg'>Learn more</Button>
          </div>
        </div>
        <div className='ml-5 mb-5'>
          <Image src="/iphone/iphoneimg2.svg" alt='photo' width={700} height={700} className='mx-auto' />
        </div>
      </div>
      <Grid justifyContent={'space-evenly'} container>
        <Box textAlign={'center'}>
          <div className='flex justify-center mt-52'>
            <p className='text-xl font-bold mt-1'>iPhone </p>
            <p className='border-2 font-bold border-black rounded-md text-sm w-fit mt-1 h-fit'>SE</p>
          </div>
          <p id='se' className='text-5xl font-bold my-5'>Love the power. <br />Love the price.</p>
          <p className='mb-5'>From $17.87/mo. for 24 mo. or $429 before trade‑in1</p>
          <div className='mb-5'>
            <Button variant='contained' className='normal-case rounded-full mr-10'>Buy</Button>
            <Button className='normal-case text-lg'>Learn more</Button>
          </div>
        </Box>
        <Box>
          <Image src="/iphone/iphoneimg3.svg" alt='photo' width={400} height={700} className='mx-auto' />
        </Box>
      </Grid>
      <div>
        <div className='absolute mx-56 mt-72'>
          <p className='text-2xl font-bold text-white'>A Guided Tour of</p>
          <p className='text-5xl font-bold text-white my-5'>iPhone 14 & <br />iPhone 14 Pro</p>
          <Button variant='contained' color='inherit' className='rounded-full bg-white normal-case'>Watch the film</Button>
        </div>
        <Image src="/iphone/img1.svg" alt='photo' width={1350} height={500} className='mx-auto my-5' />
      </div>




      <p className='text-center text-4xl mt-20 font-bold'>Which iPhone is right for you?</p>




      <div className='flex my-20'>
        <div className='mx-auto text-center  w-1/4 '>
          <Image src="/iphone/14proimg.svg" alt='photo' width={206.5} height={300} className='mx-auto' />
          <Image src="/iphone/14procolor.svg" alt='photo' width={100} height={300} className='mx-auto my-5' />
          <p className='text-orange-500'>New<br /></p>
          <p className='font-bold text-2xl'>iPhone 14 Pro</p>
          <p className='text-xl my-5'>The ultimate iPhone.</p>
          <p>From $999</p>
          <Button variant='contained' className='normal-case rounded-full mx-10 my-3'>Buy</Button><br />
          <Button variant='text' className='normal-case '>Learn More</Button><br /> <br />
          <hr />
          <br />
          <br />
          <p className='leading-8'><span className='font-bold text-xl'>6.7″ or 6.1″</span> <br />Super Retina XDR display2 <br />ProMotion technology <br />Always-On display <br /></p>
          <Image src="/iphone/disland.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-8 text-gray-600'><span className='text-black text-xl'>Dinamic Island</span> <br />A new way to <br />interact with iPhone <br /></p>
          <Image src="/iphone/sos.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-10'>Emergency SOS via satellite3 <br />Emergency SOS <br />Crash Detection</p>
          <Image src="/iphone/camera.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='text-gray-600'><span className='text-black text-xl'>Pro camera system</span> <br /> 48MP Main | Ultra Wide <br /> Telephoto <br /> Photonic Engine for <br /> incredible detail and color <br />Autofocus on TrueDepth <br />front camera</p>
          <Image src="/iphone/battery.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-8'>Up to 29 hours <br />video playback4</p>
          <Image src="/iphone/a16.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-3'>A16 Bionic chip <br /> <br /></p>
          <Image src="/iphone/Faceid.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-5'>FACE ID</p>
          <Image src="/iphone/network.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p>Superfast 5G cellular5</p>
        </div>
        <div className='mx-auto text-center  w-1/4 '>
          <Image src="/iphone/14img.svg" alt='photo' width={200} height={300} className='mx-auto' />
          <Image src="/iphone/14color.svg" alt='photo' width={100} height={300} className='mx-auto my-5' />
          <p className='text-orange-500'>New<br /></p>
          <p className='font-bold text-2xl'>iPhone 14</p>
          <p className='text-xl my-5'>A total powerhouse.</p>
          <p>From $799**</p>
          <Button variant='contained' className='normal-case rounded-full mx-10 my-3'>Buy</Button><br />
          <Button variant='text' className='normal-case '>Learn More</Button><br /> <br />
          <hr />
          <br />
          <br />
          <p className='leading-8'><span className='font-bold text-xl'>6.7″ or 6.1″</span> <br />Super Retina XDR display2 <br />- <br />- <br /></p>
          <p className='leading-8 text-gray-600'><span className='text-black text-xl'> <br /> <br />-</span> <br /> <br /> <br /> <br /></p>
          <Image src="/iphone/sos.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-10'>Emergency SOS via satellite3 <br />Emergency SOS <br />Crash Detection</p>
          <Image src="/iphone/camera1.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='text-gray-600'><span className='text-black text-xl'>Advanced dual-camera system </span> <br /> 12MP Main | Ultra Wide <br /> - <br /> Photonic Engine for <br /> incredible detail and color <br />Autofocus on TrueDepth <br />front camera</p>
          <Image src="/iphone/battery.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-8'>Up to 26 hours <br />video playback4</p>
          <Image src="/iphone/a15.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-3'>A15 Bionic chip <br />with 5-core GPU</p>
          <Image src="/iphone/Faceid.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-5'>FACE ID</p>
          <Image src="/iphone/network.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p>Superfast 5G cellular5</p>
        </div>
        <div className='mx-auto text-center  w-1/4 '>

          <Image src="/iphone/13img.svg" alt='photo' width={180} height={300} className='mx-auto' />
          <Image src="/iphone/13color.svg" alt='photo' width={100} height={300} className='mx-auto my-5' />
          <p className='text-orange-500'><br /></p>
          <p className='font-bold text-2xl'>iPhone 13</p>
          <p className='text-xl my-5'>As amazing as ever.</p>
          <p>From $599**</p>
          <Button variant='contained' className='normal-case rounded-full mx-10 my-3'>Buy</Button><br />
          <Button variant='text' className='normal-case '>Learn More</Button><br /> <br />
          <hr />
          <br />
          <br />
          <p className='leading-8'><span className='font-bold text-xl'>6.1″ or 5.4″</span> <br />Super Retina XDR display2 <br />- <br />- <br /></p>
          <p className='leading-8 text-gray-600'><span className='text-black text-xl'> <br /> <br />-</span> <br /> <br /> <br /> <br /></p>
          <Image src="/iphone/sos.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-10'>- <br />Emergency SOS <br />-</p>
          <Image src="/iphone/camera1.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='text-gray-600'><span className='text-black text-xl'>Advanced dual-camera system </span> <br /> 12MP Main | Ultra Wide   <br />-  <br />  <br />- <br />TrueDepth front camera <br /> <br /></p>
          <Image src="/iphone/battery.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-8'>Up to 19 hours <br />video playback4</p>
          <Image src="/iphone/a15.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-3'>A15 Bionic chip <br />with 4-core GPU</p>
          <Image src="/iphone/Faceid.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-5'>FACE ID</p>
          <Image src="/iphone/network.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p>Superfast 5G cellular5</p>
        </div>
        <div className='mx-auto text-center  w-1/4 '>
          <Image src="/iphone/seimg.svg" alt='photo' width={170} height={300} className='mx-auto' />
          <Image src="/iphone/secolor.svg" alt='photo' width={50} height={300} className='mx-auto my-5' />
          <p className='text-orange-500'><br /></p>
          <div className='font-bold text-2xl flex justify-center'>
            <p className='text-xl font-bold'>iPhone </p>
            <p className='border-2 font-bold border-black rounded-md text-sm w-fit mt-1 h-fit'>SE</p>
          </div>
          <p className='text-xl my-5'>Serious power. Serious value.</p>
          <p>From $429**</p>
          <Button variant='contained' className='normal-case rounded-full mx-10 my-3'>Buy</Button><br />
          <Button variant='text' className='normal-case '>Learn More</Button><br /> <br />
          <hr />
          <br />
          <br />
          <p className='leading-8'><span className='font-bold text-xl'>4.7″</span> <br /> Retina HD display <br />- <br />- <br /></p>
          <p className='leading-8 text-gray-600'><span className='text-black text-xl'> <br /> <br />-</span> <br /> <br /> <br /> <br /></p>
          <Image src="/iphone/sos.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-10'>- <br />Emergency SOS <br />-</p>
          <Image src="/iphone/camera2.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='text-gray-600'><span className='text-black text-xl'>Advanced dual-camera system </span> <br /> 12MP Main | Ultra Wide   <br />-  <br />  <br />- <br />Front camera <br /> <br /></p>
          <Image src="/iphone/battery.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='leading-8'>Up to 19 hours <br />video playback4</p>
          <Image src="/iphone/a15.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-3'>A15 Bionic chip <br />with 4-core GPU</p>
          <Image src="/iphone/touchid.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p className='my-5'>TOUCH ID</p>
          <Image src="/iphone/network.svg" alt='photo' width={60} height={40} className='mx-auto mt-10' />
          <p>5G cellular5</p>

        </div>
      </div>
      <hr />
      <hr />
      <br />

      <div className='text-center  '>
        <Button className='normal-case mr-20 text-xl'>Compare all iPhone models</Button>
        <Button className='normal-case text-xl'>Shop iPhone</Button>
      </div>
      <div className='flex justify-around  my-20 mx-10' id='giv'>
        <div className='text-center mt-32 my-5'>
          <Image src="/iphone/givlogo.svg" alt='' width={80} height={60} className='mx-auto' />
          <p className='text-7xl font-bold text-white'>Give WOW.</p>
          <Button variant='text' className='normal-case text-lg'>Shop the Holiday Gift Guide</Button>
        </div>
        <div>
          <Image src="/iphone/givimg.svg" alt='' width={600} height={60} className='' />
        </div>
      </div>


      <p className='text-center text-5xl mt-20 mb-32 font-bold'>Ways to Buy iPhone</p>


      <div className='text-center font-bold'>
        <p className='text-xl '>Special carrier deals at Apple</p>
        <p className='text-4xl my-5'>Save up to $1000 on the newest <br />iPhone after trade‑in.6</p>
      </div>
      <Grid container justifyContent={'center'} textAlign={'center'} marginTop={5}>
        <Box>
          <Image src="/iphone/att.svg" alt='photo' width={200} height={50} className='mx-auto mr-10' />
        </Box>
        <Box>
          <Image src="/iphone/spirit.svg" alt='photo' width={200} height={50} className='mx-auto mr-10' />
        </Box>
        <Box>
          <Image src="/iphone/tmobile.svg" alt='photo' width={200} height={50} className='mx-auto mr-10' />
        </Box>
        <Box>
          <Image src="/iphone/verizon.svg" alt='photo' width={200} height={50} className='mx-auto mr-10' />
        </Box>
      </Grid>
      <div className='text-center my-10 px-5'>
        <Button variant='contained' className='rounded-full normal-case '>Find your deal</Button>
      </div>
      <div className='flex items-center justify-center mb-32'>
        <p>Our Specialists can help you shop — online or in store.</p>
        <Button className='normal-case'>Connect with an iPhone Specialist</Button>
      </div>



      <Grid container justifyContent={'space-around'}>
        <Box textAlign={'center'}>
          <p className='font-bold text-4xl mb-7'>Trade in your <br /> smartphone for credit.</p>
          <p>With Apple Trade In, you can get credit toward a new <br /> iPhone when you trade in an eligible smartphone.7 <br /> It’s good for you and the planet.</p>
          <Button className='normal-case mb-10'>Learn more</Button>
          <Image src="/iphone/credit.svg" alt='photo' width={200} height={300} className='mx-auto' />
        </Box>
        <Box textAlign={'center'}>
          <p className='font-bold text-4xl mb-7'>Get 3% Daily Cash <br />back with Apple Card.</p>
          <p>And pay for your new iPhone over 24 months, <br /> interest‑free when you choose to check out with <br /> Apple Card Monthly Installments.*</p>
          <Button className='normal-case mb-10'>Learn more</Button>
          <Image src="/iphone/applecardcredit.svg" alt='photo' width={452} height={300} className='mx-auto' />
        </Box>
      </Grid>
      <Box textAlign={'center'}>
        <div className='mt-40 absolute ml-96'>
          <p className='font-bold text-4xl mb-7 sticky ml-32'>Why Apple is the best <br />  place to buy iPhone.</p>
          <p className='sticky ml-32' >You can choose a payment option that works for <br /> you, pay less with a trade‑in, connect your new <br /> iPhone to your carrier, and get set up quickly. <br />You can also chat with a Specialist anytime.</p>
          <Button className='normal-case sticky ml-32'>Learn more</Button>
        </div>
        <Image src="/iphone/longiphoneimg.jpeg" alt='photo' width={1300} height={300} className='mx-auto my-7' />
      </Box>



      <p className='text-center text-4xl mt-32 mb-32 font-bold'>Featured accessories</p>



      <Grid>
        <Grid container justifyContent={'center'} marginLeft={7}>
          <Box marginRight={20} textAlign={'center'} marginTop={10}>
            <p className='font-bold text-4xl'>MagSafe</p>
            <p className='my-4 leading-7 text-lg'>Snap on a magnetic case, wallet, <br /> or both. And get faster wireless <br /> charging.</p>
            <Button className='normal-case text-lg'>Shop MagSafe accessories</Button>
          </Box>
          <Box>
            <Image src="/iphone/magsafe.svg" alt='photo' width={600} height={500} />
          </Box>
        </Grid>



        <Grid container justifyContent={'space-around'}>
          <Box>
            <Image src="/iphone/airtag.svg" alt='photo' width={700} height={500} className='ml-24' />
          </Box>
          <Box marginRight={20} textAlign={'center'} marginTop={10}>
            <p className='font-bold text-4xl mt-10'>AirTag</p>
            <p className='my-4 leading-7 text-lg'>Attach one to your keys. Put another in your  <br /> backpack. If they’re misplaced, just use the <br />Find My app.</p>
            <Button className='normal-case text-lg'>Buy</Button>
            <Button className='normal-case text-lg'>Learn more</Button>
          </Box>
        </Grid>
        <Box>
          <p className='text-4xl font-bold text-center mt-20 ml-2'>Magic runs <br />in the family.</p>
          <Image src="/iphone/airpodmax.svg" alt='photo' width={900} height={1000} className='mx-auto' />
        </Box>
        <Box textAlign={'center'}><Button className="normal-case text-xl mt-20">Shop all iPhone accessories</Button></Box>
      </Grid>



      <Grid container justifyContent={'center'} gap={10} marginTop={5}>
        <Box textAlign={'center'}>
          <Image src="/iphone/box.svg" alt='photo' width={55} height={100} className='mx-auto' />
          <p>Fast, free delivery</p>
          <p>Or pick up available items at an <br /> Apple Store.</p>
          <Button className='normal-case'>Learn more</Button>
        </Box>
        <Box textAlign={'center'}>
          <Image src="/iphone/$.svg" alt='photo' width={56} height={100} className='mx-auto' />
          <p className="mt-1">Pay monthly at 0% APR</p>
          <p>You can pay over time when you <br /> choose to check out with Apple <br /> Card Monthly Installments.*</p>
          <Button className='normal-case'>Learn more</Button>
        </Box>
        <Box textAlign={'center'}>
          <Image src="/iphone/person.svg" alt='photo' width={60} height={100} className='mx-auto' />
          <p className='mt-3'>Get help buying</p>
          <p>Have a question? Call a <br /> <br />
            Specialist or chat online. <br />
            Call 1‑800‑MY‑APPLE.
          </p>
          <Button className='normal-case -ml-1'>Learn more</Button>
        </Box>
      </Grid>
      <p className='text-center text-5xl mt-32 mb-20 font-bold'>What makes an iPhone an iPhone?</p>



      <div>
        <div className='text-center'>
          <p className='font-bold text-5xl'>iOS 16</p>
          <p className='text-2xl sticky'>Personal is powerful.</p>
          <Button className='normal-case'>Learn more</Button>
        </div>
        <Image src="/iphone/ios16.jpeg" alt='photo' width={950} height={100} className='mx-auto -mt-16' />
      </div>
      <p className='text-center text-5xl mt-32 mb-20 font-bold'>Switching to iPhone <br />is super simple.</p>
      <div className='text-center'>
        <Button className='normal-case text-center -mt-20 sticky'>Learn more</Button>
        <Image src="/iphone/supersimple.svg" alt='photo' width={650} height={100} className='mx-auto' />
      </div>
      <p className='text-center text-5xl mt-32 mb-20 font-bold'>Get more out of your iPhone.</p>

      <Grid container justifyContent={'space-around'} margin={'auto'} width={800}>
        <Box>
          <Image src="/iphone/programs.svg" alt='photo' width={400} height={100} className='mx-auto' />
        </Box>
        <Box alignItems={'center'} justifyContent={'space-around'}>
          <div className='flex'>
            <Image src="/Store/appleblack.png" alt='photo' width={60} height={100} className='mx-auto text-gray-950 py-4 mt-1' />
            <p className='text-8xl font-semibold mr-2 mt-2'>One</p>
          </div>
          <div className='text-center'>
            <p className='font-bold text-lg text-center'>Bundle up to six Apple services. <br /> And enjoy more for less.</p>
            <Button className='normal-case'>Try it free8</Button>
            <Button className='normal-case'>Learn more</Button>
          </div>
        </Box>
      </Grid>
      <Grid container marginTop={15} gap={5} justifyContent={'center'}>
        <Box bgcolor={'black'} textAlign={'center'} height={570} paddingTop={5}>
          <div className=' flex justify-center'>
            <Image src="/iphone/applewhite.png" alt='photo' width={28} height={40} className='py-7' />
            <div className='flex mt-1.5'>
              <p className='text-white text-4xl mt-5'>tv</p>
              <FaPlus className='text-white text-xl mt-8' />
            </div>
          </div>
          <p className='text-white text-lg text-center -mt-5'>Get 3 months of Apple TV+ free <br />
            when you buy an iPhone.9</p>
          <Button className='normal-case text-blue-400'>Try it free</Button>
          <Button className='normal-case text-blue-400'>Learn more</Button>
          <div>
            <Image src="/iphone/appletv+.svg" alt='photo' width={600} height={40} />
          </div>
        </Box>
        <Box bgcolor={'white'} textAlign={'center'} height={570} paddingTop={5}>
          <div className=' flex justify-center'>
            <Image src="/iphone/appleblack.png" alt='photo' width={30} height={40} className='py-7 ml-8' />
            <div className='flex mt-2'>
              <p className=' text-4xl mt-5 '>Music</p>
              <FaPlus className='text-white text-4xl mt-4' />
            </div>
          </div>
          <p className='text-lg text-center -mt-5'>Over 100 million songs.
            <br />
            Start listening for free today.</p>
          <Button className='normal-case'>Try it free</Button>
          <Button className='normal-case'>Learn more</Button>
          <div className='mt-12'>
            <Image src="/iphone/applemusic.svg" alt='photo' width={600} height={40} />
          </div>
        </Box>
        <Box id="bg" textAlign={'center'} height={570} paddingTop={5}>
          <div className=' flex justify-center sticky'>
            <Image src="/iphone/applewhite.png" alt='photo' width={30} height={40} className='py-7 ml-8 mt-1' />
            <div className='flex mt-2'>
              <p className=' text-white text-5xl mt-4'>News</p>
              <FaPlus className='text-white text-3xl mt-7' />
            </div>
          </div>
          <p className='text-lg text-center -mt-5 sticky text-white'>Hundreds of magazines and<br />
            leading newspapers. One subscription.</p>
          <Button className='normal-case text-white'>Try it free</Button>
          <Button className='normal-case text-white'>Learn more</Button>
          <div className='-mt-52'>
            <Image src="/iphone/news+.jpeg" alt='photo' width={600} height={40} className='' />
          </div>
        </Box>
        <Box bgcolor={'white'} textAlign={'center'} height={570} paddingTop={5}>
          <div className=' flex justify-center'>
            <Image src="/iphone/appleblack.png" alt='photo' width={30} height={40} className='py-7 ml-3 sticky' />
            <div className='flex mt-2 sticky'>
              <p className=' text-4xl mt-5 '>Arcade</p>

            </div>
          </div>
          <p className='text-lg text-center -mt-5 sticky'>Get 3 months of Apple Arcade free <br /> when you buy an iPhone.</p>
          <Button className='normal-case'>Try it free</Button>
          <Button className='normal-case'>Learn more</Button>
          <div className='-mt-48'>
            <Image src="/iphone/arcade.jpeg" alt='photo' width={600} height={40} />
          </div>
        </Box>
        <Box bgcolor={'white'} textAlign={'center'} height={570} paddingTop={5}>
          <div className=' flex justify-center'>
            <Image src="/iphone/appleblack.png" alt='photo' width={30} height={40} className='py-7 ml-3 sticky' />
            <div className='flex mt-2 sticky'>
              <p className=' text-5xl mt-4 '>Fitness+</p>
              <FaPlus className='text-white text-3xl mt-7' />
            </div>
          </div>
          <p className='text-lg text-center -mt-5 sticky'>Fitness for everyone.<br /> Now all you need is iPhone. </p>
          <Button className='normal-case'>Learn more</Button>
          <Button className='normal-case'>Try it free</Button>
          <div className='mt-10'>
            <Image src="/iphone/fitness+.svg" alt='photo' width={600} height={40} />
          </div>
        </Box>
        <Box bgcolor={'white'} textAlign={'center'} height={570} paddingTop={5}>
          <div className=' flex justify-center'>
            <Image src="/iphone/appleblack.png" alt='photo' width={30} height={40} className='py-7 ml-3 sticky' />
            <div className='flex mt-2 sticky'>
              <p className=' text-5xl mt-4 '>Gift Card</p>

            </div>
          </div>
          <p className='text-lg text-center -mt-4 sticky my-5'>For everything and everyone. <br /></p>
          <Button className='normal-case'>Learn more</Button>
          <Button className='normal-case'>Buy</Button>
          <div className='mt-10'>
            <Image src="/iphone/giftcard.svg" alt='photo' width={600} height={40} />
          </div>
        </Box>
      </Grid>
      <Grid container justifyContent={'center'} marginTop={10} gap={10}>
        <Box textAlign={'center'} marginTop={6}>
          <p className='font-bold text-4xl'>Introducing <br />the Apple <br /> <br />Research app.
          </p>
          <p className='my-3'>The future of health research is you.</p>
          <Button className='normal-case'>Learn more</Button>
        </Box>
        <Box>
          <Image src="/iphone/introducing.svg" alt='photo' width={600} height={600} />
        </Box>
      </Grid>
      <div className='ml-28 mt-10'>
        <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
        <hr id='hr' />
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
        <div className='flex items-center'>
          <Image src="/store/applelogogray.svg" alt='photo' width={20} height={40} />
          <FaChevronRight className='text-gray-500 mx-5 mt-1' />
          <Link href="/iphone" className='my-0.5 text-gray-700'>iPhone</Link>
        </div>
        <div>
          <Image src="/store/applelogoblack.svg" alt='photo' width={20} height={40} />
        </div>
      </div>
    </div>
  )
}

export default Iphone