import { div } from 'motion/react-client'
import React from 'react'
import { NavLink } from 'react-router'
import ButtonType2 from './ButtonType2'

function AllRightReserved() {
  return (
    <>
      <div className='flex justify-between items-center px-2 lg:px-10 mt-10 py-2 text-[12px] lg:text-[14px]'>
        <p>SAIDPIECE © 2023–2025</p>
        <NavLink to={'terms'} className={`hidden lg:flex`}>Terms of conditions and Privacy policy</NavLink>
        <NavLink to={'greenRoom'}>Website by greenroom Studio</NavLink>
      </div>
    </>
  )
}

function Footer() {

  return (
    <div className=''>
      <div className='flex justify-between flex-wrap px-2 lg:px-10 mt-10'>
        <div className=''>
          <p>E:</p>
          <p className='lg:mt-5'>thinley@saidpiece.com</p>
        </div>
        <div>
          <p>T:</p>
          <div className='lg:mt-5'>
            <p> <a href="tel:+975 17899794" className='underline underline-offset-4'>+975 17899794</a> (BHT) </p>
            <p> <a href="tel:+66 931205085" className='underline underline-offset-4'>+66 931205085</a> (TH) </p>
          </div>
        </div>
        <div>
          <p>S.L:</p>

          <div className='lg:mt-5 flex gap-3'>
            <NavLink to={''}>Instagram</NavLink>
            <NavLink to={''}>Facebook</NavLink>
            <NavLink to={''}>LinkedIn</NavLink>
          </div>
        </div>
        <div>
          <ButtonType2
          title={'Contact'}
          ></ButtonType2>
        </div>
      </div>
      <AllRightReserved/>
    </div>
  )
}

export default Footer