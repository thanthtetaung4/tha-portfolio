import { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

Modal.setAppElement("#root");

const ContactMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(isModalOpen);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await emailjs.send(
        "service_2j8j3ak",
        "template_ecafti5",
        templateParams,
        "XRcdAL0MZ8OP85NjO",
      );
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
      // Handle email sending errors here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact" className="w-screen bg-white text-primary lg:h-screen">
      <div className="relative flex items-center justify-center md:py-24 lg:h-[97%] lg:px-40">
        <div className="w-4/6">
          <div className="flex-col items-center justify-center text-center lg:mb-4">
            <h2 className="font-bold md:text-3xl lg:mb-4 lg:text-4xl">
              Send Me A Message!
            </h2>
            <p className="md:text-xl lg:text-2xl">
              Is there anything you&#39;d like to <br />
              chat about or share?
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full grid-cols-2 gap-x-3 md:my-10 md:gap-y-10 lg:mb-4 lg:gap-y-5">
              <div className="flex-col items-center justify-center">
                <label htmlFor="name" className="block text-base lg:mb-1">
                  Your Name
                  {errors.name && (
                    <span className="ml-2 text-red-600">Name is required</span>
                  )}
                </label>

                <input
                  type="text"
                  className="w-full border border-primary p-1 focus:border-secondary focus:outline-none "
                  name="name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex-col">
                <label htmlFor="email" className="block text-base lg:mb-1">
                  Your Email
                  {errors.email && (
                    <span className="ml-2 text-red-600">Email is required</span>
                  )}
                </label>

                <input
                  type="email"
                  className="w-full border border-primary p-1 focus:border-secondary focus:outline-none"
                  name="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="col-span-2 flex-col">
                <label htmlFor="message" className="block text-base lg:mb-1">
                  Your Message
                  {errors.message && (
                    <span className="ml-2 text-red-600">
                      Message is required
                    </span>
                  )}
                </label>

                <textarea
                  className="w-full resize-none border border-primary p-1 focus:border-secondary focus:outline-none lg:h-32"
                  name="message"
                  {...register("message", { required: true })}
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-center ">
              <Button disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "SEND"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Message Sent"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "25%",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#fff",
          },
        }}
      >
        <div className="flex-col items-center justify-center">
          <h2 className="mb-4 text-center font-bold text-primary lg:text-2xl">
            Message Sent!
          </h2>
          <p className="text-center text-primary lg:text-lg">
            Thank you for your message.
          </p>
          <div className="flex justify-center">
            <button
              className="mt-4 block rounded border border-primary px-5 py-1 text-primary transition delay-100 ease-in-out hover:bg-primary hover:text-white"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
      <div className="hidden h-[3%] bg-purpleAccent lg:block"></div>
    </main>
  );
};

export default ContactMe;
