
import { useEffect, useState } from "react";
import ProductsSwiper from '../../../components/productswiper/ProductsSwiper';

function FlashSales() {
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(22);
  const [minutes, setMinutes] = useState(45);
  const [seconds, setSeconds] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(s => s - 1);
      }
      else {
        if (minutes > 0) {
          setMinutes(m => m - 1);
          setSeconds(59);
        }
        else {
          if (hours > 0) {
            setHours(h => h - 1);
            setMinutes(59);
            setSeconds(59);
          }
          else {
            if (days > 0) {
              setDays(d => d - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
            else {
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);
  return (
    <section>
      <div className="container mx-auto px-6 pt-6 pb-16">
        <div className="flex flex-wrap items-center justify-start gap-10">
          {/* title */}
          <div className="flex flex-col gap-5 pb-6">
            <div className="flex items-center justify-start gap-3 md:gap-5">
              <div className="w-3 sm:w-8 h-5 sm:h-14 bg-yellowPrimary"></div>
              <span className="text-black text-sm sm:text-lg font-bold">Today&apos;s</span>
            </div>
            <h4 className="text-black text-lg sm:text-3xl font-bold capitalize">Flash Sales</h4>
          </div>
          {/* count down */}
          <div>
            <ul className="flex items-center justify-center gap-3 sm:gap-10">
              <li className="flex flex-col items-center gap-3 sm:gap-5">
                <span className="text-black text-sm sm:text-base font-medium">Days</span> {/* text */}
                <span className="text-black text-lg sm:text-3xl font-bold">{days}</span> {/* number */}
              </li>
              <span className="text-[#DE242A] text-3xl font-bold">:</span> {/* separator */}
              <li className="flex flex-col items-center gap-3 sm:gap-5">
                <span className="text-black text-sm sm:text-base font-medium">Hours</span> {/* text */}
                <span className="text-black text-lg sm:text-3xl font-bold">{hours}</span> {/* number */}
              </li>
              <span className="text-[#DE242A] text-3xl font-bold">:</span> {/* separator */}
              <li className="flex flex-col items-center gap-3 sm:gap-5">
                <span className="text-black text-sm sm:text-base font-medium">Minutes</span> {/* text */}
                <span className="text-black text-lg sm:text-3xl font-bold">{minutes}</span> {/* number */}
              </li>
              <span className="text-[#DE242A] text-3xl font-bold">:</span> {/* separator */}
              <li className="flex flex-col items-center gap-3 sm:gap-5">
                <span className="text-black text-sm sm:text-base font-medium">Seconds</span> {/* text */}
                <span className="text-black text-lg sm:text-3xl font-bold">{seconds}</span> {/* number */}
              </li>
            </ul>
          </div>
        </div>
        <ProductsSwiper />
      </div>
    </section>
  )
}

export default FlashSales
