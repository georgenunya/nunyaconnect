import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { axiosInstance } from "../../config";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axiosInstance.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axiosInstance.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axiosInstance.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <div className="newswrapper">
                  <span className="newstitle">Latest News</span>
        </div>

        <Card className="newscard">
      <CardActionArea>
        <CardMedia className="news" 
          component="img"
          alt="40 million T-Mobile customers hit by US data breach"
          height="250"
          image="https://cdn.vox-cdn.com/thumbor/gQ1n38cBn4JL-vC_yBp5UcIacTE=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69767400/acastro_190723_1777_tiktok_0001.0.0.jpg"
          title="40 million T-Mobile customers hit by US data breach"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          TikTok follows Snap and Facebook by testing new augmented reality developer tools
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Why build your own AR effects if your audience will do it for you? 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className="newscard">
      <CardActionArea>
        <CardMedia className="news" 
          component="img"
          alt="Apple censors engraving service, report claims"
          height="300"
          image="https://cdn.vox-cdn.com/thumbor/4FT74ZkoRaeaHxIReNq3He2SYYc=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69767360/acastro_210121_1777_google_0001.0.jpg"
          title="Apple censors engraving service, report claims"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Google dismantles Health unit in favor of tried-and-tested ‘throw everything at the wall’ strategy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Google Health employees are being sent to other company divisions
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "In A Relationship"
                : user.relationship === 3
                ? "Prefer Not To Disclose"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}