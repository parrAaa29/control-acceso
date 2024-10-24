import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 p-4 flex items-center justify-around">
        <p className="text-gray-500 text-sm text-cente">
          &copy; {new Date().getFullYear()} Enttia - Control d&apos;Accés
        </p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm p-4">Política de Privacitat</Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm p-4">Condicions de Servei</Link>
          </li>
        </ul>
    </footer>
  );
};

export default Footer;
