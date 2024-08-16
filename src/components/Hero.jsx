

const Hero = () => (
  <div className="w-full overflow-hidden">
    {/* Navbar */}
    <nav className="sm:w-[70%] w-[90%] lg:w-[60%] mx-auto navbar h-[fit-content] flex justify-between p-3 items-center rounded-[100px] mt-4 px-7 animSlideFromTop">

      <div>
        <b className="text-xl font-bold text-black sm:text-2xl font-poppins">Saakura</b>
      </div>

      <div className="flex items-center gap-3">
        <a href="#" className="hidden text-xs text-gray-900 sm2:flex font-poppins">Features</a>
        <a href="#" className="hidden text-xs text-gray-900 sm2:flex font-poppins">AboutDev</a>
        <button className="text-[12px] sm:text-sm pink-btn ml-3 pink-glow"><a href="https://discord.com/api/oauth2/authorize?client_id=1263390964681019502&permissions=67584&scope=bot" target="_blank">Add To Discord</a></button>
      </div>

    </nav>

    {/* Hero */}
    <div className="flex flex-col w-full py-8 lg:flex-row lg:mt-4">

      <div className="w-full lg:w-[60%] flex flex-col gap-4 pl-3 md:pl-6 animSlideFromLeft">

        <div className="px-6 py-2 w-fit rounded-[100px] bg-gradient flex justify-center items-center light-shadow">
          <p className="text-sm text-black font-poppins">Created using <a className="font-semibold hover:underline" href="https://shapes.inc" target="_blank">shapes.inc</a></p>
        </div>

        <h1 className="text-5xl text-black font-poppins font-bold max-w-[90%] text-left">Embark on an Adventure with <span className="text-gradient">Saakura</span>: Your Digital Ally</h1>
        <h4 className="font-poppins text-gray-600 text-[16px] text-left max-w-[90%]">Step into the enchanting world of Saakura, a nature-loving student from Astralaya. With her blend of ancient wisdom and love for nature, Saakura offers guidance, insights, and a touch of magic. Join her on a serene journey where tradition meets exploration, and let her be your trusted companion in discovering the world’s wonders.</h4>

        <div className="flex gap-7">
          <button className="pink-btn pink-glow text-[16px]"><a href="https://discord.com/api/oauth2/authorize?client_id=1263390964681019502&permissions=67584&scope=bot" target="_blank">Add To Discord</a></button>
          <button className="pink-outline-btn pink-glow text-[16px]"><a href="https://discord.gg/cvAaQXv2j4" target="_blank">Join Discord</a></button>
        </div>

      </div>

      <div className="w-full lg:w-[40%] flex items-start justify-center mt-20 lg:mt-0 animSlideFromRight">
        <img className="w-[70%] sm:w-[55%] md:w-[45%] lg:w-[60%] h-auto rounded-3xl shadow" src="/saakura.png" alt="Saakura" />
      </div>

      <div>

      </div>

    </div>

    {/* Stats */}
    <div className="w-full sm:w-[70%] sm:mx-auto py-16 flex flex-wrap justify-center sm:justify-between px-3 items-center gap-4">

      <div className="flex items-center justify-center">
        <b className="text-5xl font-bold text-gradient font-poppins">5+</b>
        <span className="pl-3 text-lg text-gray-900 font-poppins">SERVERS ACTIVE</span>
      </div>

      <div className="flex items-center justify-center">
        <b className="text-5xl font-bold text-gradient font-poppins">10k+</b>
        <span className="pl-3 text-lg text-gray-900 font-poppins">MESSAGES SENT</span>
      </div>

      <div className="flex items-center justify-center">
        <b className="text-5xl font-bold text-gradient font-poppins">50+</b>
        <span className="pl-3 text-lg text-gray-900 font-poppins">FRIENDS</span>
      </div>

    </div>

  </div>
)

export default Hero
