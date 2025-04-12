import SmoothScroll from "./Smooth/SmoothScroll";
import "./globals.css";


export const metadata = {
  title: "Hausbetreung",
  description: "Professionelle Hausbetreuung und Reinigungsdienste für Ihr Zuhause. Zuverlässig, gründlich und individuell auf Ihre Bedürfnisse abgestimmt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
