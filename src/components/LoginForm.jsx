import { useState } from "react";
import img from "../assets/bullseye-tm.svg";

export default function LoginForm() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const inpNumber = (e) => {
    setNumber(e.target.value);
  };

  function handlesubmit() {
    if (number.length === 10) {
      setError("");
      setNumber("");
      console.log("success");
    } else {
      setError("pls valid 10 digit number");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 text-center">
      <img src={img} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />

      <p className="text-lg sm:text-xl font-bold mt-2">
        Sign in or create account
      </p>

      <p className="text-sm sm:text-lg md:text-xl mt-2 font-semibold bg-amber-50 p-4 sm:p-5 m-3 sm:m-5 rounded-lg max-w-md">
        By continuing, you agree to Target's terms and privacy policy
      </p>

      <input
        className="w-full max-w-xs sm:max-w-sm text-sm px-3 py-2 border border-gray-800 rounded-xl"
        type="tel"
        placeholder="Enter your mobile number"
        name="number"
        value={number}
        onChange={inpNumber}
      />
      {error && (
        <p className="text-red-600 text-sm sm:text-base md:text-lg mt-2 px-2 text-center">
          {error}
        </p>
      )}

      <button
        className="text-lg sm:text-2xl bg-red-500 p-3 m-4 sm:m-5 text-white rounded-4xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full max-w-xs sm:max-w-sm sm:w-64"
        onClick={handlesubmit}
      >
        Continue
      </button>

      <p className="text-base sm:text-xl font-bold">
        ___________or_____________
      </p>

      <button className="text-lg sm:text-2xl bg-red-500 p-3 m-4 sm:m-5 text-white rounded-4xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full max-w-xs sm:max-w-sm sm:w-64">
        Sign in with Passkey
      </button>

      <p className="text-xl sm:text-3xl text-cyan-600">What's Passkey</p>
    </div>
  );
}
