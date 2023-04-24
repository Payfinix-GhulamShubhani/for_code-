import styles from "./city1.module.css";
import React, { useState } from 'react'
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Headerforall from "../components/Headerforall";
const LuckyHome1 = () => {
  const [open, setopen] = useState(false)
  const handleClick = () => {
    setopen(!open)
  }
  return (
    <div className={styles.luckyHome} >
      {/* <img className={styles.titleImageIcon} alt="" src="/titleimage@2x.png" /> */}
      
      <div className={styles.bgFade} />
      {/* <div className={styles.background} /> */}
      {/* <div className={styles.eventsThingsInNewYorkWrapper}> */}
        {/* <b className={styles.eventsThings}>{`Events & Things in New York`}</b> */}
      {/* </div> */}

      {/* <Headerforall/> */}

      <div className={styles.navigation}>
        <div className={styles.navigationChild} />

        <div className={styles.navigationItem1}>

          <Button>
            <FavoriteBorderTwoToneIcon style={{color:'white'}}/>
          </Button>
          <Button>
            <SettingsTwoToneIcon style={{color:'white'}}/>
          </Button>
          <Button onClick={handleClick}>
            <AccountCircleIcon style={{color:'white'}} />
          </Button>
        </div>
        <img className={styles.searchIcon} alt="" src="/search.svg" />
        <div className={styles.search}>
          <div className={styles.searchInner}>
            <div className={styles.searchInner}>
              <div className={styles.groupChild} />
              <div className={styles.createATeam}>Create a Team</div>
            </div>
          </div>
        </div>
        <div className={styles.logoMenu}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.menuItems}>
            <b className={styles.start}>Start</b>
            <div className={styles.iconnavigationarrowBackIosParent}>
              <img
                className={styles.iconnavigationarrowBackIos}
                alt=""
                src="/iconnavigationarrow-back-ios-24px.svg"
              />
              <div className={styles.newYork12}>New York</div>
            </div>
            <div className={styles.iconnavigationarrowBackIosGroup}>
              <img
                className={styles.iconnavigationarrowBackIos1}
                alt=""
                src="/iconnavigationarrow-back-ios-24px.svg"
              />
              <div className={styles.newYork12}>Explore</div>
            </div>
          </div>
        </div>
        <div className={styles.finalLuckyDodoVar01Parent}>
          <img
            className={styles.finalLuckyDodoVar01Icon}
            alt=""
            src="/final-lucky-dodo-var01@2x.png"
          />
          <img
            className={styles.finalLuckyDodoVar05Icon}
            alt=""
            src="/final-lucky-dodo-var05@2x.png"
          />
        </div>
        <div className={styles.icons}>
          <img className={styles.bellIcon} alt="" src="/search3.svg" />
          <img className={styles.bellIcon} alt="" src="/bell1.svg" />
        </div>
      </div>
      {/* <column /> */}
      <div className={styles.search1}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <img
            className={styles.searchGroupIcon}
            alt=""
            src="/search-group.svg"
          />
          <div className={styles.search2}>Search</div>
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
