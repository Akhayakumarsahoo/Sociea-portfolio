"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import * as fpixel from "@/lib/fpixel";

function FacebookPixelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // The initial PageView is triggered by the inline script during initialization.
    // We only trigger pageview() on subsequent route/searchParam changes.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fpixel.pageview();
  }, [pathname, searchParams]);

  return null;
}

export default function FacebookPixel() {
  return (
    <>
      {/* Facebook Pixel Code */}
      <Script
        id="facebook-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fpixel.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Suspense fallback={null}>
        <FacebookPixelTracker />
      </Suspense>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${fpixel.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Facebook Pixel"
        />
      </noscript>
      {/* End Facebook Pixel Code */}
    </>
  );
}
