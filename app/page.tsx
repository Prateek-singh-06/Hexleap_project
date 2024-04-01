import Image from "next/image";
import Product from "./components/component1/product"
import Product2 from "./components/component2/product2"
export default function Home() {
  return (
   <main className="bg-costom border-2  h-auto ">
    <div className="bg-costom h-auto ">
      <Product/>
      <Product2/>
    </div>
   </main>
  );
}
