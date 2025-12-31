"use client";

import { motion } from "framer-motion";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const data = {
    firstName: form.get("firstName"),
    lastName: form.get("lastName"),
    email: form.get("email"),
    phone: form.get("phone"),
    jobTitle: form.get("jobTitle"),
    message: form.get("message"),
  };

  const res = await fetch("/api", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const result = await res.json();
  alert(result.msg);
};

export default function ContactPage() {
  return (
    <section className="bg-white text-gray-900 min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-24 md:py-32 pt-24 sm:pt-28">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">Get in Touch</h1>

        <p className="mt-4 sm:mt-6 text-gray-600">Reach Out to Us Today</p>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
          We are always available to answer your questions or discuss your
          project. Feel free to contact us through the form below.
        </p>
      </motion.div>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 sm:mt-20 md:mt-24 max-w-5xl"
        onSubmit={handleSubmit}
      >
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Input name="firstName" label="First name *" />
          <Input name="lastName" label="Last name *" />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
          <Input name="email" label="Email *" type="email" />
          <Input name="phone" label="Phone" />
        </div>

        {/* ROW 3 */}
        <div className="mt-6 sm:mt-8">
          <Select name="jobTitle" label="Job Title" />
        </div>

        {/* ROW 4 */}
        <div className="mt-6 sm:mt-8">
          <Textarea name="message" label="Tell Us About Yourself" />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="mt-10 sm:mt-12 w-full rounded-full bg-[#1368D6] py-3 sm:py-4 text-base sm:text-lg font-medium text-white hover:bg-[#0F5AB8] transition"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}

type InputProps = {
  name: string;
  label: string;
  type?: string;
};

function Input({ name, label, type = "text" }: InputProps) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full bg-white border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-[#1368D6] transition rounded"
      />
    </div>
  );
}

function Select({ name, label }: { name: string; label: string }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-2">{label}</label>
      <select
        name={name}
        className="w-full bg-white border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-[#1368D6] transition rounded"
      >
        <option className="bg-white">Developer</option>
        <option className="bg-white">Founder</option>
        <option className="bg-white">Marketing Manager</option>
        <option className="bg-white">Other</option>
      </select>
    </div>
  );
}

function Textarea({ name, label }: { name: string; label: string }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-2">{label}</label>
      <textarea
        name={name}
        rows={5}
        className="w-full bg-white border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-[#1368D6] transition resize-none rounded"
      />
    </div>
  );
}
