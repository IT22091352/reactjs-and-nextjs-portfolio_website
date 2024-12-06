"use client";
import Head  from "next/head";
import Image from "next/image";
import { LuSunMoon } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

//framerd
import { motion } from "framer-motion";



//Image
import profileImage from "../public/p2.jpeg";
import graphdesign from '../public/design.png';
import webdev from '../public/code.png';
import imag1 from '../public/web1.png';
import imag2 from '../public/web2.jpeg';
import imag3 from '../public/web3.jpeg';
import imag4 from '../public/web4.png';
import imag5 from '../public/web5.png';



//Hook
import { useState } from "react";
export default function Home() {

  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>
          Portfolio Website
        </title>
          <style>
             @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
          </style>
      </Head>

      <main className="font-poppins bg-yellow-50 md:px-20 lg:px-40 px-10 dark:bg-black dark:text-white
      ">
        {/* nav and hero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm">Developed by Chathuka Dilakshana</h1>
            <ul className="flex items-center">
              {/* icon */}
               
              <li>
                <LuSunMoon
                  onClick={() => setdarkmode(!darkmode)}
                  className="cursor-pointer text-3xl mx-5"
                />
              </li>              
              <li><a href="https://drive.google.com/file/d/16yY3D4lm8wYl70TnbJG8JQHVk6Nuowtj/view?usp=sharing" className="bg-yellow-400 text-black px-4 py-2 border-none rounded-md" download={"Resume"}>Resume</a></li>
            </ul>
          </nav>

          {/* hero */}
          
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400">Chathuka Dilakshana</h1>
            <h3 className="text-2xl py-4 frot-bold">Undergraduate at SLIIT | UI/UX Designer | Web Developer | AI/ML Enthusias  </h3>
            <p className="text-1xl py-4  text-black dark:text-white">A passionate third-year BSc (Hons) student at SLIIT, specializing in Information Technology. I'm on a mission to apply and expand my IT skills in a vibrant professional setting. Enthusiastic about embracing diverse roles and collaborating with industry experts, I'm ready to make a meaningful impact.</p>

          </div>

          {/* social media icons */}
          <div className="text-4xl flex justify-center gap-16 text-gray-600">
            <a href="https://www.linkedin.com/in/chathuka-dilakshana-006315284/" ><FaLinkedin /></a>
            <a href="https://github.com/IT22091352" ><FaGithubSquare /></a>
            <a href="chathukadilakshana33@gmail.com" ><MdOutgoingMail /></a>
          </div>

          {/* profile */}
          <motion.div
          initial={{opacity:0,scale:0.5}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.5}}>
          <div className="m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
            <Image 
            src={profileImage}
            alt={"profile picture"} 
            layout="fill" 
            objectFit="cover"
            className="rounded-full"
            />
          </div>
          </motion.div>
        </section>


{/* Services Card */}
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10">
  {/* Card 1 */}
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
      <Image
        src={graphdesign}
        alt="Graphic Designer"
        width={100}
        height={100}
        className="inline"
      />
      <h2 className="text-xl md:text-2xl py-3 font-bold">Social Media Post Designing</h2>
      <p className="text-sm md:text-base py-2 text-gray-800 leading-6">
      Crafting attractive graphics for Instagram, LinkedIn, and Facebook using Canva. Dedicated to making your social media presence eye-catching and professional.
      </p>
    </div>
  </motion.div>

  {/* Card 2 */}
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
      <Image
        src={webdev}
        alt="Web Developer"
        width={100}
        height={100}
        className="inline"
      />
      <h2 className="text-xl md:text-2xl py-3 font-bold">UI/UX Designing</h2>
      <p className="text-sm md:text-base py-2 text-gray-800 leading-6">
      Passionate about creating intuitive, visually appealing interfaces. Specializing in transforming complex ideas into simple, user-friendly designs that enhance user experience.
      </p>
    </div>
  </motion.div>

  {/* Card 3 */}
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
      <Image
        src={graphdesign}
        alt="Graphic Designer"
        width={100}
        height={100}
        className="inline"
      />
      <h2 className="text-xl md:text-2xl py-3 font-bold">
      Web/Mobile Application Designing</h2>
      <p className="text-sm md:text-base py-2 text-gray-800 leading-6">
      Building responsive, high-performance web and mobile applications tailored to your needs.Focus on functionality and user experience to ensure efficiency and ease of use.
      </p>
    </div>
  </motion.div>
</div>



        {/* My Work */}
<section>
  <div>
    <h2 className="text-5xl py-10 font-bold opacity-60">Portfolio</h2>
    <p className="text-sm py-4 ">
    Dive into a collection of my creative and technical projects, showcasing my journey as a UI/UX Designer, Web Developer, and AI/ML Enthusiast. From visually captivating designs to functional web and mobile applications, each project reflects my passion for innovation and user-centric solutions
    </p>
  </div>

  {/* Images */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-4 md:p-10">
    {/* Motion div for Image 1 */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
    >
      <Image
        src={imag1}
        alt="Image 1"
        layout="responsive"
        className="rounded-lg object-cover"
      />
    </motion.div>

    {/* Motion div for Image 2 */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
    >
      <Image
        src={imag2}
        alt="Image 2"
        layout="responsive"
        className="rounded-lg object-cover"
      />
    </motion.div>

    {/* Motion div for Image 3 */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
    >
      <Image
        src={imag3}
        alt="Image 3"
        layout="responsive"
        className="rounded-lg object-cover"
      />
    </motion.div>

    {/* Motion div for Image 4 */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
    >
      <Image
        src={imag5}
        alt="Image 4"
        layout="responsive"
        className="rounded-lg object-cover"
      />
    </motion.div>

    {/* Motion div for Image 5 */}
    <motion.div
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
    >
      <Image
        src={imag4}
        alt="Image 5"
        layout="responsive"
        className="rounded-lg object-cover"
      />
    </motion.div>
  </div>
</section>

        {/* footer */}
        <div className="border-t-2 border-black dark:border-white text-sm  flex flex-col  gap-5 items-center justify-center py-10">
          <h3 className="texr-base mb-2 text-4xl">Contact Us</h3>
          <p className="text-1xl py-2  text-black text-center dark:text-white">Have a project in mind or looking for collaboration? <br></br>Feel free to reach out! Whether it’s a design idea, development need, or simply a chance to share insights,<br></br> I’m eager to connect and bring ideas to life together.</p>
        </div>

        <div>
        <div className="text-4xl pb-5 flex justify-center gap-16">
            <a href="https://www.linkedin.com/in/chathuka-dilakshana-006315284/" ><FaLinkedin /></a>
            <a href="https://github.com/IT22091352" ><FaGithubSquare /></a>
            <a href="chathukadilakshana33@gmail.com" ><MdOutgoingMail /></a>
          </div>
        </div>

     

        
      </main>     
    </div>
  );
}
