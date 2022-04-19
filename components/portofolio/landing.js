import React from 'react'
import { Image } from 'react-datocms'
import Container from '../container'

export default function Landing({title, description, currentPosition, profilePicture}) {
  return (
    <div className="">
      <Container>
        <div className="pt-8 pb-16  md:py-16 flex border-b-2 border-stone-200 dark:border-sub-dark flex-col md:flex-row-reverse">
          <div className="w-full mb-8 md:mb-0 md:w-96 rounded-xl overflow-hidden">
            {profilePicture && 
              <Image data={{ ...profilePicture.responsiveImage, alt: `Profile Picture`, }} />
            }
          </div>
          <div className="flex-1 mr-16 flex flex-col justify-center">
            <div className="text-3xl font-bold md:mb-4">
              {title}
            </div>
            <div className="text-lg">
              {description} <br /> {currentPosition}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
