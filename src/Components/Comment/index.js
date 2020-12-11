export const Comment = () => {
  return (
    <div className='comment-container'>
      <input type="textarea" placeholder="type yr comment" />
      <div className='comment-buttons'>
        <button> Submit</button>
        <button> Cancel</button>
      </div>
    </div>
  );
};
