import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./navigation-sidebar/home-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import TuitSummaryList from "./tuit-summary-list";
import ExploreScreen from "./explore-screen";


function Tuiter() {
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="col-2">
                    <NavigationSidebar />
                </div>
                <div className="col-7">
                    <Routes>
                        <Route path="/home" element={<HomeScreen/>} />
                        <Route path="/explore" element={<ExploreScreen/>} />
                        <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                        <Route path="/profile" element={<ProfileScreen/>}/>
                    </Routes>
                </div>
                <div className="col-3">
                    <h1>Who to follow</h1>
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}
export default Tuiter;