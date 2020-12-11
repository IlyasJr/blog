import { CommentItem } from "./CommentItem";


const list = [
    {name: "chfnaji", message: "This is comment"},
    {name: "chfnaji", message: "This is comment"},
    {name: "chfnaji", message: "This is comment"},
    {name: "chfnaji", message: "This is comment"},
]

export const CommentList = ({ listComments }) => {
  return (
    <div className="comments-container">
      {list &&
        list.map((comment, idx) => {
          return <CommentItem comment={comment} key={idx} />;
        })}
    </div>
  );
};
