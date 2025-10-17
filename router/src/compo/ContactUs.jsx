import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs
      .sendForm("service_fbnoc2g", "template_l83oneo", form.current, {
        publicKey: "PSX-lSY-9rwzEVk9Q",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col  w-auto gap-3  rounded-4xl  text-[0.5rem] md:text-[1rem] ">
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="user_name"
          className="bg-[#1e1e1e] outline-0 w-50 rounded-[5px] px-2 py-1 h-5"
        />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="user_email"
          className="bg-[#1e1e1e] outline-0 w-50 rounded-[5px] px-2 py-1 h-5"
        />
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          className="bg-[#1e1e1e] outline-0 w-50 h-15 p-2 rounded-[5px]"
        />
        <input
          type="submit"
          value="Send"
          className="bg-[#1e1e1e] cursor-pointer px-3 py-1 rounded-4xl  text-[0.5rem] md:text-[1rem] "
        />
      </div>
    </form>
  );
};
