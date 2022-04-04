import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import { ThemeProvider } from "next-themes"
import WalletModal from '../components/WalletModal'

function MyApp({ Component, pageProps }: AppProps) {

  const [connected, setConnected] = useState(false);
  
  const [toggleLay, setToggleLay] = useState(false);

    const toggleLayout: Function = () => {
        setToggleLay(!toggleLay);
        console.log("toggle Layout");
    }

    // let className = "h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black rounded-2xl lg:col-span-3";
  
    // if (toggleLay === true)
    //     className += " hidden"
        
  return (
    <ThemeProvider attribute="class">
      <div className='grid grid-cols-12 gap-6 px-5 py-14 lg:px-48 sm:px-20 md:px-32 dark:bg-dark-200'>
        {/* <WalletModal /> */}
        <div className={`${toggleLay ? ("h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black rounded-2xl lg:col-span-5") : ("h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black rounded-2xl lg:col-span-4")}`}>
          <Sidebar toggleLayout={toggleLayout} />
        </div>
        <>
        {connected ? 
          <div className={`col-span-12 bg-white rounded-2xl lg:col-span-8 dark:bg-dark ${toggleLay ? "hidden" : ""}`}>
            <Navbar />
            <Component {...pageProps} />
          </div>
          : 
            <h1>Stay connected</h1>
          }
        </>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
