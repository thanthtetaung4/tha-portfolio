import heroImg from "../assets/HeroImg.svg";

const Hero = () => {
  return (
    <main>
      <div className="w-screen md:flex-col lg:h-screen">
        <div className="h-full lg:flex lg:h-[97%] lg:w-full ">
          <div className="bg-primary md:py-24 lg:h-full lg:w-8/12 lg:px-32">
            <div className="hidden lg:block lg:h-2/6"></div>
            <div className="flex items-start justify-center lg:h-2/6">
              <div className="w-8/12 md:w-6/12 lg:w-full">
                <h1 className="text-xl font-bold text-secondary md:text-3xl lg:text-4xl">
                  THANT HTET AUNG
                </h1>
                <h2 className="text-xl font-bold text-secondary md:text-3xl lg:text-4xl">
                  Frontend Developer
                </h2>
                <p className="text-base text-white md:text-lg lg:mt-3 lg:text-xl">
                  I love to think outside the box and bring creativity <br />
                  to every project I undertake.
                </p>
              </div>
            </div>
            <div className="md:mt-10 md:grid md:justify-items-center md:gap-y-4 lg:flex lg:h-2/6 lg:items-center lg:px-0">
              <p className="text-sm text-white md:w-6/12 md:text-base lg:text-lg">
                Passionate frontend developer dedicated to creating immersive
                user experiences.
              </p>
              <p className="text-sm text-white md:w-6/12 md:text-base lg:text-lg">
                Innovative problem solver, turning challenges into creative
                solutions with frontend expertise.
              </p>
            </div>
          </div>
          <div className="flex justify-center bg-secondary md:py-24 lg:h-full lg:w-4/12">
            <img
              src={heroImg}
              alt="hero img"
              className="md:w-4/12 lg:w-9/12 lg:translate-x-[-15rem]"
            />
          </div>
        </div>
        <div className="hidden bg-white lg:block lg:h-[3%]"></div>
      </div>
    </main>
  );
};

export default Hero;
