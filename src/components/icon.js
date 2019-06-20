import React from 'react'
import '../styles/icon.scss'

export default function Icon (props) {
  let defaultStyle = {
    width: '24px',
    verticalAlign: 'bottom',
  }
  let styleObject = Object.assign({}, defaultStyle, props.style)

  switch (props.icon) {
    case 'menu':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styleObject} className="icon-menu"><path className="secondary" fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
    case 'dollar-sign':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styleObject} className="icon-dollar-sign"><circle cx="12" cy="12" r="10" className="primary"></circle><path className="secondary" d="M13 7.12v3.96c2.25.36 4 1.93 4 3.92 0 2-1.75 3.56-4 3.92V19a1 1 0 0 1-2 0v-.08a4.82 4.82 0 0 1-3.67-2.49 1 1 0 0 1 1.8-.85c.29.6.98 1.09 1.87 1.3v-3.96C8.75 12.56 7 11 7 9c0-2 1.75-3.56 4-3.92V5a1 1 0 0 1 2 0v.08a4.81 4.81 0 0 1 3.68 2.5 1 1 0 0 1-1.81.85c-.28-.6-.98-1.1-1.87-1.31zm-2 3.76V7.12C9.81 7.4 9 8.18 9 9c0 .82.81 1.6 2 1.88zm2 2.24v3.76c1.19-.28 2-1.06 2-1.88 0-.82-.81-1.6-2-1.88z"></path></svg>
    case 'add':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styleObject} className="icon-add"><path className="secondary" fillRule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"></path></svg>
    case 'logo':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styleObject} className="icon-money"><path className="secondary" d="M18 14.74a4 4 0 0 0-8 .26H3a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-1 1.74zM10 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path className="primary" d="M7 9h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm7 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
    case 'remove':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styleObject} className="icon-remove"><path className="secondary" fillRule="evenodd" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"></path></svg>
    default:
      return null
  }
}