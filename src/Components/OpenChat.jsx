/* eslint-disable linebreak-style */
import React, { useState } from 'react';

export default function OpenChat() {
  // const [inputPrompt, setInputPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { question } = form;
    const prompt = question.value;

    // send request
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/openai/generatetext`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data);
      // reset form data
      form.reset();
    } catch (err) {
      console.error(err);
    }
  };
  // question response
  const chatResponse = response?.data?.slice(2);

  return (
    <div className="md:w-1/2 mx-auto">
      <div className="mb-2">
        <h2 className="text-xl font-semibold">
          Open
          <span className="text-cyan-500">Chat</span>
        </h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input className="w-full text-black px-2 py-2" type="text" name="question" placeholder="Write here as you want...." required />
          </div>
        </form>
        <div className="mt-2">
          <textarea
            className="w-full bg-white text-black px-2 py-2"
            name="message"
            value={`${
              chatResponse || ''
            }`}
            id=""
            cols="30"
            rows="8"
            disabled
            placeholder="Responses will be appear here......"
          />
        </div>
      </div>
    </div>
  );
}
