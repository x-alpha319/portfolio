function Body() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-20 py-16 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="max-w-xl">
          <p className="text-2xl font-bold">Hello, I'm Victor, a</p>
          <br />
          <h1 className="text-4xl md:text-6xl font-extrabold text-lime-400 leading-tight mb-6">
            Full-Stack Developer
          </h1>
          <p className="text-gray-300 text-lg mb-3">
            Creating immersive digital experiences at the intersection of
            creativity and code.
          </p>
          <p className="text-gray-400 text-md mb-6">
            Specialized in building responsive web apps and securing digital
            systems.
          </p>
          <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 transition duration-300 shadow-lg">
            Let’s Connect
          </button>
        </div>

        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-lime-400 shadow-[0_0_80px_rgba(163,230,53,0.4)] animate-fadeIn">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-lime-400 mb-8 text-center tracking-wide">
          Skills
        </h2>

        <div className="overflow-x-auto">
          <div className="flex space-x-4 w-max px-2">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Tailwind CSS",
              "Bootstrap",
              "React JS",
              "Git & GitHub",
              "Node.js (Loading)",
            ].map((skill, index) => (
              <div
                key={index}
                className="min-w-[140px] text-center text-lime-400 font-bold border border-lime-400 rounded-xl px-4 py-3 hover:bg-lime-900 transition-all duration-300 shadow-md hover:shadow-lime-500/30"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
