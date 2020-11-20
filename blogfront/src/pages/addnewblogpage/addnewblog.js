import React, {useState} from 'react';
import './addnewblog.css'
function Addblogpage(props) {
    const [state, setState] = useState({
        imageURL:'',
    title: '',
    mypost: '',
    mycategory: ''});

    const inputChange = (e) => {  
        setState({
            ...state,
            [e.target.name] : e.target.value
        },
        console.log(state))
        
    }

   async function submission (e) {
        e.preventDefault();
        console.log(state);
        try {
            const response = await fetch("http://localhost:5000/posts/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                imageUrl: state.imageURL,
                  title:state.title ,
                  description:state.mypost,
                  category: state.mycategory,
                  comments: ['nice', 'very good'],
                createdAt:new Date()
              }),
            });
      
            const responseData = await response.json();
      
            console.log(responseData);
      
             
            
      
            
          } catch (err) {
            console.log(err);
          }
        }

        return (
            <form className="formcontainer" onSubmit={submission}>
                <div className="inputcontainer">
                    <input className="inputfield" type="text" name="imageURL" placeholder="Add ImageURL" value={state.imageURL} onChange={inputChange}/>
                    <br/>
                    <input type="text" name="title" value={state.title} placeholder="Add title" onChange={inputChange}/>
                    <br/>
                    <input type="text" name="mypost" value={state.mypost} placeholder="Add post"onChange={inputChange}/>
                    <br/>
                    <select name="mycategory"  onChange={inputChange}>
                        <option value={"Technology"}>Technology</option>
                        <option value={"Education"}>Education</option>
                        <option value={"Economy"}>Economy</option>
                        <option value={"Entertainment"}>Economy</option>
                    </select>
                    <br/>
                    <button className="addnewblogbtn" >Add New Blog</button>
                </div>
            </form>
        );

    }
   


export default  Addblogpage;