// import { motion } from "framer-motion";
// import "./home.css";
// export default function Hero() {
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b0f3a] via-[#361a6e] to-[#0d0b28] overflow-hidden p-10">
//     <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b0f3a] via-[#361a6e] to-[#0d0b28] p-10">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left Text Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//             Get Ahead <br /> Of The Curve.
//           </h1>
//           <p className="text-gray-300 mt-4 max-w-md">
//             WordPress template demo headline. Modern landing page website mockup template.
//           </p>
//           <button className="mt-6 px-6 py-3 rounded-2xl bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-xl">
//             Learn More
//           </button>
//         </motion.div>

//         {/* Right Side Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative flex justify-center items-center"
//         >
//           <img
//             src="/mnt/data/download.jpg"
//             alt="astronaut kid"
//             className="w-72 h-auto rounded-2xl shadow-2xl border-2 border-purple-400/40 bg-purple-900/20 backdrop-blur"
//           />

//           {/* Play Button */}
//           <div className="absolute inset-0 flex justify-center items-center">
//             <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition">
//               <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-purple-600 ml-1"></div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//           </div>

//       {/* Background Waves */}
//       <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 320"><path fill="rgba(132,0,255,0.6)" d="M0,224L48,218.7C96,213,192,203,288,170.7C384,139,480,85,576,58.7C672,32,768,32,864,74.7C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64V320H0Z"/></svg>

//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import StepsSection from "./components/section";
import "./home.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <Navbar/>
      <div className="hero-grid-wrapper">
        <div className="hero-grid">
          {/* Left Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <h1>
              Get Ahead <br /> Of The Curve.
            </h1>
            <p>
              Learn with the best. <br/>
              With as minimum as you can possibly imagine.
            </p>
            <button>Get Registred</button>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-image-wrapper"
          >
            <img src="/trader.jpg" alt="astronaut kid" />

            {/* Play Button
            <div className="play-button-container">
            <div className="play-button">
            <div className="play-button-triangle"></div>
            </div> */}
            {/* </div> */}
          </motion.div>
        </div>
      </div>

      {/* Background Waves */}
      <svg className="hero-waves" viewBox="0 0 1440 320">
        <path
          fill="rgba(132,0,255,0.6)"
          d="M0,224L48,218.7C96,213,192,203,288,170.7C384,139,480,85,576,58.7C672,32,768,32,864,74.7C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64V320H0Z"
        />
      </svg>
    </div>
          
  );
}

function Cont(){
  return(
    <>
    <h1>Heloo</h1>
    </>
  )
}