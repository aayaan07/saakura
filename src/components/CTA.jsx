
const CTA = () => {
  return (
    <div className="w-full my-[100px]">
      
      <div className="w-[90%] flex flex-col relative gap-5 items-start pl-4 pink-shadow bg-white rounded-3xl mx-auto py-6 overflow-hidden sm2:w-[80%] md:w-[70%] autoShow">
        <img src="/sakura-tree-2.png" alt="sakura tree" className="absolute w-[300px] top-0 right-0 sm2:w-[400px]"/>

        <h1 className="z-10 text-3xl font-bold text-gray-900 font-poppins sm2:max-w-[90%]">So, what are you waiting for? Chat with <span className="underline text-gradient">Saakura</span> now and explore new possibilities!</h1>

        <div className="z-10 flex gap-3">
          <button className="text-[16px] pink-btn pink-glow"><a href="https://discord.com/api/oauth2/authorize?client_id=1263390964681019502&permissions=67584&scope=bot" target="_blank">Add To Discord</a></button>

          <button className="text-[16px] pink-outline-btn pink-glow"><a href="https://discord.gg/cvAaQXv2j4" target="_blank">Join Discord</a></button>
        </div>

      </div>

    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA
