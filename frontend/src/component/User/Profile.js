import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import axios from "axios"
import { getInstance } from "../../config/api"
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      console.log(history)
      history("/login");

    }
  }, [history, isAuthenticated]);
  const checkApi = async () => {
    try {
      const ins = await getInstance()
      // const config = { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "https://localhost:4000" }, withCredentials: true, };
      const { data } = await ins.get(
        `/ping`
      );
      console.log(data)
    }
    catch (err) {
      console.log("ping error", err)
    }
  }
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user?.name}'s Profile`} />
          {/*[For upper line] load user ki help se humne saara data save kar rakha hai website load hote hi hence we can get the name of the user using user.name */}
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user?.avatar?.url} alt={user?.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user?.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user?.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user?.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
            <button onClick={checkApi}>Check api</button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
