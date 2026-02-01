import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";
import { basePath } from "@/lib/constants";
import Starfield from "./Starfield";
const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  `${basePath}/game-photos/1.JPG`,
  `${basePath}/game-photos/2.JPG`,
  `${basePath}/game-photos/3.JPG`,
  `${basePath}/game-photos/4.JPG`,
  `${basePath}/game-photos/5.JPG`,
  `${basePath}/game-photos/6.JPG`,
  `${basePath}/game-photos/7.JPG`,
  `${basePath}/game-photos/8.JPG`,
  `${basePath}/game-photos/9.JPG`,
  `${basePath}/game-photos/10.JPG`,
  `${basePath}/game-photos/11.JPG`,
  `${basePath}/game-photos/12.JPG`,
  `${basePath}/game-photos/13.JPG`,
  `${basePath}/game-photos/14.JPG`,
  `${basePath}/game-photos/15.JPG`,
  `${basePath}/game-photos/16.JPG`,
  `${basePath}/game-photos/17.JPG`,
  `${basePath}/game-photos/18.JPG`,
  `${basePath}/game-photos/19.JPG`,
  `${basePath}/game-photos/20.JPG`,
  `${basePath}/game-photos/21.JPG`,
  `${basePath}/game-photos/22.JPG`,
  `${basePath}/game-photos/23.JPG`,
  `${basePath}/game-photos/24.JPG`,
  `${basePath}/game-photos/25.JPG`,
  `${basePath}/game-photos/26.JPG`,
  `${basePath}/game-photos/27.JPG`,
  `${basePath}/game-photos/28.JPG`,
  `${basePath}/game-photos/29.JPG`,
  `${basePath}/game-photos/30.JPG`,
  `${basePath}/game-photos/31.JPG`,
  `${basePath}/game-photos/32.JPG`,
  `${basePath}/game-photos/33.JPG`,
  `${basePath}/game-photos/34.JPG`,
  `${basePath}/game-photos/35.JPG`,
  `${basePath}/game-photos/36.JPG`,
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 9) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(10);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Starfield />
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Fireworks
              options={{
                autoresize: true,
              }}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            Wow, You&apos;re so <span className="text-pink-400">Talented!</span> 🤭🤭
            <br />
            <br />
            <span className="text-pink-400">Wait wait, stay here don&apos;t go...</span>
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            I have a <span className="text-pink-400">surprise</span> for you!
            <br />
            <br />
            Be <span className="text-pink-400">attentive</span>!
          </motion.h2>
        )}
        {step === 2 && (
          <motion.h2
            key="step-2"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Amongst <span className="text-pink-400">trillions and trillions</span> of stars, over <span className="text-pink-400">billions</span> of years
          </motion.h2>
        )}
        {step === 3 && (
          <motion.h2
            key="step-3"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            to be <span className="text-pink-400">alive</span>, and to get to spend this <span className="text-pink-400">life with you</span>
          </motion.h2>
        )}
        {step === 4 && (
          <motion.h2
            key="step-4"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            is so incredibly, <span className="text-pink-400">unfathomably unlikely</span>
          </motion.h2>
        )}
        {step === 5 && (
          <motion.h2
            key="step-5"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            and yet here I am
            <br />
            <br />
            to get the impossible chance to <span className="text-pink-400">get to know you</span>
          </motion.h2>
        )}
        {step === 6 && (
          <motion.h2
            key="step-6"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-pink-400">I love you so much Sakshi</span>
            <br />
            <br />
            more than all the time and space in the universe
          </motion.h2>
        )}
        {step === 7 && (
          <motion.h2
            key="step-7"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            and I can&apos;t wait to...
          </motion.h2>
        )}
        {step === 8 && (
          <motion.h2
            key="step-8"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            spend all the time in the world to share that <span className="text-pink-400">love with you! 😁</span>
          </motion.h2>
        )}
        {step === 9 && (
          <motion.div
            key="step-9"
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <h2
              className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            >
              So, <span className="text-pink-400">Sakshi Mahajan</span>, will you be my <span className="text-pink-400">Valentine</span>?
            </h2>
            <div className="flex space-x-4 mt-10">
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleYesClick}
              >
                Yes, I will! 🥰
              </button>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                      position: "absolute",
                      top: position.top,
                      left: position.left,
                    }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
              >
                No, I won&apos;t 🖕
              </button>
            </div>
          </motion.div>
        )}
        {step === 10 && (
          <motion.div
            key="step-10"
            className={`absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold leading-tight ${playfairDisplay.className}`} 
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-pink-400">Thank you</span> for playing along, <span className="text-pink-400">Love you!</span> 💕
            <Image
              src={`${basePath}/hamster_jumping.gif`}
              alt="Hamster Feliz"
              width={200}
              height={200}
              unoptimized
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
