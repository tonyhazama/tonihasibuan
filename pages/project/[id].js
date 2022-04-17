import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "@/components/container";
import Layout from "@/components/layout";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import ProjectHeader from "@/components/portofolio/project-header";
import ProjectBody from "@/components/portofolio/project-body";

export async function getStaticPaths() {
  const data = await request({ query: `{ allProjects { id } }` });

  return {
    paths: data.allProjects.map((project) => `/project/${project.id}`),
    fallback: false,
  };
}


export async function getStaticProps({ params, preview }) {

  const projectId = parseInt(params.id);

  const graphqlRequest = {
    query: `
      query PostBySlug($id: ItemId) { 
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
          project(filter: {id: {eq: $id}})  {
            title
            subtitle
            id
            date
            scope {
              title
            }
            techStacks {
              title
            }
            thumbnail {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                ...responsiveImageFragment
              }
            }
            content {
              value
              blocks {
                __typename
                ...on ImageBlockRecord {
                  id
                  image {
                    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                      ...responsiveImageFragment
                    }
                  }
                }
              }
            }
          }
      }

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
    variables: {
      id: projectId,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
      } : {
        enabled: false,
        initialData: await request(graphqlRequest),
      }
    },
  };
}

export default function Post({ subscription }) {
  const {
    error,
    data: { site, project = {} },
  } = useQuerySubscription(subscription);
  

  const metaTags = site.favicon;

  return (
    <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <article className="pt-8">
          <ProjectHeader
            title={project.title}
            subtitle={project.subtitle}
            date={project.date}
          />
          <ProjectBody
            title={project.title}
            thumbnail={project.thumbnail}
            content={project.content}
            date={project.date}
            scopes={project.scope}
            techStacks={project.techStacks}
          />
          {/* <ProjectBody content={project.content} /> */}
        </article>
      </Container>
    </Layout>
  );
}
