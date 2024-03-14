'use client'
import { useState } from 'react'
import Link from 'next/link'

export const ArrowButton = ({ text, link }: { text: string; link: string }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Link href={link} target={link?.startsWith('http') ? '_blank' : '_self'}>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className='flex items-center justify-center gap-2 bg-newGreen hover:bg-lightGreen text-black text-xl md:text-2xl font-semibold px-7 md:px-14 py-3 md:py-5 rounded-xl w-full'
      >
        {text}
        <div
          className={
            isHover
              ? 'rotate-45 ease-in-out duration-200'
              : 'ease-in-out duration-200'
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
          >
            <path
              d='M1.42931 16.8421C0.816805 17.4506 0.816802 18.4373 1.4293 19.0458C2.0418 19.6544 3.03485 19.6544 3.64735 19.0458L1.42931 16.8421ZM20.0768 2.0772C20.0768 1.2166 19.3746 0.518932 18.5084 0.51893L4.39277 0.518882C3.52657 0.518878 2.82437 1.21654 2.82436 2.07715C2.82436 2.93775 3.52655 3.63542 4.39276 3.63542L16.94 3.63546L16.9399 16.1016C16.9399 16.9622 17.6421 17.6599 18.5083 17.6599C19.3745 17.6599 20.0767 16.9622 20.0767 16.1016L20.0768 2.0772ZM3.64735 19.0458L19.6174 3.17907L17.3994 0.975332L1.42931 16.8421L3.64735 19.0458Z'
              fill='#171717'
            />
          </svg>
        </div>
      </button>
    </Link>
  )
}
