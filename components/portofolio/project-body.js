import React from 'react';
import { Image, StructuredText } from 'react-datocms';
import BackButton from '../back-button';
import cn from "classnames";
import Date from '../date';

export default function ProjectBody({title, thumbnail, content, scopes = [], techStacks = []}) {
  return (
    <div className="text-gray-700">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5">
          <div className="text-lg mb-2 text-slate-400">Scope</div>
          <div  >
            {/* {JSON.stringify(scopes)} */}
            {scopes.map(scope => (
              <div>{scope.title}</div>
            ))}
          </div>
        </div>
        <div className="md:w-3/4 mb-8">
          <div className="text-lg mb-2 text-slate-400">Summary</div>
          <div className="prose text-gray-700 lg:prose-x max-w-none">
            <StructuredText
              data={content}
              renderBlock={({ record }) => {
                if (record.__typename === "ImageBlockRecord") {
                  return <Image data={record.image.responsiveImage} />;
                }

                return (
                  <>
                    <p>Don't know how to render a block!</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                );
              }}
            />
          </div>
          <div>
            {techStacks.map(techStack => (
              <div>{techStack.title}</div>
            ))}
            {JSON.stringify(techStacks)}
          </div>
        </div>
      </div>
      <div className="mb-16">
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
    </div>
  )
}
