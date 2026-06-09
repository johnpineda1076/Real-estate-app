import { useParams, Link } from 'react-router-dom';
import { getBlogPostById, getRecentPosts } from '../data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const post = getBlogPostById(id);
  const recentPosts = getRecentPosts(3).filter(p => p.id !== parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-lightGray py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Artículo no encontrado</h1>
            <p className="text-accent mb-6">El artículo que buscas no existe.</p>
            <Link
              to="/blog"
              className="bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 inline-block"
            >
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lightGray py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-accent">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-primary">{post.title}</span>
          </div>
        </nav>

        {/* Article */}
        <article className="bg-secondary rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="h-48 bg-gradient-to-r from-primary/90 to-accent/60 relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%)]" />
            <div className="absolute bottom-6 left-6">
              <span className="inline-flex items-center rounded-full bg-secondary/90 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-accent mb-6 pb-6 border-b border-accent/20">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {post.date}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
            </div>

            {/* Excerpt */}
            <p className="text-lg text-accent mb-6 font-medium">{post.excerpt}</p>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none text-primary
                prose-headings:text-primary prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-p:text-accent prose-p:leading-relaxed prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-accent/20">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-lightGray px-3 py-1 text-sm text-accent"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Otros artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group block rounded-xl border border-accent/20 bg-secondary overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-24 bg-gradient-to-r from-primary/80 to-accent/50 relative">
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center rounded-full bg-secondary/90 px-2 py-0.5 text-xs font-medium text-primary">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-accent mt-1">{relatedPost.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-accent transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
