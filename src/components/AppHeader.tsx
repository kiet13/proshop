import React from "react"
import { Layout, Menu } from "antd"
import { IRoute } from "interfaces"
import { Link } from "react-router-dom"
import { Input } from "antd"

const { Header } = Layout
const { Search } = Input

interface AppHeaderProps {
  routes: IRoute[]
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const { routes } = props

  const onSearch = (value: string) => console.log(value)

  return (
    <Header className="app-header">
      <Link to="/">
        <img src="/logo_full_desktop.png" alt="logo_vnshop" className="app-logo" />
      </Link>
      <Search className="app-header-search" enterButton onSearch={onSearch} />
      <Menu mode="horizontal">
        {routes.map((item) => {
          if (!item.icon) return null
          return (
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                <item.icon className="app-icon" /> <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </Header>
  )
}

export default AppHeader
