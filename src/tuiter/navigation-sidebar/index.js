import React from "react";
import {Link, useLocation} from "react-router-dom";
import {AiOutlineTwitter, AiOutlineUnorderedList} from "react-icons/ai";
import {FaHome} from "react-icons/fa";
import {BiHash} from "react-icons/bi";
import {BsBookmark, BsEnvelope} from "react-icons/bs";
import {CiCircleMore} from "react-icons/ci";
import {RxAvatar} from "react-icons/rx";
import {GrNotification} from "react-icons/gr";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ['home', "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const icons = [<FaHome/>, <BiHash/>, <GrNotification/>, <BsEnvelope/>, <BsBookmark/>,
        <AiOutlineUnorderedList/>, <RxAvatar/>, <CiCircleMore/>]
    return (
        <div className="list-group">
            <li className="list-group-item">
                <AiOutlineTwitter/>
            </li>

            {links.map((link, index) =>
                <Link to={`/tuiter/${link}`}
                      className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    <div className="row">
                    <div className="d-none d-sm-block col-2">{icons[index]}</div>
                        <div className="d-none d-xl-block col-10">{link}</div>
                    </div>

                </Link>
            )}

        </div>
    );
};
export default NavigationSidebar;