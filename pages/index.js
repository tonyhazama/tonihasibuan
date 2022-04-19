import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "@/components/layout";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import Landing from "@/components/portofolio/landing";
import Portofolio from "@/components/portofolio/portofolio";
import Contact from "@/components/portofolio/contact";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        profile {
          title
          description
          currentPosition
          profilePicture {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, h: 500 }) {
              ...responsiveImageFragment
            }
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        projects: allProjects {
          title
          subtitle
          id
          thumbnail {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, h: 280 }) {
              ...responsiveImageFragment
            }
          }
        }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Index({ subscription }) {
  const {
    data: { projects, site, blog, profile },
  } = useQuerySubscription(subscription);

  const metaTags = blog.seo.concat(site.favicon);

  return (
    <div className="dark:bg-main-dark text-main-dark">
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <div>
          <Landing {...profile} />
          <Portofolio 
            title="This is what i've worked on"
            subtitle="A curated list of professional work i did over the years."
            projects={projects} />
          <Contact /> 
            {/* <pre>{JSON.stringify(al Projects, '', 2)}</pre> */}
        </div>
      </Layout>
    </div>
  );
}
