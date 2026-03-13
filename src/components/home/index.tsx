import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "../Footer";
import { MainMenu } from "../Navbar";
import { Button } from "../ui/button";
export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <MainMenu />

            <div className="flex-grow flex items-center justify-center py-8">
                <div className="flex flex-col gap-10 items-center text-center max-w-4xl">

                    <div className="flex items-center gap-3 rounded-3xl bg-blue-50 px-6 py-2 border-zinc-400">
                        <CheckCircle2 className="text-blue-400" size={16} />
                        <span className="text-blue-400 font-medium">
                            Confiable por más de 50+ empresas de construcción
                        </span>
                    </div>

                    <h1 className="font-semibold text-[48px] max-w-165">
                        El nuevo ladrillo digital de la industria de la construcción
                    </h1>

                    <span className="max-w-165 text-xl">
                        O-BriX conecta constructoras, arquitectos e ingenieros directamente con fabricantes, optimizando compras y reduciendo costos entre el
                        <span className="text-primary font-semibold"> 30% y 45%.</span>
                    </span>

                    <Button >
                        Solicitar Acceso <ArrowRight />
                    </Button>

                    <div className="flex gap-10 max-w-[500px] w-full justify-center">
                        <div>
                            <span className="font-semibold">2.5M</span> ahorrados
                        </div>
                        <div>
                            <span className="font-semibold">127</span> proyectos
                        </div>
                        <div>
                            <span className="font-semibold">8</span> países
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}