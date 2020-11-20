import React,{useEffect,useState} from "react";
import './myblogspage.css'
import {Link} from 'react-router-dom'
import Blogcomponent from "../../Components/blogcomponent/blogcomponent";
const Myblogpage = () => {
  const [myposts, setMyposts] = useState({
   postarray:[]
  })
  let a = 2;
  useEffect(() => {
    fetch(`http://localhost:5000/posts/`)
      .then((response) => response.json())
      .then((posts) => {
        setMyposts({
          ...myposts,
        postarray:posts})
      })
     
      
  },[a])
 
  console.log(myposts.postarray)
  return (
    <div className="blogspagecontainer">
          <div className="blogaddnewblog">
              <Link path to= '/addnewblog'>
              <button className="addnewblogbtn">Add New Blog</button>
              </Link>
       
      </div>

      {myposts.postarray.map((onepost) =>
        <div>
        <Blogcomponent
          imgsrc={
           onepost.imageUrl
          }
            likescount={onepost.likeCount}
            dislikescount={onepost.dislikeCount}
            favoritecount={onepost.favoriteCount}
            comments={onepost.comments}
            createdAt ={onepost.createdAt}
          title={onepost.title}
          description={onepost.description}
        />
      </div>
      )
        
      }
    </div>
  );
};
export default Myblogpage;
