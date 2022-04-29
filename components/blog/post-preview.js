import Avatar from "./avatar";
import Date from "../date";
import CoverImage from "./cover-image";
import Link from "next/link";
import PostTitle from "./post-title";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  index,
}) {
  return (
    <div className={"flex flex-wrap " + (index % 2 ? "bg-slate-100 dark:bg-slate-800" : " bg-slate-200 dark:bg-slate-900")}>
      <div className="w-full">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
        <div className="w-full px-8 py-16 flex flex-col justify-center items-center text-center">
          <Link href={`/blog/posts/${slug}`}>
            <a className="hover:underline"><PostTitle>{title}</PostTitle></a>
          </Link>
          <p className="leading-relaxed mb-4">{excerpt}</p>
          <div>
            <Date dateString={date} />
          </div>
        </div>
    </div>
  );
}
