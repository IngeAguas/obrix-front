import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "../Footer";
import { MainMenu } from "../Navbar";
import { Button } from "../ui/button";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <MainMenu />
            <div className="flex-grow">
                <div className="flex flex-col justify-center gap-10 items-center">


                    <div className="flex items-center gap-3 rounded-3xl bg-blue-50 px-6 py-2 border-zinc-400">
                        <CheckCircle2 className={"text-blue-400"} size={16} />
                        <span className="text-blue-400 font-medium"> Confiable por más de 50+ empresas de contrucción</span>
                    </div>

                    <h1 className="font-semibold text-center text-4xl max-w-[500px]">
                        El nuevo ladrillo digital de la industria de la construcción
                    </h1>
                    <span className="max-w-[500px] text-center">
                        O-BriX conecta constructoras, arquitectos e ingenieros directamente con fabricantes, optimizando compras y reduciendo costos entre el <span className="text-primary font-semibold"> 30% y 45%.</span>
                    </span>
                    <Button className="py-5 px-9 ">
                        Solicitar Acceso <ArrowRight />
                    </Button>
                    <div className="flex gap-4 max-w-[500px] w-full justify-between">
                        <div>
                            <span className="font-semibold">2.5M</span> ahorrados 
                        </div>
                        <div>
                            <span className="font-semibold">127</span> proyectos
                        </div>
                        <div>
                            <span className="font-semibold">8</span> paises
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}