import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ContactCardProps {
  href: string;
  icon: ReactNode;
  iconBgColor: string; // e.g., "bg-green-500" atau "bg-zinc-700"
  title: string;
  subtitle: string;
  value: string;
  external?: boolean;
}

export default function ContactCard({
  href,
  icon,
  iconBgColor,
  title,
  subtitle,
  value,
  external = false,
}: ContactCardProps) {


  const content = (
    <>
      <div
        className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-lime-600 group-hover:text-white mb-1">
        {title}
      </h3>
      <p className="text-lime-700/90 group-hover:text-white text-sm mb-3">
        {subtitle}
      </p>
      <span className="inline-flex items-center gap-2 text-lime-700 group-hover:text-white font-medium">
        {value}
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </>
  );

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-zinc-300 hover:bg-lime-600 hover:border-zinc-300/80 transition-all hover:scale-105"
    >
      {content}
    </a>
  ) : (
    <Link
      to={href}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-zinc-300 hover:bg-lime-600 hover:border-zinc-300/80 transition-all hover:scale-105"
    >
      {content}
    </Link>
  );
}
