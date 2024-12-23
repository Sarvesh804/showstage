import { ArrowRight } from 'lucide-react'
import {Button} from "./ui/button"

export default function ApplicationsOverview() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm col-span-2 h-[400px] relative">
      <div className="flex items-center justify-between mb-8">
      <span className="absolute -top-3 right-1 text-xs font-semibold bg-gray-100 px-4 py-1 rounded-b-xl">Applications</span>
        <h2 className="text-xl font-bold font-Syne">Applications Overview</h2>
        <Button className="text-white h-14 w-14 hover:bg-indigo-500 bg-black rounded-full">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-10">
        <div className='flex gap-4'>
        <div className="rounded-xl border-2 border-indigo-400 bg-indigo-50  px-10 py-4 flex items-center justify-between">
          <span className="text-sm font-medium px-10">Application Invites</span>
          <span className="text-2xl font-bold text-indigo-600 m-0 p-0">12</span>
        </div>
        <div className="rounded-xl border-2 border-indigo-400 bg-indigo-50 px-10 py-4 flex items-center justify-around">
          <span className="text-sm font-medium px-10">Audition Requests</span>
          <span className="text-2xl font-bold text-indigo-600 m-0 p-0">23</span>
        </div>
        </div>
        <div className="relative rounded-xl border-2 border-indigo-400 bg-indigo-50 p-4 h-[150px]">
          {/* Background geometric shapes */}
          <div className="absolute inset-0 opacity-[0.8] bg-pattern bg-contain bg-no-repeat bg-center">
            
          </div>
          <div className="relative">
            <div className="flex flex-col items-center justify-center mb-2">
              <div className='flex item-center justify-center gap-2'>
              <span className="text-2xl font-bold text-indigo-600">406</span>
              <span className='bg-white text-teal-700 text-xs flex items-center h-5 mt-2'>70% </span>
              </div>
              <p className="text-sm font-medium">New Roles Matched</p>
            </div>
       
              <img src="/frame.png" alt="frame" className='absolute translate-x-52' />
          </div>
        </div>
      </div>
    </div>
  )
}

