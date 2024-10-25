import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 p-4 flex flex-col items-center space-y-4">
      {/* Contenedor principal con flex para los bloques de enlaces */}
      <div className="w-full flex justify-around">
        {/* Bloque de Política de Privacidad y Condiciones de Servicio */}
        <div className="flex items-center space-y-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">
                Política de Privacitat
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">
                Condicions de Servei
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloque de Empresas Relacionadas */}
        <div className="related-companies flex items-center space-y-2">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://enttia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                enttia.com
              </a>
            </li>
            <li>
              <a
                href="https://mobotixonline.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                mobotixonline.com
              </a>
            </li>
            <li>
              <a
                href="https://av.enttia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                av.enttia.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
