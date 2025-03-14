
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PathNav from "../../components/pathnavigation/PathNav"
import OrderSummary from './OrderSummary';
import { FaArrowRightLong } from 'react-icons/fa6';
// payment methods images
import cashOnDeliveryImg from '../../assets/images/payment-methods/cash.png';
import venmoImg from '../../assets/images/payment-methods/venmo.png';
import paypalImg from '../../assets/images/payment-methods/paypal.png';
import amazonPayImg from '../../assets/images/payment-methods/amazon-pay.png';
import creditCardImg from '../../assets/images/payment-methods/CreditCard.png';

function CheckOut() {
  const navigate = useNavigate();
  const countries = ["Egypt", "UAE", "Saudi Arabia", "Palestine", "Jordan", "Iraq", "Oman", "Syria", "Kuwait", "Algeria"];
  const countryOptions = countries.map(country => ({
    value: country,
    label: country
  }));
  const [selectedCountry, setSelectedCountry] = useState('Egypt');
  //[ region/state] + [city] data
  const countriesData = {
    Egypt: {
      "Cairo": ["Nasr City", "Heliopolis", "Maadi", "Shubra", "Zamalek"],
      "Giza": ["6th of October", "Haram", "Mohandessin", "Sheikh Zayed", "Imbaba"],
      "Alexandria": ["Smouha", "Sidi Gaber", "Montaza", "Agami", "Borg El Arab"],
      "Dakahlia": ["Mansoura", "Mit Ghamr", "Talkha", "Sherbin", "Belqas"],
      "Sharqia": ["Zagazig", "10th of Ramadan", "Bilbeis", "Abu Kabir", "Fakous"]
    },
    UAE: {
      "Dubai": ["Jumeirah", "Bur Dubai", "Deira", "Al Barsha", "Downtown Dubai"],
      "Abu Dhabi": ["Al Khalidiya", "Al Reem Island", "Al Bateen", "Mussafah", "Yas Island"],
      "Sharjah": ["Al Nahda", "Al Majaz", "Al Qasimia", "Al Taawun", "Muweilah"],
      "Ajman": ["Al Rashidiya", "Al Jurf", "Nuaimiya", "Mushairif", "Emirates City"],
      "Fujairah": ["Dibba", "Khor Fakkan", "Al-Fujairah City", "Mirbah", "Masafi"]
    },
    "Saudi Arabia": {
      "Riyadh": ["Al Olaya", "Al Malaz", "Al Murabba", "Al Nakheel", "Al Sulay"],
      "Jeddah": ["Al Hamra", "Al Andalus", "Al Salamah", "Al Rawdah", "Al Rehab"],
      "Dammam": ["Al Faisaliyah", "Al Khobar", "Rakah", "Al Aziziyah", "Al Shati"],
      "Medina": ["Al Haram", "Quba", "Al Awali", "Al Manakhah", "Al Madinah Al Jadidah"],
      "Mecca": ["Al Haram", "Aziziyah", "Al Shesha", "Al Mansour", "Al Awali"]
    },
    Palestine: {
      "West Bank": ["Ramallah", "Nablus", "Hebron", "Jenin", "Tulkarm"],
      "Gaza Strip": ["Gaza City", "Khan Younis", "Rafah", "Beit Lahia", "Jabalia"]
    },
    Jordan: {
      "Amman": ["Abdoun", "Sweifieh", "Jabal Amman", "Al Weibdeh", "Deir Ghbar"],
      "Irbid": ["Al-Hosn", "Al Mazar", "Sareeh", "Beit Ras", "Bushra"],
      "Zarqa": ["Russeifa", "Al Hashemiyeh", "Al Dulayl", "Azraq", "Al-Jeezah"]
    },
    Iraq: {
      "Baghdad": ["Mansour", "Karrada", "Sadr City", "Adhamiyah", "Dora"],
      "Basra": ["Ashar", "Al Maqal", "Shatt Al-Arab", "Al Qibla", "Al Jumhuriya"],
      "Erbil": ["Ainkawa", "Shorsh", "Khabat", "Soran", "Makhmour"],
      "Sulaymaniyah": ["Bakhtiari", "Zanko", "Ranya", "Qaladiza", "Chamchamal"],
      "Mosul": ["Al-Majmoua", "Rashidiya", "Zahra", "Al Faisaliah", "Al Nabi Younis"]
    },
    Oman: {
      "Muscat": ["Muttrah", "Seeb", "Bawshar", "Qurum", "Al Amerat"],
      "Salalah": ["Al Haffa", "Al Wadi", "Al Dahariz", "Awqad", "New Salalah"],
      "Sohar": ["Al Hambar", "Falaj Al Qabail", "Saham", "Liwa", "Shinas"]
    },
    Syria: {
      "Damascus": ["Mazzeh", "Barzeh", "Jaramana", "Bab Touma", "Rukn al-Din"],
      "Aleppo": ["Al Furqan", "Al Midan", "Al Shaar", "Hanano", "New Aleppo"],
      "Homs": ["Baba Amr", "Al Bayada", "Al Hamidiyah", "Al Waer", "Inshaat"],
      "Latakia": ["Al Ramel", "Tishreen", "Al-Ziraa", "Al-Qalaa", "Dahr El-Sheikh"]
    },
    Kuwait: {
      "Al Asimah": ["Kuwait City", "Sharq", "Mirqab", "Dasman", "Qibla"],
      "Hawalli": ["Salmiya", "Jabriya", "Rumaithiya", "Bayan", "Hawalli"],
      "Farwaniya": ["Al-Rai", "Ardiya", "Firdous", "Khaitan", "Omariya"]
    },
    Algeria: {
      "Algiers": ["Bab El Oued", "El Harrach", "Birkhadem", "Dely Ibrahim", "Hydra"],
      "Oran": ["El Hamri", "Ain El Turk", "Es Senia", "Gdyel", "Bir El Djir"],
      "Constantine": ["El Khroub", "Ali Mendjeli", "Sidi Mabrouk", "Ziadia", "Belaid Belgacem"]
    }
  };

  // region/state
  const regionOptions = Object.keys(countriesData[selectedCountry]).map(region => ({
    value: region,
    label: region
  }));
  const [selectedRegion, setSelectedRegion] = useState('Cairo');

  // city
  const cityOptions = countriesData[selectedCountry][selectedRegion] ? countriesData[selectedCountry][selectedRegion].map(city => ({
    value: city,
    label: city
  })) : [];
  const [selectedCity, setSelectedCity] = useState('Maadi');

  // reset default region whenever country changes
  useEffect(() => {
    setSelectedRegion(Object.keys(countriesData[selectedCountry])[0]);
  }, [selectedCountry]);

  // reset default region whenever country changes
  useEffect(() => {
    setSelectedCity(countriesData[selectedCountry][selectedRegion][0]);
  }, [selectedRegion]);

  // payment methods
  const paymentMethods = [
    { image: cashOnDeliveryImg, label: 'Cash on Delivery' },
    { image: venmoImg, label: 'Venmo' },
    { image: paypalImg, label: 'Paypal' },
    { image: amazonPayImg, label: 'Amazon Pay' },
    { image: creditCardImg, label: 'Debid/Credit Card' }
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pt-[100px] pb-16">
        <div className="flex flex-col gap-5">
          <PathNav links={[{ path: '/cart', title: 'Shopping Cart' }, { path: '/checkout', title: 'CheckOut' }]} />
          <div className="flex flex-col gap-10">
            {/* billing info + order summary */}
            <div className='flex flex-col lg:flex-row gap-10'>
              {/* billing info */}
              <div className="flex flex-col gap-5 lg:w-2/3">
                <h2 className="text-xl font-semibold">Billing Information</h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
                  {/* first name */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="first-name" className='text-sm font-normal'>
                      First Name
                    </label>
                    <input type="text" name="firstName" id="first-name"
                      className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                      rounded outline-none ps-3' />
                  </div>
                  {/* last name */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="last-name" className='text-sm font-normal'>
                      Last Name
                    </label>
                    <input type="text" name="lastName" id="last-name"
                      className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                      rounded outline-none ps-3' />
                  </div>
                  {/* country */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="country" className='text-sm font-normal'>Country</label>
                    <Select
                      options={countryOptions}                      
                      value={{value: selectedCountry, label: selectedCountry}}
                      onChange={(selected) => setSelectedCountry(selected.value)}
                      styles={{
                        option: (provided, state) => ({
                          ...provided,
                          // Add bottom border color only for hovered item
                          backgroundColor: state.isFocused ? '#f5f5f5' : 'white',
                          color: state.isFocused ? "#C59B2D" : "black",
                          padding: 10,
                        }),
                        control: (provided, state) => ({
                          ...provided,
                          borderColor: state.isFocused ? '#C59B2D' : '#e5e5e5',
                          "&:hover": { borderColor: '#C59B2D' },
                          boxShadow: 'none'
                        }),
                        menuList: (provided) => ({
                          ...provided,
                          maxHeight: '180px',
                          overflowY: 'auto'
                        })
                      }}
                    />
                  </div>
                  {/* region/state */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="region" className='text-sm font-normal'>Region/State</label>
                    <Select
                      options={ regionOptions}                      
                      value={{ value: selectedRegion, label: selectedRegion }}
                      onChange={(selected) => setSelectedRegion(selected.value)}
                      styles={{
                        option: (provided, state) => ({
                          ...provided,
                          // Add bottom border color only for hovered item
                          backgroundColor: state.isFocused ? '#f5f5f5' : 'white',
                          color: state.isFocused ? "#C59B2D" : "black",
                          padding: 10,
                        }),
                        control: (provided, state) => ({
                          ...provided,
                          borderColor: state.isFocused ? '#C59B2D' : '#e5e5e5',
                          "&:hover": { borderColor: '#C59B2D' },
                          boxShadow: 'none'
                        }),
                        menuList: (provided) => ({
                          ...provided,
                          maxHeight: '180px',
                        })
                      }}
                    />
                  </div>
                  {/* city */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="city" className='text-sm font-normal'>City</label>
                    <Select
                      options={cityOptions}                      
                      value={{ value: selectedCity, label: selectedCity }}
                      onChange={(selected) => setSelectedCity(selected.value)}
                      styles={{
                        option: (provided, state) => ({
                          ...provided,
                          // Add bottom border color only for hovered item
                          backgroundColor: state.isFocused ? '#f5f5f5' : 'white',
                          color: state.isFocused ? "#C59B2D" : "black",
                          padding: 10,
                        }),
                        control: (provided, state) => ({
                          ...provided,
                          borderColor: state.isFocused ? '#C59B2D' : '#e5e5e5',
                          "&:hover": { borderColor: '#C59B2D' },
                          boxShadow: 'none'
                        }),
                        menuList: (provided) => ({
                          ...provided,
                          maxHeight: '180px',
                        })
                      }}
                    />
                  </div>
                  {/* zip code */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="zip-code" className='text-sm font-normal'>
                      Zip Code
                    </label>
                    <input type="text" name="zipCode" id="zip-code"
                      className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                      rounded outline-none ps-3' />
                  </div>
                  {/* email */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='text-sm font-normal'>
                      Email
                    </label>
                    <input type="email" name="email" id="email"
                      className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                        rounded outline-none ps-3' />
                  </div>
                  {/* phone number */}
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="phone-number" className='text-sm font-normal'>
                      Phone Number
                    </label>
                    <input type="text" name="phoneNumber" id="phone-number"
                      className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                        rounded outline-none ps-3' />
                  </div>
                  {/* shipping check box */}
                  <div className='flex items-center justify-start gap-2 '>
                    <input type="checkbox" name="shippingAddress" id="shipping-address"
                      className='w-4 h-4 peer'/>
                    <label htmlFor="shipping-address"
                      className='peer-checked:text-yellowPrimary ease-linear duration-150 text-sm font-normal'>
                        Ship into different address
                    </label>
                  </div>
                  </form>
              </div>
              {/* order summary */}
              <div className="flex flex-col gap-5 lg:w-1/3">
                <h2 className='text-xl font-semibold'>Order Summary</h2>
                <div className='border border-neutral-300 rounded-lg px-3 py-5'>
                  <h3 className='text-sm font-semibold mb-5'>Order Summary</h3>
                  <ul>
                    <li className='flex items-center justify-between gap-5 mb-3'>
                      <span className='text-sm text-neutral-500'>Sub-Total</span>
                      <span className='text-base font-semibold text-["#000"]'>$320</span>
                    </li>
                    <li className='flex items-center justify-between gap-5 mb-3'>
                      <span className='text-sm text-neutral-500'>Shipping</span>
                      <span className='text-base font-semibold text-green-600'>Free</span>
                    </li>
                    <li className='flex items-center justify-between gap-5 mb-3'>
                      <span className='text-sm text-neutral-500'>Discount</span>
                      <span className='text-base font-semibold text-["#000"]'>$24</span>
                    </li>
                    <li className='flex items-center justify-between gap-5 mb-3'>
                      <span className='text-sm text-neutral-500'>Tax</span>
                      <span className='text-base font-semibold text-["#000"]'>$61.99</span>
                    </li>
                  </ul>
                  {/* total */}
                  <div className='flex items-center justify-between gap-5 pt-3 pb-6 border-t border-t-neutral-300'>
                    <span className='text-lg font-medium'>Total</span>
                    <span className='text-base font-semibold text-["#000"]'>$357.99 USD</span>
                  </div>
                  {/* place order */}
                  <button onClick={() => navigate('/acccount/confirm-order')}
                    className='w-full uppercase text-white text-sm font-semibold px-3 bg-yellowPrimary h-12 rounded
                      flex items-center justify-center gap-2'>
                      Confirm Order <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
            {/* your order */}
            <div className='flex flex-col gap-3 lg:max-w-[calc(66.67%-40px)]'>
              <h2 className='text-xl font-semibold'>Your Order</h2>
              <div className='border border-neutral-300 rounded-lg px-3 py-5'>
                <h3 className='font-semibold mb-5 text-base'>
                  Shippment
                  <span className='text-neutral-500 ps-2'>(3 items)</span>
                </h3>
                <div className='flex flex-row flex-wrap gap-y-8 gap-x-10'>
                  <OrderSummary />
                  <OrderSummary />
                  <OrderSummary />
                </div>
              </div>
            </div>
            {/* payment method */}
            <div className='flex flex-col gap-0 border border-neutral-300 rounded-lg lg:max-w-[calc(66.67%-40px)]'>
              <h3 className='font-semibold text-base px-3 py-5'>
                Payment Option
              </h3>
              <div className='flex flex-wrap gap-x-0 gap-y-10 items-center justify-center px-3 py-8 border border-neutral-300 border-l-0 border-r-0'>
                {
                  paymentMethods.map((payment, index) => 
                    <div key={index}
                      className='border border-neutral-300 border-t-0 border-b-0'>
                      <label htmlFor={`payment-method-${index+1}`} 
                        className='flex flex-col items-center justify-center gap-5 cursor-pointer w-[150px] h-[120px]'>
                        <img src={payment.image} alt={payment.label} />
                        <span className='text-sm font-medium'>{payment.label}</span>
                        <input type="radio" name="paymentMethod" id={`payment-method-${index+1}`}
                          className='hidden peer'/>
                        {/* custom radio circle */}
                        <div className='w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-full cursor-pointer 
                         peer-checked:bg-yellowPrimary peer-checked:border-yellowPrimary transition'>
                          <div className='w-2.5 h-2.5 bg-white rounded-full'></div>
                        </div>
                      </label>
                    </div>
                  )
                }
              </div>
              <form className='flex flex-wrap gap-5 px-6 py-8'>
                {/* name on card */}
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor="name-on-card" className='text-sm font-normal'>
                    Name On Card
                  </label>
                  <input type="text" name="nameOnCard" id="name-on-card"
                    className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                    rounded outline-none ps-3' />
                </div>
                {/* card number */}
                <div className='flex flex-col gap-1 w-full'>
                  <label htmlFor="card-number" className='text-sm font-normal'>
                    Card Number
                  </label>
                  <input type="text" name="cardNumber" id="card-number"
                    className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                    rounded outline-none ps-3' />
                </div>
                {/* expire date */}
                <div className='flex flex-col gap-1 w-full sm:w-[calc(50%-10px)]'>
                  <label htmlFor="expire-date" className='text-sm font-normal'>
                    Expire Date
                  </label>
                  <input type="text" name="cardNumber" id="expire-date" placeholder='DD/YY'
                    className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                    rounded outline-none ps-3' />
                </div>
                {/* CVC */}
                <div className='flex flex-col gap-1 w-full sm:w-[calc(50%-10px)]'>
                  <label htmlFor="cvc" className='text-sm font-normal'>
                    CVC
                  </label>
                  <input type="text" name="CVC" id="cvc"
                    className='h-10 border border-neutral-300 focus:border-yellowPrimary ease-linear duration-150
                    rounded outline-none ps-3' />
                </div>
              </form>
            </div>
            {/* additional information */}
            <div className='flex flex-col gap-3 lg:max-w-[calc(66.67%-40px)]'>
              <h2 className='text-xl font-semibold'>Additional Information</h2>
              <div className='flex flex-col gap-2'>
                <label htmlFor="additional-info" className='font-medium text-base'>
                  Order Notes <span className='text-neutral-500 ps-2 text-sm'>(Optional)</span>
                </label>
                <textarea name="additionalInfo" id="additional-info" placeholder='Notes about your order, e.g. special notes for delivery'
                  className='w-full min-h-[160px] resize-none border border-neutral-300 rounded-lg outline-none
                    focus:border-neutral-400 ease-linear duration-150 p-5
                    placeholder:text-base placeholder:text-neutral-500'
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOut
