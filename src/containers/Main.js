import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Blogs from "../pages/blogs/Blogs";
import Blog from "../pages/blogs/Blog";
import AddBlog from "../pages/blogs/AddBlog";
import NotFound from "../pages/notFound/NotFound";
import { settings } from "../portfolio.js";
import Games from "../containers/games/Games";
import Game from "./games/Game";


export default function Main(propss) {

  useEffect(() => {
    propss.theme.name === "light" ? document.body.className = "light" : document.body.className = "dark";
  }, [])


  if (settings.isSplash) {
    return (
      <Router>
        <Routes>
          <Route
            path={""}
            element={
              <Splash
                theme={propss.theme}
                setTheme={propss.setTheme}
              />}
          />
          <Route
            path={"/home"}
            element={
              <Home
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/experience"}
            element={
              <Experience
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/education"}
            element={
              <Education
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/contact"}
            element={
              <Contact
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/splash"}
            element={
              <Splash
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/projects"}
            element={
              <Projects
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/blogs"}
            element={
              <Blogs
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/add-blog"}
            element={
              <AddBlog
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/blog/:blogSlug"}
            element={
              <Blog
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/games"}
            element={
              <Games
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/game/:gameSlug"}
            element={
              <Game
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route 
            path='*' 
            element={
            <NotFound 
              theme={propss.theme}
              setTheme={propss.setTheme}              
            />
            } 
          />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route
            path={""}
            element={
              <Home
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/home"}
            element={
              <Home
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/experience"}
            element={
              <Experience
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/education"}
            element={
              <Education
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/contact"}
            element={
              <Contact
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/projects"}
            element={
              <Projects
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/blogs"}
            element={
              <Blogs
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/blog/:blogSlug"}
            element={
              <Blog
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/add-blog"}
            element={
              <AddBlog
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/games"}
            element={
              <Games
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path={"/game/:gameSlug"}
            element={
              <Game
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            }
          />
          <Route
            path='*'
            element={
              <NotFound
                theme={propss.theme}
                setTheme={propss.setTheme}
                status={404}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
