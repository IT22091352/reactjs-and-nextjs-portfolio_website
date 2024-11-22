import Head  from "next/head";
import Image from "next/image";
import { LuSunMoon } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";


//Image
import profileImage from "../public/p2.png";
import graphdesign from '../public/design.png';
import webdev from '../public/code.png';
import imag1 from '../public/web1.png';
import imag2 from '../public/web2.png';
import imag3 from '../public/web3.png';


export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Portfolio Website
        </title>
          <style>
             @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
          </style>
      </Head>

      <main className="font-poppins bg-yellow-50 min-h-screen px-10">
        {/* nav nd gero */}
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className="text-sm">Developed by Chathuka Dilakshana</h1>
            <ul className="flex items-center">
              {/* icon */}
               
              <li ><LuSunMoon className="cursor-pointer text-3xl mx-5" /></li>
              <li><a href="https://drive.google.com/file/d/16yY3D4lm8wYl70TnbJG8JQHVk6Nuowtj/view?usp=sharing" className="bg-yellow-400 text-black px-4 py-2 border-none rounded-md" download={"Resume"}>Resume</a></li>
            </ul>
          </nav>

          {/* hero */}
          
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold text-yellow-400">My Projects</h1>
            <h3 className="text-2xl py-4">Mobile App and Website Developer</h3>
            <p className="text-sm py-4 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
               ipsum, dolor distinctio incidunt alias
               facilis fugit excepturi. Ab quae perspiciatis, 
               maxime commodi a iure corporis accusamus amet consectetur non. Commodi.</p>

          </div>

          {/* social media icons */}
          <div className="text-4xl flex justify-center gap-16 text-gray-600">
            <a href="https://www.linkedin.com/in/chathuka-dilakshana-006315284/" ><FaLinkedin /></a>
            <a href="https://github.com/IT22091352" ><FaGithubSquare /></a>
            <a href="chathukadilakshana33@gmail.com" ><MdOutgoingMail /></a>
          </div>

          {/* profile */}
          <div className="m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
            <Image 
            src={profileImage}
            alt={"profile picture"} 
            layout="fill" 
            objectFit="cover"
            />
          </div>
        </section>


        {/* Services session */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60">Services and Offers</h2>
            <p className="text-sm py-4 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
               ipsum, dolor distinctio incidunt alias
               facilis fugit excepturi. Ab quae perspiciatis, 
               maxime commoddi a iure corporis accusamus amet consectetur non. Commodi.</p>
          </div>

          {/* services card */}
          <div >
            {/* card1 */}
            <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={graphdesign}
               alt="graph designer"
                width={100}
                height={100}
                className="inline"
            />
            <h2 className="text-2xl py-5 font-bold">Graphic Designing</h2>
            <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Quia dolores praesentium dolorum corrupti incidunt aliquam 
               iste beatae! Nam, animi. Quod recusandae quibusdam 
              accusamus explicabo sed. Officia, doloribus! Ipsa,
               corporis architectoooo!</p>
            </div>

            
           {/* card2 */}
           <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={webdev}
               alt="Web Developer"
                width={100}
                height={100}
                className="inline"
            />
            <h2 className="text-2xl py-5 font-bold">Web Developer</h2>
            <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Quia dolores praesentium dolorum corrupti incidunt aliquam 
               iste beatae! Nam, animi. Quod recusandae quibusdam 
              accusamus explicabo sed. Officia, doloribus! Ipsa,
               corporis architectoooo!</p>
            </div>

           {/* card3 */}
           <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image src={graphdesign}
               alt="graph designer"
                width={100}
                height={100}
                className="inline"
            />
            <h2 className="text-2xl py-5 font-bold">Graphic Designing</h2>
            <p className="text-sm py-2 text-gray-800 leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Quia dolores praesentium dolorum corrupti incidunt aliquam 
               iste beatae! Nam, animi. Quod recusandae quibusdam 
              accusamus explicabo sed. Officia, doloribus! Ipsa,
               corporis architectoooo!</p>
            </div>
          </div>
        </section>


        {/* my work */}
        <section>
          <div>
            <h2 className="text-5xl py-10 font-bold opacity-60" >Portfolio</h2>
            <p className="text-sm py-4 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
               ipsum, dolor distinctio incidunt alias
               facilis fugit excepturi. Ab quae perspiciatis, 
               maxime commodi a iure corporis accusamus amet consectetur non. Commodi.</p>
          </div>

          {/* images */}
          <div className="flex-col gap-10 p-10">
            <Image src={imag1} alt="imag1" layout="responsive" className="rounded-lg object-cover"/>
            <Image src={imag2} alt="imag2"layout="responsive" className="rounded-lg object-cover"/>
            <Image src={imag3} alt="imag3"layout="responsive" className="rounded-lg object-cover"/>

          </div>
        </section>

        {/* footer */}
        <div className="border-t-2 border-black text-sm opacity-60 flex flex-col  gap-5 items-center justify-center py-10">
          <h3 className="texr-base mb-2">Contact Us</h3>
          <p className="opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eaque omnis reiciendis, ab totam dolorem quis odit sed 
            ullam incidunt corporis illo maiores provident fugiat nemo
             amet? Tenetur dolores officiis dolore.</p>
        </div>

        <div>
        <div className="text-4xl flex justify-center gap-16 text-gray-600">
            <a href="https://www.linkedin.com/in/chathuka-dilakshana-006315284/" ><FaLinkedin /></a>
            <a href="https://github.com/IT22091352" ><FaGithubSquare /></a>
            <a href="chathukadilakshana33@gmail.com" ><MdOutgoingMail /></a>
          </div>
        </div>






      </main>
      
      
    </div>
  );
}
