import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"
import HomeIndex from "./pages/homePage/HomeIndex"
import AboutIndex from "./pages/aboutPage/AboutIndex"
import RootLayout from "./components/layout/RootLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" element={<HomeIndex/>}/>
        <Route path="about" element={<AboutIndex/>}/>
      </Route>
    )
  )


  return (
   <RouterProvider router={router}/>
  )
}

export default App
