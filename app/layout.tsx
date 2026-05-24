import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Bot — Auto-generate changelogs from git commits",
  description: "Connect GitHub or GitLab, parse commits and PRs with AI, and publish beautiful release notes automatically. Built for open source maintainers and product teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="472c8d97-90f8-468d-8f6a-786ccf41ba0b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
