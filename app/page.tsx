import Image from "next/image";
import Product from "./components/component1/product"
export default function Home() {
  return (
   <main className="bg-costom ">
    <div className="bg-costom ">
      <Product/>
      <Product/>
    </div>
   </main>
  );
}
