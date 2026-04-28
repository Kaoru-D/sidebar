import React from 'react'
import { use } from 'react'
import { useGlobalContext } from './context'
import { social,links } from './data'
import { FaTimes } from 'react-icons/fa'
import logo from './logo.svg'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding Addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}

export default Sidebar