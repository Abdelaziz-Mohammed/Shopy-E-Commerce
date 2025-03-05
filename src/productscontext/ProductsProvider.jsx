
import PropTypes from 'prop-types'
import { ProductsContext } from './ProductsContext'
import { useEffect, useState } from 'react'

function ProductsProvider({ children }) {
  // manage products state
  const [products, setProducts] = useState([
    // Electronics
    {
      id: 1,
      name: 'Smartphone XYZ',
      category: 'electronics',
      price: 12000,
      discount: 10,
      image: 'smartphone-xyz',
      rate: 4,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 2,
      name: 'Wireless Headphones Pro',
      category: 'electronics',
      price: 2500,
      discount: 15,
      image: 'wireless-headphones-pro',
      rate: 5,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 3,
      name: '4K Smart TV 55"',
      category: 'electronics',
      price: 15000,
      discount: 5,
      image: '4k-smart-tv-55',
      rate: 3,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 4,
      name: 'Gaming Laptop Ultra',
      category: 'electronics',
      price: 35000,
      discount: 8,
      image: 'gaming-laptop-ultra',
      rate: 4,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 5,
      name: 'Smartwatch Series 5',
      category: 'electronics',
      price: 5000,
      discount: 12,
      image: 'smartwatch-series-5',
      rate: 5,
      inCart: false,
      inFavourites: false,
    },
    
    // Fashion
    {
      id: 6,
      name: 'Casual Cotton T-Shirt',
      category: 'fashion',
      price: 250,
      discount: 20,
      image: 'casual-cotton-tshirt',
      rate: 3,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 7,
      name: 'Slim Fit Denim Jeans',
      category: 'fashion',
      price: 600,
      discount: 10,
      image: 'slim-fit-denim-jeans',
      rate: 4,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 8,
      name: 'Leather Wallet Classic',
      category: 'fashion',
      price: 300,
      discount: 15,
      image: 'leather-wallet-classic',
      rate: 5,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 9,
      name: 'Sneakers AirMax 2024',
      category: 'fashion',
      price: 1200,
      discount: 5,
      image: 'sneakers-airmax-2024',
      rate: 3,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 10,
      name: 'Classic Analog Watch',
      category: 'fashion',
      price: 950,
      discount: 18,
      image: 'classic-analog-watch',
      rate: 4,
      inCart: false,
      inFavourites: false,
    },
    
    // Home & Kitchen
    {
      id: 11,
      name: 'Non-Stick Cookware Set',
      category: 'home',
      price: 3200,
      discount: 25,
      image: 'non-stick-cookware-set',
      rate: 5,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 12,
      name: 'Stainless Steel Kettle',
      category: 'home',
      price: 800,
      discount: 10,
      image: 'stainless-steel-kettle',
      rate: 3,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 13,
      name: 'Memory Foam Pillow',
      category: 'home',
      price: 450,
      discount: 20,
      image: 'memory-foam-pillow',
      rate: 4,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 14,
      name: 'Electric Rice Cooker',
      category: 'home',
      price: 1600,
      discount: 15,
      image: 'electric-rice-cooker',
      rate: 5,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 15,
      name: 'Premium Bedsheet Set',
      category: 'home',
      price: 1200,
      discount: 12,
      image: 'premium-bedsheet-set',
      rate: 3,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 16,
      name: 'Digital Air Fryer',
      category: 'home',
      price: 3500,
      discount: 8,
      image: 'digital-air-fryer',
      rate: 4,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 17,
      name: 'Cordless Vacuum Cleaner',
      category: 'home',
      price: 5200,
      discount: 10,
      image: 'cordless-vacuum-cleaner',
      rate: 5,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 18,
      name: 'Home Theater Sound System',
      category: 'electronics',
      price: 7000,
      discount: 5,
      image: 'home-theater-sound-system',
      rate: 3,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 19,
      name: 'Portable Bluetooth Speaker',
      category: 'electronics',
      price: 1500,
      discount: 10,
      image: 'portable-bluetooth-speaker',
      rate: 4,
      inCart: false,
      inFavourites: false,
    },
    {
      id: 20,
      name: 'Professional Hair Dryer',
      category: 'electronics',
      price: 1800,
      discount: 12,
      image: 'professional-hair-dryer',
      rate: 5,
      inCart: false,
      inFavourites: false,
    }
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

