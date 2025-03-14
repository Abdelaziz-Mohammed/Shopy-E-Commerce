
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext'

function ProductsProvider({ children }) {
  // manage products state
  const [products, setProducts] = useState([
    // Electronics
    { id: 1, name: 'Smartphone XYZ', category: 'electronics', price: 12000, discount: 10, image: 'smartphone-xyz', rate: 4, inCart: false, inFavourites: false },
    { id: 2, name: 'Wireless Headphones Pro', category: 'electronics', price: 2500, discount: 15, image: 'wireless-headphones-pro', rate: 5, inCart: false, inFavourites: false },
    { id: 3, name: '4K Smart TV 55"', category: 'electronics', price: 15000, discount: 5, image: '4k-smart-tv-55', rate: 3, inCart: false, inFavourites: false },
    { id: 4, name: 'Gaming Laptop Ultra', category: 'electronics', price: 35000, discount: 8, image: 'gaming-laptop-ultra', rate: 4, inCart: false, inFavourites: false },
    { id: 5, name: 'Smartwatch Series 5', category: 'electronics', price: 5000, discount: 12, image: 'smartwatch-series-5', rate: 5, inCart: false, inFavourites: false },
    { id: 6, name: 'Home Theater Sound System', category: 'electronics', price: 7000, discount: 5, image: 'home-theater-sound-system', rate: 3, inCart: false, inFavourites: false },
    { id: 7, name: 'Portable Bluetooth Speaker', category: 'electronics', price: 1500, discount: 10, image: 'portable-bluetooth-speaker', rate: 4, inCart: false, inFavourites: false },
    { id: 8, name: 'Professional Hair Dryer', category: 'electronics', price: 1800, discount: 12, image: 'professional-hair-dryer', rate: 5, inCart: false, inFavourites: false },
    { id: 9, name: 'Digital Camera Pro', category: 'electronics', price: 10000, discount: 7, image: 'digital-camera-pro', rate: 4, inCart: false, inFavourites: false },
    { id: 10, name: 'Wireless Mouse & Keyboard', category: 'electronics', price: 1200, discount: 10, image: 'wireless-mouse-keyboard', rate: 4, inCart: false, inFavourites: false },
    // Fashion
    { id: 11, name: 'Casual Cotton T-Shirt', category: 'fashion', price: 250, discount: 20, image: 'casual-cotton-tshirt', rate: 3, inCart: false, inFavourites: false },
    { id: 12, name: 'Slim Fit Denim Jeans', category: 'fashion', price: 600, discount: 10, image: 'slim-fit-denim-jeans', rate: 4, inCart: false, inFavourites: false },
    { id: 13, name: 'Leather Wallet Classic', category: 'fashion', price: 300, discount: 15, image: 'leather-wallet-classic', rate: 5, inCart: false, inFavourites: false },
    { id: 14, name: 'Sneakers AirMax 2024', category: 'fashion', price: 1200, discount: 5, image: 'sneakers-airmax-2024', rate: 3, inCart: false, inFavourites: false },
    { id: 15, name: 'Classic Analog Watch', category: 'fashion', price: 950, discount: 18, image: 'classic-analog-watch', rate: 4, inCart: false, inFavourites: false },
    { id: 16, name: 'Formal Blazer', category: 'fashion', price: 2000, discount: 10, image: 'formal-blazer', rate: 4, inCart: false, inFavourites: false },
    { id: 17, name: 'Sports Joggers', category: 'fashion', price: 850, discount: 12, image: 'sports-joggers', rate: 5, inCart: false, inFavourites: false },
    { id: 18, name: 'Winter Hoodie', category: 'fashion', price: 1300, discount: 15, image: 'winter-hoodie', rate: 4, inCart: false, inFavourites: false },
    { id: 19, name: 'Leather Belt Premium', category: 'fashion', price: 400, discount: 8, image: 'leather-belt-premium', rate: 3, inCart: false, inFavourites: false },
    { id: 20, name: 'Sunglasses UV Protection', category: 'fashion', price: 900, discount: 10, image: 'sunglasses-uv-protection', rate: 5, inCart: false, inFavourites: false },
    // Home & Kitchen
    { id: 21, name: 'Non-Stick Cookware Set', category: 'home', price: 3200, discount: 25, image: 'non-stick-cookware-set', rate: 5, inCart: false, inFavourites: false },
    { id: 22, name: 'Stainless Steel Kettle', category: 'home', price: 800, discount: 10, image: 'stainless-steel-kettle', rate: 3, inCart: false, inFavourites: false },
    { id: 23, name: 'Memory Foam Pillow', category: 'home', price: 450, discount: 20, image: 'memory-foam-pillow', rate: 4, inCart: false, inFavourites: false },
    { id: 24, name: 'Electric Rice Cooker', category: 'home', price: 1600, discount: 15, image: 'electric-rice-cooker', rate: 5, inCart: false, inFavourites: false },
    { id: 25, name: 'Premium Bedsheet Set', category: 'home', price: 1200, discount: 12, image: 'premium-bedsheet-set', rate: 3, inCart: false, inFavourites: false },
    { id: 26, name: 'Digital Air Fryer', category: 'home', price: 3500, discount: 8, image: 'digital-air-fryer', rate: 4, inCart: false, inFavourites: false },
    { id: 27, name: 'Cordless Vacuum Cleaner', category: 'home', price: 5200, discount: 10, image: 'cordless-vacuum-cleaner', rate: 5, inCart: false, inFavourites: false },
    { id: 28, name: 'Modern Table Lamp', category: 'home', price: 950, discount: 15, image: 'modern-table-lamp', rate: 4, inCart: false, inFavourites: false },
    { id: 29, name: 'Wooden Bookshelf', category: 'home', price: 3000, discount: 10, image: 'wooden-bookshelf', rate: 4, inCart: false, inFavourites: false },
    { id: 30, name: 'Smart Home Assistant', category: 'home', price: 4000, discount: 10, image: 'smart-home-assistant', rate: 5, inCart: false, inFavourites: false },
    // Sports
    { id: 31, name: 'Football Pro', category: 'sports', price: 800, discount: 10, image: 'football-pro', rate: 5, inCart: false, inFavourites: false },
    { id: 32, name: 'Basketball Premium', category: 'sports', price: 900, discount: 12, image: 'basketball-premium', rate: 4, inCart: false, inFavourites: false },
    { id: 33, name: 'Tennis Racket', category: 'sports', price: 1500, discount: 8, image: 'tennis-racket', rate: 4, inCart: false, inFavourites: false },
    { id: 34, name: 'Yoga Mat', category: 'sports', price: 600, discount: 10, image: 'yoga-mat', rate: 5, inCart: false, inFavourites: false },
    { id: 35, name: 'Gym Gloves', category: 'sports', price: 500, discount: 15, image: 'gym-gloves', rate: 4, inCart: false, inFavourites: false },
    { id: 36, name: 'Dumbbell Set', category: 'sports', price: 2500, discount: 10, image: 'dumbbell-set', rate: 5, inCart: false, inFavourites: false },
    { id: 37, name: 'Running Shoes', category: 'sports', price: 2200, discount: 8, image: 'running-shoes', rate: 5, inCart: false, inFavourites: false },
    { id: 38, name: 'Cycling Helmet', category: 'sports', price: 1800, discount: 10, image: 'cycling-helmet', rate: 4, inCart: false, inFavourites: false },
    { id: 39, name: 'Boxing Gloves', category: 'sports', price: 2000, discount: 12, image: 'boxing-gloves', rate: 4, inCart: false, inFavourites: false },
    { id: 40, name: 'Skipping Rope', category: 'sports', price: 400, discount: 10, image: 'skipping-rope', rate: 5, inCart: false, inFavourites: false },
    // Jewellery
    { id: 41, name: 'Gold Necklace', category: 'jewelry', price: 5000, discount: 10, image: 'gold-necklace', rate: 5, inCart: false, inFavourites: false },
    { id: 42, name: 'Silver Bracelet', category: 'jewelry', price: 1200, discount: 15, image: 'silver-bracelet', rate: 4, inCart: false, inFavourites: false },
    { id: 43, name: 'Diamond Ring', category: 'jewelry', price: 8000, discount: 5, image: 'diamond-ring', rate: 5, inCart: false, inFavourites: false },
    { id: 44, name: 'Pearl Earrings', category: 'jewelry', price: 3000, discount: 10, image: 'pearl-earrings', rate: 4, inCart: false, inFavourites: false },
    { id: 45, name: 'Platinum Wedding Band', category: 'jewelry', price: 7000, discount: 8, image: 'platinum-wedding-band', rate: 5, inCart: false, inFavourites: false },
    { id: 46, name: 'Emerald Pendant', category: 'jewelry', price: 4500, discount: 12, image: 'emerald-pendant', rate: 4, inCart: false, inFavourites: false },
    { id: 47, name: 'Ruby Brooch', category: 'jewelry', price: 3500, discount: 10, image: 'ruby-brooch', rate: 5, inCart: false, inFavourites: false },
    { id: 48, name: 'Sapphire Cufflinks', category: 'jewelry', price: 4000, discount: 10, image: 'sapphire-cufflinks', rate: 4, inCart: false, inFavourites: false },
    { id: 49, name: 'Gold Anklet', category: 'jewelry', price: 2800, discount: 15, image: 'gold-anklet', rate: 4, inCart: false, inFavourites: false },
    { id: 50, name: 'Diamond Stud Earrings', category: 'jewelry', price: 6000, discount: 5, image: 'diamond-stud-earrings', rate: 5, inCart: false, inFavourites: false },
    // Beauty
    { id: 51, name: 'Luxury Perfume', category: 'beauty', price: 3000, discount: 15, image: 'luxury-perfume', rate: 5, inCart: false, inFavourites: false },
    { id: 52, name: 'Matte Lipstick Set', category: 'beauty', price: 800, discount: 10, image: 'matte-lipstick-set', rate: 4, inCart: false, inFavourites: false },
    { id: 53, name: 'Hydrating Face Cream', category: 'beauty', price: 1200, discount: 12, image: 'hydrating-face-cream', rate: 5, inCart: false, inFavourites: false },
    { id: 54, name: 'Aloe Vera Gel', category: 'beauty', price: 600, discount: 8, image: 'aloe-vera-gel', rate: 4, inCart: false, inFavourites: false },
    { id: 55, name: 'Hair Growth Serum', category: 'beauty', price: 1500, discount: 10, image: 'hair-growth-serum', rate: 5, inCart: false, inFavourites: false },
    { id: 56, name: 'Makeup Brush Set', category: 'beauty', price: 900, discount: 15, image: 'makeup-brush-set', rate: 4, inCart: false, inFavourites: false },
    { id: 57, name: 'Anti-Aging Serum', category: 'beauty', price: 2500, discount: 20, image: 'anti-aging-serum', rate: 5, inCart: false, inFavourites: false },
    { id: 58, name: 'Sunscreen SPF 50', category: 'beauty', price: 1100, discount: 10, image: 'sunscreen-spf-50', rate: 4, inCart: false, inFavourites: false },
    { id: 59, name: 'Nail Polish Set', category: 'beauty', price: 750, discount: 12, image: 'nail-polish-set', rate: 5, inCart: false, inFavourites: false },
    { id: 60, name: 'Charcoal Face Mask', category: 'beauty', price: 950, discount: 10, image: 'charcoal-face-mask', rate: 4, inCart: false, inFavourites: false }
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
