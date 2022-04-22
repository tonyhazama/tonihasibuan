import React from 'react'
import { Image } from 'react-datocms'
import Contacts from '../contacts'
import Container from '../container'

export default function About({title, description, currentPosition, profilePicture}) {
  return (
    <div id="about">
      <Container>
        <div className="pt-8 pb-16  md:py-16 flex border-b-2 border-stone-200 dark:border-sub-dark flex-col md:flex-row-reverse">
          <div className="w-full mb-8 md:mb-0 md:w-96 rounded-xl overflow-hidden">
            {profilePicture && 
              <Image data={{ ...profilePicture.responsiveImage, alt: `Profile Picture`, }} />
            }
          </div>
          <div className="flex-1 mr-16 flex flex-col justify-center">
            <div className="text-3xl font-bold md:mb-4">
              HELLO, I AM <span className="transition-all text-sub-dark dark:text-teal-400">MUHAMMAD SULTONI</span>
            </div>
            <div className="text-lg mb-4">
              I'm a Professional Web Developer with a demonstrated history of working in the IT Industries. Skilled in Javascript, Java, Adobe Illustrator, Adobe Photoshop, and Microsoft Office. Strong artistic sense, logical thinking & problem solving skills.

            </div>
            <div className="text-lg mb-8">
              Currently working at PT. Padepokan Tujuh Sembilan
            </div>
            <h2 className="text-xl font-bold mb-4">Lets get in touch ?</h2>
            <Contacts />
          </div>
        </div>
      </Container>
    </div>
  )
}
