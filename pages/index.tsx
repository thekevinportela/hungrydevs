import type { NextPage } from "next";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { FeatureBanner } from "../components/FeatureBanner";
import { getPosts } from "../services";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export type IHomeProps = {
  posts: [];
};

const Home: NextPage<IHomeProps> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Hungry Devs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:grid lg:grid-cols-12 flex flex-col gap-12">
        {/* <FeatureBanner /> */}
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
          <div className="cursor-pointer flex justify-center items-center gap-3  rounded-full p-4 text-center text-slate-600 text-xl font-medium flex-row">
            <Link href={"/posts?category=lifestyle"}>
              <span>See all posts</span>
            </Link>

            <AiOutlineArrowRight />
          </div>
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
};
export default Home;
