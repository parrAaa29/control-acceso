import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 p-4 mt-4 flex items-center justify-around">
        <p className="text-gray-500 text-sm text-cente">
          Copyright &copy; {new Date().getFullYear()} Enttia - Control d&apos;Acc&eacute;s
        </p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">Pol&iacute;tica de Privacitat</Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">Condicions de Servei</Link>
          </li>
        </ul>
    </footer>
  );
};

export default Footer;
