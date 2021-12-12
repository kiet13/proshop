import { lazy } from "react"
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"

// Lazy load pages
const Home = lazy(() => import("pages/Home"))

const routes = [
  {
    path: "/",
    name: "Home",
    element: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    element: null,
    icon: ShoppingCartOutlined,
  },
  {
    path: "/login",
    name: "Login",
    element: null,
    icon: UserOutlined,
  },
]

export default routes
