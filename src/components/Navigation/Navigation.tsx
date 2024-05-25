import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

function Navigation() {
  return (
    <>
    <nav className="flex space-x-4 sm:justify-center">
      <ThemeSwitch />
    </nav>
    </>
  )
}

export default Navigation