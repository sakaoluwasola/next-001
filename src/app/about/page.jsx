import React from 'react';
import styles from "./page.module.css";
import Image from "next/image";
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <p className={styles.imgDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, eum?</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vitae aliquam officia, provident rerum culpa ad aut
            voluptatibus assumenda fugit, sit, iure dignissimos
            vero nulla doloribus quibusdam quaerat? Ea, culpa quam.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vitae aliquam officia, provident rerum culpa ad aut
            voluptatibus assumenda fugit, sit, iure dignissimos
            vero nulla doloribus quibusdam quaerat? Ea, culpa quam.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vitae aliquam officia, provident rerum culpa ad aut
            voluptatibus assumenda fugit, sit, iure dignissimos
            vero nulla doloribus quibusdam quaerat? Ea, culpa quam.
            <br />
            <br /> 
            - quibusdam quaerat 
            <br /> 
            <br /> 
           
            - quibusdam quaerat
            <br />
            <br />
            - quibusdam quaerat
            <br />
          
            
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;


