import Date from "../date";
import CoverImage from "./cover-image";
import PostSubtitle from "./post-subtitle";
import PostTitle from "./post-title";

export default function HeroPost({
  title,
  subtitle,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-4 md:mb-8">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
          padding={5}
        />
      </div>
      <div>
        <PostTitle>{title}</PostTitle>
        <PostSubtitle>{subtitle}</PostSubtitle>
      </div>
      <div className="mb-12">
        <div>
          <div className="mb-2 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
      </div>
    </section>
  );
}
