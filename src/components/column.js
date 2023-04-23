import styles from "./column.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Column = () => {
  return (
    <div className={styles.column}>
      <div className={styles.navbar}>
        <div className={styles.navbarInner}>
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
      </div>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <div className={styles.welcomeBack}>Welcome back</div>
          <div className={styles.pleaseEnterYour}>
            Please enter your contact details to connect.
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.input}>
            <div className={styles.emailAddress}>Email address</div>
            <TextField id="outlined-basic"
              //  label="Enter your email here"
              variant="outlined" style={{ width: '100%' }} />
            <div >

            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.emailAddress}>Password</div>
            <TextField
          id="outlined-password-input"
          // label="Password"
          type="password"
          autoComplete="current-password"style={{ width: '100%' }}
        />
            {/* <div className={styles.input3}> */}
              {/* <div className={styles.div}>*********</div> */}
            {/* </div> */}
          </div>
          <div className={styles.content1}>
            <div className={styles.rectangleParent}>
            <Checkbox {...label} className={styles.frameChild} />
              <div className={styles.namecompagnycom}>Remember me</div>
            </div>
            <Button className={styles.forgotPassword}>Forgot password</Button>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
            <Button className={styles.forgotPassword} style={{ width: '250%' , height:'160%', color: 'white'  }}>Log in</Button>
              {/* <div className={styles.forgotPassword}>Log in</div> */}
            </div>
            <div className={styles.button1}>
              <img
                className={styles.flatColorIconsgoogle}
                alt=""
                src="/flatcoloriconsgoogle.svg"
              />
              <Button className={styles.forgotPassword}>Log in with Google</Button>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.namecompagnycom}>
              Don’t have an account ?
            </div>
            <Button className={styles.forgotPassword}>Sign up here</Button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.namecompagnycom}>© 2022 Relume</div>
      </div>
    </div>
  );
};

export default Column;
