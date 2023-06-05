import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:madhurexports11@gmail.com?body=${data.name}. &body=${data.message}`;
  };

  return (
    <div className="flex relative flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="py-24 md:col-span-2 space-y-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-2xl md:text-4xl text-center font-bold leading-6 text-gray-900">
            Contact
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-hidden drop-shadow-2xl sm:rounded-2xl">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sender Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      {...register("name", { required: true })}
                      placeholder=""
                      id="name"
                      autoComplete="name"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sender Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email-address"
                      {...register("SenderEmail", { required: true })}
                      placeholder=""
                      id="email-address"
                      autoComplete="email"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Receiver Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="receiver-name"
                      {...register("ReceiverName", { required: true })}
                      placeholder=""
                      id="receiver-name"
                      autoComplete="receiver-name"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Receiver Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email-address"
                      {...register("Receiver Email", { required: true })}
                      placeholder=""
                      id="email-address"
                      autoComplete="email"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      autoComplete="subject"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Message
                  </label>

                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      {...register("message", { required: true })}
                      placeholder=""
                      rows={4}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-center md:text-left sm:px-6">
              <button type="submit" className="btn-send">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
