import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <div className='flex justify-center text-gray-500'>
        <div className='m-10'>
          <p className='font-semibold text-black'>Shop and Learn</p>
          <div className='leading-8'>
            <Link href="/store" className='hover:text-blue-500'>Store <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Mac <br /></Link>
            <Link href="/"className='hover:text-blue-500'>iPad <br /></Link>
            <Link href="/iphone"className='hover:text-blue-500'>iPhone <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Watch <br /></Link>
            <Link href="/"className='hover:text-blue-500'>AirPods <br /></Link>
            <Link href="/tv"className='hover:text-blue-500'>Tv & Home <br /></Link>
            <Link href="/"className='hover:text-blue-500'>AirTag <br /></Link>
            <Link href="/accessories"className='hover:text-blue-500'>Accessories <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Gift Cards <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>Services</p>
          <div className='leading-8'>
            <Link href="/"className='hover:text-blue-500'>Apple Music <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple TV+ <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Fitness+ <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple News+ <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Arcade <br /></Link>
            <Link href="/"className='hover:text-blue-500'>iCloud <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple One<br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Card <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Books <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Podcasts <br /></Link>
            <Link href="/"className='hover:text-blue-500'>App Store <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Podcasts <br /></Link>
            <p className='font-semibold mt-5 text-black'>Account</p>
            <Link href="/"className='hover:text-blue-500'>Manage Your Apple ID <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Store Account <br /></Link>
            <Link href="/"className='hover:text-blue-500'>iCloud.com <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>Apple Store</p>
          <div className='leading-8'>
            <Link href="/"className='hover:text-blue-500'>Find a Store <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Genius Bar <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Today at Apple <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Camp <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Store App <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Refurbished and Clearance <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Financing <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Trade In <br /></Link>
            <Link href="/accessories"className='hover:text-blue-500'>Order Status <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Shopping Help <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>For Business</p>
          <div className='leading-8'>
            <Link href="/"className='hover:text-blue-500'>Apple and Business <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Shop for Business <br /></Link>
            <p className='font-semibold text-black mt-5'>For Education</p>
            <Link href="/"className='hover:text-blue-500'>Apple and Education <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Shop for K-12 <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Shop for College <br /></Link>
            <p className='font-semibold text-black mt-5'>For Healthcare</p>
            <Link href="/"className='hover:text-blue-500'>Apple in Healthcare <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Health on Apple Watch <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Health Records on iPhone <br /></Link>
            <p className='font-semibold text-black mt-5'>For Government</p>
            <Link href="/"className='hover:text-blue-500'>Shop for Government <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Shop for Veterans and Military <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>Apple Values</p>
          <div className='leading-8'>
            <Link href="/"className='hover:text-blue-500'>Accessibility <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Education <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Environment <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Inclusion and Diversity <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Privacy <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Racial Equity and Justice <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Supplier Responsibility <br /></Link>
            <p className='font-semibold text-black mt-5'>About Apple</p>
            <Link href="/"className='hover:text-blue-500'>Newsroom <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Apple Leadership <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Career Opportunities <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Investors <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Ethics & Compliance <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Events <br /></Link>
            <Link href="/"className='hover:text-blue-500'>Contact Apple <br /></Link>
          </div>
        </div>
      </div>
      <div className='ml-20 mx-auto text-gray-500'>
        <p> More ways to shop: <Button className="normal-case">Find an Apple Store</Button>or<Button className='normal-case'>other retailer</Button> near you. Or call 1-800-MY-APPLE. </p>
        <hr id='hr' />
        <div className='flex'>
          <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
          <div className='flex ml-20 text-black'>
            <ul className='mr-5 hover:text-blue-500 cursor-pointer'>Privacy Policy</ul>
            <ul className='mr-5 hover:text-blue-500 cursor-pointer'>Terms of Use</ul>
            <ul className='mr-5 hover:text-blue-500 cursor-pointer'>Sales and Refunds</ul>
            <ul className='mr-5 hover:text-blue-500 cursor-pointer'>Legal</ul>
            <ul className='mr-5 hover:text-blue-500 cursor-pointer'>Site Map</ul>
          </div>
          <p className='ml-52 text-black hover:text-blue-500 cursor-pointer'>United States</p>
        </div>
      </div>
    </div>
  )
}

export default Footer