import { Fragment } from 'react'
import { products } from '../../api/products'

export default function Products() {
  return (
    <Fragment>
      {products &&
        products.map((item) => {
          return (
            <div key={item._id} className="card">
              <figure className="card-image"></figure>
              <main className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </main>
              <footer className="card-footer"></footer>
            </div>
          )
        })}
    </Fragment>
  )
}
