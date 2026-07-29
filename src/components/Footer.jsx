import img from "../assets/GUEST_ca8f1d56-9000-4407-be78-2c33be983dab.svg";

const footerLinks = {
  "About Us": [
    "About Target",
    "Careers",
    "News & Blog",
    "Target Brands",
    "Bullseye Shop",
    "Sustainability & Governance",
    "Press Center",
    "Advertise with Us",
    "Investors",
    "Affiliates & Partners",
    "Club Target",
    "Suppliers",
    "TargetPlus",
  ],
  Help: [
    "Target Help",
    "Returns",
    "Track Orders",
    "Recalls",
    "Contact Us",
    "Feedback",
    "Accessibility",
    "Security & Fraud",
    "Team Member Services",
    "Legal & Privacy",
  ],
  Stores: [
    "Find a Store",
    "Clinic",
    "Pharmacy",
    "Target Optical",
    "More In-Store Services",
  ],
  Services: [
    "Target Circle™",
    "Target Circle™ Card",
    "Target Circle 360™",
    "Target App",
    "Registry",
    "Same Day Delivery",
    "Order Pickup",
    "Drive Up",
    "Free 2-Day Shipping",
    "Shipping & Delivery",
    "More Services",
  ],
};

const legalLinks = [
  "Terms",
  "CA Supply Chain",
  "Privacy Policy",
  "Your CA Privacy Rights",
  "Your Privacy Choices",
  "Interest Based Ads",
  "Health Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">


      <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              {heading}
            </h3>

            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-red-600 hover:underline transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>


      <div className="border-t border-gray-300 py-6 flex justify-center">
        <img
          src={img}
          alt="Target Logo"
          className="w-40 sm:w-52 md:w-64 h-auto lg:w-[500px] "
        />
      </div>


      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center lg:justify-between gap-3">

          {legalLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-xs sm:text-sm hover:text-red-400 transition duration-200"
            >
              {link}
            </a>
          ))}

        </div>
      </div>

    </footer>
  );
}