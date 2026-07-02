import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#" },
  { name: "Categories", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "About", href: "#" },
];

export default function DesktopMenu() {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-300 transition hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}