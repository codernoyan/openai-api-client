/* eslint-disable linebreak-style */
import React from 'react';

export default function OpenChat() {
  return (
    <div className="md:w-1/2 mx-auto">
      <div className="mb-2">
        <h2 className="text-xl font-semibold">
          Open
          <span className="text-cyan-500">Chat</span>
        </h2>
      </div>
      <div>
        <form>
          <div>
            <input className="w-full text-black px-2 py-2" type="text" placeholder="Write here as you want...." />
          </div>
        </form>
        <div className="mt-2">
          <textarea className="w-full bg-white text-black px-2 py-2" name="message" id="" cols="30" rows="8" disabled placeholder="Responses will be appear here......" />
        </div>
      </div>
    </div>
  );
}
