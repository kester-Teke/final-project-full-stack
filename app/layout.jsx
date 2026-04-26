import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Football Team Manager Pro',
  description: 'Gestion d\'équipe de football professionnelle',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}