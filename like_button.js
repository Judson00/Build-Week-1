"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  likeClick() {
    this.setState(prevState => {
      alert("thank you fot the like");
      return { liked: !prevState.liked };
    });
  }

  render() {
    return e("span", { onClick: () => this.likeClick() }, " ❤️ ");
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
