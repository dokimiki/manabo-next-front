"use client";

import { useRouter } from "next/navigation";
import FooterMenu from "@/src/components/FooterMenu";

export default function ManatoLayout({ children }: { children: React.ReactNode }): JSX.Element {
    const router = useRouter();
    return (
        <>
            <main>{children}</main>
            <FooterMenu router={router} selectedIcon="home" />
        </>
    );
}
