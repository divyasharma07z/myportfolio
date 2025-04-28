import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS credentials
    const serviceID = "service_830ljof"; // Your EmailJS service ID
    const templateID = "template_fb1bbyn"; // Your EmailJS template ID
    const userID = "7Dy7FlO5ZJDE9Iu_h"; // Your EmailJS user ID

    // Send the form data to EmailJS
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log("Message Sent: ", result.text);
        alert("Your message has been sent!");
        // Clear form fields
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("Error: ", error.text);
        alert("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-12"
      >
        Contact Me 📩
      </motion.h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-900 bg-opacity-70 p-8 rounded-3xl shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-300 text-lg mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-pink-500 focus:ring focus:ring-pink-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-lg mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-lg mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-green-500 focus:ring focus:ring-green-500"
            rows="5"
            required
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg shadow-md hover:opacity-90"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default ContactPage;
