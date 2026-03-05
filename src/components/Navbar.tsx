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
                <img
                    src="/logo.jpeg"
                    alt="logo"
                    width={45}
                    height={45}
                    className=""
                    style={{ width: "65px", height: "65px" }}
                />
                <div className="flex gap-4">

                    <MenubarMenu>
                        <MenubarTrigger onClick={() => navigate({ to: "/" })}>
                            Home
                        </MenubarTrigger>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger onClick={() => navigate({ to: "/" })}>
                            Nosotros
                        </MenubarTrigger>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger onClick={() => navigate({ to: "/" })}>
                            Productos
                        </MenubarTrigger>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger onClick={() => navigate({ to: "/" })}>
                            Blog
                        </MenubarTrigger>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger onClick={() => navigate({ to: "/" })}>
                            Archivos PDF
                        </MenubarTrigger>
                    </MenubarMenu>


                </div>
                <Button className="text-end">
                    Registrarse
                </Button>
            </Menubar>


        </div>
    );
}
