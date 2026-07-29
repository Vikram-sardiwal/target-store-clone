export default function ShopByCategoryCard({ image, title }) {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-full object-cover cursor-pointer ml-5"
      />

      <p className="font-bold text-xl cursor-pointer text-center -ml-10">
        {title}
      </p>
    </div>
  );
}