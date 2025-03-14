
import { AiOutlineInfo } from "react-icons/ai"
import { BsEnvelope } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5"

function CustomerSupport() {
  return (
    <section className="bg-[#DCDCDC]">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-center gap-10">
          <div className="flex-1">
            <h4 className="text-black font-bold capitalize mb-3">We&apos;re here to help you</h4>
            <p className="text-neutral-500 text-sm">Always happy to assist!</p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-10">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full cursor-pointer hover:bg-white transition">
                <AiOutlineInfo className="text-black text-2xl font-extrabold" />
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-sm text-neutral-500">Customer Support  </span>
                <span className="text-xs font-semibold text-black">Help.shopy.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full cursor-pointer hover:bg-white transition">
                <BsEnvelope className="text-black text-lg font-extrabold" />
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-sm text-neutral-500">Email support</span>
                <span className="text-xs font-semibold text-black">Egypt@Shopy.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full cursor-pointer hover:bg-white transition">
                <IoCallOutline className="text-black text-lg font-extrabold" />
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-sm text-neutral-500">Phone support</span>
                <span className="text-xs font-semibold text-black">1234567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerSupport
