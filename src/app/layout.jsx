import { raleway, roboto } from "@/fonts";
import "./globals.css";
import { Waitlist } from "@/modules/waitlist/views/Waitlist";

export const metadata = {
  title: "Global Work Home",
  description: "Find the best remote jobs",
}

export default function RootLayout({ children }) {

  // Para Mostrar la Waitlist, añadir en el archivo .env la variable SHOW_WAITLIST=true
  // Para Ocultar la Waitlist, quitar ó dejar sin valor en el archivo .env la variable SHOW_WAITLIST=
  if (process.env.SHOW_WAITLIST || process.env.NODE_ENV === 'production') {
    return (
      <html lang="en">
        <body
          className={`${raleway.variable} ${roboto.variable} antialiased`}
        >
          <Waitlist />
        </body>
      </html>
    )
  }


  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
