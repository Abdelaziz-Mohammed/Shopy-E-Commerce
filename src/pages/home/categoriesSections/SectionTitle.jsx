
import PropTypes from 'prop-types';

function SectionTitle({title}) {
  return (
    <section className='bg-white'>
      <div className="container mx-auto px-6">
        <div className='flex items-center justify-between gap-10'>
          <h1 className="section-title p-0">{title}</h1>
          <button
            className='text-gray-400 font-bold underline uppercase hover:text-gray-600 ease-linear duration-200'>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionTitle
