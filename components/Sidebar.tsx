import React from 'react'
import Image from 'next/image'
import pics from "./../public/developer.jpg"
import {AiFillYoutube, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import {GiTie} from "react-icons/gi"
import {GoLocation} from "react-icons/go"
import Icons from './Icons'
import {useTheme} from "next-themes"
import { useState } from 'react';
import WalletModal from './WalletModal'

const Sidebar = ({toggleLayout}) => {

    const [login, setLogin] = useState(false);
    
    const [showModal, setShowModal] = useState(false);

    const [connecting, setConnecting] = useState(false);
    
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleWalletModal = () => {
        setShowModal(!showModal);
        setConnecting(!connecting);
    }

    const closeModal = () => {
        setShowModal(!showModal);
        setConnecting(!connecting);
        console.log("close-Modal!");
    }
    
  return (
    <div>
        <Image src={pics} alt="dev_pics" width="200px"
        height="200px"
        className='rounded-full'
        />
        <h3 className='my-4 text-3xl font-medium tracking-wider'>
            <span className='text-love-green'>Duff</span>{" "}
            Caleb
        </h3>
        <p className='py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'> Software Engineer</p>
        
        <a href='' download="FSE_Duff_Caleb" className='flex items-center justify-center py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
            <Icons name='DownloadIcon' size={20}  color="gray"/> &nbsp; Download Resume
        </a>
        { login ? (
        <div>
           <div className='flex justify-around w-9/12 mx-auto my-6 md:w-full'>
               <a href="#">
                    <Icons name="twitter" size={20}/>
               </a>
               <a href="#">
                    <Icons name="padlock" size={20} className="cursor-pointer"/>
               </a>
               <a href="#">
                    <Icons name="alert" size={20}/>
               </a>
            </div>
            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200'>
                <div className='flex items-center justify-center'>
                    <Icons name="outlink" size={25} color="black" />
                    &nbsp; <span>LOS, NG.</span>
                </div>
               <p className='py-2'>Dev@gmail.com</p>
               <p className='py-2'>+23488688291</p>
            </div> 
    
            <button className='w-9/12 px-5 py-2 my-2 rounded-full bg-orange font-courgette'
            onClick={() => window.open("mailto: duffdev001@gmail.com")}>
                Email Me
            </button>
            <button className='w-9/12 px-5 py-2 my-2 text-white rounded-full bg-orange font-courgette focus:outline-none'
            onClick={toggleTheme}>
                Toggle Theme
            </button>
            <button className='w-9/12 px-5 py-2 my-2 text-white rounded-full bg-orange font-courgette'
            onClick={toggleLayout}>
                Toggle Layout
            </button>
        </div>
        ) : (
            <button className='w-9/12 px-5 py-2 my-2 text-white rounded-full bg-orange font-courgette focus:outline-none'
            onClick={toggleWalletModal}>
               { connecting ? "Connecting..." : "Connect Wallet"}
            </button>
        )
        }
        <>
            {
             showModal && <WalletModal closeModal={closeModal} />
            }
        </>
    </div>
  )
}

export default Sidebar