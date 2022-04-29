import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "@/components/container";
import HeroPost from "@/components/blog/hero-post";
import Layout from "@/components/layout";
import MoreStories from "@/components/blog/more-stories";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import SectionSeparator from "@/components/section-separator";

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
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 720 }) {
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
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  const heroPost = allPosts[allPosts.length - 1];
  const morePosts = allPosts.slice(0, -1);
  const metaTags = blog.seo.concat(site.favicon);

  return (
    <>
      <Layout>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container noPadding={true}>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              subtitle={heroPost.subtitle}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
