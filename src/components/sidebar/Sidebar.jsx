import { Chat, RssFeed, School } from "@material-ui/icons"
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import "./sidebar.css"
import {Link} from "react-router-dom"
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ForumIcon from '@material-ui/icons/Forum';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

export default function Sidebar() {
    return (
        <>
        <List className="sidebar">
        <ListItem>
          <ListItemAvatar>
            <Avatar className="icons">
              <DynamicFeedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Feed"/>
        </ListItem>

        <Link to="/messenger" className="sidebarmessenger">
        <ListItem>
          <ListItemAvatar>
          <Avatar className="icons">
              <ForumIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Messenger"/>
        </ListItem>
        </Link>

        <Link to="/tasks" className="sidebarmessenger">
        <ListItem>
          <ListItemAvatar>
          <Avatar className="icons">
              <PlaylistAddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Tasks" />
        </ListItem>  
        </Link>


        <Link to="/calendar" className="sidebarmessenger">
        <ListItem>
          <ListItemAvatar>
          <Avatar className="icons">
              <EventAvailableIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Calendar" secondary="Coming Soon" />
        </ListItem>
        </Link>

        <ListItem>
          <ListItemAvatar>
          <Avatar className="icons">
              <GolfCourseIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Courses" secondary="Coming Soon" />
        </ListItem>
        <div className="sidebar">
            <div className="sidebarWrapper">
        
        <hr className="sidebarHr"/>
        <h4 className="friendsTitle">Colleagues</h4>
        <ul className="sidebarFriendList">
        <Link className="friendLink" to="/profile/Ricky" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">Ricky Wilson</span>
            </li>
            </Link>
            <Link className="friendLink" to="/profile/George" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">George Charles</span>
            </li>                
            </Link>
            <Link className="friendLink" to="/profile/Conor" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">Conor Butcher</span>
            </li>                
            </Link>
            <Link className="friendLink" to="/profile/Louisa" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">Louisa Cook</span>
            </li>                
            </Link>
            <Link className="friendLink" to="/profile/Gemma" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">Gemma Rider</span>
            </li>                
            </Link>
            <Link className="friendLink" to="/profile/Scott" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">Scott Second</span>
            </li>                
            </Link>
            <Link className="friendLink" to="/profile/Aimee" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">Aimee Second</span>
            </li>                
            </Link>
        </ul>
        <hr className="sidebarHr"/>
        <h4 className="friendsTitle">Upcoming Events</h4>
        <ul className="sidebarFriendList">
        <Link className="friendLink" to="/profile/Ricky" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">NAMM Winter Show</span>
            </li>
            </Link>
            <Link className="friendLink" to="/profile/George" style={{textDecoration:"none"}}>
            <li className="sidebarFriend">
                <span className="sidebarFriendName">Comic Con</span>
            </li>                
            </Link>
        </ul>
            </div>
        </div>
      </List>
</>
        
    )
}