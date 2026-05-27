"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary">
      <div className="text-center bg-white p-12 shadow-xl border border-border">
        <h1 className="mb-4 text-6xl font-display font-bold text-burgundy">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link href="/" className="px-8 py-3 bg-burgundy text-white rounded-full font-semibold hover:bg-gold transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
