import React from 'react';

import styles from './Landing.module.css'

const Landing = (props: any) => {
    return(
       <div className={styles.Landing}>
           <div className={styles.TopHalf}>
                <strong>Find the Webinar you need.</strong>
                <p>
                    Now you can FIND the Webinar,<br/>
                    that suits you!
                </p>
                <button>Find your webinar now!</button>
           </div>
           <div className={styles.BottomHalf}>

           </div>
       </div> 
    );
};

export default Landing;