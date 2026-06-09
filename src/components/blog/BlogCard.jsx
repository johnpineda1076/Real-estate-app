import { Link } from 'react-router-dom';
import { Badge } from '../ui';

/**
 * Componente BlogCard con paleta Warm Neutral
 * @param {Object} props
 * @param {Object} props.post - Datos del post
 * @param {'default'|'featured'} props.variant - Variante de visualización
 */
const BlogCard = ({ post, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group block rounded-xl bg-white overflow-hidden shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300"
      >
        <div className="h-40 bg-gradient-to-br from-primary via-primary/80 to-accent/70 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
          <div className="absolute top-4 left-4">
            <Badge variant="accent" size="sm">
              {post.category || 'Blog'}
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>
          )}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <span className="font-medium text-accent group-hover:underline">
              Leer más
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block bg-white rounded-xl shadow-warm hover:shadow-warm-lg p-6 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {post.category && (
            <Badge variant="accent" size="sm" className="mb-3">
              {post.category}
            </Badge>
          )}
          <h2 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-muted text-sm mb-3 line-clamp-2">{post.excerpt}</p>
          )}
          <div className="flex items-center gap-2 text-sm text-muted">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
          </div>
        </div>
        <div className="w-10 h-10 bg-lightGray rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
          <svg className="w-5 h-5 text-muted group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
