import { useEffect, useState } from 'react'
import { getProgramInstance } from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { SOLANA_HOST } from '../utils/const'
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'


import HomePage from '../pages/homepage'

const anchor = require('@project-serum/anchor')

const { web3 } = anchor
const { SystemProgram } = web3
const utf8 = anchor.utils.bytes.utf8

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
}



export const Payment = () => {
  const wallet = useWallet()
  const connection = new anchor.web3.Connection(SOLANA_HOST)
  const program = getProgramInstance(connection, wallet)
  const [payers, setPayers] = useState([])
  const [isPaid, setPaid] = useState(false)

  useEffect(() => {
    if (wallet.connected) getAllWallets()
  }, [wallet.connected, isPaid])

  const getAllWallets = async () => {
    const payerList = await program.account.payerAccount.all()
    setPayers(payerList)
   // console.log("GET ALL WALLETS IS RUNNING")
    payerList.forEach(payer => {
      if (payer.account.wallet.toBase58() == wallet.publicKey.toBase58())
        setPaid(true)
    })
  }

  //console.log(isPaid)

  const payClicked = async () => {
    let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('payer'), wallet.publicKey.toBuffer()],
      program.programId,
    )

    let payerInfo

    try {
      payerInfo = await program.account.payerAccount.fetch(payerSigner)
    } catch (e) {
      try {
        await program.rpc.acceptPayment({
          accounts: {
            payerWallet: payerSigner,
            receiver: new PublicKey(
                  '6oMsaoVC3VB4f56hEziNJJbmbVrSurVrE126dHTPmQxT',
                  
            ),
            authority: wallet.publicKey,
            ...defaultAccounts,
          },
        })
        alert('Transaction successfull!!!')
      } catch (e) {
        alert(e.message)
      }
    }
  }

  /** show homepage if user makes payment */
  if (isPaid) return <HomePage />

  /** Payment Component */
  return (
    <div className={styles.main}>
      <p className={styles.text}>Proceed To Payment </p>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={payClicked}
          disabled={isPaid}
        >
          Pay 0.1 Sol
        </button>
        <button className={styles.button} onClick={getAllWallets}>
          Verify Payment
        </button>
      </div>
    </div>
  )
}


const styles = {
  main: `w-screen h-screen text-white flex flex-col justify-center items-center`,
  button: `bg-blue-500 m-3 text-white font-bold py-6 px-8 rounded-full hover:opacity-70 transition`,
  text: `text-5xl text-white mb-10`,
  buttons: `flex items-center`,
}
