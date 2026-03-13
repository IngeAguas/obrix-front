import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, type JSX, useRef } from "react";

type ProtectedRouteProps = {
    children: JSX.Element;
};
export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0();
    const hasTriggeredLogin = useRef(false);
    useEffect(() => {
        if (!isLoading && !isAuthenticated && !hasTriggeredLogin.current) {
            hasTriggeredLogin.current = true;
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, loginWithRedirect]);

    if (isLoading) return <>Cargando...</>;

    if (error) return <>{error.message}</>;

    if (!isAuthenticated) return <>Redirigiendo...</>;

    return children;
}
