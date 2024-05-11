import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <NavBar/>
    <div className="flex justify-center items-center font-bold mt-24 md:text-5xl text-4xl">
    Ecom Navbar
    </div>
    </main>
  );
}
