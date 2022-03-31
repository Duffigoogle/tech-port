import Link from "next/link"
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react"

const NavItem: FunctionComponent<{
    selectedItem: string,
    setSelectedItem: Function,
    name:string,
    route_path: string
}> = ({selectedItem, setSelectedItem, name, route_path}) => {
    return(
            selectedItem !== name ? (
                <Link href={route_path}>
                    <a>
                        <span onClick={() => setSelectedItem(name)}
                        className="hover:text-emerald-400"
                        >{name}</span>
                    </a>
                </Link>
            ) : null 
    )
}

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState<string>("");

    const {pathname} = useRouter();
    
    useEffect(() => {
        if (pathname === "/"){
            setSelectedItem("About"); 
        }
        if (pathname === "/projects"){
            setSelectedItem("Projects"); 
        }
        if (pathname === "/resume"){
            setSelectedItem("Resume"); 
        }
    }, [])
    
    return (
        <div className="flex justify-between px-5 my-3">
            <span className="text-xl font-bold border-b-4 border-orange text-greeny md:text-2xl">
                {selectedItem}
            </span>
            <div className="flex space-x-5 text-red">
                <NavItem selectedItem={selectedItem}setSelectedItem={setSelectedItem} name="About" route_path="/"/>
                <NavItem selectedItem={selectedItem}setSelectedItem={setSelectedItem} name="Projects" route_path="/projects"/>
                <NavItem selectedItem={selectedItem}setSelectedItem={setSelectedItem} name="Resume" route_path="/resume"/>

            </div>

        </div>
    )
}

export default Navbar