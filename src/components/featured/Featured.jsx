import "./featured.scss"
import MenuIcon from '@mui/icons-material/Menu';
import {Circle} from 'rc-progress'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";


function Featured() {
  return (
    <div className='featured'>
      <div className="top">
          <div className="title">Total Revenue</div>
          <MenuIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <Circle percent={70} strokeWidth={2}/>
        </div>
        <div className="bottom-details">
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.</p>
          </div>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
              <ArrowDropUpIcon/>
                <div className="resultAmount">$12.k</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult negative">
              <ArrowDropDownIcon/>
                <div className="resultAmount">$12.k</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
              <ArrowDropUpIcon/>
                <div className="resultAmount">$12.k</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Featured