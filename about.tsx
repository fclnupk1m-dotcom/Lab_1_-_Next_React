import Head from "next/head";
import NavBar from "@/components/NavBar";

export default function AboutPage() {
  return (
    <div className="container">
      <Head>
        <title>Про нас</title>
      </Head>
      <NavBar />
      <div className="card">
        <h1>Про нас</h1>
        <p>Практична №1 Next.js.</p>
      </div>
    </div>
  );
}
