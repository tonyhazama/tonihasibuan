import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <div className="py-8 bg-white text-main-dark dark:bg-main-dark dark:text-main-white">
        <h2 className="text-2xl font-bold tracking-tighter leading-tight text-center">
          More Stories
        </h2>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-32">
        {posts.map((post, i) => (
          <PostPreview
            index={i}
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
