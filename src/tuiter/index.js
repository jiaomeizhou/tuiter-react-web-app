import {Routes, Route} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";


const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav/>
                <div className="row container-fluid mt-3">
                    <div className="d-block col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="d-block col-7 col-xl-6 col-lg-7 col-md-10 col-sm-10">
                        <Routes>
                            <Route path="/*" element={<HomeScreen/>}/>
                            <Route path="/home" element={<HomeScreen/>}/>
                            <Route path="/explore" element={<ExploreScreen/>}/>
                            <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                            <Route path="/profile" element={<ProfileScreen/>}/>
                        </Routes>
                    </div>
                    <div className="d-none d-lg-block col-lg-4 col-xl-4 col-3">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;