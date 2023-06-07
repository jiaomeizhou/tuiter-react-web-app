import React, {useState} from "react";
import {FaRegComment} from "react-icons/fa";
import {AiFillHeart, AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai";
import {FiShare} from "react-icons/fi";


const TuitStats = ({
                       tuit = {
                           "_id": 123,
                           "topic": "Space",
                           "userName": "SpaceX",
                           "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
                           "time": "2h",
                           "image": "spacex.png",
                           "liked": true,
                           "replies": 123,
                           "retuits": 432,
                           "likes": 12345,
                           "handle": "@spacex",
                           "tuit": "This morning at 12:34 EST Earth time, a convey of Tesla CyberTrucks drove across the Martian landscape after picking up thr Curiosity, Sojourner, Spirit, and Perserance on their 6' beds "
                       }
                   }) => {
    const [likes, setLikes] = useState(tuit.likes);
    const [isLiked, setLiked] = useState(tuit.liked);

    const likeTuitHandler = () => {
        setLiked(!isLiked);
        setLikes(isLiked === true ? likes - 1 : likes + 1);
    };

    return (
        <div className="row">
            <div className="col-3"><FaRegComment/><span> {tuit.replies}</span></div>
            <div className="col-3"><AiOutlineRetweet/><span> {tuit.retuits}</span></div>
            <div className="col-3" onClick={() => likeTuitHandler(tuit)}>
                {isLiked ? <AiFillHeart color={"red"}/> : <AiOutlineHeart/>}
                <span>{likes}</span>
            </div>
            <div className="col-3"><FiShare/></div>
        </div>
    )
        ;
};
export default TuitStats;