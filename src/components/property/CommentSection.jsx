import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

const CommentSection = ({ comments, onAddComment, onDeleteComment }) => {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment({ text: newComment, author: user?.username || 'Anonymous' });
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-primary font-semibold mb-4">Comments</h3>
      {comments.map((comment, index) => (
        <div key={index} className="bg-lightGray p-4 rounded mb-2">
          <p className="text-primary">{comment.text}</p>
          <p className="text-accent text-sm">- {comment.author}</p>
          {user?.role === 'admin' && (
            <button
              onClick={() => onDeleteComment(index)}
              className="text-red-500 hover:text-red-700 mt-2"
            >
              Delete
            </button>
          )}
        </div>
      ))}
      {user && (
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border border-accent rounded p-2"
            rows="3"
          />
          <button
            type="submit"
            className="mt-2 bg-primary text-secondary px-4 py-2 rounded hover:bg-accent transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentSection;