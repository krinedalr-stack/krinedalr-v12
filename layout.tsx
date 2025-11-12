export const metadata = {
  title: 'Krinedalr',
  description: 'Welcome to Krinedalr app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
