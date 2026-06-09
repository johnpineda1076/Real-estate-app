import { blogPosts } from '../data/blogPosts';
import { BlogCard } from '../components/blog';

const Blog = () => {
  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
