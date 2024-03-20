"use client";

import WordMark from "@/components/WordMark"
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type NavBarProps = {
    settings: Content.SettingsDocument;
};

export default function NavBar( { settings }: NavBarProps) {
  return (
    <nav className="px-4 py-4 md:px-6 md-:py-6" aria-laberl="Main">
        <div className="mx-auto flex max-w-6xl flex-=col justify-between py-2 font-medium text-white md:flex-row md:items-center">
            <Link href="/">
            <WordMark />
            <span className="sr-only">Wedloc</span>
            </Link>

            <ul className="flex gap-6">
                {settings.data.navigation.map((item) => (
                    <li key={item.label}>
                        <PrismicNextLink field={item.link} className="inline-flex min-h-11 items-center">
                            {item.label}
                        </PrismicNextLink>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}
