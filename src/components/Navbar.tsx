import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { useNavigate } from "@tanstack/react-router"

export function MainMenu() {
    const navigate = useNavigate()

    return (
        <div className="flex w-full">
            <Menubar className="flex w-full items-center justify-between py-6 px-4">

                {/* LOGO */}
                <span className="text-foreground text-xl font-semibold">
                    O-BriX
                </span>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-16">
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

                    <Button>
                        Solicitar Demo
                    </Button>
                </div>

                {/* MOBILE MENU */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="flex flex-col gap-6 pt-10">

                            <Button
                                variant="ghost"
                                onClick={() => navigate({ to: "/" })}
                            >
                                Cómo funciona
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={() => navigate({ to: "/" })}
                            >
                                Ventajas
                            </Button>

                            <Button>
                                Solicitar Demo
                            </Button>

                        </SheetContent>
                    </Sheet>
                </div>

            </Menubar>
        </div>
    )
}