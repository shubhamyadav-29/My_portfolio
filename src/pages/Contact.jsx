import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_b855ww8",
        "template_4bozljr",
        formData,
        "swY4kujox44MPrYgM"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send message"));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen px-4 sm:px-6 md:px-10 py-12"
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          Contact Me
        </h2>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow"
        >
          <input
            required
            placeholder="Name"
            className="w-full p-3 rounded bg-slate-200 dark:bg-slate-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            required
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-slate-200 dark:bg-slate-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <textarea
            required
            rows="4"
            placeholder="Message"
            className="w-full p-3 rounded bg-slate-200 dark:bg-slate-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded
                       hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
