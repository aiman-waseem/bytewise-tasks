import { useRouter } from "next/router"  // we need to import useRouter to extract route parameter which is product id
import productsData from '../product/products.json';

function ProductPage() {
  const router = useRouter();
  const { productName } = router.query;

  // Find the product based on the productId
  const product = productsData.find((p) => p.name === productName);

  return (
    <div>
      {product ? (
        <div>
          <h1>Product Page: {product.name}</h1>
          {/* Display product details based on product object */}
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
}

export default ProductPage;
