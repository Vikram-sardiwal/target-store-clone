import { useParams, useNavigate } from "react-router-dom";
import { offer } from "./ProductList";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = offer.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="p-6 text-center">
        <p>Product nahi mila.</p>
        <button onClick={() => navigate("/")} className="text-cyan-700 underline">
          Wapas jaayein
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-72 h-72 object-cover rounded-lg shadow-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-cyan-900 text-white rounded"
      >
        ← Back to Categories
      </button>
    </div>
  );
}