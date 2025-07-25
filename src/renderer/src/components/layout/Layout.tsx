import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import * as Collapsible from "@radix-ui/react-collapsible";
import "./css.css";
import { useNavigate } from "react-router-dom";

export function Layout() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {

        function handleNavigate(){
            navigate("create")
        }

        const unsub = window.api.onNewCustomer(handleNavigate)

        return () => {
            unsub();
        }
    },[])

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
