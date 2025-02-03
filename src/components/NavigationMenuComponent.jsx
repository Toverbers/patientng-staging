import React from 'react'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const NavigationMenuComponent = ({ items }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item, index) => (
          <NavigationMenuItem key={index} className=''>
            {item.children ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[350px] gap-3 p-4 md:grid-cols-1 ">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <NavigationMenuLink asChild>
                          
                          <Link
                            to={child.href}
                            className="flex text-green-400 gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {child.icon}
                            <div className='block space-y-2'>
                              <p className="text-sm font-medium text-accent-foreground leading-none">{child.title}</p>
                              <p className="line-clamp-2 text-sm leading-snug text-accent-foreground">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  to={item.href}
                  className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                    item.isActive ? 'text-emerald-500' : ''
                  }`}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}

export default NavigationMenuComponent