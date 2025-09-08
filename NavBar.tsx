import Link from "next/link";

export default function NavBar() {
  const items = [
    { href: "/", label: "Головна" },
    { href: "/about", label: "Про нас" },
    { href: "/contacts", label: "Контакти" },
  ];
  return (
    <nav className="nav">
      {items.map((it) => (
        <Link key={it.href} href={it.href}>{it.label}</Link>
      ))}
    </nav>
  );
}
