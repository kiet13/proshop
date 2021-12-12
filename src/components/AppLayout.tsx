import React from "react"
import { Layout } from "antd"
import AppHeader from "./AppHeader"
import allRoutes from "routes"
import { IRoute } from "interfaces"
import "./AppLayout.scss"
let routes = allRoutes as IRoute[]

const AppLayout: React.FC = () => {
  const navigatedRoutes = routes.filter((route) => route.path !== "/")
  return (
    <Layout className="app-layout">
      <AppHeader routes={navigatedRoutes} />
    </Layout>
  )
}

export default AppLayout
