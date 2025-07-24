import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import * as Collapsible from "@radix-ui/react-collapsible";
import "./css.css";

export function Layout() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Collapsible.Root
            open={isOpen}
            onOpenChange={setIsOpen}
            className="layout"
        >
            {isOpen && <Sidebar toggleSidebar={() => setIsOpen(!isOpen)}  />}
            
            <div className="main">
                <Header 
                    toggleSidebar={() => setIsOpen(!isOpen)} 
                    isOpen={isOpen} 
                />
                <Outlet />
            </div>
        </Collapsible.Root>
    );
}
