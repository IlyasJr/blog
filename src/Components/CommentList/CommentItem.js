

export const CommentItem = ({ comment }) => {
  return (
    <div className= 'commentitem'>
      <img src="src/logo.svg" alt={comment.name} />
      <p> {comment.message} </p>
    </div>
  );
};
