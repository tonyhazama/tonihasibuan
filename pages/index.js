import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "@/components/layout";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import About from "@/components/profile/about";
import Portfolio from "@/components/profile/portfolio";
import Skills from "@/components/profile/skills";

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
          seo: _seoMetaTags {
            ...metaTagsFragment
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

  const metaTags = profile.seo.concat(site.favicon);

  return (
    <div className="dark:bg-main-dark text-main-dark">
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <div>
          <About {...profile} />
          {/* <Skills /> */}
          <Portfolio projects={projects} />
            {/* <pre>{JSON.stringify(al Projects, '', 2)}</pre> */}
        </div>
      </Layout>
    </div>
  );
}
