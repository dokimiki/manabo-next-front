"use client";

import { useRouter } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import FooterMenu from "@/src/components/FooterMenu";

export default function ManatoLayout({ children }: { children: React.ReactNode }): JSX.Element {
    const router = useRouter();
    return (
        <>
            <Header hasNewMail />
            <main>{children}</main>
            <Footer />
            <FooterMenu router={router} selectedIcon="home" />
        </>
    );
}
