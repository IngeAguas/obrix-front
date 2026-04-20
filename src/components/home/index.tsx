import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "../Footer";
import { MainMenu } from "../Navbar";
import { Button } from "../ui/button";
export default function Home() {
    return (
        <div className="relative flex flex-col w-full min-h-screen overflow-hidden">

            {/* 🖼️ BACKGROUND IMAGE */}
            <img
                src="/obrix.jpg"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
            />

            {/* 🧱 CONTENIDO */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <MainMenu />

                <div className="flex-grow flex items-center justify-center py-8">
                    <div className="flex flex-col gap-10 items-center text-center max-w-4xl">

                        {/* (puedes quitar este logo si ya está como background) */}
                        {/* <img src="/obrix.jpg" alt="logo" className="w-full max-w-md" /> */}

                        <div className="flex items-center gap-3 rounded-3xl bg-blue-50 px-6 py-2 border-zinc-400">
                            <CheckCircle2 className="text-blue-400" size={16} />
                            <span className="text-blue-400 font-medium">
                                Confiable por más de 50+ empresas de construcción
                            </span>
                        </div>

                        <h1 className="font-semibold text-xl md:text-[48px] max-w-165">
                            El nuevo ladrillo digital de la industria de la construcción
                        </h1>

                        <span className="max-w-165 text-sm md:text-xl">
                            O-BriX conecta constructoras, arquitectos e ingenieros directamente con fabricantes, optimizando compras y reduciendo costos entre el
                            <span className="text-primary font-semibold"> 30% y 45%.</span>
                        </span>

                        <Button>
                            Solicitar Acceso <ArrowRight />
                        </Button>

                        <div className="flex gap-4 md:gap-10 max-w-125 w-full justify-center">
                            <div className="flex flex-col md:flex-row gap-2">
                                <span className="font-semibold">2.5M</span> ahorrados
                            </div>
                            <div className="flex flex-col md:flex-row gap-2">
                                <span className="font-semibold">127</span> proyectos
                            </div>
                            <div className="flex flex-col md:flex-row gap-2">
                                <span className="font-semibold">8</span> países
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
            <a
                href="https://wa.me/573016111556"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
            >
                {/* Puedes usar un icono */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-6 h-6 fill-current"
                >
                    <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.894.757 5.722 2.197 8.216L0 32l7.566-2.155A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16.004C32 7.559 24.837.396 16 .396zm0 29.22c-2.563 0-5.076-.69-7.275-1.993l-.52-.309-4.49 1.279 1.302-4.374-.338-.536A13.36 13.36 0 0 1 2.64 16.396c0-7.36 5.986-13.346 13.36-13.346 7.36 0 13.346 5.986 13.346 13.346 0 7.374-5.986 13.36-13.346 13.36zm7.54-10.058c-.413-.207-2.445-1.206-2.822-1.345-.378-.14-.653-.207-.928.207-.275.413-1.066 1.345-1.308 1.62-.241.275-.482.31-.895.103-.413-.207-1.745-.643-3.324-2.05-1.228-1.095-2.056-2.45-2.296-2.863-.241-.413-.026-.636.181-.843.186-.185.413-.482.62-.723.207-.241.275-.413.413-.689.138-.275.069-.517-.034-.724-.103-.207-.928-2.24-1.272-3.066-.336-.807-.678-.697-.928-.71l-.79-.014c-.275 0-.724.103-1.103.517-.378.413-1.445 1.414-1.445 3.448 0 2.033 1.48 3.998 1.687 4.273.207.275 2.913 4.445 7.058 6.23.986.426 1.754.68 2.353.87.988.314 1.887.27 2.598.164.793-.118 2.445-1 2.79-1.965.344-.965.344-1.793.241-1.965-.103-.172-.378-.275-.79-.482z" />
                </svg>
            </a>
        </div>
    )
}