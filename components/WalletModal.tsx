import React, {useRef} from 'react'
import Icons from './Icons'
import Image from 'next/image';
import WalletItems from './WalletItems';
import { wallets } from '../data';

const WalletModal = ({closeModal}) => {
  const ref= useRef<HTMLDivElement | null >(null);

  const connectMetamask = () => {
    
  }
  
  const connectWalletConnect = () => {
    
  }
  
  const connectCoinbase = () => {
    
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-transparent">
    <div className="px-3 bg-black border-1 rounded-xl" ref={ref}>
     <div className="relative cursor-pointer left-80"
     onClick={closeModal}>
        <Icons name="close-modal" size={48} />
     </div>
     <div className="mb-4">
          <p className="text-xl text-white">Select Wallet</p>
          <p className="text-xs italic text-white">
            * Please select a wallet to access the portfolio:
          </p>
        </div>
      <div className='box-border order-2 px-3 py-3 bg-white border-double border-sky-500 rounded-xl'>
        {/* <div className="mb-4">
          <p className="text-xl">Select Wallet</p>
          <p className="text-xs italic">
            Please select a wallet to access the portfolio:
          </p>
        </div> */}
        {
                wallets.map(wallet => <WalletItems wallets={wallet} key={wallet.name} />)
        }
       
        
      </div>
      <div className="mb-4 mt-7">
        <p className="pl-3 text-xs text-left text-white">
          New to Ethereum network?
        </p>
          <a href='https://www.google.com'>
            <div className="flex items-center pl-3">
              <p className="text-xs italic text-white">
                Learn more about Crypto Wallet &nbsp;
              </p>
              <Icons name="outlink" size={23} color="#fff" />
            </div>
          </a>
      </div>
    </div>
  </div>
  )
}

export default WalletModal