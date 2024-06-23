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
            <Link href="/store">Store <br /></Link>
            <Link href="/">Mac <br /></Link>
            <Link href="/">iPad <br /></Link>
            <Link href="/iphone">iPhone <br /></Link>
            <Link href="/">Watch <br /></Link>
            <Link href="/">AirPods <br /></Link>
            <Link href="/tv">Tv & Home <br /></Link>
            <Link href="/">AirTag <br /></Link>
            <Link href="/accessories">Accessories <br /></Link>
            <Link href="/">Gift Cards <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>Services</p>
          <div className='leading-8'>
            <Link href="/">Apple Music <br /></Link>
            <Link href="/">Apple TV+ <br /></Link>
            <Link href="/">Apple Fitness+ <br /></Link>
            <Link href="/">Apple News+ <br /></Link>
            <Link href="/">Apple Arcade <br /></Link>
            <Link href="/">iCloud <br /></Link>
            <Link href="/">Apple One<br /></Link>
            <Link href="/">Apple Card <br /></Link>
            <Link href="/">Apple Books <br /></Link>
            <Link href="/">Apple Podcasts <br /></Link>
            <Link href="/">App Store <br /></Link>
            <Link href="/">Apple Podcasts <br /></Link>
            <p className='font-semibold mt-5 text-black'>Account</p>
            <Link href="/">Manage Your Apple ID <br /></Link>
            <Link href="/">Apple Store Account <br /></Link>
            <Link href="/">iCloud.com <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>Apple Store</p>
          <div className='leading-8'>
            <Link href="/">Find a Store <br /></Link>
            <Link href="/">Genius Bar <br /></Link>
            <Link href="/">Today at Apple <br /></Link>
            <Link href="/">Apple Camp <br /></Link>
            <Link href="/">Apple Store App <br /></Link>
            <Link href="/">Refurbished and Clearance <br /></Link>
            <Link href="/">Financing <br /></Link>
            <Link href="/">Apple Trade In <br /></Link>
            <Link href="/accessories">Order Status <br /></Link>
            <Link href="/">Shopping Help <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>For Business</p>
          <div className='leading-8'>
            <Link href="/">Apple and Business <br /></Link>
            <Link href="/">Shop for Business <br /></Link>
            <p className='font-semibold text-black mt-5'>For Education</p>
            <Link href="/">Apple and Education <br /></Link>
            <Link href="/">Shop for K-12 <br /></Link>
            <Link href="/">Shop for College <br /></Link>
            <p className='font-semibold text-black mt-5'>For Healthcare</p>
            <Link href="/">Apple in Healthcare <br /></Link>
            <Link href="/">Health on Apple Watch <br /></Link>
            <Link href="/">Health Records on iPhone <br /></Link>
            <p className='font-semibold text-black mt-5'>For Government</p>
            <Link href="/">Shop for Government <br /></Link>
            <Link href="/">Shop for Veterans and Military <br /></Link>
          </div>
        </div>
        <div className='m-10'>
          <p className='font-semibold text-black'>Apple Values</p>
          <div className='leading-8'>
            <Link href="/">Accessibility <br /></Link>
            <Link href="/">Education <br /></Link>
            <Link href="/">Environment <br /></Link>
            <Link href="/">Inclusion and Diversity <br /></Link>
            <Link href="/">Privacy <br /></Link>
            <Link href="/">Racial Equity and Justice <br /></Link>
            <Link href="/">Supplier Responsibility <br /></Link>
            <p className='font-semibold text-black mt-5'>About Apple</p>
            <Link href="/">Newsroom <br /></Link>
            <Link href="/">Apple Leadership <br /></Link>
            <Link href="/">Career Opportunities <br /></Link>
            <Link href="/">Investors <br /></Link>
            <Link href="/">Ethics & Compliance <br /></Link>
            <Link href="/">Events <br /></Link>
            <Link href="/">Contact Apple <br /></Link>
          </div>
        </div>
      </div>
      <div className='ml-20 mx-auto text-gray-500'>
        <p> More ways to shop: <Button className="normal-case">Find an Apple Store</Button>or<Button className='normal-case'>other retailer</Button> near you. Or call 1-800-MY-APPLE. </p>
        <hr id='hr' />
        <div className='flex'>
          <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
          <div className='flex ml-20 text-black'>
            <ul className='mr-5'>Privacy Policy</ul>
            <ul className='mr-5'>Terms of Use</ul>
            <ul className='mr-5'>Sales and Refunds</ul>
            <ul className='mr-5'>Legal</ul>
            <ul className='mr-5'>Site Map</ul>
          </div>
          <p className='ml-52 text-black'>United States</p>
        </div>
      </div>
    </div>
  )
}

export default Footer