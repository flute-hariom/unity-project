import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";

const Contact = () => {
  useDocTitle("MLD | Molad e Konsult - Send us a message");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const messageData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      message: message,
    };

    console.log("Message Sent:", JSON.stringify(messageData, null, 2));
    Notiflix.Notify.success("Message has been sent successfully!");

    setEmail("");
    setPhone("");
    setMessage("");
    setLastName("");
    setFirstName("");
  };

  return (
    <>
      <NavBar />
      <div
        id="contact"
        className="contact flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 "
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20 "
          data-aos="zoom-in"
        >
          <form onSubmit={sendEmail}>
            <div className="w-full bg-gray-800 p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-center lg:text-left uppercase text-4xl text-orange-500 mb-4">
                We’d Love to Hear from You
              </h1>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  name="first_name"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  name="last_name"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  name="email"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="phone_number"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="my-2 w-full sm:w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  className="uppercase text-white font-mono bg-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg 
  shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-orange-600 
  transition-all duration-300 ease-in-out 
  hover:bg-gradient-to-r hover:from-orange-200 hover:via-orange-300 hover:to-orange-400 
  bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-orange-500/50"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
