import { useRouter } from "next/router"  // we need to import useRouter to extract route parameter which is product id
export default function ProductDetails() {
    const router = useRouter()  //calling useRouter hook,  Hook returns router object. From this router object we access the query parameter object
    const productid = router.query.productid
  return (
    <div> <h1> Details about product {productid} </h1> </div>
  )
}
