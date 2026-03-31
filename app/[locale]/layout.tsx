import type {Metadata, Viewport} from 'next';
import {Noto_Sans_KR, Fira_Code} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import {isLocale, locales} from '@/i18n/routing';

import '../globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
} satisfies Viewport;

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('openGraphDescription'),
      siteName: 'txxt',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`dark ${notoSansKR.variable} ${firaCode.variable}`}>
      <body
        className="min-h-screen bg-white text-white antialiased"
        style={{
          overflowX: 'hidden',
          maxWidth: '100vw',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          <main
            style={{width: '100%', overflowX: 'hidden', paddingTop: '62px'}}
          >
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
