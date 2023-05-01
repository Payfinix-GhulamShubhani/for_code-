import styles from "./city1.module.css";
import React, { useState } from 'react'
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Headerforall from "../components/Headerforall";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
const LuckyHome1 = () => {
  const [open, setopen] = useState(false)
  const [open1, setopen1] = useState(false)
  const [open2, setopen2] = useState(false)
  const handleClick = () => {
    setopen(!open)
  }
  const handleClick1 = () => {
    setopen1(!open1)
  }
  const handleClick2 = () => {
    setopen2(!open2)
  }
  return (
    <div className={styles.luckyHome} >
      {/* <img className={styles.titleImageIcon} alt="" src="/titleimage@2x.png" /> */}
      
      <div className={styles.bgFade} />
      {/* <div className={styles.background} /> */}
      {/* <div className={styles.eventsThingsInNewYorkWrapper}> */}
        {/* <b className={styles.eventsThings}>{`Events & Things in New York`}</b> */}
        <Headerforall />
      

 
      
     
      <div className={styles.search1}>
        <div className={styles.rectangleGroup}>
          {/* <div className={styles.groupItem} /> */}
          {/* <img
            className={styles.searchGroupIcon}
            alt=""
            src="/search-group.svg"
          />
          <div className={styles.search2}>Search</div> */}
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
        </div>
      </div>
      
      <div>
      <div className={styles.tileComponent21}>
        <img className={styles.imageIcon21} alt="" src="/image20@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.madrid}>Madrid</b>
      </div>
      <div className={styles.tileComponent22}>
        <img className={styles.imageIcon21} alt="" src="/image20@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.madrid}>Madrid</b>
      </div>
      <div className={styles.tileComponent23}>
        <img className={styles.imageIcon21} alt="" src="/image20@2x.png" />
        <img className={styles.imageIcon24} alt="" src="/image21@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.pekin}>Pekin</b>
      </div>
      <div className={styles.tileComponent24}>
        <img className={styles.imageIcon21} alt="" src="/image20@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.madrid}>Madrid</b>
      </div>
      <div className={styles.tileComponent25}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon27} alt="" src="/image23@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.newYork}>New York</b>
      </div>
      <div className={styles.tileComponent26}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon27} alt="" src="/image23@2x.png" />
        <img className={styles.imageIcon27} alt="" src="/image24@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.barselona}>Barselona</b>
      </div>
      <div className={styles.tileComponent27}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon27} alt="" src="/image23@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.praha}>Praha</b>
      </div>
      <div className={styles.tileComponent28}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon27} alt="" src="/image23@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.newYork}>New York</b>
      </div>
      <div className={styles.tileComponent29}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image25@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.london}>London</b>
      </div>
      <div className={styles.tileComponent30}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image25@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image26@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.losAngeles}>Los Angeles</b>
      </div>
      <div className={styles.tileComponent31}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image25@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.london}>London</b>
      </div>
      <div className={styles.tileComponent32}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image25@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.london}>London</b>
      </div>
      <div className={styles.tileComponent33}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image27@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.paris}>Paris</b>
      </div>
      <div className={styles.tileComponent34}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image27@2x.png" />
        <img className={styles.imageIcon48} alt="" src="/image28@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.tokio}>Tokio</b>
      </div>
      <div className={styles.tileComponent35}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image27@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.paris}>Paris</b>
      </div>
      <div className={styles.tileComponent36}>
        <img className={styles.imageIcon26} alt="" src="/image22@2x.png" />
        <img className={styles.imageIcon36} alt="" src="/image27@2x.png" />
        <div className={styles.tileComponentChild} />
        <b className={styles.paris}>Paris</b>
      </div>
      </div>
      
       
     
      
      
      {

        open && <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.findCousreParent}>
            <div className={styles.findCousre}>Artur</div>
            <div className={styles.findCousre1}>Lorem ipsum</div>
            <div className={styles.findCousre2}>Kids</div>
            <img className={styles.photoIcon} alt="" src="/photo@2x.png" />
            <img className={styles.photoIcon1} alt="" src="/photo1@2x.png" />
            <img className={styles.photoIcon2} alt="" src="/photo2@2x.png" />
          </div>
          <div className={styles.findCousreGroup}>
            <div className={styles.findCousre3}>Manage Profile</div>
            <img
              className={styles.composeDocumentEditPenPencIcon}
              alt=""
              src="/4213412composedocumenteditpenpencilwrite-115364-1.svg"
            />
          </div>
          <div className={styles.findCousreContainer}>
            <div className={styles.findCousre4}>Account</div>
            <img
              className={styles.accountAvatarFaceManPeopleIcon}
              alt=""
              src="/account-avatar-face-man-people-profile-user-icon-123197-1.svg"
            />
          </div>
          <div className={styles.composeDocumentEditPenPenc} />
          <div className={styles.groupDiv}>
            <div className={styles.findCousre4}>Help Center</div>
            <img
              className={styles.helpIconIconscom558911}
              alt=""
              src="/help-iconiconscom-55891-1.svg"
            />
          </div>
          <div className={styles.findCousre6}>Sign out</div>
        </div>
      }
    </div>
  );
};

export default LuckyHome1;
