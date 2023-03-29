import React from "react";
import { getPosts, getPostDetails } from "../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "../../components";
import { NextPage } from "next";
import { Post } from "../../types";

export type IPostDetailsProps = {
  post: Post;
};

const PostDetails: NextPage<IPostDetailsProps> = ({ post }) => {
  return (
    <h3 className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map(
                (category: { slug: string }) => category.slug
              )}
            />
            <Categories />
          </div>
        </div>
      </div>
    </h3>
  );
};

export default PostDetails;

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: { node: Post }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};
