import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className='grid grid-cols-12 gap-6 px-5 py-14 lg:px-48 sm:px-20 md:px-32 dark:bg-dark-200'>
        <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black rounded-2xl lg:col-span-3'>
          <Sidebar />
        </div>
        <div className='col-span-12 bg-white rounded-2xl lg:col-span-9 dark:bg-dark'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
