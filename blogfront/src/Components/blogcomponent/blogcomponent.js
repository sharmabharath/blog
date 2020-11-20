import React, { useState } from "react";
import "./blogcomponent.css";
let CommentsArray = [{mycomment:'nicepost bro!!'},{mycomment:'bad one seriously'}];
const Blogcomponent = (props) => {
  const [blogstate, setBlogState] = useState({
    likescount: props.likescount || 0,
    dislikecount: props.dislikescount || 0,
    favoritecount: props.favoritecount || 0,
    comments: "",
  });
  const incrementLikes = () => {
    setBlogState({
      ...blogstate,
      likescount: blogstate.likescount + 1,
    });
  };
  const incrementDisLikes = () => {
    setBlogState({
      ...blogstate,
      dislikecount: blogstate.dislikecount + 1,
    });
  };
  const saveblog = () => {
    setBlogState({
      ...blogstate,
      favoritecount:  blogstate.favoritecount+1,
    });
  };
console.log(props)
  return (
    <div className="bodyblog">

   
    <div className="blogcontainer">
      <div className="blogimagecontainer">
        <img style={{ height: "100%", width: "100%" }} src={props.imgsrc}></img>
        </div>
        <div>
          <button className="categorybutton">{props.category}</button>
        </div>
      <div style={{margin:'1rem'}}>
        <strong> Created at { props.createdAt}</strong>
      </div>
      <div className="headerblog">
        <h1>{props.title}</h1>
      </div>
      <div className="blogdescription">
        <h2>{props.description}</h2>
      </div>
      <div className="likescontainer">
        <div>
          <button className="likebutton" onClick={incrementLikes}>like {blogstate.likescount}</button>
        </div>
        <div>
          <button className="dislikebutton"  onClick={incrementDisLikes}>
            dislike {blogstate.dislikecount}
          </button>
        </div>
        <div>
          <button className="favbutton"  onClick={saveblog}>favorite {blogstate.favoritecount}</button>
        </div>
      </div>

          <div className="commentscontainer">
              <div >
              {
            
                      CommentsArray.map((onecomment) =>
                        <div className="oldcomments">
                          {props.comments.map((onecomment) =>
                              <h4>{onecomment}</h4>
                          )
                             
                          }
            
             </div>)
            
         }
              </div>
        

        <input
          className="commentbox"
          type="text"
          name="comments"
          value={blogstate.comments}
          placeholder="Add New Comment"
        ></input>
      </div>
      </div>
    </div>
  );
};
export default Blogcomponent;
