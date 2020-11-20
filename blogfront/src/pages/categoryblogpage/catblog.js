import React,{useEffect,useState} from "react";
import './catblog.css'
 
import Blogcomponent from "../../Components/blogcomponent/blogcomponent";
const Catblogpage = (props) => {
    console.log(props)
  const [myposts, setMyposts] = useState({
   postarray:[]
  })
  let a = 2;
  useEffect(() => {
    fetch(`http://localhost:5000/posts/category${props.location.pathname}`)
      .then((response) => response.json())
      .then((posts) => {
        setMyposts({
          ...myposts,
        postarray:posts.categoryposts})
      })
     
      
  },[a])
 
  console.log(myposts.postarray)
  return (
    <div className="blogspagecontainer">
          

      {myposts.postarray.map((onepost) =>
        <div>
        <Blogcomponent
          imgsrc={
           onepost.imageUrl
          }
                  category={onepost.category}
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
export default Catblogpage;
