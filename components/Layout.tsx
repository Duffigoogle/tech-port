import {useState} from 'react'

const Layout = () => {
    const [toggleLay, setToggleLay] = useState(false);

    const toggleLayout = () => {
        setToggleLay(true);
    }
  return (
    <div className='grid grid-cols-12 gap-6 px-5 py-14 lg:px-48 sm:px-20 md:px-32 dark:bg-dark-200'>

    </div>
  )
}

export default Layout