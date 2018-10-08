import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import FbPost from './screens/FbPost';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [
        {
         
        
          pictures:[
            "https://www.queenstownnz.co.nz/assets/Uploads/_resampled/CroppedFocusedImageWyIxMDI0IiwiNDg1IiwieSIsMzVd/Wakatipu-Basin-Aerial-View-2006-03-Cropped.jpg",
            "http://www.spanishandsurf.net/wordpress/wp-content/uploads/Paisaje_25-520x265.jpg",
            "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "https://www.queenstownnz.co.nz/assets/Uploads/_resampled/CroppedFocusedImageWyIxMDI0IiwiNDg1IiwieSIsMzVd/Wakatipu-Basin-Aerial-View-2006-03-Cropped.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg"
          ],
          name: "Nature",
          catagory: "Sponsored",
          avatar: "https://dnoracnbzh225.cloudfront.net/wp-content/uploads/2017/07/pierce-justin-profile.jpg",
          status: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged",
          likes: "1.5K",

        }
      ],
      
    }

  }
  render() {
    const {
      posts
    } = this.state;
    return (
      
      <div style={{backgroundColor: "lightgray"}}>
      <nav class="navbar navbar-light bg-light" style={{backgroundColor: "#223480",color: "white",fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>
  <span class="navbar-brand mb-0 h1">FACEBOOK POSTS</span>
</nav>
       {
        posts.map((value,index) => {
          return <FbPost pictures={value.pictures} status={value.status} name={value.name} likes={value.likes} catagory={value.catagory} avatar={value.avatar} />
        })
      }
      </div>
    );
  }
}

export default App;
