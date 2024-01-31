import dev from "../assets/dev.svg";

const OverTheYear = () => {
  return (
    <main className="bg-primary h-screen w-screen lg:px-32 lg:py-24">
      <div className="h-full text-white lg:grid lg:grid-cols-2">
        <div className="lg:h-full lg:p-3">
          <h2 className="text-secondary font-bold lg:text-3xl">
            Over the year,
          </h2>
          <p className="lg:mt-1">
            In school, I tackled different projects that taught me a lot and
            shaped my tech skills.
          </p>
          <p className="lg:mt-3">
            <span className="font-bold">AnalytixNexa</span>: Final Year Project:
            For my big finale, I rolled out AnalytixNexa, a web tool for
            crunching data. It was like bringing textbook theories to life and
            solving real-world problems.
          </p>

          <p className="lg:mt-3">
            <span className="font-bold">DVD Store Project</span>: I got into the
            nitty-gritty of algorithms and data structures with the DVD Store
            project. It was all about problem-solving and laying the groundwork
            for my techie side.
          </p>

          <p className="lg:mt-3">
            <span className="font-bold">
              Surfect - Singapore Tour Guide Website
            </span>
            : Next up was Surfect, a website helping folks explore Singapore.
            This one let me mix creativity with tech, making a site that&#39;s
            not just cool but also useful.
          </p>

          <p className="lg:mt-3">
            <span className="">Smart Street Lamp</span>: IoT Prototype: I took a
            swing at IoT with the Smart Street Lamp prototype. It was a chance
            to put what I learned into action, playing around with the latest
            tech.
          </p>

          <p className="lg:mt-3">
            <span className="font-bold">Tech Lead at SCS PSBA</span>: Beyond
            classes, I took the reins as a Tech Lead at SCS PSBA. Basically, I
            help lead the tech crew, making sure everyone&#39;s on the same page
            and getting things done.
          </p>
        </div>
        <div className="items-center justify-center lg:flex lg:h-full">
          <img src={dev} alt="" className="lg:w-7/12" />
        </div>
      </div>
    </main>
  );
};

export default OverTheYear;
