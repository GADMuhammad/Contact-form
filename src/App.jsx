import { motion } from "framer-motion";

function App() {
  const labelAndInputs = [
    {
      title: "First Name *",
      ID: "name",
      labelStyle: "order-1 max-lg:col-span-2",
      inputStyle: "order-3 max-lg:order-2 max-lg:col-span-2",
    },
    {
      title: "Last Name *",
      ID: "lastName",
      labelStyle: "order-2 max-lg:order-3 max-lg:col-span-2",
      inputStyle: "order-4 max-lg:col-span-2",
    },
    {
      title: "Email Address *",
      ID: "email",
      labelStyle: "order-5 max-lg:col-span-2",
      inputStyle: "col-span-2 order-6",
    },
    {
      title: "Message *",
      ID: "message",
      labelStyle: "order-8 col-span-2 mt-5 max-lg:col-span-2",
      inputStyle: "order-9 col-span-2 h-24 resize-none",
      textArea: true,
    },
  ];

  const checks = [
    {
      ID: "General",
      title: "General Enquiry",
      type: "radio",
      style: "order-7 border-2 border-solid border-Green200 max-lg:col-span-2",
    },
    {
      ID: "Support",
      title: "Support Request",
      type: "radio",
      style: "order-7 border-2 border-solid border-Green200 max-lg:col-span-2",
    },
    {
      ID: "consent",
      title: "I consent to be contract by the team",
      type: "checkbox",
      style: "order-10 my-3 col-span-2",
    },
  ];

  return (
    <>
      <h1 className="order-0 col-span-2 mb-5 text-4xl tracking-widest">
        Contact with Gad
      </h1>

      {labelAndInputs.map(({ title, ID, labelStyle, inputStyle, textArea }) => (
        <>
          <label
            key={ID}
            className={`tracking-wide ${labelStyle}`}
            htmlFor={ID}
          >
            {title}
          </label>

          {textArea ? (
            <textarea
              key={ID}
              id={ID}
              name={ID}
              required
              placeholder="Waiting for your contact. Muhammad Gad !"
              className={`rounded-md border-2 border-solid border-Green200 p-2 focus:outline-Green600 ${inputStyle}`}
            />
          ) : (
            <input
              key={ID}
              id={ID}
              name={ID}
              type="text"
              required
              className={`rounded-md border-2 border-solid border-Green200 p-2 focus:outline-Green600 ${inputStyle}`}
            />
          )}
        </>
      ))}

      <label className="order-7 col-span-2 mt-5 tracking-wide" htmlFor="query">
        Query Type *
      </label>

      {checks.map(({ ID, title, type, style }) => (
        <label
          key={ID}
          className={`flex cursor-pointer gap-3 rounded-md px-4 py-3 text-lg tracking-wide ${style}`}
          htmlFor={ID}
        >
          <input
            className="w-5 cursor-pointer accent-Green600"
            type={type}
            name="query"
            id={ID}
            value={ID}
            required
          />
          {title}
        </label>
      ))}

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.9 }}
        className="order-11 col-span-2 mt-3 rounded-md bg-Green600 py-6 text-xl tracking-widest text-white"
      >
        Submit
      </motion.button>
    </>
  );
}

export default App;
