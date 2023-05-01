import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import styles from "./header.module.css";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Headerforall = (props) => {
    const navigate = useNavigate();
    const [open, setopen] = useState(false)
    const handleClick = () => {
        setopen(!open)
    }
    const location = useLocation().pathname
    console.log("location",location);
    const handleClick1 = ()=>{
        navigate('/create-a-team')
    }
    return (
        <div >
            <div className={props.val === "true" ? styles.navigation : styles.navigation1}>
                <div className={styles.navigationChild} />
               
                <div className={styles.navigationItem1}>

                    <Button sx={{color:'#ffffff'}}>
                        <FavoriteBorderTwoToneIcon />
                    </Button>
                    <Button sx={{color:'#ffffff'}}>
                        <SettingsTwoToneIcon />
                    </Button>
                    <Button onClick={handleClick} sx={{color:'#ffffff'}}>
                        <AccountCircleIcon />
                    </Button>
                </div>
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <div className={styles.search}>
                    <div className={styles.searchInner}>
                        <div className={styles.searchInner}>
                            <div className={styles.groupChild} />
                            <div className={styles.createATeam} onClick={handleClick1}>Create a Team</div>
                        </div>
                    </div>
                </div>
                <div className={styles.logoMenu}>
                    <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
                    <div className={styles.menuItems}>
                        <b className={styles.start}>Start</b>
                        {/* <div className={styles.iconnavigationarrowBackIosParent}>
                            <img
                                className={styles.iconnavigationarrowBackIos}
                                alt=""
                                src="/iconnavigationarrow-back-ios-24px.svg"
                            />
                            <div className={styles.newYork}>New York</div>
                        </div>
                        <div className={styles.iconnavigationarrowBackIosGroup}>
                            <img
                                className={styles.iconnavigationarrowBackIos1}
                                alt=""
                                src="/iconnavigationarrow-back-ios-24px.svg"
                            />
                            <div className={styles.newYork}>Explore</div>
                        </div> */}
                        <Box >

                        <Stack className={styles.iconnavigationarrowBackIosParent} sx={{display:'flex'}} onClick={()=>{navigate('/city1')}} >
                            <Typography variant='subtitle1' sx={{color:'#ffffff'}} className={styles.newYork} > New York 
                           
                            </Typography><Typography variant='subtitle2' sx={{ml:9}}>  {location === '/city1' ? <ExpandLessIcon />  :   <ExpandMoreIcon />}</Typography>
                        </Stack>
                        <Stack className={styles.iconnavigationarrowBackIosGroup} onClick={()=>{navigate('/explore')}}  >
                            <Typography variant='subtitle1' className={styles.newYork} sx={{color:'#ffffff'}} > 
                            Explore  </Typography>
                            <Typography variant='subtitle2' sx={{ml:8}}>  {location === '/explore' ? <ExpandLessIcon />  :   <ExpandMoreIcon /> }</Typography>
                           
                        </Stack>
                        </Box>
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


            {

                open && 
                <div className={styles.rectangleContainer}>
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
    )
}

export default Headerforall