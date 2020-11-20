import React from "react";
import './homepagecomponent.css'
import NavbarComponent from '../navbar/navbarcomponent'
import Featuredblogcomponent from '../featuredblogcomponent/feturedblogcomponent'
import Categorycomponent from '../categorycomponent/categorycomponent'
let categoriesarray = [
  { url: "https://i.hurimg.com/i/hdn/75/0x0/5da425cc0f25441cf4279f1d.jpg", catname: 'Technology' },
  { url: "https://etimg.etb2bimg.com/photo/75729614.cms", catname: 'Education' },
  { url: "https://www.heritage.org/sites/default/files/styles/slide_cover_xl/public/images/2018-08/Economy.jpg?itok=BzAjL8xk", catname: 'economy' },
  { url: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/wxh__DHQ_/fetchdata16/images/32/bb/4b/32bb4b8968f3cf679b88b9c1b10b9a8af19cf5e30a8249cbc4f7a91aadf43bfd.jpg", catname: 'Entertainment' }
]

const HomepageComponent = () => {
 
  return (
    <div>
      <div className="featuredblog">
        {/* blogcomponent here */}
        <Featuredblogcomponent />
        
      </div>
      <div className="categoriesection">
        {categoriesarray.map((onecat) =>
          <Categorycomponent imgsrc={onecat.url } catname={ onecat.catname} />
        )
          
        }
        
      </div>
    </div>
  );
};
export default HomepageComponent;