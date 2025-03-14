
import Hero from './Hero';
import Categories from './categories/Categories';
import FlashSales from './searchRelatedSections/FlashSales';
import RecommendedProducts from './searchRelatedSections/RecommendedProducts';
import BrowsedProducts from './searchRelatedSections/BrowsedProducts';
import Offers from './Offers';
import HomeAndKitchen from './categoriesSections/HomeAndKitchen';
import Fashion from './categoriesSections/Fashion';
import Beauty from './categoriesSections/Beauty';
import Jewellery from './categoriesSections/Jewellery';
import Electronics from './categoriesSections/Electronics';
import Sports from './categoriesSections/Sports';
import CustomerSupport from './CustomerSupport';

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      {/* Search-Related Sections */}
      <FlashSales />
      <RecommendedProducts />
      <BrowsedProducts />
      {/* Offers */}
      <Offers />
      {/* Categories Sections */}
      <HomeAndKitchen />
      <Fashion />
      <Beauty />
      <Jewellery />
      <Electronics />
      <Sports />
      {/* Custmor Support */}
      <CustomerSupport />
    </>
  )
}

export default Home
