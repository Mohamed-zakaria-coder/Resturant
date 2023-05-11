import Navbar from "../../components/Navbar";
import TopicCard from "../../components/TopicCard";
import { getBlogPosts } from "../../helpers";

const Blogs = ({ posts }) => {
  const topics = [
    {
      title: "Why natural products?",
      description:
        "Chemical description have been used for long times, and this is a very bad thing.",
    },
    {
      title: "Why natural products?",
      description:
        "Chemical description have been used for long times, and this is a very bad thing.",
    },
    {
      title: "Why natural products?",
      description:
        "Chemical description have been used for long times, and this is a very bad thing.",
    },
  ];
  return (
    <>
      <Navbar />
      <div
        className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-20"
        id="posts"
      >
        <h1 className="text-4xl my-10 font-bold">Our Topics</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {posts ? (
            posts.map((post) => <TopicCard key={post._id} post={post} />)
          ) : (
            <p>No topics available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const posts = await getBlogPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
