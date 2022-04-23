import React from 'react';
import Link from "next/link";
import {RiArrowLeftLine} from 'react-icons/ri';

export default function BackButton() {
  return (
    <Link href="/">
      <div className="flex text-2xl items-center mb-8 ">
        <RiArrowLeftLine className="mr-4 cursor-pointer" />
        <div className="text-xl">Go Back</div>
      </div>
    </Link>
  )
}
