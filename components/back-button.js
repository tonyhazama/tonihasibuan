import { ArrowLeftIcon, BackspaceIcon } from '@heroicons/react/outline'
import React from 'react';
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
      <div className="flex h-[24px] align-middle mb-8 ">
        <ArrowLeftIcon className="mr-4 cursor-pointer" />
        <div className="text-xl" style={{lineHeight: "24px" }}>Go Back</div>
      </div>
    </Link>
  )
}
