
import heroBg from '../../assets/images/hero.png';

function Hero() {
  return (
    <section style={{ backgroundImage: `url(${heroBg})`}}
      className="bg-center bg-no-repeat bg-cover h-screen">
      <div className="container mx-auto px-6 h-full">
        <div className='text-white h-full flex flex-col justify-center items-start gap-8 pl-[40px] sm:pl-[100px]'>
          <p className='uppercase text-xl'>
            {
              `SUMMER ${new Date().getFullYear()}`
            }
          </p>
          <h1 className='text-3xl sm:text-5xl font-extrabold tracking-widest'>
            -30% Discount
          </h1>
          <p className='max-w-[320px] text-sm/8 sm:text-base/10'>
            Find the perfect gift for every occasion!
            <br />
            Celebrate, cherish, and create lasting memories with Gift Day.
          </p>
          <button
            className="flex items-center justify-center h-[40px] px-5 rounded-3xl bg-transparent hover:bg-black ease-linear duration-200 border border-white hover:border-black text-white text-base capitalize font-medium w-fit">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
