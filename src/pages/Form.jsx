import React from "react";
import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    language: "C++",
    stdin: "",
    sourceCode: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/onsubmit", { ...values });
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Got some error submitting data: ", error);
    }
  };
  
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-lg mx-auto mt-8 mb-8 bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-lg"
      >
        <label
          htmlFor="username"
          className="block mb-2 font-semibold text-gray-800"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label
          htmlFor="language"
          className="block mb-2 font-semibold text-gray-800"
        >
          Preferred Code Language:
        </label>
        <select
          id="language"
          name="language"
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>

        <label
          htmlFor="stdin"
          className="block mb-2 font-semibold text-gray-800"
        >
          Standard Input (stdin):
        </label>
        <textarea
          id="stdin"
          name="stdin"
          rows="4"
          cols="50"
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        ></textarea>

        <label
          htmlFor="sourceCode"
          className="block mb-2 font-semibold text-gray-800"
        >
          Source Code:
        </label>
        <textarea
          id="sourceCode"
          name="sourceCode"
          rows="10"
          cols="50"
          onChange={(e) => handleChange(e)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        ></textarea>

        <input
          type="submit"
          value="Submit"
          className="bg-purple-800 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-purple-600"
        />
      </form>
    </div>
  );
};

export default Form;
