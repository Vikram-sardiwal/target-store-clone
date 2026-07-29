import CategoryCard from "./CategoryCard";

import img1 from "../assets/GUEST_c1ad7a6b-b97e-41b2-8866-d358e24b53e3.webp";
import img2 from "../assets/GUEST_f7d3eca5-e877-4822-a1a1-00c7e6dce03a.webp";
import img3 from "../assets/GUEST_ee4c57ec-912e-4e19-b927-f4b9e5e05052.webp";
import img4 from "../assets/GUEST_b0c6c08a-3020-4ee4-a338-cf2aec2b3a62.webp";
import img5 from "../assets/GUEST_b6abc227-6476-435d-bf3e-ad775ccb16f5.webp";
import img6 from "../assets/GUEST_bbfb3a25-30ba-4a9c-a1b1-9dd919bcedf1.webp";
import img7 from "../assets/GUEST_74495715-e9f5-46b3-8a4c-a0c17b64844c.webp";
import img8 from "../assets/GUEST_df088d3e-4c60-4464-8f4f-bdd4a5112e46.webp";
import img9 from "../assets/GUEST_aaa2f1d3-41e1-493e-8e44-3b5b2f96d139.webp";
import img10 from "../assets/GUEST_7c5835e4-8267-496d-9445-a3189b4756a4.webp";

import groceryImg from "../assets/Grocery219475-200305_1583423555572.webp";
import beautyImg from "../assets/Beauty181103-190722_1563828945271.webp";

import img14 from "../assets/GUEST_0c17d970-1925-4954-9633-397ff4649464.webp";
import img15 from "../assets/GUEST_02166b88-e40e-4398-a3fa-90967a064c1a.webp";
import img16 from "../assets/GUEST_a3253fb8-4cd7-42c6-b0d4-fcfee00fab40.webp";
import img17 from "../assets/GUEST_4ef5c6db-9efe-4f62-8001-291270002204.webp";
import img18 from "../assets/clearance97188-171020_1508525411214.webp";

const categories = [
  { id: 1, image: img1, title: "New Arrivals", slug: "new-arrivals" },
  { id: 2, image: img2, title: "Fourth of July", slug: "fourth-of-july" },
  { id: 3, image: img3, title: "Women's", slug: "womans" },
  { id: 4, image: img4, title: "Men's", slug: "mens" },
  { id: 5, image: img5, title: "Kids", slug: "kids" },
  { id: 6, image: img6, title: "Baby", slug: "baby" },
  { id: 7, image: img7, title: "Home", slug: "home" },
  { id: 8, image: img8, title: "Kitchen & Dining", slug: "kitchen-dining" },
  { id: 9, image: img9, title: "Outdoor Living", slug: "outdoor-living" },
  { id: 10, image: img10, title: "Household Essentials", slug: "household-essentials" },
  { id: 11, image: groceryImg, title: "Grocery", slug: "grocery" },
  { id: 12, image: groceryImg, title: "Health & Wellness", slug: "health-wellness" },
  { id: 13, image: beautyImg, title: "Beauty", slug: "beauty" },
  { id: 14, image: img14, title: "Toys", slug: "toys" },
  { id: 15, image: img15, title: "Sports & Outdoors", slug: "sports-outdoors" },
  { id: 16, image: img16, title: "Electronics", slug: "electronics" },
  { id: 17, image: img17, title: "Apple", slug: "apple" },
  { id: 18, image: img18, title: "Deals", slug: "deals" },
];

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((item) => (
          <CategoryCard
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