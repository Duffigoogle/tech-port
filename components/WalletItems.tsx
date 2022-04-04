import React from 'react'
import Icons from './Icons'
import { IWallet } from '../type';
import { FunctionComponent } from 'react';


const WalletItems:FunctionComponent <{wallets:IWallet}> = ({wallets:{onClick, wallet, size, name, }}) => {

    
  return (
    <div
    onClick={onClick}
    className='flex items-center w-full h-12 px-4 mb-2 border cursor-pointer bg-yellow-50 hover:bg-yellow-100'
  >
      {/* <Image src={coinbase} alt="coinbase" width="40px" height="40px"/> */}
    <Icons name={name} size={size} />
    <p className="ml-3 text-2xl">{wallet}</p>
  </div>
  )
}

export default WalletItems