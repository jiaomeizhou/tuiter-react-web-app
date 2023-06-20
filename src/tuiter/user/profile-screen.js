import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk, logoutThunk, updateUserThunk}
    from "../services/auth-thunks";

function ProfileScreen() {
    const {currentUser} = useSelector((state) => state.user);
    // console.log(currentUser);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async () => {
        await dispatch(updateUserThunk(profile));
    };
    // useEffect(async () => {
    //     const {payload} = await dispatch(profileThunk());
    //     setProfile(payload);
    // }, []);
    useEffect(() => {
        async function fetchData() {
            const {payload} = await dispatch(profileThunk());
            setProfile(payload);
        }
        fetchData();
    }, []);
    // console.log(profile);
    return (
        <div>
            {/*<pre>{JSON.stringify(profile)}</pre>*/}
            <h1>Profile Screen</h1>
            {profile && (<div>
                    <div>
                        <label>First Name</label>
                        <input className="form-control" type="text" value={profile.firstName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile, firstName: event.target.value,
                                   };
                                   setProfile(newProfile);
                               }}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input className="form-control" type="text" value={profile.lastName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile, lastName: event.target.value,
                                   };
                                   setProfile(newProfile);
                               }}/>
                    </div>
                </div>
            )}
            <button className="btn btn-danger mt-2"
                    onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/tuiter/login");
                }}> Logout
            </button>
            <button className="btn btn-primary mt-2 ms-2" onClick={save}>Save</button>
        </div>);
}

export default ProfileScreen;