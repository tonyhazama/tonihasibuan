import React from 'react';
import CoverImage from '../blog/cover-image';
import Link from "next/link";
import cn from "classnames";
import { Image } from 'react-datocms';

export default function PortfolioItem({project: {title = "Title", subtitle = "Subtitle", thumbnail, id}}) {
  return (
    <Link href={`/project/${id}`}>
      <div className="cursor-pointer">
        <div className="bg-black mb-2 overflow-hidden">
          <Image
            data={{
              ...thumbnail.responsiveImage,
              alt: `Cover Image for ${title}`,
            }}
            className={cn("shadow-small", {
              "hover:shadow-medium transition-shadow duration-200": title,
            })}
          />
        </div>
        <div className="text-lg font-bold">
          {title}
        </div>
        <div>
          {subtitle}
        </div>
      </div>
    </Link>
  )
}
