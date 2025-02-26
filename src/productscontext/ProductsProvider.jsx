
import PropTypes from 'prop-types'
import { ProductsContext } from './ProductsContext'
import { useEffect, useState } from 'react'

function ProductsProvider({ children }) {
  // manage products state
  const [products, setProducts] = useState([
    // put intial products here
  ]);
  // load products from local storage on mount
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
    }
  }, []);
  // save products to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);
  return (
    <ProductsContext.Provider value={{ products }}>
        {children}
    </ProductsContext.Provider>
  )
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ProductsProvider

