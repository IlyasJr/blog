import { Comment } from "../Comment";
import { CommentList } from "../CommentList";
import "./styles.css";

export const Blog = () => {
  return (
    <div className="blog-container">
      <div className="header-blog">
        <div className="avatar">
          <img src="src/logo.svg" alt="this an avatar" />
        </div>
        <div className="infos">
          <div className="title">
            <h3> this is a title</h3>
          </div>
          <div className="description">
            <p> this is a description</p>
          </div>
        </div>
      </div>
      <div className="footer-blog">
        <button>Like</button>
        <button>Comment</button>
      </div>

      <Comment />
      <CommentList />
    </div>
  );
};
