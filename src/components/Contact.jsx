import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-20 px-6 bg-black text-black dark:text-white transition-colors duration-300" >
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-pink-500">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {/* Contact Info */}
          <div className="md:w-1/3 space-y-8 text-pink-300">
            <div className="flex items-center gap-3">
              <FiPhone size={24} />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p>+251 912 345 678</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiMail size={24} />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>youremail@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin size={24} />
              <div>
                <p className="font-semibold text-white">Address</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/yourformid" // replace with your form action URL
            method="POST"
            className="md:w-2/3 bg-black/80 rounded-lg p-8 flex flex-col gap-6 shadow-lg"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-md px-12 py-3 bg-black/60 border border-pink-700 placeholder-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              <FiMail className="absolute left-4 top-3.5 text-pink-500" size={20} />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-md px-12 py-3 bg-black/60 border border-pink-700 placeholder-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              <FiMail className="absolute left-4 top-3.5 text-pink-500" size={20} />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full rounded-md px-4 py-3 bg-black/60 border border-pink-700 placeholder-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 transition rounded-md py-3 font-semibold text-white shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
