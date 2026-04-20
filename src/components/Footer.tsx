import { Separator } from "./ui/separator";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 w-full">
            <Separator className="w-full " />
            <div className="flex flex-col md:flex-row mx-auto justify-between gap-18 *:flex *:flex-col  py-6 px-18">

                {/* Contacto */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-4">
                        Contacto
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>Email: obrixcolombia@gmail.com</li>
                        <li>Teléfono: +57 301 611 1556</li>
                        <li>Dirección: Av 5 # 17N 03, Cúcuta, Colombia, 540001</li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-4">
                        Síguenos
                    </h3>
                    <div className="flex flex-col gap-4 *:flex *:gap-2 *:items-center">
                        <a href="https://www.facebook.com/OBriXCol?locale=es_LA" className="hover:text-white transition flex items-center"> <FaFacebook />Facebook</a>
                        <a href="#" className="hover:text-white transition"> <FaInstagram /> Instagram</a>
                        <a href="#" className="hover:text-white transition"> <FaLinkedin />LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="border-t border-gray-800 py-3 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} OBrix. Todos los derechos reservados.
            </div>
        </footer>
    );
}
