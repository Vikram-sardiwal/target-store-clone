import ProductListData from "./ProductListData";

import img1 from "../assetsTwo/GUEST_c627fe8d-949a-4e9f-8a73-d08c7fae96a7.webp";
import img2 from "../assetsTwo/GUEST_50daa3e6-6839-4cec-be13-034eacf87afe.webp";
import img3 from "../assetsTwo/GUEST_937fcee5-255e-4b3e-9061-0b575157b724.webp";
import img4 from "../assetsTwo/GUEST_8bccee4e-6328-4c73-b050-4204a6374909.webp";
import img5 from "../assetsTwo/GUEST_8335598f-385a-4b80-98b2-27eb6ed6d7bc.webp";
import img6 from "../assetsTwo/GUEST_5db40d3a-98ad-4484-83d5-ac355048f4ec.webp";
import img7 from "../assetsTwo/GUEST_575d4550-949d-4fe6-b51d-95a605d58fbb.webp";
import img8 from "../assetsTwo/GUEST_a651fc40-9168-4c03-a5e7-28e90496fe2f.webp";
import img9 from "../assetsTwo/GUEST_e844347f-ed80-4316-b950-1467f227b2c0.webp";
import img10 from "../assetsTwo/GUEST_6181a7e2-37ca-47fb-aeba-72c8df2c630e.webp";
import img11 from "../assetsTwo/images.jpg";
import img12 from "../assetsTwo/GUEST_1371aff6-f902-474c-9a58-197ddb4c5097.webp";
import img13 from "../assetsTwo/GUEST_5d7b9cc0-4d09-4955-acf2-5fb71298bb22.webp";
import img14 from "../assetsTwo/GUEST_a52f8481-c8a2-4447-bc6d-8a74a3dcb728.webp";
import img15 from "../assetsTwo/GUEST_e3f67f44-b93f-4169-9cbd-3356eeef9598.webp";
import img16 from "../assetsTwo/GUEST_ccd193f4-daef-4386-be59-1cc2f4ed73f6.webp";
import img17 from "../assetsTwo/GUEST_3641127f-f22a-4f6d-b06b-4a1250e2cfcf.webp";
import img18 from "../assetsTwo/GUEST_41f857ec-a7a4-42ba-bc0d-4eb69bfa1921.webp";

const offer = [
  { id: 1, image: img1, title: "Bottles & Campus Vibe", slug: "bottles-tumblers" },
  { id: 2, image: img2, title: "Make Your Dorm", slug: "make-dorm" },
  { id: 3, image: img3, title: "Room Essentials™", slug: "room-essentials" },
  { id: 4, image: img4, title: "Tech Study Essentials", slug: "tech-study" },
  { id: 5, image: img5, title: "Kitchen & Dining", slug: "kitchen-dining" },
  { id: 6, image: img6, title: "Self-Care Stock Up", slug: "self-care" },
  { id: 7, image: img7, title: "Furniture", slug: "furniture" },
  { id: 8, image: img8, title: "Bath", slug: "bath" },
  { id: 9, image: img9, title: "Storage & Organization", slug: "storage-organization" },
  { id: 10, image: img10, title: "Appliances", slug: "appliance" },
  { id: 11, image: img11, title: "Bedding", slug: "bedding" },
  { id: 12, image: img12, title: "Dorm Move-In Essentials", slug: "dorm-essentials" },
  { id: 13, image: img13, title: "Dorm Room Ideas", slug: "dorm-room" },
  { id: 14, image: img14, title: "The Hollister Collection", slug: "hollister-collection" },
  { id: 15, image: img15, title: "Desk Life", slug: "desk-life" },
  { id: 16, image: img16, title: "On The Wall Decor", slug: "wall-decor" },
  { id: 17, image: img17, title: "Clothing", slug: "clothing" },
  { id: 18, image: img18, title: "NCAA Fan Shop", slug: "ncaa-fan" },
];

export default function ProductList() {
  return (
    <section className="bg-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-900 underline underline-offset-8">
            ALL CATEGORIES
          </h1>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {offer.map((item) => (
            <ProductListData
              key={item.id}
              image={item.image}
              title={item.title}
              slug={item.slug}
            />
          ))}
        </div>

      </div>
    </section>
  );
}