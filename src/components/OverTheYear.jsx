import dev from "../assets/dev.svg";

const OverTheYear = () => {
  return (
    <main className="w-screen bg-primary md:py-24 lg:h-screen lg:px-32 lg:py-24">
      <div className="text-white md:grid md:justify-items-center md:bg-center md:bg-no-repeat lg:h-full lg:grid-cols-2 lg:bg-none">
        <div className="md:w-8/12 md:p-5 md:backdrop-blur-[4px] lg:h-full lg:w-full lg:p-3">
          <h2 className="font-bold text-secondary md:text-2xl lg:text-3xl">
            Over the year,
          </h2>
          <p className="md:mt-1 ">
            In school, I tackled different projects that taught me a lot and
            shaped my tech skills.
          </p>
          <p className="md:mt-3">
            <span className="font-bold">AnalytixNexa</span>: Final Year Project:
            For my big finale, I rolled out AnalytixNexa, a web tool for
            crunching data. It was like bringing textbook theories to life and
            solving real-world problems.
          </p>

          <p className="md:mt-3">
            <span className="font-bold">DVD Store Project</span>: I got into the
            nitty-gritty of algorithms and data structures with the DVD Store
            project. It was all about problem-solving and laying the groundwork
            for my techie side.
          </p>

          <p className="md:mt-3">
            <span className="font-bold">
              Surfect - Singapore Tour Guide Website
            </span>
            : Next up was Surfect, a website helping folks explore Singapore.
            This one let me mix creativity with tech, making a site that&#39;s
            not just cool but also useful.
          </p>

          <p className="md:mt-3">
            <span className="">Smart Street Lamp</span>: IoT Prototype: I took a
            swing at IoT with the Smart Street Lamp prototype. It was a chance
            to put what I learned into action, playing around with the latest
            tech.
          </p>

          <p className="md:mt-3">
            <span className="font-bold">Tech Lead at SCS PSBA</span>: Beyond
            classes, I took the reins as a Tech Lead at SCS PSBA. Basically, I
            lead the tech crew, making sure everyone&#39;s on the same page and
            getting things done.
          </p>
        </div>
        <div className="items-center justify-center md:flex md:w-6/12 lg:h-full lg:w-full">
          <img src={dev} alt="" className="hidden lg:block lg:w-7/12" />
        </div>
      </div>
    </main>
  );
};

export default OverTheYear;
