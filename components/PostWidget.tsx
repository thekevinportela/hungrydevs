import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";
import Image from "next/image";
import { Post } from "../types";

export type IPostWidgetProps = {
  categories?: any;
  slug?: string;
};

const PostWidget: React.FC<IPostWidgetProps> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b-2 pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post: Post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 xl:w-28 flex-none rounded-lg justify-center items-center">
            <Image
              alt={post.title}
              height="100px"
              width="120px"
              className="align-middle rounded-lg object-cover self-center place-self-center justify-self-center"
              unoptimized
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { PostWidget };
