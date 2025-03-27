import styles from "./Page.module.css"
import React, { useState } from 'react'
import ProfileImg from "./assets/avatar2.png";
import MapImg from "./assets/region.jpg";
import BlueProfileImg from "./assets/avatar3.png";
import WhiteProfileImg from "./assets/avatar1.png";
import JillProfileImg from "./assets/avatar5.png";
import JaneProfileImg from "./assets/avatar6.png";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const onMenuClick = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.menuBtn} onClick={onMenuClick}><i class="fa fa-bars"></i> Menu</span>
        <span className={styles.logoText}>Logo</span>
      </div> 
      <div className={styles.pageContainer}>
        <div className={`${styles.sidebarContainer} ${menuOpened ? styles.open : styles.closed}`}>
          <div className={styles.sidebarTop}>
            <div className={styles.sidebarTopLeft}>
              <img className={styles.profileImg} src={ProfileImg} alt="Profile" /> 
            </div>
            <div className={styles.sidebarTopRight}>
              <div className={styles.sidebarGreeting}>Welcome,<span className={styles.userName}>Mike</span></div> 
              <div className={styles.sidebarIconContainer}>
                <span className={styles.sidebarIcon}><i class="fa fa-envelope w3-xxxlarge"/></span>
                <span className={styles.sidebarIcon}><i class="fa fa-user w3-xxxlarge"/></span>
                <span className={styles.sidebarIcon}><i class="fa fa-cog w3-xxxlarge"/></span>
              </div>
            </div>
          </div>
          <div className={styles.sidebarBottom}>
            <div className={styles.sidebarTitle}>Dashboard</div>
            <div onClick={onMenuClick} className={styles.sidebarCloseMenu}><i class="fa fa-remove fa-fw" />Close Menu</div>
            <div className={styles.sidebarContentsFirst}> <i class="fa fa-users w3-xxxlarge"/> Overview</div>
            <div className={styles.sidebarContents}> <i class="fa fa-eye w3-xxxlarge"/> Views</div>
            <div className={styles.sidebarContents}> <i class="fa fa-users w3-xxxlarge"/> Traffic</div>
            <div className={styles.sidebarContents}> <i class="fa fa-bullseye w3-xxxlarge"/> Geo</div>
            <div className={styles.sidebarContents}> <i class="fa fa-diamond w3-xxxlarge"/> Orders</div>
            <div className={styles.sidebarContents}> <i class="fa fa-bell w3-xxxlarge"/> News</div>
            <div className={styles.sidebarContents}> <i class="fa fa-bank w3-xxxlarge"/> General</div>
            <div className={styles.sidebarContents}> <i class="fa fa-history w3-xxxlarge"/> History</div>
            <div className={styles.sidebarContents}> <i class="fa fa-cog w3-xxxlarge"/> Settings</div>
          </div>
        </div>
        {menuOpened && <div className={styles.overlay} onClick={onMenuClick}></div>}
        <div className={styles.contentContainer}>
          <h2 className={styles.myDashboard}><i class="fa fa-dashboard w3-xxxlarge"/> My Dashboard</h2>
          <div className={styles.cardsContainer}>
            <div style={{backgroundColor: "#f44336"}} className={styles.card}>
              <div className={styles.cardImgNum}>
                <span className={styles.imageSize}><i class="fa fa-comment w3-xxxlarge"/></span>
                <span className={styles.cardNum}>52</span>
              </div>
              <div>Messages</div>
            </div>
            <div style={{backgroundColor: "#2196f3"}} className={styles.card}>
              <div className={styles.cardImgNum}>
                <span className={styles.imageSize}><i class="fa fa-eye w3-xxxlarge"/></span>
                <span className={styles.cardNum}>99</span>
              </div>
              <div>Views</div>
            </div>
            <div style={{backgroundColor: "#009688"}} className={styles.card}>
              <div className={styles.cardImgNum}>
                <span className={styles.imageSize}><i class="fa fa-share-alt w3-xxxlarge"/></span>
                <span className={styles.cardNum}>23</span>
              </div>
              <div>Shares</div>  
            </div>
            <div style={{backgroundColor: "#ff9800"}} className={styles.card}>
              <div className={styles.cardImgNum}>
                <span className={styles.imageSize}><i class="fa fa-users w3-xxxlarge"/></span>
                <span className={styles.cardNum}>50</span>
              </div>
              <div>Users</div>  
            </div>
          </div>
          <div className={styles.regionFeedContainer}>
            <div className={styles.regionContainer}>
              <h3>Regions</h3>
              <img src={MapImg} alt="Region" className={styles.regionImg}/>
            </div>
            <div className={styles.feedsContainer}>
              <h3>Feeds</h3>
              <div>
                <div className={styles.feedW}><span className={styles.blueColor}><i class="fa fa-user w3-text-blue w3-large"/></span><span className={styles.feedContent}><span>New record, over 90 views.</span><span className={styles.feedTime}>10 mins</span></span></div>
                <div className={styles.feedG}><span className={styles.redColor}><i class="fa fa-bell w3-text-red w3-large"/></span><span className={styles.feedContent}><span>Database error.</span><span className={styles.feedTime}>15 mins</span></span></div>
                <div className={styles.feedW}><span className={styles.yellowColor}><i class="fa fa-users w3-text-yellow w3-large"/></span><span className={styles.feedContent}><span>New record, over 40 users.</span><span className={styles.feedTime}>17 mins</span></span></div>
                <div className={styles.feedG}><span className={styles.redColor}><i class="fa fa-comment w3-text-red w3-large"/></span><span className={styles.feedContent}><span>New comments.</span><span className={styles.feedTime}>25 mins</span></span></div>
                <div className={styles.feedW}><span className={styles.blueColor}><i class="fa fa-bookmark w3-text-blue w3-large"/></span><span className={styles.feedContent}><span>Check transactions.</span><span className={styles.feedTime}>28 mins</span></span></div>
                <div className={styles.feedG}><span className={styles.redColor}><i class="fa fa-laptop w3-text-red w3-large"/></span><span className={styles.feedContent}><span>CPU overload.</span><span className={styles.feedTime}>35 mins</span></span></div>
                <div className={styles.feedW}><span className={styles.greenColor}><i class="fa fa-share-alt w3-text-green w3-large"/></span><span className={styles.feedContent}><span>	New shares.</span><span className={styles.feedTime}>39 mins</span></span></div>
              </div>
            </div>
          </div>
          <div className={styles.generalStatsContainer}>
            <h3>General Stats</h3>
            <div>New Visitors</div>
            <div className={styles.barGraph}><span className={styles.firstBarLeft}>+25%</span><span className={styles.firstBarRight}></span></div>
            <div>New User</div>
            <div className={styles.barGraph}><span className={styles.secondBarLeft}>50%</span><span className={styles.secondBarRight}></span></div>
            <div>Bounce Rate</div>
            <div className={styles.barGraph}><span className={styles.thirdBarLeft}>75%</span><span className={styles.thirdBarRight}></span></div>
          </div>
          <div>
            <h3>Countries</h3>
            <div className={styles.countriesW}><span className={styles.country}>United States</span><span className={styles.percentage}>65%</span></div>
            <div className={styles.countriesG}><span className={styles.country}>UK</span><span className={styles.percentage}>15.7%</span></div>
            <div className={styles.countriesW}><span className={styles.country}>Russia</span><span className={styles.percentage}>5.6%</span></div>
            <div className={styles.countriesG}><span className={styles.country}>Spain</span><span className={styles.percentage}>2.1%</span></div>
            <div className={styles.countriesW}><span className={styles.country}>India</span><span className={styles.percentage}>1.9%</span></div>
            <div className={styles.countriesG}><span className={styles.country}>France</span><span className={styles.percentage}>1.5%</span></div>
            <div className={styles.moreCountriesBtn}>More Countries <i class="fa fa-arrow-right"/></div>
          </div>
          <div className={styles.recentUsersContainer}>
            <h3>Recent Users</h3>
            <div className={styles.recentUsersBox}>
              <div className={styles.recentUser}><img className={styles.recentUserProfileImg} src={ProfileImg} alt="MikeProfile" /> Mike</div>
              <div className={styles.recentUser}><img className={styles.recentUserProfileImg} src={JillProfileImg} alt="JillProfile" /> Jill</div>
              <div className={styles.recentUser}><img className={styles.recentUserProfileImg} src={JaneProfileImg} alt="JaneProfile" /> Jane</div>
            </div>
          </div>
          <div>
            <h3>Recent Comments</h3>
            <div>
              <div className={styles.commentContainer}>
                <div className={styles.commentImage}>
                  <img src={BlueProfileImg} alt="John" className={styles.commentProfile}/>
                </div>
                <div className={styles.commentText}>
                  <div className={styles.commentTop}><span className={styles.commentUserName}>John </span><span className={styles.commentDate}> Sep 29, 2014, 9:12 PM</span></div>
                  <div>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </div>  
              <div className={styles.commentContainer}>
                <div className={styles.commentImage}>
                  <img src={WhiteProfileImg} alt="Bo" className={styles.commentProfile}/>
                </div>
                <div className={styles.commentText}>
                  <div className={styles.commentTop}><span className={styles.commentUserName}>Bo </span><span className={styles.commentDate}> Sep 28, 2014, 10:15 PM</span></div>
                  <div>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </div>  
            </div>
            <div className={styles.footer}>
              <div className={styles.footerText}>
                <div style={{borderBottom: "6px solid #4caf50"}}className={styles.footerTitle}>Demographic</div>
                <div>Language</div>
                <div className={styles.titleMid}>Country</div>
                <div>City</div>
              </div>
              <div className={styles.footerText}>
                <div style={{borderBottom: "6px solid #f44336"}} className={styles.footerTitle}>System</div>
                <div>Browser</div>
                <div className={styles.titleMid}>OS</div>
                <div>More</div>
              </div>
              <div className={styles.footerText}>
                <div style={{borderBottom: "6px solid #ff9800"}} className={styles.footerTitle}>Target</div>
                <div>Users</div>
                <div className={styles.titleMid}>Active</div>
                <div>Geo</div>
                <div className={styles.titleLast}>Interests</div>
              </div>
            </div>
            <div className={styles.footerFooter}>
              <div className={styles.footerFooterTitle}>FOOTER</div>
              <div>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;