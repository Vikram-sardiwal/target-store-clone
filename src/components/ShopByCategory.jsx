import ShopByCategoryCard from "./ShopByCategoryCard";
import img1 from "../assetsOne/clearance138104-180815_1534365588269.webp";
import img2 from "../assetsOne/GUEST_3d687ca4-8572-4059-84a6-1d844aff4b1a.webp";
import img3 from "../assetsOne/GUEST_4e048cd8-a365-4162-b95c-f8a6d4995469.webp";
import img4 from "../assetsOne/GUEST_7a456e2d-9988-4e77-a8a8-bcb62574fd9f.webp";
import img5 from "../assetsOne/GUEST_8e7ca9bb-bb5f-4736-bf3e-42f2a77dd400.webp";
import img6 from "../assetsOne/GUEST_65d90a19-14e6-4d5c-92ad-01ba14daaf16.webp";
import img7 from "../assetsOne/GUEST_65d90a19-14e6-4d5c-92ad-01ba14daaf16.webp";
import img8 from "../assetsOne/GUEST_70e189b7-acd7-4710-92f4-9eecd067888b.webp";
import img9 from "../assetsOne/GUEST_d6f6af2d-fb1c-45e8-9ef3-1425a6a823d1.webp";
import img10 from "../assetsOne/GUEST_ee86cb3d-a974-4d85-8e1a-0cc40ee36382.webp";
import img11 from "../assetsOne/GUEST_f87a5e6c-bb60-4938-8173-971b67d5cdaa.webp";
import img12 from "../assetsOne/GUEST_f8866c34-684a-4d8a-8623-714cc0bfedbf.webp";

const offer = [
  {
    id: 1,
    image: img1,
    title: "All Deals",
    slug: "all-deals",
  },
  {
    id: 2,
    image: img2,
    title: "Household Essentials Deals",
    slug: "household-deals",
  },
  {
    id: 3,
    image: img3,
    title: "Clothing Deals",
    slug: "clothing-deals",
  },
  {
    id: 4,
    image: img4,
    title: "Grocery Deals",
    slug: "grocery-deals",
  },
  {
    id: 5,
    image: img5,
    title: "Home Deals",
    slug: "home-deals",
  },
  {
    id: 6,
    image: img6,
    title: "Weekly Deals",
    slug: "weekly-deals",
  },
  {
    id: 7,
    image: img7,
    title: "Clearance Deals",
    slug: "clearance-deals",
  },
  {
    id: 8,
    image: img8,
    title: "Back-to-School Deals",
    slug: "back-to-school-deals",
  },
  {
    id: 9,
    image: img9,
    title: "Toy Deals",
    slug: "toy-deals",
  },
  {
    id: 10,
    image: img10,
    title: "Electronics Deals",
    slug: "electronics-deals",
  },
  {
    id: 11,
    image: img11,
    title: "Weekly Deals",
    slug: "weekly-deals-2",
  },
  {
    id: 12,
    image: img12,
    title: "Beauty & Personal Care Deals",
    slug: "beauty-personal-care-deals",
  },
];

export default function ShopByCategory() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-6 gap-10">
        {offer.map((item) => (
          <ShopByCategoryCard
            key={item.id}
            image={item.image}
            title={item.title}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
}