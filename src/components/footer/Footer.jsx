// import React from 'react';
// import styles from "./footer.module.css";
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div>© 2023 Devsolution. all rights reserved.</div>
//       <div className={styles.social}>
//         <Image src='/1.png'  width={24} height={24} className={styles.icon} alt='Devsolution' />
//         <Image src='/2.png'  width={24} height={24} className={styles.icon} alt='Devsolution' />
//         <Image src='/3.png'  width={24} height={24} className={styles.icon} alt='Devsolution' />
//         <Image src='/4.png'  width={24} height={24} className={styles.icon} alt='Devsolution' />
//       </div>
//     </div>
//   )
// };

// export default Footer;


import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css'; // Your custom styles if needed

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h5 className={styles.title}>Devsolution</h5>
            <div className={styles.line}></div>
            <p className={styles.desc}> Welcome to Devsolution's blog platform! We provide a wide range of
              content to keep you informed and engaged. From insightful articles to
              captivating stories, you'll find it all here.
            </p>
            <div className={styles.social}>
              <Image src='/1.png' width={24} height={24} className={styles.icon} alt='Devsolution' />
              <Image src='/2.png' width={24} height={24} className={styles.icon} alt='Devsolution' />
              <Image src='/3.png' width={24} height={24} className={styles.icon} alt='Devsolution' />
              <Image src='/4.png' width={24} height={24} className={styles.icon} alt='Devsolution' />
            </div>
          </div>
          <div className={styles.column}>
            <h5 className={styles.title}>Categories</h5>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.listText}><a href="#">Technology</a></li>
              <li className={styles.listText}><a href="#">Science</a></li>
              <li className={styles.listText}><a href="#">Business</a></li>
              <li className={styles.listText}><a href="#">Health</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h5 className={styles.title}>About</h5>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.listText}><a href="#">Blog</a></li>
              <li className={styles.listText}><a href="#">Illustration</a></li>
              <li className={styles.listText}><a href="#">Website</a></li>
              <li className={styles.listText}><a href="#">Application</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5 className={styles.title}>Contact Us</h5>
            <div className={styles.line}></div>
            <ul className={styles.list}>
              <li className={styles.listText}>If you have any questions or suggestions, reach out to us:</li>
              <li className={styles.listText}>+234 70 3836 0550</li>
              <li className={styles.listText}>www.example.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.containerLast}>
        <div>© 2023 Devsolution. all rights reserved.</div>
        <div className={styles.social}>
         <p className={styles.designedBy}>Designed by Samuel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;










