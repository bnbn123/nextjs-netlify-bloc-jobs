import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
  baseurl?: string;
};
export default function PostItem({ post, baseurl = "/post" }: Props) {
  console.log(
    "🚀 ~ file: PostItem.tsx ~ line 11 ~ PostItem ~ baseurl",
    baseurl
  );
  return (
    <Link href={`${baseurl}/${post.slug}`}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
