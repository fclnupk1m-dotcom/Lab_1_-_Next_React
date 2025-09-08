import Head from "next/head";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Практична 1 — Next.js</title>
        <meta name="description" content="Головна сторінка прикладу Next.js" />
      </Head>
      <NavBar />
      <div className="card">
        <span className="badge">Next.js + React</span>
        <h1>Вітаємо!</h1>
        <p>Next.js</p>
      </div>
    </div>
  );
}
