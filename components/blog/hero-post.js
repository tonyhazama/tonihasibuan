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
      <div className="flex flex-wrap md:flex-row-reverse">
        <div className=" w-full md:w-4/6">
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
            slug={slug}
            padding={5}
          />
        </div>
        <div className="w-full md:w-2/6 py-16 px-8 flex flex-col items-center justify-center bg-slate-100 dark:bg-sub-dark">
          <PostTitle>{title}</PostTitle>
          {/* <PostSubtitle>{subtitle}</PostSubtitle> */}
          <p className="text-center leading-relaxed mb-4">{excerpt}</p>
          <Date dateString={date} />
        </div>
      </div>
    </section>
  );
}
