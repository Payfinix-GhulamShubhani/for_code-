import styles from "./explore.module.css";
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
 
const Explore = () => {
  const navigate = useNavigate();
  const teamFunction= ()=>{
    navigate("/create-a-team");

  }

  const cityPage= ()=>{
    navigate("/city1");

  }
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={styles.explore}>
      <img className={styles.exploreChild} alt="" src="/rectangle-8931.svg" />
      <img className={styles.exploreItem} alt="" src="/rectangle-896.svg" />
      <img
        className={styles.iconnavigationarrowBackIos}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos1}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos2}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos3}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos4}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos5}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos6}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos7}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos8}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos9}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos10}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos11}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos12}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos13}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.iconnavigationarrowBackIos14}
        alt=""
        src="/iconnavigationarrow-back-ios-24px5.svg"
      />
      <img
        className={styles.exploreInner}
        alt=""
        src="/group-16865520312.svg"
      />
      <div className={styles.navigation}>
        <div className={styles.navigationChild} />
        <img
          className={styles.navigationItem}
          alt=""
          src="/group-16865514571@2x.png"
        />
        <div className={styles.search}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.searchGroupIcon}
              alt=""
              src="/search-group1.svg"
            />
            <div className={styles.search1}>Search</div>
          </div>
        </div>
        <div className={styles.search2}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.groupPlay}>Group Play</div>
          </div>
        </div>
        <div className={styles.logoMenu}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.menuItems}>
            <b className={styles.start}>Start</b>
            {/* <div className={styles.iconnavigationarrowBackIosParent}> */}
            <div className={styles.iconnavigationarrowBackIosParent}>
                            <img
                                className={styles.iconnavigationarrowBackIos}
                                alt=""
                                src="/iconnavigationarrow-back-ios-24px.svg"
                            />
                            <div className={styles.newYork} onClick={cityPage}>New York</div>
                        </div>
                        <div className={styles.iconnavigationarrowBackIosGroup}>
                            <img
                                className={styles.iconnavigationarrowBackIos1}
                                alt=""
                                src="/iconnavigationarrow-back-ios-24px.svg"
                            />
                            <div className={styles.newYork}>Explore</div>
                        </div>
        
          </div>
        </div>
        
        
             {/* <MenuItem value={10} className={styles.newYork}>New York</MenuItem>
             <MenuItem value={20} className={styles.newYork}>New York</MenuItem>
             <MenuItem value={30} className={styles.newYork}>New York</MenuItem> */}
          {/* <MenuItem value={310}>New York</MenuItem> */}
          {/* <MenuItem value={20}>New York</MenuItem> */}
          {/* <MenuItem value={30}>New York</MenuItem>  */}
 
  
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
          <img className={styles.chevronRightIcon} alt="" src="/search1.svg" />
          <img className={styles.chevronRightIcon} alt="" src="/bell.svg" />
        </div>
        <div className={styles.search3}>
          <div className={styles.searchInner}>
            <Button className={styles.searchInner}>
              <Button className={styles.groupInner} />
              <div className={styles.createATeam} style={{color:'white', margin:'-3px -5px', textAlign:'center'}} onClick={teamFunction}>Create a Team</div>
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.lorem}>Lorem</div>
      <div className={styles.loremImput}>Lorem imput</div>
      <div className={styles.lorem1}>Lorem</div>
      <div className={styles.loremImput1}>Lorem imput</div>
      <div className={styles.vectorParent}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorGroup}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorContainer}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorParent1}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent2}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.loremImput11}>Lorem imput</div>
          <div className={styles.loremImput12}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.lorem12}>Lorem</div>
          <div className={styles.lorem13}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
          <div className={styles.loremImput14}>Lorem imput</div>
          <div className={styles.loremImput15}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorParent2}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent2}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.loremImput11}>Lorem imput</div>
          <div className={styles.loremImput12}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.lorem12}>Lorem</div>
          <div className={styles.lorem13}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
          <div className={styles.loremImput14}>Lorem imput</div>
          <div className={styles.loremImput15}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorParent3}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorParent4}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorParent5}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.vectorParent6}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-8961.svg"
        />
        <b className={styles.lorem2}>Lorem</b>
        <div className={styles.loremImputParent}>
          <div className={styles.loremImput2}>Lorem imput</div>
          <div className={styles.lorem3}>Lorem</div>
          <div className={styles.loremImput3}>Lorem imput</div>
        </div>
      </div>
      <div className={styles.lorem26}>Lorem</div>
      <div className={styles.loremImput30}>Lorem imput</div>
      <div className={styles.lorem27}>Lorem</div>
      <div className={styles.loremImput31}>Lorem imput</div>
      <div className={styles.loremImput32}>Lorem imput</div>
      <div className={styles.lorem28}>Lorem</div>
      <div className={styles.lorem29}>Lorem</div>
      <div className={styles.lorem30}>Lorem</div>
      <div className={styles.lorem31}>Lorem</div>
      <div className={styles.lorem32}>Lorem</div>
      <div className={styles.lorem33}>Lorem</div>
    </div>
  );
};

export default Explore;
