/*import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import {Payment} from './Payment'

const styles={
    loginpage:'w-screen h-screen bg-white flex justify-center flex-col items-center',
    text:'text-5xl text-black mb-10',
    text1:'text-8xl text-black mb-10',
}


const Login=()=>{
    const wallet=useWallet()

    if(wallet.connected) return <Payment />

    return(
        <div className={styles.loginpage}>
            <p className={styles.text1}>DApp using SolFlare</p>  
            <p className={styles.text}>Connect To Access Music DApp!!!</p>    
            <WalletMultiButton/>  
        </div>
    )

}
export default Login
*/

import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import {Payment} from './Payment'

const styles={
    loginpage:'w-screen h-screen flex justify-center flex-col items-center',
    text:'text-5xl text-white mb-10',
    text1:'text-8xl text-white mb-10',
    main: `w-screen h-screen bg-white text-white flex flex-col justify-center items-center
    `,
    
}


const Login=()=>{
    const wallet=useWallet()

    if(wallet.connected) return <Payment />

    return(
        <div className={styles.loginpage}>
            <p className={styles.text1}>DApp Using SolFlare</p>  
            <p className={styles.text}>Connect To Access Music DApp!!!</p>    
            <WalletMultiButton/>  
        </div>
    )

}
export default Login  
