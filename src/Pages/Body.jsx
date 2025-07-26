function Body() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 md:px-16 py-10 ">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 ">
        {/* Text Content */}
        <div className="max-w-xl mt-10 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-500">
            Full-Stack Developer
          </h2>
          <p className="text-gray-300 mb-4">
            Building digital experiences that merge creativity with technology
          </p>
          <p className="text-gray-300 mb-6">
            Specializing in modern web development and cyber systems
          </p>
          <div className="flex space-x-4">
            <button className="border border-green-500 px-4 py-2 rounded text-green-500 hover:bg-green-500 hover:text-black font-semibold">
              Let's Connect
            </button>
          </div>
        </div>

        <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-[0_0_60px_rgba(34,197,94,0.5)] border-4 border-green-500">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Skills
        </h2>
        <marquee behavior="" direction="">
          <div className=" flex gap-6 text-center text-gray-300">
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4 hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_0_60px_rgba(34,197,94,0.5)]">
              HTML5
            </div>
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4  hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_60px_0px_rgba(34,197,94,0.5)]">
              CSS3
            </div>
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4  hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_60px_0px_rgba(34,197,94,0.5)]">
              JavaScript
            </div>
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4  hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_60px_0px_rgba(34,197,94,0.5)]">
              Tailwind CSS
            </div>
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4  hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_60px_0px_rgba(34,197,94,0.5)]">
              Bootstrap
            </div>
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4  hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_60px_0px_rgba(34,197,94,0.5)]">
              React JS
            </div>
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4  hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_60px_0px_rgba(34,197,94,0.5)]">
              Git & GitHub
            </div>
            <div className=" border border-green-500 text-green-500 font-bold rounded-lg p-4  hover:shadow-lg hover:bg-green-950 transition duration-800 shadow-[0_60px_0px_rgba(34,197,94,0.5)]">
              Node js(Loading)
            </div>
          </div>
        </marquee>
      </section>
    </div>
  );
}

export default Body;
