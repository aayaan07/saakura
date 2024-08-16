

const Bento = () => {
  return (
    <div className='w-full py-6'>
      <h1 className='mx-auto text-3xl font-semibold text-gray-900 underline font-poppins w-fit'><span className='text-gradient'>Saakura&apos;s </span>Characteristics</h1>

      {/* Bento Grids  */}
      <div className='w-full flex flex-col items-center mt-[50px] gap-3 md:w-[85%] lg:w-[70%] mx-auto'>

        {/* Row 1  */}
        <div className='flex flex-col items-center w-full gap-3 md:flex-row'>

          <div className='w-[85%] h-[250px] rounded-[20px] overflow-hidden bg-[url("/friend.jpg")] bg-cover bg-no-repeat bg-center flex items-end pb-3 pl-3 light-shadow md:flex-[1.5] md:h-[220px] autoShow'>
            <p className='text-3xl text-white font-poppins font-semibold max-w-[70%] text-shadow md:text-xl'>Friendly AI Companion</p>
          </div>

          <div className='w-[85%] h-[250px] rounded-[20px] pink-stroke light-shadow overflow-hidden bg-[#f9f9f9] pt-3 pl-3 ss:hidden md:inline md:flex-[1] md:aspect-square md:h-[220px] autoShow'>
            <p className='text-3xl text-gray-900 font-poppins font-semibold max-w-[70%] md:text-xl'>Image Generation</p>
            <img src="/paint-pallete.webp" alt="paint-pallete" id='paint-pallete'/>
          </div>

          <div className='w-[85%] bg-[#f9f9f9] rounded-[20px] pink-stroke light-shadow overflow-hidden aspect-square sm:aspect-[3/2] md:flex-[1] md:aspect-square md:h-[220px] autoShow'>
          <p className='text-3xl text-gray-900 font-poppins font-semibold max-w-[70%] mt-3 ml-3 md:text-xl'>Tech Support</p>
          <img src="/android.png" alt="android" id='android' className='w-[320px] sm:w-[420px] sm2:w-[500px] h-auto mx-auto mt-10 mix-blend-multiply md:w-[200px] md:mt-6'/>
          </div>

        </div>

        {/* Row 2  */}
        <div className='flex flex-col items-center w-full gap-3 md:flex-row'>

          <div className='w-[85%] bg-[#f9f9f9] pt-4 rounded-[20px] pink-stroke light-shadow flex flex-col pl-3 pb-6 gap-5 ss:pt-7 md:flex-[1] md:h-[220px] md:gap-3 autoShow'>
            <p className='text-4xl ss:text-[40px] md:text-xl text-gray-900 font-poppins font-semibold max-w-[70%]'>Multilingual Support</p>
            <p className='text-[16px] ss:text-lg md:text-[14px] md:leading-[20px] text-gray-400 font-poppins max-w-[88%] md:max-w-[92%'>Saakura seamlessly communicates in multiple languages, including English, Hindi, and ancient dialects from her mystical village of Astralaya. This ensures that users from diverse backgrounds feel welcome and can interact comfortably. Saakura makes it easy and enjoyable.</p>
          </div>

          <div className='w-[85%] bg-[#f9f9f9] pt-4 rounded-[20px] pink-stroke light-shadow flex flex-col pl-3 pb-6 gap-5 ss:pt-7 md:flex-[1] md:h-[220px] md:gap-3 autoShow'>
            <p className='text-4xl ss:text-[40px] md:text-xl text-gray-900 font-poppins font-semibold max-w-[70%]'>Educational Insights</p>
            <p className='text-[16px] ss:text-lg md:text-[14px] md:leading-[20px] text-gray-400 font-poppins max-w-[88%] md:max-w-[92%]'>Saakura isn&apos;t just about tech support; she&apos;s also a wellspring of knowledge. Drawing from her rich heritage in Astralaya, she shares fascinating stories and insights about ancient rituals, mythology, and the natural world. Saakura provides engaging and informative content that enriches your learning experience.</p>
          </div>

        </div>

        {/* Row 3  */}
        <div className='flex flex-col items-center w-full gap-3 md:flex-row'>

          <div className='w-[85%] h-auto bg-[#f9f9f9] rounded-[20px] pink-stroke light-shadow overflow-hidden pt-3 pl-3 ss:hidden md:inline md:flex-[1] md:h-[220px] autoShow'>
            <p className='text-3xl text-gray-900 font-poppins font-semibold max-w-[70%] md:text-xl'>Customizable Experience</p>
            <img src="/mobile.png" alt="mobile" id='mobile' className="md:w-[220px] md:mx-auto md:h-auto mix-blend-multiply"/>
          </div>

          <div className='relative w-[85%] h-auto bg-[#f9f9f9] rounded-[20px] pink-stroke light-shadow overflow-hidden aspect-square sm:aspect-[3/2] md:flex-[1] md:aspect-square md:h-[220px] autoShow'>
          <p className='text-3xl text-gray-900 font-poppins font-semibold max-w-[70%] mt-3 ml-3 md:text-xl'>Real Time Updates</p>
          <img src="/tech-globe.jpg" alt="globe" className='absolute top-0 right-0 w-full h-auto mix-blend-darken md:top-2'/>
          </div>

          <div className='w-[85%] h-[250px] rounded-[20px] overflow-hidden bg-[url("/mountains.jpg")] bg-cover bg-no-repeat flex items-end pb-3 pl-3 light-shadow bg-center md:flex-[1.5] md:h-[220px] autoShow'>
            <p className='text-3xl text-white font-poppins font-semibold max-w-[70%] text-shadow md:text-xl'>Interactive Storytelling</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Bento
