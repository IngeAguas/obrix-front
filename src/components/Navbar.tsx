import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function MainMenu() {
    const navigate = useNavigate();

    return (
        <div className="flex w-full  ">
            <Menubar className=" flex w-full items-center justify-between gap-4 py-9 ">
               <span className="text-foreground font-semibold">
                O-BriX
               </span>
                <div className="flex gap-16">

                    <MenubarMenu>
                        <MenubarTrigger onClick={() => navigate({ to: "/" })}>
                            Cómo funciona
                        </MenubarTrigger>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger onClick={() => navigate({ to: "/" })}>
                            Ventajas
                        </MenubarTrigger>
                    </MenubarMenu>
                    <Button className="text-end">
                        Solicitar Demo
                    </Button>



                </div>
               
            </Menubar>


        </div>
    );
}
