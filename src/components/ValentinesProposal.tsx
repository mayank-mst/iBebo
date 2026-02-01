import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";
import { basePath } from "@/lib/constants";
const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  `${basePath}/game-photos/1.avif`,
  `${basePath}/game-photos/2.avif`,
  `${basePath}/game-photos/3.avif`,
  `${basePath}/game-photos/4.avif`,
  `${basePath}/game-photos/5.avif`,
  `${basePath}/game-photos/6.avif`,
  `${basePath}/game-photos/7.avif`,
  `${basePath}/game-photos/8.avif`,
  `${basePath}/game-photos/9.avif`,
  `${basePath}/game-photos/10.avif`,
  `${basePath}/game-photos/11.avif`,
  `${basePath}/game-photos/12.avif`,
  `${basePath}/game-photos/13.avif`,
  `${basePath}/game-photos/14.avif`,
  `${basePath}/game-photos/15.avif`,
  `${basePath}/game-photos/16.avif`,
  `${basePath}/game-photos/17.avif`,
  `${basePath}/game-photos/18.avif`,
  `${basePath}/game-photos/19.avif`,
  `${basePath}/game-photos/20.avif`,
  `${basePath}/game-photos/21.avif`,
  `${basePath}/game-photos/22.avif`,
  `${basePath}/game-photos/23.avif`,
  `${basePath}/game-photos/24.avif`,
  `${basePath}/game-photos/25.avif`,
  `${basePath}/game-photos/26.avif`,
  `${basePath}/game-photos/27.avif`,
  `${basePath}/game-photos/28.avif`,
  `${basePath}/game-photos/29.avif`,
  `${basePath}/game-photos/30.avif`,
  `${basePath}/game-photos/31.avif`,
  `${basePath}/game-photos/32.avif`,
  `${basePath}/game-photos/33.avif`,
  `${basePath}/game-photos/34.avif`,
  `${basePath}/game-photos/35.avif`,
  `${basePath}/game-photos/36.avif`,
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
      
      <AnimatePresence mode="wait">
        {/* Image Grid Background */}
        <div className="absolute inset-0 grid grid-cols-6 opacity-10">
          {images.slice(0, 36).map((src, index) => (
            <div key={index} className="relative h-full">
              <Image
                src={src}
                alt={`Memory ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`transform -translate-y-1/2 text-white text-5xl font-bold ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
            and I can't wait to..
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
            <Image
              src={`${basePath}/sad_hamster.png`}
              alt="Sad Hamster"
              width={200}
              height={200}
            />
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
            className={`absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold leading-tight ${playfairDisplay.className}`} transition={{ duration: 1 }}
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
