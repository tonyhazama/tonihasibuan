import Avatar from "./avatar";
import Date from "../date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import PostSubtitle from "./post-subtitle";

export default function PostHeader({ title, subtitle, coverImage, date, author }) {
  return (
    <>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <PostTitle>{title}</PostTitle>
        <PostSubtitle>{subtitle}</PostSubtitle>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
