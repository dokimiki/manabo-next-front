"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import { IS_GATAG, GA_TAG_ID, pageview } from "@/src/libs/gtag";

export default function GoogleAnalytics(): JSX.Element {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!IS_GATAG) {
            return;
        }
        const url = pathname + searchParams.toString();
        pageview(url);
    }, [pathname, searchParams]);

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`} strategy="lazyOnload" />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TAG_ID}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
}
