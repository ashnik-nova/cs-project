import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AuthForm from './components/AuthForm'

function Layout() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openAuthForm = () => setIsAuthOpen(true);
  const closeAuthForm = () => setIsAuthOpen(false);

  return (
    <>
      <Header openAuthForm={openAuthForm} />
      <Outlet context={{ openAuthForm }} />
      <Footer />
      {isAuthOpen && <AuthForm closeAuthForm={closeAuthForm} />}
    </>
  )
}

export default Layout