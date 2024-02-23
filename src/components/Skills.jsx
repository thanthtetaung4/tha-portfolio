import filler from "../assets/Filler.svg";

const Skills = () => {
  return (
    <main>
      <div className="md:bg-contained w-screen bg-white md:grid md:justify-items-center md:gap-y-5 md:bg-[url('./src/assets/Filler.svg')]  md:bg-center md:bg-no-repeat md:py-24 lg:grid lg:h-screen lg:grid-cols-2 lg:gap-2 lg:bg-none lg:px-32 lg:py-40">
        <div className="md:w-6/12 md:p-5 md:backdrop-blur-[2px] lg:row-span-1 lg:h-full lg:w-full lg:px-3">
          <h2 className="font-bold text-primary md:text-2xl">Frontend</h2>
          <p className="text-purpleAccent md:text-lg lg:mt-3">
            I&#39;m all about creating cool websites using React, Tailwind CSS,
            HTML, CSS, and JavaScript. It&#39;s not just pixels; it&#39;s making
            websites look awesome and work smoothly.
          </p>
        </div>
        <div className="md:w-6/12 md:p-5 md:backdrop-blur-[2px] lg:h-full lg:w-full lg:px-3">
          <h2 className="font-bold text-primary md:text-2xl">Backend</h2>
          <p className="text-purpleAccent md:text-lg lg:mt-3">
            I also dive into the backend world with Node.js and Python. It might
            not be my main thing, but it&#39;s where the magic happens behind
            the scenes.
          </p>
        </div>
        <div className="hidden lg:block lg:translate-x-10">
          <img src={filler} alt="Filler Image" className="w-8/12" />
        </div>
        <div className="md:w-6/12 md:p-5 md:backdrop-blur-[2px] lg:h-full lg:w-full lg:px-3">
          <h2 className="font-bold text-primary md:text-2xl">Database</h2>
          <p className="text-purpleAccent md:text-lg lg:mt-3">
            I&#39;m no stranger to databases, using Firebase, MongoDB, and
            MySQL. Making sure everything runs smoothly behind the scenes is
            just as important as the flashy stuff.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Skills;
