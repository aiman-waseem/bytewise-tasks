import Link from "next/link";
import productsData from '../product/products.json';

export default function ProductList() {
  return (
    <div>
      {productsData.map((p) => (
        // <h2 key={p.id}>{p.name}</h2>
        <Link href={`/product/${p.name}`}> {p.name} </Link>
      ))}
    </div>
  );
}
