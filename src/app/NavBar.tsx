"use client"
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";

type CustomLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
};

const CustomLink = ({
  href,
  children,
  className = "",
  ...props
}: CustomLinkProps) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group ${pathName === href ? 'font-bold' : ''}`} {...props}>
      {children}
      <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5  group-hover:w-full  transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-28 py-10 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" className=" mr-4">
          Home
        </CustomLink>
        <CustomLink href="/about" className="mx-4">
          About
        </CustomLink>
        <CustomLink href="/projects" className="mx-4">
          Projects
        </CustomLink>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="text-sm">
        <CustomLink href="/github" target="_blank" className="mx-2">
          Github
        </CustomLink>
        <CustomLink href="/linkedin" target="_blank" className="mx-2">
          LinkedIn
        </CustomLink>
        <CustomLink href="/contact" target="_blank" className="mx-2">
          Contact
        </CustomLink>
      </nav>
    </header>
  );
};

export default NavBar;
