import { Home, Store, MapPin, CreditCard, Menu as MenuIcon, DollarSign } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const customerItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Restaurants", url: "/restaurants", icon: Store },
  { title: "Locations", url: "/locations", icon: MapPin },
]

const restaurantItems = [
  { title: "Dashboard", url: "/dashboard", icon: DollarSign },
  { title: "Menu Management", url: "/menu-management", icon: MenuIcon },
  { title: "Payments", url: "/payments", icon: CreditCard },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path || (path !== "/" && currentPath.startsWith(path))
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent"

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent>
        <div className="p-4 border-b">
          <h2 className={`font-bold ${collapsed ? "text-xs text-center" : "text-lg"}`}>
            {collapsed ? "CP" : "Celo Pay"}
          </h2>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Customer</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Restaurant</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {restaurantItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="ml-2">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}