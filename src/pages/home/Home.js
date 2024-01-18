import React from 'react'
import Layout from '../../layouts/Layout'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Layout>
      <section className="section" style={{ height: '200vh' }}>
        <div className="container">
          <h1>Home</h1>
          <Link to="/categories">Categories</Link>
        </div>
      </section>
    </Layout>
  )
}
