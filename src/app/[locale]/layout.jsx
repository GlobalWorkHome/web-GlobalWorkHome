import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { raleway, roboto } from "@/fonts";
import "./globals.css";

import { Waitlist } from "@/modules/waitlist/views/Waitlist";


export const metadata = {
  title: "Global Work Home",
  description: "Find the best remote jobs",
}

export default async function RootLayout({ children, params: { locale } }) {

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();


  // Para Mostrar la Waitlist, añadir en el archivo .env la variable SHOW_WAITLIST=true
  // Para Ocultar la Waitlist, quitar ó dejar sin valor en el archivo .env la variable SHOW_WAITLIST=
  if (process.env.SHOW_WAITLIST || process.env.NODE_ENV === 'production') {
    return (
      <html lang={locale}>
        <body
          className={`${raleway.variable} ${roboto.variable} antialiased`}
        >
          <NextIntlClientProvider messages={messages}>
            <Waitlist />
          </NextIntlClientProvider>
        </body>
      </html>
    )
  }


  return (
    <html lang={locale}>
      <body
        className={`${raleway.variable} ${roboto.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
