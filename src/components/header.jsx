import React, { useEffect, useState } from 'react'
//import { Link, useLocation } from 'react-router-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import NavigationMenuComponent from './NavigationMenuComponent'
import { Logo } from '@/icons/Logo'
import UserProfileDropdown from './UserProfleDropdown'
import { BiBookAlt } from "react-icons/bi";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { ChevronDown } from 'lucide-react'
import HeaderProfile from './HeaderProfile'
import useAuthStore from '@/store/authStore'

const Header = ({ isLoggedIn }) => {
  const {getme, myData, logout} = useAuthStore()
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    getme()
  },[])

  const handleLogout = async () => {
    await logout()
    navigate('/login')

  }

  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: "Abayomi Olowu",
    email: "abayomi@patient.ng",
    avatar: "/Avatar/avatar 1.1.png"
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const navigationItems = [
    { title: 'Advocacy', 
      href: '/advocacy',
      isActive: location.pathname.startsWith('/advocacy')
    },
    { 
      title: 'Campaigns', 
      href: '/crowdfunding',
      isActive: location.pathname.startsWith('/crowdfunding')
    },
    {
      title: 'Resources',
      children: [
        {
          title: 'Blog',
          icon: <BiBookAlt className='h-6 w-6' />,
          href: '/blog',
          description: 'Latest news, articles and relevant updates.',
        },
        /* {
          title: 'Patient Stories',
          icon: <BiMessageRoundedDetail className='h-6 w-6'  />,
          href: '/stories',
          description: 'The latest industry news, updates and info.',
        },
        {
          title: 'Webinars',
          icon: <AiOutlineDesktop className='h-6 w-6' />,
          href: '/webinars',
          description: 'The latest industry news, updates and info.',
        }, */
        {
          title: 'Podcasts',
          icon: <HiOutlineMicrophone className='h-6 w-6' />,
          href: '/podcast',
          description: 'Voices of Advocacy, Stories of Hope',
        },
        /* {
          title: 'Awards',
          icon: <SlTrophy className='h-6 w-6' />,
          href: '/awards',
          description: 'The latest industry news, updates and info.',
        },
        {
          title: 'Insights',
          icon: <AiOutlineBarChart className='h-6 w-6' />,
          href: '/review',
          description: 'The latest industry news, updates and info.',
        }, */
      ],
    },
  ]

  return (
    <header className="container border-b bg-yellow-400 z-50">
      <div className="w-full mx-auto flex h-16 items-center justify-between px-4 bg-white fixed z-30">
        <Link to="/" className="flex items-center gap-2 group">
          {/* <Logo /> */}
          <img src="/logo.png" className="w-10" />
          <span className="text-xl font-semibold text-emerald-500">Patient.ng</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8 md:px-2 z-50">
          <NavigationMenuComponent items={navigationItems} />
        </nav>

        {/* Desktop Auth Buttons or User Profile */}
        <div className="hidden items-center gap-4 md:flex">
          {myData ? (
            <UserProfileDropdown user={myData} handleLogout={handleLogout} />
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600" asChild>
                <Link to="/login">Log In</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-md md:hidden ">
            <nav className="flex flex-col p-4">
            
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                {item.children ? (
                  <div className="py-2">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full text-lg font-medium"
                      aria-expanded={openDropdowns[index]}
                      aria-controls={`dropdown-${index}`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          openDropdowns[index] ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdowns[index] && (
                      <ul id={`dropdown-${index}`} className="ml-4 mt-2 space-y-3">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              to={child.href}
                              className="text-base hover:text-gray-600 flex items-center gap-2"
                              onClick={toggleMenu}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`py-2 text-lg font-medium hover:text-gray-600 ${
                      item.isActive ? 'text-emerald-500' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
              ))}
              {!myData && (
                <>
                <div className='flex-col space-y-2 mt-12'> 
                  <Button className="w-full border border-emerald-500 bg-transparent text-emerald-500">
                  <Link to="/signup">Sign Up</Link>
                  </Button>

                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600" >
                    <Link to="/login">Log In</Link>
                  </Button>
                </div>

                  {/* <Link to="/signup" className="py-2 text-lg font-medium hover:text-gray-600" onClick={toggleMenu}>
                    Sign Up
                  </Link>
                  <Link to="/login" className="py-2 text-lg font-medium hover:text-gray-600" onClick={toggleMenu}>
                    Log In
                  </Link> */}
                </>
              )}
              {myData && (
                <div className='mt-10'>
                  <HeaderProfile user={myData} handleLogout={handleLogout} />
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header