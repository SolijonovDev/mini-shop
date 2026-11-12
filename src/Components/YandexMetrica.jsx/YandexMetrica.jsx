'use client'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const counterId=114192018;

function MetricaTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!counterId || !window.ym) return

    const query = searchParams.toString()
    const url = query
      ? `${pathname}?${query}`
      : pathname

    window.ym(counterId, 'hit', url)
  }, [pathname, searchParams])

  return null
}

export const YandexMetrica=()=> {
  if (!counterId) return null

  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){
              (m[i].a=m[i].a||[]).push(arguments)
            };
            m[i].l=1*new Date();
            for (var j=0; j<document.scripts.length; j++) {
              if (document.scripts[j].src === r) return;
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0];
            k.async=1;
            k.src=r;
            a.parentNode.insertBefore(k,a);
          })(window, document, "script",
            "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${counterId}, "init", {
            defer: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });
        `}
      </Script>

      <Suspense fallback={null}>
        <MetricaTracker />
      </Suspense>
    </>
  )
}