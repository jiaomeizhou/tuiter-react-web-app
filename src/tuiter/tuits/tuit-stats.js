import React, {useState} from "react";
import {FaHeart, FaRegComment} from "react-icons/fa";
import {AiFillHeart, AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai";
import {FiShare} from "react-icons/fi";
import {updateTuitThunk} from "../services/tuits-thunks";
import {useDispatch} from "react-redux";
import {LuThumbsDown} from "react-icons/lu";


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
                           "dislikes": 0,
                           "handle": "@spacex",
                           "tuit": "This morning at 12:34 EST Earth time, a convey of Tesla CyberTrucks drove across the Martian landscape after picking up thr Curiosity, Sojourner, Spirit, and Perserance on their 6' beds "
                       }
                   }) => {
    // const [likes, setLikes] = useState(tuit.likes);
    // const [isLiked, setLiked] = useState(tuit.liked);

    // const likeTuitHandler = () => {
    //     setLiked(!isLiked);
    //     setLikes(isLiked === true ? likes - 1 : likes + 1);
    // };
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-2"><FaRegComment/><span> {tuit.replies}</span></div>
            <div className="col-2"><AiOutlineRetweet/><span> {tuit.retuits}</span></div>
            <div className="col-3"><FaHeart
                className="text-danger"
                onClick={() =>
                    dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))
                }
            /><span className="ms-2">{tuit.likes}</span></div>
            <div className="col-2"><span onClick={() => {
                dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))
            }}>
          <LuThumbsDown/> {tuit.dislikes}</span></div>
            <div className="col-1"><FiShare/></div>
        </div>
    )
        ;
};
export default TuitStats;