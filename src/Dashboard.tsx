import { Search, Bell, Menu } from 'lucide-react'
import { Button } from "./components/ui/button"
import Sidebar from "./components/sidebar"
import ProfileScore from "./components/profile-score"
import ApplicationsOverview from "./components/applications-overview"
import ApplicationsTable from "./components/applications-table"
import UpcomingAuditions from "./components/upcoming-auditions"

export default function Dashboard() {
  return (
    <div className="min-h-screen rounded-2xl bg-gray-100">
      <Sidebar />
      <div className="lg:pl-[72px]">
        <header className="sticky top-0 z-30 border-b bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Artist</span>
              <span className="text-sm text-gray-400">/</span>
              <span className="text-sm text-gray-400">Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search"
                  className="h-10 w-72 rounded-full border border-gray-200 pl-10 pr-4 text-sm outline-none focus:border-indigo-600"
                />
              </div>
              <Button variant="outline" size="sm">Upload</Button>
              <Button size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700">
                Get Pro
              </Button>
              <button className="text-gray-400 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <button className="lg:hidden text-gray-400 hover:text-gray-600">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ProfileScore />
            <ApplicationsOverview />
            <UpcomingAuditions />
            <ApplicationsTable />
          </div>
        </main>
      </div>
    </div>
  )
}

