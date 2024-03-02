"use client";

// react/next.js
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex items-center gap-10 py-16">
            <Link
                className="text-[1.3rem] font-medium hover:text-slate-200 ease-in-out transition-all duration-300"
                href="https://github.com/Mark-Makarov/kevlar"
                target="_blank"
            >
                github.com/Mark-Makarov
            </Link>
        </div>
    );
};

export default Footer;
