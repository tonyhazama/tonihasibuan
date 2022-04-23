import React from 'react';
import BackButton from './back-button';
import Date from '../date';

export default function ProjectHeader({title, subtitle, date}) {
  return (
    <div className="mb-8">
      <BackButton />
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none flex justify-between">
          {title}
          <span className="text-mid-white dark:text-sub-dark">
            {`—   `}<Date dateString={date} />
          </span>
        </h2>
        <h5 className="text-gray-700 dark:text-sub-white">{subtitle}</h5>
        {/* <h5><Date dateString={date} /></h5> */}
      </div>
    </div>
  )
}
