import Button from "../Button/Button";
import { useState } from "react";
import "./styles.css";

function Feedback () {
const [likeCount, setLikeCount] = useState(0);
const [dislikeCount, setDislikeCount] = useState(0);

const like = () => {setLikeCount(likeCount + 1)};
const disLike = () => {setDislikeCount(dislikeCount + 1)};
const Reset = () => {setLikeCount(0); setDislikeCount(0)};

    return(
<div className="feedback_wrapper">
  <h1 className= "header">You can leave your ratings here </h1>
  <div className="emoji">👇🏻</div>
  <div className="button_row">
       <Button name=" 👍🏻 like" onClick={like} /> {likeCount}
        <Button name="👎🏻 dislike" onClick={disLike} /> {dislikeCount}
      </div>
       <div className="button_control">
        <Button name="reset" onClick={Reset} />  
      </div>
      </div>
        );
}
export default Feedback;