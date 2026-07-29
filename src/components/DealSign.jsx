export default function DealSign() {
  return (
    <>
      <div>
        {/* Sign In Section */}
        <div className="bg-[#e8f8f7] p-6 md:p-8 mx-4 md:mx-10 my-10 rounded-xl text-center cursor-pointer">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Want to save even more?
          </h1>

          <p className="mt-3 text-sm md:text-base text-gray-700">
            Get automatic deals as a Get.
          </p>

          <button className="mt-5 bg-red-500 hover:bg-red-600 text-white text-lg md:text-xl px-8 py-3 rounded-xl w-full sm:w-auto">
            Sign in
          </button>
        </div>

        {/* Category Heading */}
        <div className="flex justify-center items-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Shop by category
          </h1>
        </div>
      </div>
    </>
  );
}