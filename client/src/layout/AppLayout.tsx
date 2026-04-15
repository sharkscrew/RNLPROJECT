import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "../contexts/SidebarContext";
import { HeaderProvider } from "../contexts/HeaderContext";

const LayoutContent = () => {
    return (
        <>
            <div>
                <AppSidebar />
            </div>
            <div>
                <AppHeader />
            </div>
            <div className="pt-20 px-4 sm:ml-64">
                <Outlet />
            </div>
        </>
    );
};

const AppLayout = () => {

    return (
        <>
            <HeaderProvider>
                <SidebarProvider>
                    <LayoutContent />
                </SidebarProvider>
            </HeaderProvider>

        </>
    );
};

export default AppLayout;   