import { useState } from "react";

export default function Profile() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handlersubmit = () => {
    const newError = {
      fullName: "",
      email: "",
      phone: "",
      city: "",
    };
    if (data.fullName === "") {
      newError.fullName="pls enter your full name";
    }
    if (data.city === "") {
      newError.city="pls enter your city";
    }
    if (data.email === "") {
      newError.email="pls enter your email";
    }
    if (data.phone === "") {
      newError.phone="pls enter your phone";
    }
    setError(newError);
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 md:py-8 px-3 sm:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="bg-white rounded-2xl shadow-md p-5 h-fit">
          <div className="flex flex-col items-center border-b pb-6">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-red-500"
            />

            <h2 className="mt-4 text-lg sm:text-xl font-bold text-center">
              Vikram Sardiwal
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm break-all text-center">
              vikramsardiwal22@gmail.com
            </p>
          </div>

          <nav className="mt-6 space-y-2">
            {[
              "👤 My Profile",
              "📦 My Orders",
              "❤️ Wishlist",
              "📍 Address",
              "💳 Payment",
              "⚙️ Settings",
            ].map((item) => (
              <button
                key={item}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium text-sm sm:text-base"
              >
                {item}
              </button>
            ))}

            <button className="w-full px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 font-semibold text-sm sm:text-base">
              Logout
            </button>
          </nav>
        </aside>

        <main className="lg:col-span-3 bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold">My Profile</h1>

            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg w-full sm:w-auto">
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div>
              <label className="text-gray-500 text-sm">Full Name</label>
              <input
                type="text"
                value={data.fullName}
                name="fullName"
                onChange={handler}
                className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />
              {error.fullName && <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1 px-1">{error.fullName}</p>}
            </div>

            <div>
              <label className="text-gray-500 text-sm">Email</label>
              <input
                type="email"
                value={data.email}
                name="email"
                onChange={handler}
                className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />
              {error.email && <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1 px-1 ">{error.email}</p>}
            </div>

            <div>
              <label className="text-gray-500 text-sm">Phone</label>
              <input
                type="text"
                value={data.phone}
                name="phone"
                onChange={handler}
                className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />
              {error.phone && <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1 px-1 ">{error.phone}</p>}
            </div>

            <div>
              <label className="text-gray-500 text-sm">City</label>
              <input
                type="text"
                value={data.city}
                name="city"
                onChange={handler}
                className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
              />
              {error.city && <p className="text-red-500 text-xs sm:text-sm md:text-base mt-1 px-1 ">{error.city}</p>}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto"
              onClick={handlersubmit}
            >
              Save Changes
            </button>

            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
              Cancel
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
