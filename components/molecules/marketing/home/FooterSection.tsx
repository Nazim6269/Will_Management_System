import Link from "next/link";

// FooterSection.tsx
type Props = {
  title: string;
  links: string[];
};

const FooterSection = ({ title, links }: Props) => {
  return (
    <div className="space-y-4">
      <h4 className="text-xs tracking-[0.2em] uppercase text-blue46 font-libreBaskerville font-bold">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href="#"
              className="text-sm text-blue70 hover:text-white transition-colors"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
