
import Image from 'next/image'
import UploadButton from './UploadButton'
import { useContext } from 'react'
import { SpotifyContext } from '../context/context'

const styles = {
  arrowButton: `bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  headerRight: `flex`,
  profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  iconContainer: `ml-10`,
  title: `text-6xl font-extrabold`,
  header: `max-w-7xl m-auto p-3`,
  headerWrapper: `flex items-center justify-between`,
  playlistTextContent: `flex items-end mt-10`,
  profileAvatarContainer: `w-7 h-7 rounded-full -ml-2 mr-3 flex items-center`,
  controlsContainer: `flex items-center mt-10`,
  playButton: `bg-green-500 w-16 h-16 flex pl-2 items-center justify-center rounded-full cursor-pointer`,
}

const Header = ({ setShowUploadMusic }) => {
   const { currentSong } = useContext(SpotifyContext)
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className='flex items-center'>
          <div className={styles.arrowButton}>
            <img alt='' src='assets/chevronLeft.svg' width={20} height={20} />
          </div>
          <div className={styles.arrowButton}>
            <img alt='' src='assets/chevronRight.svg' width={20} height={20} />
          </div>
        </div>

        <div className={styles.headerRight}>
          <UploadButton setShowUploadMusic={setShowUploadMusic} />

          <div className={styles.profile}>
            <div className={styles.profileAvatarContainer}>
              <img alt='' src='assets/avatar.jpg' className='rounded-full' />
            </div>
            <p>DApp</p>
          </div>
        </div>
      </div>

      <div className={styles.playlistTextContent}>
        <Image
          alt=''
         // src='https://gstatic.com/webp/gallery/4.webp'
        // src='https://www.mirchi9.com/wp-content/uploads/2021/11/RRR-Naatu-Naatu-Song-1.jpg'
       // src='https://www.pexels.com/photo/close-up-photo-of-pink-petaled-flowers-600114/'
       //src='https://miro.medium.com/v2/resize:fit:1200/1*EyOu4rRou-wVC9Pjqm0aGQ.jpeg'
       src='https://miro.medium.com/v2/resize:fit:1200/1*Dt-Aop0-ra8wYfZ1fW-bug.jpeg'
          width={220}
          height={220}
        />

        <div className='ml-5'>
          <>DApp Album</>
          <div className={styles.title}></div>
          <div className='flex items-center mt-5'>
            <div className={styles.profileAvatarContainer}>
              <Image src="/assets/avatar.jpg" 
                 width={20}
                 height={20}
                 alt='artist'
              className='rounded-full' />
            </div>
            <p>
              <span className='text-bold'>DApp Album Songs</span> </p>
          </div>
        </div>
      </div>

      <div className={styles.controlsContainer}>
        
      </div>
    </div>
  )
}

export default Header