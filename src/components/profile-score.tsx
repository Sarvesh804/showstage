import { Button } from "./ui/button"
import { ArrowRight } from 'lucide-react'

export default function ProfileScore() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm h-[400px] relative">
      <span className="absolute -top-3 right-1 text-xs font-semibold bg-gray-100 px-4 py-1 rounded-b-xl">View profile</span>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold font-Syne ">Your Profile score</h2>
        <Button variant="ghost" size="sm" className="text-white h-14 w-14 hover:bg-indigo-500 bg-black rounded-full">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-36">
          {/* Gauge background with dots */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 100 100" className="transform  w-full ">
              {/* Create dots around the circle */}
              {/* {[...Array(40)].map((_, i) => {
                const angle = (i * 180) / 40
                const x = 50 + 40 * Math.cos((angle * Math.PI) / 90)
                const y = 50 + 40 * Math.sin((angle * Math.PI) / 90)
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="1"
                    className="fill-black"
                  />
                )
              })} */}
              {/* Gradient arc */}
              <path
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B6B" />
                  <stop offset="50%" stopColor="#FFD93D" />
                  <stop offset="100%" stopColor="#6BCB77" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold">412</span>
          </div>
        </div>
        <p className="mt-1 text-md text-black text-center font-semibold">Each skill contributes to the score</p>
        <p className="mt-1 text-sm text-gray-400 text-center font-medium">Add more skills to boost profile score</p>
        <Button className="mt-6 w-60 bg-indigo-600 hover:bg-indigo-700 rounded-full">Add Skills</Button>
      </div>
    </div>
  )
}

