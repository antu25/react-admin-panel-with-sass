import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import React from "react";
function  Sidebar() {
  return (
    <div  className="sidebar">
        <div className='top'>
          <span className="logo">Baki Admin</span>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <p className="title">MAIN</p>
                <li>  <DashboardIcon/>
                <span>Dashboard</span> </li>
                <p className="title">LISTS</p>
                <li> <GroupOutlinedIcon/>
                  <span>Users</span> </li>
                <li> <ProductionQuantityLimitsOutlinedIcon/>
                  <span>Products</span> </li>
                <li> <Inventory2OutlinedIcon/>
                  <span>Orders</span> </li>
                <li> <LocalShippingOutlinedIcon/>
                  <span>Delivery</span> </li>
                  <p className="title">USEFUL</p>
                <li> <QueryStatsOutlinedIcon/>
                  <span>Stats</span> </li>
                <li> <NotificationsActiveOutlinedIcon/>
                  <span>Notifications</span> </li>
                  <p className="title">SERVICE</p>
                <li> <HealthAndSafetyOutlinedIcon/>
                  <span>System Health</span> </li>
                <li> <PsychologyOutlinedIcon/>
                  <span>Logs</span> </li>
                <li> <SettingsOutlinedIcon/>
                  <span>Settings</span> </li>
                  <p className="title">USER</p>
                <li> <AccountCircleOutlinedIcon/>
                  <span>Profile</span> </li>
                <li> <LogoutOutlinedIcon/>
                  <span>Logout</span> </li>
                
            </ul>
        </div>    
        <div className='bottom'>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default  Sidebar