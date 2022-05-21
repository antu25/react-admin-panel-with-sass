import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import React from "react";

function  Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search...." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
        
        <div className="item">
          <TranslateOutlinedIcon/>
          English
        </div>

        <div className="item">
          <DarkModeOutlinedIcon/>
          moon
        </div>

        <div className="item">
          <ZoomOutMapOutlinedIcon/>
          zoom out 
        </div>
        <div className="item">
          <NotificationsNoneOutlinedIcon/>
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ChatBubbleOutlineOutlinedIcon/>
          
          <div className="counter">2</div>
        </div>
        <div className="item">
          <ListOutlinedIcon/>
          list menu 
        </div>
        <div className="item">
          <img src="src/images/pexels-ashutosh-sonwani-1839564.jpg" 
          alt="" 
          className="avatar" />
        </div>


        </div>
        
      </div>
    </div>
  )
}

export default  Navbar