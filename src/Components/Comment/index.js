import './styles.css'

export const Comment = () => {
  return (
    <div className="comment-container">
      <div className="comment-input">
        <textarea placeholder="type yr comment" />
      </div>
      <div className="comment-buttons">
        <button> Submit</button>
        <button> Cancel</button>
      </div>
    </div>
  );
};
