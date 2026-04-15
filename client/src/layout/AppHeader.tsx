import { Link } from "react-router-dom";
import { useHeader } from "../contexts/HeaderContext";
import { useSidebar } from "../contexts/SidebarContext";

const AppHeader = () => {
    const { isOpen, toggleUserMenu } = useHeader();
    const { toggleSidebar } = useSidebar()

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={toggleUserMenu} />
            )}

            <nav className="fixed top-0 z-50 w-full h-16 border-b border-white/10 bg-slate-800 text-white">
                <div className="h-full px-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between h-full">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar" aria-controls="top-bar-sidebar" type="button"
                                onClick={toggleSidebar}
                                className="sm:hidden text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                                </svg>
                            </button>
                            <a href="https://github.com/sharkscrew" className="flex ms-2 md:me-24">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVdCqOuj-7WTwcTS1soARtuKpYlyK5VBMpg&s" className="h-6 me-3" alt="user logo" />
                                <span className="self-center text-lg font-semibold whitespace-nowrap text-white">PirateHub</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button type="button" onClick={toggleUserMenu} className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src=" https://images.unsplash.com/photo-1667419674822-1a9195436f1c?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user photo" />
                                    </button>
                                </div>
                                <div className={` absolute right-8 top-9 min-w-[200px] z-50 ${isOpen ? "block" : "hidden"} `} id="dropdown-user">
                                    <div className="px-4 py-3 border-b border-white/10 bg-slate-800 text-white" role="none">
                                        <p className="text-sm font-medium text-white" role="none">
                                            Ersyl Jay Bingco
                                        </p>
                                        <p className="text-sm text-white/80 truncate" role="none">
                                            ersyljay103@gmail.com
                                        </p>
                                    </div>
                                    <ul className="p-2 text-sm text-white/90 font-medium bg-slate-800" role="none">
                                        <li>
                                            <Link to="#" className="inline-flex items-center w-full p-2 hover:bg-white/10 rounded" role="menuitem">Sign out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AppHeader;