import { Link, useNavigate } from "react-router-dom";
import type { ReactNode, MouseEvent } from "react";

interface SmoothLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SmoothLink({
  href,
  children,
  className,
  onClick,
}: SmoothLinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Handle hash links for smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      if (onClick) onClick();
      return;
    }

    // Handle page navigation with transition
    if (href.startsWith("/")) {
      e.preventDefault();
      if (onClick) onClick();

      // Small delay for exit animation
      setTimeout(() => {
        navigate(href);
      }, 100);
      return;
    }
  };

  return (
    <Link to={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
