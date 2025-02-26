
import PropTypes from "prop-types"

const Gift = ({ image, text }) => {
  return (
    <div className="flex flex-col gap-5 w-fit">
      <img src={image} alt="gift"
        className="w-[80px] md:w-[120px] xl:w-[150px] h-[80px] md:h-[120px] xl:h-[150px] rounded-full border border-neutral-100 shadow-md" />
      <h4 className="font-medium sm:font-semibold md:font-bold text-center text-xs sm:text-sm lg:text-base">
        {text}
      </h4>
    </div>
  )
}

Gift.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

import gift1 from '../../assets/images/gift-1.png';
import gift2 from '../../assets/images/gift-2.png';
import gift3 from '../../assets/images/gift-3.png';
import gift4 from '../../assets/images/gift-4.png';
import gift5 from '../../assets/images/gift-5.png';
import gift6 from '../../assets/images/gift-6.png';

function Gifts() {
  const gifts = [
    { image: gift1, text: 'Gifts for her' },
    { image: gift2, text: 'Gifts for him' },
    { image: gift3, text: 'Baby gift' },
    { image: gift4, text: 'Engagement gift' },
    { image: gift5, text: 'Jewellery' },
    { image: gift6, text: 'Flower Gift' }
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div>
          <h2 className="section-title">
            Discover gifts for every occasion
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 justify-items-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 gap-y-10">
            {
                gifts.map((gift, index) => <Gift key={index} image={gift.image} text={gift.text} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gifts

