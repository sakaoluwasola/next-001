import Image from 'next/image'
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
         New and Exciting Blog Content Awaits You.
        </h1>
        <p className={styles.desc}>
          Discover engaging stories, insightful articles, and much more. 
          Whether you're a tech enthusiast, a travel lover, or a foodie, our diverse range of blog topics will keep you entertained and informed. 
          Join us on this journey of exploration and learning as we delve into fascinating subjects and share valuable insights.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div>
  );
};



