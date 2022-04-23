import React from 'react';
import { Image, StructuredText } from 'react-datocms';

export default function ProjectBody({project}) {
  const {title, thumbnail, content, scopes = [], techStacks = [], screenshots = [], links = []} = project; 
  return (
    <div className="text-gray-700 dark:text-mid-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 mb-8">
          <div className="text-lg mb-2 text-slate-400 dark:text-mid-dark">Scope</div>
          <div className="mb-8">
            {techStacks.map(techStack => (
              <div key={"techStack-"+techStack.title}>{techStack.title}</div>
            ))}
          </div>
          {/* <div className="text-lg mb-2 text-slate-400 dark:text-mid-dark">Links <LinkIcon className="h-4" /></div> */}
          <div>
            {links.map(link => (
              <a href={link.target} target="_blank">
                <div key={"scope-"+link.title}>{link.title}</div>
              </a>
            ))}
          </div>
        </div>
        <div className="md:w-3/4 mb-8">
          <div className="text-lg mb-2 text-slate-400 dark:text-mid-dark">Summary</div>
          <div className="prose text-gray-700 dark:text-mid-white lg:prose-x max-w-none mb-6">
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
          <div className="flex mb-4 flex-wrap">
            {scopes.map(scope => (
              <div key={"scope-" + scope.title} className="px-4 py-1 mr-4 mb-4 bg-gray-200 flex dark:bg-sub-dark dark:text-mid-white">
                # {scope.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-16 grid grid-cols-2 gap-8">
        {screenshots.map((screenshot, i) => {
          let isDouble = true;
          if (screenshots.length > 2) {
            isDouble = (i + 1) % 3 === 1 ? true : false;
          }
          return (
            <div key={"screenshot-"+screenshot.id} className={"shadow-sm col-span-2 " + (isDouble ? "md:col-span-2" : "md:col-span-1")}>
              <Image
                data={{
                  ...screenshot.responsiveImage,
                  alt: `Screenshot ${screenshot.id}`,
                }}
              />
            </div>
          )
        })}
      </div>
      {/* <pre>{JSON.stringify(project, "", 2)}</pre> */}
    </div>
  )
}
