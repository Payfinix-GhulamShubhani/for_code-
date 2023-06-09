import { Typography } from "@mui/material";
import styles from "./sign-in-welcome.module.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignInWelcome = () => {
  const [IsShown,setIsShown]=useState('false')
  const navigate = useNavigate();

  const mobiFunction= ()=>{
    navigate("/sign-in-mobile-number");

  }
  return (
    <div className={styles.signInWelcome}>
      <div className={styles.column}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/.svg" />
          <div className={styles.nameless}>nameless</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.relume}>© 2022 Relume</div>
        </div>
        <div className={styles.finalLuckyDodoVar01Parent}>
          <img
            className={styles.finalLuckyDodoVar01Icon}
            alt=""
            src="/final-lucky-dodo-var011@2x.png"
          />
          <img
            className={styles.finalLuckyDodoVar05Icon}
            alt=""
            src="/final-lucky-dodo-var051@2x.png"
          />
        </div>
      </div>
      <div className={styles.welcomeHowDo}>
        Welcome! How do you to get started?
      </div>
      <div className={styles.frameParent}>
        <div className={styles.mobileNumberWrapper}>
          <div className={styles.mobileNumber}  onClick={mobiFunction}>Mobile number</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.mobileNumber}>9456784567</div>
        </div>
        <img className={styles.groupChild} alt="" src="/rectangle-2.svg" />
        <img
          className={styles.mobileLightSolid}
          alt=""
          src="/mobile--light--solid.svg"
        />
      </div>
      <div className={styles.continueWithFacebookLeftParent}>
        <div className={styles.continueWithFacebookLeft} 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}> 
          <img
            className={styles.facebookLogoIcon}
            alt=""
            src="/facebook-logo.svg"
          />
          <div className={styles.continueWithFacebook}>Continue with Facebook</div>
        </div>
        <div className={styles.continueWithAppleLeftAli}>
          <img
            className={styles.facebookLogoIcon}
            alt=""
            src="/apple-logo.svg"
          />
          <div className={styles.mobileNumber}>Continue with Apple</div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.or}>or</div>
        </div>
        <Button className={styles.button} style={{backgroundColor:'#007DFA', color: '#FFFFFF'}}>
          <Typography className={styles.mobileNumber1} style={{color:"black"}}  onClick={mobiFunction}>Mobile number</Typography>
        </Button>
        {/* <div className={styles.button}>
          <Button className={styles.mobileNumber1} style={{color:"black"}}  onClick={mobiFunction}>Mobile number</Button>
        </div> */}
      </div>
      <div className={styles.continueWithGoogleLeftAl}>
        <img className={styles.googleLogoIcon} alt="" src="/google-logo.svg" />
        <div className={styles.mobileNumber}>Continue with Google</div>
      </div>
    </div>
  );
};

export default SignInWelcome;
