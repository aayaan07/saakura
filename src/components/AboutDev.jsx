
const AboutDev = () => {
  return (
    <div className="w-full mt-[50px]">
      <h1 className="mx-auto text-3xl font-bold text-gray-900 w-fit font-poppins autoShow">Our Team</h1>

      <div className="relative w-[90%] mx-auto flex flex-col items-center py-10 mt-10 shadow light-pink-gradient rounded-3xl overflow-hidden sm2:flex-row sm2:w-[80%] md:w-[75%] autoShow">
        <img src="/sakura-tree-1.png" alt="sakura tree" className="absolute top-0 left-[-5px] sm2:w-[600px] mix-blend-multiply" />

        <div className="flex flex-col items-center gap-[6px] mt-2 z-10 sm2:flex-1">
          <img src="/Aayaan.png" alt="profile" className="rounded-full w-[120px] aspect-square"/>
          <b className="text-2xl font-poppins">Aayaan Kumar</b>
          <p className="text-[16px] text-gray-600 font-poppins">Aka Blazeonix</p>
          <p className="text-lg font-semibold text-gray-600 font-poppins">Founder/Designer/Developer</p>
          <p className="text-[16px] text-gray-600 font-poppins flex gap-1"><img src="/location.png" alt="location" className="w-[20px] h-auto" />India</p>
          <button className="pink-outline-btn text-[16px] mt-2 pink-glow"><a href="https://discord.com/users/1033657886208954418" target="_blank">Contact Me</a></button>
        </div>

        <div className="w-[90%] mx-auto flex flex-col items-center gap-2 mt-10 z-10 sm2:flex-1 sm2:items-start sm2:mt-0">
          <p className="text-sm text-center text-gray-700 font-poppins sm2:max-w-[95%] sm2:text-[17px]">· A 17 y/o developer, sometimes designer also from India.</p>
          <p className="text-sm text-center text-gray-700 font-poppins sm2:max-w-[95%] sm2:text-[17px]">· Passionate about playing games.</p>
          <p className="text-sm text-center text-gray-700 font-poppins sm2:max-w-[95%] sm2:text-[17px]">· Enjoys exploring new technologies and tools.</p>
          <p className="text-sm text-center text-gray-700 font-poppins sm2:max-w-[95%] sm2:text-[17px]">· Enthusiastic about learning and improving coding skills.</p>
          <p className="text-sm text-center text-gray-700 font-poppins sm2:max-w-[95%] sm2:text-[17px]">· Likes to experiment with creative design projects.</p>
          <p className="text-sm text-center text-gray-700 font-poppins sm2:max-w-[95%] sm2:text-[17px]">· Enjoys collaborating with others on tech and gaming projects.</p>
          <p className="text-sm text-center text-gray-700 font-poppins sm2:max-w-[95%] sm2:text-[17px]">· Loves nature and dreams of traveling the world to learn about different cultures and ecosystems.</p>
        </div>

      </div>

    </div>
  )
}

export default AboutDev
