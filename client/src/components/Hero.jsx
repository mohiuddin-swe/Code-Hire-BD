import { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Hero = () => {

    const { setSearchFilter, setIsSearched } = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
    }

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className='bg-gradient-to-b from-[#0047AB] to-[#000000] text-white py-16 text-center mx-2 rounded-xl'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Get Coding Jobs From Tech Company</h2>
                <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore Top IT & Software Company from Bangladesh and Get your Desire Job!</p>
                <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto'>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.search_icon} alt="" />
                        <input type="text"
                            placeholder='Search for jobs'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={titleRef}
                        />
                    </div>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-5' src={assets.location_icon} alt="" />
                        <input type="text"
                            placeholder='Location'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={locationRef}
                        />
                    </div>
                    <button onClick={onSearch} className='bg-black px-6 py-2 rounded text-white m-1'>Search</button>
                </div>
            </div>

            <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
  <div className='flex justify-center gap-5 lg:gap-5 flex-wrap items-center w-full'>
    <p className='font-medium w-full text-center  text-lg lg:text-xl'>Trusted by</p>

    {/* Images from the public folder */}
    <img src="/one.png" alt="Logo 1" className="h-20 object-contain" />
    
    <img src="/four.png" alt="Logo 4" className="h-20 object-contain" />
    <img src="/three.png" alt="Logo 3" className="h-20 object-contain" />
   
    <img src="/seven.jpeg" alt="Logo 2" className="h-20 object-contain" />
     
      <img src="/five.png" alt="Logo 5" className="h-20 object-contain" />
      <img src="/six.png" alt="Logo 5" className="h-20 object-contain" />
  </div>
</div>


        </div>
    )
}

export default Hero