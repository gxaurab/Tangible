interface PostProps {
  title: string;
  author: string;
  date: string;
  snippet: string;
}

const PostPreview: React.FC<PostProps> = ({ title, author, date, snippet }) => {
  return (
    <div className="p-4 rounded-3xl border-l-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-amber-950">By {author} on {date}</p>
      <p className="mt-2">{snippet}</p>
    </div>
  );
};

export default PostPreview;
