import heroImg from "../assets/HeroImg.svg";

const Hero = () => {
  return (
    <main>
      <div className="h-screen w-screen md:flex-col ">
        <div className="h-full lg:flex lg:h-[97%] lg:w-full ">
          <div className="h-3/6 bg-primary lg:h-full lg:w-8/12 lg:px-32">
            <div className="h-2/6"></div>
            <div className="flex h-2/6 items-start justify-center">
              <div className="w-8/12 md:w-6/12 lg:w-full">
                <h1 className="text-xl font-bold text-secondary lg:text-4xl">
                  THANT HTET AUNG
                </h1>
                <h2 className="text-xl font-bold text-secondary lg:text-4xl">
                  Frontend Developer
                </h2>
                <p className="text-base text-white lg:mt-3 lg:text-xl">
                  I love to think outside the box and bring creativity <br />
                  to every project I undertake.
                </p>
              </div>
            </div>
            <div className="flex h-2/6 items-center px-5 lg:px-0">
              <p className="text-sm text-white lg:text-lg">
                Passionate frontend developer dedicated to creating immersive
                user experiences.
              </p>
              <p className="text-sm text-white lg:text-lg">
                Innovative problem solver, turning challenges into creative
                solutions with frontend expertise.
              </p>
            </div>
          </div>
          <div className="flex h-3/6 justify-center bg-secondary lg:h-full lg:w-4/12">
            <img
              src={heroImg}
              alt="hero img"
              className="w-9/12 lg:translate-x-[-15rem]"
            />
          </div>
        </div>
        <div className="hidden bg-white lg:block lg:h-[3%]"></div>
      </div>
    </main>
  );
};

export default Hero;
