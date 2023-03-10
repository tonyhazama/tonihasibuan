import React from 'react'
import { Image } from 'react-datocms'
import Link from "next/link";
import Contacts from '../contacts'
import Container from '../container'

export default function About({title, description, currentPosition, profilePicture}) {
  return (
    <section id="about">
      <Container>
        <div className="pt-8 pb-16  md:py-16 flex border-b-2 border-stone-200 dark:border-sub-dark flex-col md:flex-row">
          <div className="w-full mb-8 md:mb-0 xl:w-72 lg:w-64 md:w-48">
            <div className="rounded-lg overflow-hidden">
            {profilePicture && 
              <Image data={{ ...profilePicture.responsiveImage, alt: `Profile Picture`, }} />
            }
            </div>
          </div>
          <div className="flex-1 md:ml-16 flex flex-col justify-center">
            <div className="text-3xl font-bold md:mb-4">
              HELLO, I AM <span className="transition-all text-sub-dark dark:text-teal-400">MUHAMMAD SULTONI</span>
            </div>
            <div className="text-lg mb-4">
            I am a Professional Software developer with 4+ years of experience.I am passionate about software development and dedicated to delivering high-quality solutions. I stay up-to-date with the latest technologies and continuously improve my skills to provide efficient, effective, and user-friendly solutions for clients.
            </div>
            <div className="text-lg mb-8">
              Currently working at PT. Quadra Karya Santosa
            </div>
            <h2 className="text-xl font-bold mb-4">Lets get in touch </h2>
            <Contacts />
            <Link href="/cv">
              <a className="mt-8 flex">
                <div className="px-8 py-2 border-sub-dark dark:border-main-white border-2 rounded-sm">Resume</div>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
