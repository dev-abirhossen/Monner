import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"
import HomeIndex from "./pages/homePage/HomeIndex"
import AboutIndex from "./pages/aboutPage/AboutIndex"
import RootLayout from "./components/layout/RootLayout"
import ErrorPage from "./components/layout/ErrorPage"
import FaqIndex from "./pages/faqPage/FaqIndex"
import FaqLayout from "./components/layout/FaqLayout"
import SequrityIndex from "./pages/faqPage/faqSequrityPage/SequrityIndex"
import BeginnerIndex from "./pages/faqPage/beginnerPage/BeginnerIndex"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="*" element={<ErrorPage/>}/>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<HomeIndex/>}/>
        <Route path="about" element={<AboutIndex/>}/>
          <Route path="/faq" element={<FaqIndex/>}/>
        <Route element={<FaqLayout/>}>
          <Route path="/sequrity" element={<SequrityIndex/>}/>
          <Route path="/beginner" element={<BeginnerIndex/>}/>
        </Route>
      </Route>
      </>
    )
  )


  return (
   <RouterProvider router={router}/>
  )
}

export default App
