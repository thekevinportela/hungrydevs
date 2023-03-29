import { useRouter } from "next/router";
import { PostCard } from "../components";
import { getPosts } from "../services";

const Posts = ({ posts: allPosts }) => {
  const router = useRouter();
  const { category } = router.query;

  let posts = allPosts;

  console.log("posts", posts, category);

  if (category) {
    posts = allPosts.filter((p) =>
      p.node.categories.find((c) => c.slug === category)
    );
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="flex justify-center">
        <div className="max-w-4xl">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
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

export default Posts;
