import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:manish@dowellresearch.in?body=${data.name}. &body=${data.message}`;
  };

  return (
    <div className="flex relative flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="py-20 md:col-span-2 space-y-6">
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
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Sender name"
                    id="name"
                    autoComplete="name"
                    className="form-input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="email-address"
                    {...register("SenderEmail", { required: true })}
                    placeholder="Sender Email"
                    id="email-address"
                    autoComplete="email"
                    className="form-input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="receiver-name"
                    {...register("ReceiverName", { required: true })}
                    placeholder="Receiver Name"
                    id="receiver-name"
                    autoComplete="receiver-name"
                    className="form-input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="email-address"
                    {...register("Receiver Email", { required: true })}
                    placeholder="Receiver Email"
                    id="email-address"
                    autoComplete="email"
                    className="form-input"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    autoComplete="subject"
                    className="form-input"
                  />
                </div>

                <div className="col-span-6">
                  <textarea
                    id="message"
                    name="message"
                    {...register("message", { required: true })}
                    placeholder="Message"
                    rows={4}
                    className="form-input"
                  />
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
