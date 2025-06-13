import Header from "../components/Part1/Header";
import PostPreview from "../components/Part1/PostReview";
import Footer from "../components/Part1/Footer";
import { posts } from "../assets/posts";

const BlogLayout = () => {
  return (
    <div>
      <Header title="Hiker's Journal" subtitle="Trek and Die" />

      <main className="p-4 space-y-4">
        {posts.map((post, index) => (
          <PostPreview key={index} {...post} />
        ))}
      </main>

      <Footer copyright=" 2025 HikeBud Gaurab" />
    </div>
  );
};

export default BlogLayout;
