import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    fullname: "",
    mobilenumber: "",
    city: "",
    pincode: "",
    fulladdress: "",
  });

  const [error, setError] = useState({
    fullname: "",
    mobilenumber: "",
    city: "",
    pincode: "",
    fulladdress: "",
  });

  const handledata = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // User type kare to us field ka error clear ho jayega
    setError({
      ...error,
      [name]: "",
    });
  };

  const hanlesubmit = () => {
    const newError = {
      fullname: "",
      mobilenumber: "",
      city: "",
      pincode: "",
      fulladdress: "",
    };

    if (form.fullname.trim() === "") {
      newError.fullname = "Please enter your full name";
    }

    if (!/^\d{10}$/.test(form.mobilenumber)) {
      newError.mobilenumber = "Please enter a valid 10 digit number";
    }

    if (form.city.trim() === "") {
      newError.city = "Please enter your city";
    }

    if (!/^\d{6}$/.test(form.pincode)) {
      newError.pincode = "Please enter a valid 6 digit pincode";
    }

    if (form.fulladdress.trim() === "") {
      newError.fulladdress = "Please enter your full address";
    }

    setError(newError);

    // Agar koi error nahi hai
    if (
      !newError.fullname &&
      !newError.mobilenumber &&
      !newError.city &&
      !newError.pincode &&
      !newError.fulladdress
    ) {
      console.log("Order placed successfully", form);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-5">

          {/* DELIVERY ADDRESS */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
            <h2 className="text-xl sm:text-2xl font-bold mb-5">
              Delivery Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* FULL NAME */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  value={form.fullname}
                  onChange={handledata}
                  className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
                />

                {error.fullname && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 px-1 ">
                    {error.fullname}
                  </p>
                )}
              </div>

              {/* MOBILE */}
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobilenumber"
                  value={form.mobilenumber}
                  onChange={handledata}
                  className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
                />

                {error.mobilenumber && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 px-1 ">
                    {error.mobilenumber}
                  </p>
                )}
              </div>

              {/* CITY */}
              <div>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={form.city}
                  onChange={handledata}
                  className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
                />

                {error.city && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 px-1 ">
                    {error.city}
                  </p>
                )}
              </div>

              {/* PINCODE */}
              <div>
                <input
                  type="tel"
                  placeholder="Pincode"
                  name="pincode"
                  value={form.pincode}
                  onChange={handledata}
                  className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500"
                />

                {error.pincode && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1 px-1">
                    {error.pincode}
                  </p>
                )}
              </div>
            </div>

            {/* FULL ADDRESS */}
            <div className="mt-4">
              <textarea
                rows={4}
                placeholder="Full Address"
                name="fulladdress"
                value={form.fulladdress}
                onChange={handledata}
                className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />

              {error.fulladdress && (
                <p className="text-red-500 text-xs sm:text-sm mt-1 px-1 ">
                  {error.fulladdress}
                </p>
              )}
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Payment Method
            </h2>

            <div className="space-y-3 text-sm sm:text-base">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" />
                UPI
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow h-fit lg:sticky lg:top-5">

          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Order Summary
          </h2>

          <div className="flex gap-3 sm:gap-4 border-b pb-4">

            <img
              src="https://picsum.photos/100"
              alt="product"
              className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg shrink-0"
            />

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm sm:text-base truncate">
                Nike Running Shoes
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm">
                Qty : 1
              </p>

              <p className="font-bold text-red-600 text-base sm:text-lg">
                ₹2,499
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm sm:text-base">

            <div className="flex justify-between gap-4">
              <span>Subtotal</span>
              <span>₹2,499</span>
            </div>

            <div className="flex justify-between gap-4">
              <span>Shipping</span>
              <span>₹99</span>
            </div>

            <div className="flex justify-between gap-4 text-green-600">
              <span>Discount</span>
              <span>-₹500</span>
            </div>

            <hr />

            <div className="flex justify-between gap-4 font-bold text-lg sm:text-xl">
              <span>Total</span>
              <span>₹2,098</span>
            </div>

            <button
              onClick={hanlesubmit}
              className="w-full mt-5 bg-red-600 hover:bg-red-700 transition text-white py-3 px-4 rounded-lg font-semibold text-sm sm:text-base"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}