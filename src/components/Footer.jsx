import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="h-screen w-screen bg-purpleAccent text-secondary">
      <div className="h-full lg:grid lg:gap-y-60 lg:px-32 lg:pt-28">
        <div className=" ">
          <h2 className="font-bold lg:text-xl">Email Me:</h2>
          <h3 className="underline lg:text-lg">
            <a href="mailto:thanthtetaung3502@gmail.com">
              thanthtetaung3502@gmail.com
            </a>
          </h3>
        </div>
        <div className="w-full border-t lg:grid lg:h-2/6 lg:grid-cols-2 lg:py-4">
          <h2 className="lg:text-xl">© Thant Htet Aung 2024</h2>
          <div className="flex justify-end gap-x-5">
            <a href="https://github.com/thanthtetaung4" target="blank">
              <FaGithub className="cursor-pointer transition delay-100 ease-in-out hover:text-white lg:ml-4 lg:text-4xl" />
            </a>
            <a href="https://www.instagram.com/thaaaa.zip/" target="blank">
              <FaInstagram className="cursor-pointer transition delay-100 ease-in-out hover:text-white lg:ml-4 lg:text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/thant-htet-aung/"
              target="blank"
            >
              <FaLinkedinIn className="cursor-pointer transition delay-100 ease-in-out hover:text-white lg:ml-4 lg:text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
