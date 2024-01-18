import React from 'react'
import Filters from '../../components/filters/Filters'
import Products from '../../components/products/Products'
import Layout from '../../layouts/Layout'

export default function Categories() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h2 className="title">Categories</h2>
        </div>

        <div className="container">
          <div className="row wrapper-product">
            <div className="col filters">
              <Filters />
            </div>
            <div className="col content">
              <Products />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
