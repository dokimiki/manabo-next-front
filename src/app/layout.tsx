import { Reset, Theme } from "@radix-ui/themes";
import { Noto_Sans_JP } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.scss";
import { Suspense } from "react";
import GoogleAnalytics from "@/src/components/GoogleAnalytics/GoogleAnalytics";

const defaultUrl = process.env.VERCEL_URL !== undefined ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "manato",
    description: "中京大学のポータルサイト、Manaboの非公式クライアントです。",
};

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html className={notoSansJP.className} lang="ja">
            <Suspense>
                <head>
                    <GoogleAnalytics />
                </head>
                <body>
                    <Reset>
                        <Theme>{children}</Theme>
                    </Reset>
                </body>
            </Suspense>
        </html>
    );
}
