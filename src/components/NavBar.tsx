"use client";

import { useState } from "react";
import Link from "next/link";
import { Content, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/WordMark";
import { usePathname } from "next/navigation";

type NavBarProps = {
    settings: Content.SettingsDocument;
};

export default function NavBar( { settings }: NavBarProps) {
    const [open, setOpen] = useState(false);
    const pathname  = usePathname(); 
  
  
    return (
  
      <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main">
        <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
            <Link href="/">
            <WordMark />
            <span className="sr-only">Wedloc</span>
            </Link>

            <ul className="flex gap-6">
                {settings.data.navigation.map((item) => {
                    if (item.cta_button) {
                        return (
                            <ButtonLink
                            key={item.label}
                            field={item.link}
                            onClick={() => setOpen(false)}
                            aria-current={
                              pathname.includes(asLink(item.link) as string)
                                ? "page"
                                : undefined
                            }
                          >
                            {item.label}
                          </ButtonLink>
                        );
                    }
                
                    return (
                        <li key={item.label}>
                          <PrismicNextLink
                            field={item.link}
                            className="inline-flex min-h-11 items-center"
                            aria-current={
                              pathname.includes(asLink(item.link) as string)
                                ? "page"
                                : undefined
                            }
                          >
                            {item.label}
                          </PrismicNextLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    </nav>
  )
}
