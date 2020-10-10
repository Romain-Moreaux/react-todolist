import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="" alt="todolist" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              Pizza slice ! <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
