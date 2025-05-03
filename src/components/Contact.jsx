import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const serviceID = "service_830ljof";
    const templateID = "template_fb1bbyn";
    const userID = "7Dy7FlO5ZJDE9Iu_h";

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        setStatus("✅ Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus("❌ Failed to send. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/10"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
          Contact Me 📩
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm mb-2">Name</label>
            <div className="flex items-center bg-gray-900 rounded-xl px-4">
              <FiUser className="text-pink-400 mr-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-white focus:outline-none"
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Email</label>
            <div className="flex items-center bg-gray-900 rounded-xl px-4">
              <FiMail className="text-blue-400 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-white focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">Message</label>
            <div className="flex items-start bg-gray-900 rounded-xl px-4 py-2">
              <FiMessageCircle className="text-green-400 mt-3 mr-3" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-white focus:outline-none resize-none"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
          </div>

          {status && (
            <div className="text-sm text-center text-green-400">{status}</div>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
