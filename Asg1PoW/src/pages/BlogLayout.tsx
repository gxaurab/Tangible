import Header from "../components/Header";
import PostPreview from "../components/PostReview";
import Footer from "../components/Footer";
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

      <Footer copyright="Copyrights reserved 2025 HikeBud Gaurab" />
    </div>
  );
};

export default BlogLayout;
