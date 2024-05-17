export const metadata = {
  title: 'AboutUs'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      {children}
      &copy; next JS
    </div>
  );
}
