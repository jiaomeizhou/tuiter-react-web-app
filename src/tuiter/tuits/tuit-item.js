import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../services/tuits-thunks";
import {RxCross2} from "react-icons/rx";
import {MdVerified} from "react-icons/md";


const TuitItem = (
    {
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
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    // console.log(tuit);
    return (

        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} className="rounded-circle float-end rounded-3" src={`/images/${tuit.image}`}/>
                </div>

                <div className="col-10">

                    <div><span className="fw-bolder">{tuit.username} </span><MdVerified
                        className="text-primary"/> {tuit.handle} · {tuit.time}
                        <RxCross2 onClick={() => deleteTuitHandler(tuit._id)} className="float-end"/></div>
                    <div>{tuit.tuit}</div>
                    <br/>
                    <TuitStats key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;