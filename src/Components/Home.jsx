/* eslint-disable linebreak-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/open-chat');
  };
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="text-center space-y-4">
        <h2 className="text-xl font-semibold">
          Would like to try new something?
        </h2>
        <button onClick={handleNavigate} type="button" className="font-bold bg-cyan-500 px-6 py-2 rounded-sm">Explore OpenChat</button>
      </div>
    </div>
  );
}
