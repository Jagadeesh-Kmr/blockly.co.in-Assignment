const Content = () => {
  const socialImages = [
    "https://res.cloudinary.com/dakmxu3dl/image/upload/v1750914475/Facebook_Black_qjafir.jpg",
    "https://res.cloudinary.com/dakmxu3dl/image/upload/v1750913971/Koo_Black_ilhqjq.jpg",
    "https://res.cloudinary.com/dakmxu3dl/image/upload/v1750914576/Twitter_Bird_Black_jlouy7.jpg",
    "https://res.cloudinary.com/dakmxu3dl/image/upload/v1750914643/GitHub_Black_sxqqhc.jpg",
    "https://res.cloudinary.com/dakmxu3dl/image/upload/v1750914010/Instagram_Black_bfvclu.jpg",
    "https://res.cloudinary.com/dakmxu3dl/image/upload/v1750913971/Koo_Black_ilhqjq.jpg",
  ];

  const renderAboutUsView = () => (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left md:pr-[180px]">
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1750917579/Rectangle_giadi5.jpg"
          alt="computer"
          className="hidden md:block w-[240px] md:w-[280px]"
        />
        <div className="md:mr-[150px]">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-black dark:text-white">
            <span className="text-[40px]">T</span>his is it. ;)
          </h1>
          <p className="md:text-[16px] text-[14px] md:w-[800px] font-normal text-gray-800 dark:text-gray-300">
            Anish Kr. Sinha is an Indian{" "}
            <span className="font-bold text-black dark:text-white">
              UI/UX Designer & Front End Developer
            </span>{" "}
            with a passion for designing beautiful and functional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
            <br />
            <br />
            He holds a{" "}
            <span className="font-bold text-black dark:text-white">
              bachelor degree in Computer Applications.
            </span>{" "}
            During his graduation, he has been actively involved in the web design community for the last 3 years. He has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar,{" "}
            <span className="font-bold text-black dark:text-white">India.</span> Where he’s working as an independent creative.
            <br />
            <br />
            His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing{" "}
            <span className="font-bold text-black dark:text-white">3D floor plan.</span>
            <br />
            <br />
            When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
          </p>
        </div>
      </div>
    </>
  );

  const renderHomeView = () => (
    <>
      <div className="flex flex-col md:flex-row md:justify-evenly items-center pt-[140px] ml-0 mr-0 px-4 mb-16 text-center md:text-left space-y-10 md:space-y-0">
        <div className="flex flex-col items-center md:items-start max-w-md px-2 space-y-4">
          <p className="bg-gradient-to-r from-[#32F6F6] to-[#A6A79F] text-white w-[90px] p-2 rounded-[70px] rounded-tl-[100px] font-bold text-[20px]">
            Hello!
          </p>

          <p className="text-[25px] text-gray-900 dark:text-white font-bold">
            I’m{" "}
            <span className="border-b-2 border-gray-500 ml-2 text-gray-500 dark:border-gray-400 dark:text-gray-400">
              Anish
            </span>
          </p>

          <p className="text-[14px] md:text-[18px] text-gray-800 dark:text-gray-300 font-medium">
            UI/UX Designer, Front-End Developer & Thinker. Based in India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="bg-orange-500 text-white px-4 py-2 font-bold rounded-md hover:bg-orange-600 transition"
            >
              Download CV
            </button>
            <button
              type="button"
              className="bg-black text-white px-4 py-2 font-bold rounded-md hover:bg-gray-800 transition"
            >
              Get in Touch!
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1750913117/Hero_Image_xtv0ql.jpg"
            alt="hero"
            className="w-[180px] md:w-[280px] rounded-[10px] border-gray-300 mx-auto"
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="w-[1520px] min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden px-5 pb-20 max-md:w-[380px] transition-colors duration-300">
        <div id="Home">{renderHomeView()}</div>
        <div id="About">{renderAboutUsView()}</div>

        <div className="fixed bottom-4 left-4 z-50">
          <div className="flex flex-col flex-wrap gap-4 p-4 rounded-md">
            {socialImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`social-${index}`}
                className="w-8 h-8 rounded-full border-2 border-black p-1 dark:border-white"
              />
            ))}
          </div>
        </div>

        <div className="fixed bottom-24 right-4 z-50 md:mb-10">
          <p className="text-gray-500 dark:text-gray-300 text-sm rotate-90 origin-right md:origin-bottom whitespace-nowrap">
            sinhaanishkumar@outlook.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
