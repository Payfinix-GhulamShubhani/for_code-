import styles from "./lucky-home1.module.css";
import React, { useState } from 'react'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Headerforall from "../components/Headerforall";
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
  const navigate = useNavigate();

  const teamFunction = () => {
    navigate("/create-a-team");

  }
  const exploreFunction = () => {
    navigate("/explore");

  }
  return (
    <div className={styles.luckyHome} style={{ minHeight: '285vh' }}>
      <img className={styles.titleImageIcon} alt="" src="/titleimage@2x.png" />
      <img
        className={styles.unsplash129eq55lqhaIcon}
        alt=""
        src="/unsplash129eq55lqha@2x.png"
      />
      <img
        className={styles.unsplashwh8lh2qzZsIcon}
        alt=""
        src="/unsplashwh8lh2qzzs@2x.png"
      />
      <div className={styles.bgFade} />
      <div className={styles.background} />
      <div className={styles.eventsThingsInNewYorkWrapper}>
        <b className={styles.eventsThings}>{`Events & Things in New York`}</b>
      </div>

      {/* <Headerforall/> */}

      <div className={styles.navigation}>
        <div className={styles.navigationChild} />

        <div className={styles.navigationItem1}>

          <Button>
            <FavoriteBorderTwoToneIcon style={{
              color
                : 'white'
            }} />
          </Button>
          <Button>
            <SettingsTwoToneIcon style={{
              color
                : 'white'
            }} />
          </Button>
          <Button onClick={handleClick}>
            <AccountCircleIcon style={{
              color
                : 'white'
            }} />
          </Button>
        </div>
        <img className={styles.searchIcon} alt="" src="/search.svg" />
        <div className={styles.search}>
          <div className={styles.searchInner}>
            <Button className={styles.searchInner} onClick={teamFunction}>
              <div className={styles.groupChild} />
              <div className={styles.createATeam} style={{ color: 'white' }}>Create a Team</div>
            </Button>
          </div>
        </div>
        {/* <div className={styles.logoMenu}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.menuItems}>
            <b className={styles.start}>Start</b>
            <Button className={styles.iconnavigationarrowBackIosParent}>
              <img
                className={styles.iconnavigationarrowBackIos}
                alt=""
                src="/iconnavigationarrow-back-ios-24px.svg"
              />
              <div className={styles.newYork} onClick={handleClick1} style={{ color: 'white' }}>New York</div>
            </Button>
            {

              open1 && <div className={styles.rectangleContainer1}>
                <div className={styles.groupInner1} />
                <div className={styles.rectangleDiv1} />
                <div className={styles.groupChild2} />
                <div className={styles.findCousreParent1}>
                  <div className={styles.findCousre}>London</div>
                  <div className={styles.findCousre1}>New York</div>
                  <div className={styles.findCousre2}>Canada</div>

                </div>

              </div>
            }

            <Button className={styles.iconnavigationarrowBackIosGroup1}>
              <img
                className={styles.iconnavigationarrowBackIos1}
                alt=""
                src="/iconnavigationarrow-back-ios-24px.svg"
              />
              <div className={styles.newYork1} onClick={handleClick2} style={{ color: 'white' }}>Explore</div>
            </Button>
            {

              open2 && <div className={styles.rectangleContainer2}>
                <div className={styles.groupInner2} />
                <div className={styles.rectangleDiv2} />
                <div className={styles.groupChild3} />
                <div className={styles.findCousreParent2}>
                  <Button className={styles.findCousre} onClick={exploreFunction} style={{ color: 'white' }}>Explore</Button>
                  <div className={styles.findCousre1}>New</div>
                  <div className={styles.findCousre2}>Canada</div>

                </div>

              </div>
            }
          </div>
        </div> */}
        <Headerforall />

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
      <Button className={styles.search1}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <img
            className={styles.searchGroupIcon}
            alt=""
            src="/search-group.svg"
          />
          <div className={styles.search2} style={{ color: 'black' }}>Search</div>
        </div>
      </Button>
      <div className={styles.sciFi}>
        <div className={styles.tileComponent}>
          <img className={styles.imageIcon} alt="" src="/image55@2x.png" />
        </div>
        <div className={styles.tileComponent1}>
          <img className={styles.imageIcon} alt="" src="/image56@2x.png" />
        </div>
        <div className={styles.tileComponent2}>
          <img className={styles.imageIcon} alt="" src="/image57@2x.png" />
        </div>
        <div className={styles.tileComponent3}>
          <img className={styles.imageIcon} alt="" src="/image58@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.tileComponent4}>
          <img className={styles.imageIcon} alt="" src="/image59@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.seeAgain}>Sci-fi shows</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
        <b className={styles.appleWatch}>Apple Watch</b>
        <b className={styles.appleWatch1}>Apple Watch</b>
        <b className={styles.appleWatch2}>Apple Watch</b>
        <b className={styles.appleWatch3}>Apple Watch</b>
        <b className={styles.appleWatch4}>Apple Watch</b>
      </div>
      <div className={styles.sciFi1}>
        <div className={styles.tileComponent}>
          <img className={styles.imageIcon} alt="" src="/image60@2x.png" />
        </div>
        <div className={styles.tileComponent1}>
          <img className={styles.imageIcon} alt="" src="/image61@2x.png" />
        </div>
        <div className={styles.tileComponent2}>
          <img className={styles.imageIcon} alt="" src="/image31@2x.png" />
        </div>
        <div className={styles.tileComponent3}>
          <img className={styles.imageIcon} alt="" src="/image62@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.tileComponent4}>
          <img className={styles.imageIcon} alt="" src="/image63@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.seeAgain}>Sci-fi shows</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
        <b className={styles.appleWatch}>Apple Watch</b>
        <b className={styles.appleWatch1}>Apple Watch</b>
        <b className={styles.appleWatch2}>Apple Watch</b>
        <b className={styles.appleWatch3}>Apple Watch</b>
        <b className={styles.appleWatch4}>Apple Watch</b>
      </div>
      <div className={styles.sciFi1}>
        <div className={styles.tileComponent}>
          <img className={styles.imageIcon} alt="" src="/image60@2x.png" />
        </div>
        <div className={styles.tileComponent1}>
          <img className={styles.imageIcon} alt="" src="/image61@2x.png" />
        </div>
        <div className={styles.tileComponent2}>
          <img className={styles.imageIcon} alt="" src="/image31@2x.png" />
        </div>
        <div className={styles.tileComponent3}>
          <img className={styles.imageIcon} alt="" src="/image62@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.tileComponent4}>
          <img className={styles.imageIcon} alt="" src="/image63@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.seeAgain}>Sci-fi shows</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
        <b className={styles.appleWatch}>Apple Watch</b>
        <b className={styles.appleWatch1}>Apple Watch</b>
        <b className={styles.appleWatch2}>Apple Watch</b>
        <b className={styles.appleWatch3}>Apple Watch</b>
        <b className={styles.appleWatch4}>Apple Watch</b>
      </div>
      <div className={styles.sciFi2}>
        <div className={styles.tileComponent}>
          <img className={styles.imageIcon} alt="" src="/image64@2x.png" />
        </div>
        <div className={styles.tileComponent1}>
          <img className={styles.imageIcon} alt="" src="/image65@2x.png" />
        </div>
        <div className={styles.tileComponent2}>
          <img className={styles.imageIcon} alt="" src="/image66@2x.png" />
        </div>
        <div className={styles.tileComponent3}>
          <img className={styles.imageIcon} alt="" src="/image67@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.tileComponent4}>
          <img className={styles.imageIcon} alt="" src="/image68@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.seeAgain}>Sci-fi shows</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
        <b className={styles.appleWatch}>Apple Watch</b>
        <b className={styles.appleWatch1}>Apple Watch</b>
        <b className={styles.appleWatch2}>Apple Watch</b>
        <b className={styles.appleWatch3}>Apple Watch</b>
        <b className={styles.appleWatch4}>Apple Watch</b>
      </div>
      <div className={styles.sciFi3}>
        <div className={styles.tileComponent}>
          <img className={styles.imageIcon} alt="" src="/image69@2x.png" />
        </div>
        <div className={styles.tileComponent1}>
          <img className={styles.imageIcon} alt="" src="/image70@2x.png" />
        </div>
        <div className={styles.tileComponent2}>
          <img className={styles.imageIcon} alt="" src="/image71@2x.png" />
        </div>
        <div className={styles.tileComponent3}>
          <img className={styles.imageIcon} alt="" src="/image72@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.tileComponent4}>
          <img className={styles.imageIcon} alt="" src="/image73@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.seeAgain}>Sci-fi shows</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
        <b className={styles.appleWatch}>Apple Watch</b>
        <b className={styles.appleWatch1}>Apple Watch</b>
        <b className={styles.appleWatch2}>Apple Watch</b>
        <b className={styles.appleWatch3}>Apple Watch</b>
        <b className={styles.appleWatch4}>Apple Watch</b>
      </div>
      <div className={styles.trendingNow}>
        <div className={styles.tileComponent}>
          <img className={styles.imageIcon} alt="" src="/image34@2x.png" />
        </div>
        <b className={styles.appleWatch}>Apple Watch</b>
        <b className={styles.appleWatch21}>Apple Watch</b>
        <b className={styles.appleWatch22}>Apple Watch</b>
        <b className={styles.appleWatch3}>Apple Watch</b>
        <b className={styles.appleWatch24}>Apple Watch</b>
        <div className={styles.tileComponent1}>
          <img className={styles.imageIcon} alt="" src="/image35@2x.png" />
        </div>
        <div className={styles.tileComponent2}>
          <img className={styles.imageIcon} alt="" src="/image36@2x.png" />
        </div>
        <div className={styles.tileComponent3}>
          <img className={styles.imageIcon} alt="" src="/image37@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.tileComponent4}>
          <img className={styles.imageIcon} alt="" src="/image38@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTitle}>
          <b className={styles.seeAgain}>Trending now</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
      </div>
      <div className={styles.top10}>
        <div className={styles.sectionTitle}>
          <b className={styles.seeAgain}>Top 10 in your country</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
        <div className={styles.six}>
          <img className={styles.icon} alt="" src="/63.svg" />
          <div className={styles.tileComponent25}>
            <img className={styles.imageIcon25} alt="" src="/image10@2x.png" />
          </div>
        </div>
        <div className={styles.five}>
          <img className={styles.icon1} alt="" src="/51.svg" />
          <div className={styles.tileComponent26}>
            <img className={styles.imageIcon25} alt="" src="/image39@2x.png" />
          </div>
          <b className={styles.appleWatch25}>Apple Watch</b>
        </div>
        <div className={styles.four}>
          <img className={styles.icon2} alt="" src="/41.svg" />
          <div className={styles.tileComponent25}>
            <img className={styles.imageIcon25} alt="" src="/image40@2x.png" />
          </div>
          <b className={styles.appleWatch26}>Apple Watch</b>
        </div>
        <div className={styles.three}>
          <img className={styles.icon3} alt="" src="/31.svg" />
          <div className={styles.tileComponent26}>
            <img className={styles.imageIcon25} alt="" src="/image41@2x.png" />
          </div>
          <b className={styles.appleWatch25}>Apple Watch</b>
        </div>
        <div className={styles.two}>
          <img className={styles.icon4} alt="" src="/21.svg" />
          <div className={styles.tileComponent29}>
            <img className={styles.imageIcon25} alt="" src="/image42@2x.png" />
          </div>
          <b className={styles.appleWatch28}>Apple Watch</b>
        </div>
        <div className={styles.one}>
          <img className={styles.icon5} alt="" src="/11.svg" />
          <div className={styles.tileComponent26}>
            <img className={styles.imageIcon25} alt="" src="/image43@2x.png" />
          </div>
          <b className={styles.appleWatch25}>Apple Watch</b>
        </div>
      </div>
      <div className={styles.seeAgainSection}>
        <div className={styles.tileComponent}>
          <img className={styles.imageIcon} alt="" src="/image44@2x.png" />
        </div>
        <div className={styles.tileComponent1}>
          <img className={styles.imageIcon} alt="" src="/image45@2x.png" />
        </div>
        <div className={styles.tileComponent2}>
          <img className={styles.imageIcon} alt="" src="/image46@2x.png" />
        </div>
        <div className={styles.tileComponent34}>
          <img className={styles.imageIcon} alt="" src="/image47@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.tileComponent35}>
          <img className={styles.imageIcon} alt="" src="/image48@2x.png" />
          <div className={styles.info}>
            <div className={styles.controlBar}>
              <div className={styles.controls}>
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
                <img className={styles.playIcon} alt="" />
              </div>
              <div className={styles.reveal}>
                <img className={styles.playIcon} alt="" />
              </div>
            </div>
            <div className={styles.showInfo}>
              <b className={styles.match}>89% Match</b>
              <div className={styles.age}>
                <div className={styles.div}>16</div>
              </div>
              <div className={styles.season}>1 Season</div>
              <div className={styles.hd}>
                <div className={styles.hd1}>HD</div>
              </div>
            </div>
            <div className={styles.showInfo}>
              <div className={styles.mystery}>Mystery</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Thriller `}</div>
              <img className={styles.genreChild} alt="" />
              <div className={styles.mystery}>{`Science Fiction `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTitle6}>
          <b className={styles.seeAgain}>See again</b>
          <img className={styles.bellIcon} alt="" src="/chevronright.svg" />
        </div>
        <b className={styles.appleWatch}>Apple Watch</b>
        <b className={styles.appleWatch21}>Apple Watch</b>
        <b className={styles.appleWatch2}>Apple Watch</b>
        <b className={styles.appleWatch3}>Apple Watch</b>
        <b className={styles.appleWatch24}>Apple Watch</b>
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
