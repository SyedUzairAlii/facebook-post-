import React, { Component } from "react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import ".././App.css";

class FbPost extends Component {
  constructor(props) {
    super();
    this.state = {
      pictures: [
        // "https://www.queenstownnz.co.nz/assets/Uploads/_resampled/CroppedFocusedImageWyIxMDI0IiwiNDg1IiwieSIsMzVd/Wakatipu-Basin-Aerial-View-2006-03-Cropped.jpg",
        // "http://www.spanishandsurf.net/wordpress/wp-content/uploads/Paisaje_25-520x265.jpg",
        // "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
        // "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
        // "https://www.queenstownnz.co.nz/assets/Uploads/_resampled/CroppedFocusedImageWyIxMDI0IiwiNDg1IiwieSIsMzVd/Wakatipu-Basin-Aerial-View-2006-03-Cropped.jpg",
        // "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
        // "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
        // "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
        // "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
        // "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg"
      ],
      name: "Muneeb Khan",
      hoverLike: false,
      like: "sm",
      love: "sm",
      wow: "sm",
      yay: "sm",
      angry: "sm",
      haha: "sm",
      sad: "sm",
      liked: false
    };
  }
  hoverOn() {
    const { reaction } = this.state;
    this.setState({ reaction: true });
  }
  hoverOut() {
    const { reaction } = this.state;
    this.setState({ reaction: false });
  }
  liked(){
    const { liked } = this.state;
    this.setState({liked: !liked,reaction: false})
  }
  
  render() {
    console.log(this.props);
    const {
      liked,
      reaction,
      like,
      love,
      wow,
      yay,
      angry,
      haha,
      sad
    } = this.state;
    const {
      pictures,
      name,
      status,
      likes,
      catagory,
      avatar,
    } = this.props;
    return (
      <div>
        {/* <div
          className="container contain"
          style={{
            borderTop: "1px solid rgb(230, 230, 230)",
            marginTop: "20px",
            backgroundColor: "white"
          }}
        >
          <div className="flex topBar border">
            <div className="flex-center avatar-flex">
              <img
                style={{ width: "40px", borderRadius: "50%" }}
                src={avatar}
              />
            </div>
            <div className="flex-center padding-left-5">
              <div style={{ marginLeft: "3px" }}>
                <h4 style={{ color: "#223480" }}>{name}</h4>
                <p>{catagory}</p>
              </div>
            </div>
          </div>
          <p
            style={{
              widht: "100%",
              maxHeight: "80px",
              overflow: "hidden",
              padding: "5px 10px 0px 5px",
              backgroundColor: "white",
              marginBottom: "5px"
            }}
          >
            {status}
          </p>
        </div> */}
        {/* <div style={{ backgroundColor: "white", width: "60px" }}>
          <FbImageLibrary images={pictures} />
        </div> */}
        <div className="container" style={{ backgroundColor: "white" }}>
          {/* <div style={{ widht: "600%", height: "30px" }}> */}
         
    <div>
        <FacebookEmoji type="like"size=""/>
        <FacebookEmoji type="love"/>
        <FacebookEmoji type="wow"/>
        <FacebookEmoji type="yay"/>
        <FacebookEmoji type="angry"/>
        <FacebookEmoji type="haha"/>
        <FacebookEmoji type="sad"/>
    </div>
            {/* <div className="likesOf">
             {!liked && <p>
                <FacebookEmoji type="like" size="xxs" />
                <FacebookEmoji type="love" size="xxs" />
                <FacebookEmoji type="wow" size="xxs" />
                {likes} likes
              </p>}
              {liked && <p>
                <FacebookEmoji type="like" size="xxs" />
                <FacebookEmoji type="love" size="xxs" />
                <FacebookEmoji type="wow" size="xxs" />
                You and {likes} other likes
              </p>}
            </div>
            <div className="reactionDiv" onMouseLeave={() => this.setState({ reaction: false })}>
            <div>
                {reaction && (
                  <div style={{ marginTop: "-50px" }}>
                    <span
                      onMouseEnter={() => this.setState({ like: "md" })}
                      onMouseLeave={() => this.setState({ like: "sm" })}
                    >
                      <FacebookEmoji
                        type="like"
                        size={like}
                        class="emojilike"
                      />
                    </span>
                    <span
                      onMouseEnter={() => this.setState({ love: "md" })}
                      onMouseLeave={() => this.setState({ love: "sm" })}
                    >
                    <FacebookEmoji type="love" size={love} /></span>
                    <span
                      onMouseEnter={() => this.setState({ wow: "md" })}
                      onMouseLeave={() => this.setState({ wow: "sm" })}
                    >
                    <FacebookEmoji type="wow" size={wow}/></span>
                    <span
                      onMouseEnter={() => this.setState({ yay: "md" })}
                      onMouseLeave={() => this.setState({ yay: "sm" })}
                    >
                    <FacebookEmoji type="yay" size={yay} /></span>
                    <span
                      onMouseEnter={() => this.setState({ angry: "md" })}
                      onMouseLeave={() => this.setState({ angry: "sm" })}
                    ><FacebookEmoji
                    type="angry"
                    size={angry}
                   
                  /></span>
                    <span
                      onMouseEnter={() => this.setState({ haha: "md" })}
                      onMouseLeave={() => this.setState({ haha: "sm" })}
                    >
                    <FacebookEmoji type="haha" size={haha} /></span>
                    <span
                      onMouseEnter={() => this.setState({ sad: "md" })}
                      onMouseLeave={() => this.setState({ sad: "sm" })}
                    >
                    <FacebookEmoji type="sad" size={sad} /></span>
                    
                  </div>
                )}
              </div>
            </div>
          

          
          </div> */}
        </div>
      </div>
    );
  }
}

export default FbPost;
