import React from 'react'
import ProductListing from '../features/ProductListing'

import data from '../data/products.json'

const Homepage = props => (
  <div>
    <h2>Buy A Product</h2>
    <ProductListing products={data.products} />
  </div>
)

export default Homepage