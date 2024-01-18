import React from 'react'

export default function Layout(props) {
  const { children } = props

  return <article className="layout">{children}</article>
}
