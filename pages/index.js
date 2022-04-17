import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "@/components/layout";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import Landing from "@/components/portofolio/landing";
import Portofolio from "@/components/portofolio/portofolio";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        workProjects: allProjects(filter: {formal: {eq: true}}) {
          title
          subtitle
          id
          thumbnail {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, h: 280 }) {
              ...responsiveImageFragment
            }
          }
        }
        funProjects: allProjects(filter: {formal: {eq: false}}) {
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
    data: { workProjects, funProjects, site, blog },
  } = useQuerySubscription(subscription);

  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
        <Layout preview={subscription.preview}>
          <Head>{renderMetaTags(metaTags)}</Head>
          <div>
            <Landing />
            <Portofolio 
              title="This is what i've worked on"
              subtitle="A curated list of professional work i did over the years."
              projects={workProjects} />
            
            <Portofolio 
              title="This is what i make on my free time"
              subtitle="Fun Project, experiments and other interesting stuff."
              projects={funProjects} />
              {/* <pre>{JSON.stringify(al Projects, '', 2)}</pre> */}
          </div>
        </Layout>
    </>
  );
}
