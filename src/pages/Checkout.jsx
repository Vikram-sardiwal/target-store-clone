import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    fullname: "",
    mobilenumber: "",
    city: "",
    pincode: "",
    fulladdress: "",
  });

  const handledata = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
  
        <div className="lg:col-span-2 space-y-5">
          {/* Address */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Delivery Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={form.fullname}
                onChange={handledata}
                className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                name="mobilenumber"
                value={form.mobilenumber}
                onChange={handledata}
                className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="text"
                placeholder="City"
                name="city"
                value={form.city}
                onChange={handledata}
                className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="tel"
                placeholder="Pincode"
                name="pincode"
                value={form.pincode}
                onChange={handledata}
                className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Full Address"
              name="fulladdress"
              value={form.fulladdress}
              onChange={handledata}
              className="w-full mt-4 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
          </div>

    
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Payment Method
            </h2>

            <div className="space-y-3 text-sm sm:text-base">
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                UPI
              </label>

              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

      
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow h-fit lg:sticky lg:top-5">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            Order Summary
          </h2>

          <div className="flex gap-4 border-b pb-4">
            <img
              src="https://picsum.photos/100"
              alt="product"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base">
                Nike Running Shoes
              </h3>

              <p className="text-gray-500 text-sm">Qty : 1</p>

              <p className="font-bold text-red-600 text-lg">
                ₹2,499
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹2,499</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹99</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹500</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg sm:text-xl">
              <span>Total</span>
              <span>₹2,098</span>
            </div>

            <button
              onClick={() => console.log(form)}
              className="w-full mt-5 bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}