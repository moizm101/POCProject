import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <>
            <Head>
                <title>Things to read</title>
                <meta name="description" content="Learn more about Moiz Mughal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div>
                    <h2>
                        Things to read:
                    </h2>
                    <ul>
                        <li><a href="https://www.spiceworks.com/tech/devops/articles/what-is-dynamic-programming/">What is Dynamic Programming? Working, Algorithms, and Examples</a></li>
                        <li><a href="https://www.spiceworks.com/tech/devops/guest-article/high-availability-for-sql-server-in-containers/">Ensuring AI Workload HA: SQL Server in K8s Made Reliable</a></li>
                        <li><a href="https://www.spiceworks.com/tech/it-strategy/articles/linear-programming/">What Is Linear Programming? Meaning, Methods, and Examples</a></li>
                        <li><a href="https://www.spiceworks.com/tech/devops/guest-article/how-to-ease-the-pain-points-of-managing-open-source-software/">How to Ease the Pain Points of Managing Open-Source Software</a></li>
                        <li><a href="https://www.spiceworks.com/tech/it-careers-skills/articles/computer-programmer-job-role/">Computer Programmer: Job Description, Key Skills, and Salary in 2023</a></li>
                        <li><a href="https://www.spiceworks.com/tech/devops/guest-article/software-development-challenges/">Top Software Development Challenges in 2023</a></li>
                        <li><a href="https://www.spiceworks.com/tech/tech-general/articles/what-is-assembly-language/">What Is Assembly Language? Working, Features, and Advantages</a></li>
                        <li><a href="https://www.spiceworks.com/tech/devops/guest-article/why-developer-experience-needs-to-be-a-company-wide-okr/">Why Developer Experience Needs To Be a Company-wide OKR</a></li>
                        <li><a href="https://www.spiceworks.com/tech/tech-general/articles/machine-vs-assembly-language/">Machine Language vs. Assembly Language: Key Differences</a></li>
                        <li><a href="https://www.spiceworks.com/tech/devops/articles/software-developer-vs-software-engineer/">Software Developer vs. Software Engineer: Top 10 Differences</a></li>
                    </ul>
                </div>
            </main>
        </>
    );
}