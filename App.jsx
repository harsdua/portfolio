import React from 'react'
import Header from "./components/header/Header"
import Portfolio from "./components/portfolio/Portfolio"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

/* todo: 
equalize sizes of portfolio images
make github link for each project with complete readme
publish on github sites
Add CV
Change github link
Add contact form
 */


const App = () => {
  return (
    <>
      <Header/>
      <Portfolio/>
      <About/>
      <Contact/>
    </>
  )
}

export default App