import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Things to Read</a></li>
          <li><a href="#">My Intrest</a></li>

        </ul>
      </nav>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>
            Why I love Biking!
          </h1>
          <br />
          <p>
            I love Biking because it's a good workout and it's exciting!
            <br />
            <br />
            It's a fun way to get around that's supported by pretty much everyone.
          </p>

          <br />
          <br />
          <div className={styles.imageContainer}>
            <Image
              src="/Biking1.jpeg"
              alt="Hiking"
              width={300}
              height={200}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/Biking2.jpg"
              alt="Hiking"
              width={300}
              height={200}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/Biking3.jpg"
              alt="Hiking"
              width={300}
              height={200}
            />
          </div>
        </div>
      </main>
    </>
  );
} 