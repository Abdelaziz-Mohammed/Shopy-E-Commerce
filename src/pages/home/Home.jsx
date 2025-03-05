
import Hero from './Hero';
import Categories from './categories/Categories';
import FlashSales from './searchRelatedSections/FlashSales';
import RecommendedProducts from './searchRelatedSections/RecommendedProducts';
import BrowsedProducts from './searchRelatedSections/BrowsedProducts';
import Offers from './Offers';
import HomeAndKitchen from './categoriesSections/HomeAndKitchen';
import Fashion from './categoriesSections/Fashion';
import Electronics from './categoriesSections/Electronics';
import CustomerSupport from './CustomerSupport';

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSales />
      <RecommendedProducts />
      <BrowsedProducts />
      <Offers />
      {/* Home&Kitchen section */}
      <HomeAndKitchen />
      {/* Fashion section */}
      <Fashion />
      {/* Electronics section */}
      <Electronics />
      <CustomerSupport />
    </>
  )
}

export default Home
