import "./widget.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SavingsIcon from '@mui/icons-material/Savings';
import React from "react";

function Widget({type}) {

  let data;

  // temporary

  const amount = 100;
  const diff = 20;

  switch (type) {

    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonIcon className="icon"/>,
      };
      break;

      case "order":
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "See all orders",
          icon: <Inventory2OutlinedIcon className="icon"/>,
        };
        break;

        
        case "earning":
          data = {
            title: "EARNINGS",
            isMoney: true,
            link: " view net earnings",
            icon: <AttachMoneyIcon className="icon"/>,
          };
          break;

          case "balance":
            data = {  
              title: "BALANCE",
              isMoney: true,
              link: "See details",
              icon: <SavingsIcon className="icon"/>,
            };
            break;
      
    
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.isMoney && "$"} {amount}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage negative">
          <ArrowDropDownIcon/>
          {diff}%
        </div>
        {data.icon}

      </div>

    </div>
  )
}

export default Widget