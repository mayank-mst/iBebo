import { basePath } from "@/lib/constants";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-20 top-12 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-pink-400">Bebo, match</span> the photo pairs to reveal <span className="text-pink-400">the surprise</span>
      </h1>
      <p
        className={`absolute right-10 bottom-15 transform -translate-y-1/2 text-white leading-tight ${playfairDisplay.className}`}
      > While you play, enjoy these song! Hit <span className="text-pink-400">Play</span> button</p>
      <div className="flex items-center gap-2 absolute bottom-12 right-5">
        English:
        <audio className="w-full" controls preload="auto" loop>
          <source src={`${basePath}/Perfect.mp3`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio className="w-full" controls preload="auto" loop>
          <source src={`${basePath}/Ocean.mp3`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        Hindi:
        <audio className="w-full" controls preload="auto" loop>
          <source src={`${basePath}/Qayde.mp3`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Copyright */}
      <p className="absolute bottom-5 right-5 text-pink-400 text-sm opacity-15 hover:opacity-50">
        © {new Date().getFullYear()}{" "}
        <Link href=""> S🫶M</Link>
      </p>
    </>
  );
}
