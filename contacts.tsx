import Head from "next/head";
import NavBar from "@/components/NavBar";

export default function ContactsPage() {
  return (
    <div className="container">
      <Head>
        <title>Контакти</title>
      </Head>
      <NavBar />
      <div className="card">
        <h1>Контакти</h1>
        <p>Напишіть нам на <a href="mailto:hello@example.com">hello@fclnup.if.ua</a>.</p>
      </div>
    </div>
  );
}
