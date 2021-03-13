import React from 'react';

import styles from './Landing.module.css'

const Landing = (props: any) => {
    return(
       <div className={styles.Landing}>
           <div className={styles.TopHalf}>
                <text>Find the Webinar you need.</text>
           </div>
           <div className={styles.BottomHalf}>

           </div>
       </div> 
    );
};

export default Landing;