import filler from "../assets/Filler.svg";

const Skills = () => {
  return (
    <main>
      <div className="h-screen w-screen bg-white lg:grid lg:grid-cols-2 lg:gap-2 lg:px-32 lg:py-40">
        <div className="relative lg:row-span-1 lg:h-full lg:px-3">
          <h2 className="text-primary font-bold lg:text-2xl">Frontend</h2>
          <p className="text-purpleAccent lg:mt-3 lg:text-lg">
            I&#39;m all about creating cool websites using React, Tailwind CSS,
            HTML, CSS, and JavaScript. It&#39;s not just pixels; it&#39;s making
            websites look awesome and work smoothly.
          </p>
        </div>
        <div className="lg:h-full lg:px-3">
          <h2 className="text-primary font-bold lg:text-2xl">Backend</h2>
          <p className="text-purpleAccent lg:mt-3 lg:text-lg">
            I also dive into the backend world with Node.js and Python. It might
            not be my main thing, but it&#39;s where the magic happens behind
            the scenes.
          </p>
        </div>
        <div className="translate-x-10">
          <img src={filler} alt="Filler Image" className="w-8/12" />
        </div>
        <div className="lg:h-full lg:px-3">
          <h2 className="text-primary font-bold lg:text-2xl">Database</h2>
          <p className="text-purpleAccent lg:mt-3 lg:text-lg">
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
