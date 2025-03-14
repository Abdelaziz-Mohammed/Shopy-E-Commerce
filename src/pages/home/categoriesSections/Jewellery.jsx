
import SectionTitle from './SectionTitle';
import ProductsSwiper from '../../../components/productswiper/ProductsSwiper';

function HomeAndKetchen() {
  return (
    <section className="bg-white" id='jewellery-section' style={{ scrollMarginTop: '80px' }}>
      <div className="container mx-auto px-2 py-12">
        <SectionTitle title='Jewellery' />
        <ProductsSwiper />
      </div>
    </section>
  )
}

export default HomeAndKetchen
