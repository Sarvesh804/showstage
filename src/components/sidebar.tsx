import { Home, Briefcase, Users, MessageSquare, BarChart2, Settings, Image, Bell } from 'lucide-react'
import Logo from './logo'

const navigation = [
  { icon: Home, href: '#', current: true },
  { icon: Briefcase, href: '#' },
  { icon: Users, href: '#' },
  { icon: MessageSquare, href: '#' },
  { icon: Image, href: '#' },
  { icon: Bell, href: '#' },
  { icon: BarChart2, href: '#' },
  { icon: Settings, href:'#'}
]

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 w-[72px] bg-white border-none hidden lg:flex flex-col items-center py-4">
      <Logo />
      <nav className="flex-1 w-full mt-8">
        <ul className="space-y-2">
          {navigation.map((item, index) => {
            const Icon = item.icon
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex justify-center p-3 ${
                    item.current
                      ? 'text-indigo-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

