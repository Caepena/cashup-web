import Link from "next/link";

interface NavBarProps {
    active: "Categorias" | "Movimentações" | "Dashboard"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const activeClass = "border-b-4 border-pink-600"

    const links = [
        { text: "Dashboard", href: "/dashboard" },
        { text: "Movimentações", href: "/transactions" },
        { text: "Categorias", href: "/categories" },
    ]

    return (
        <>
            <nav className="flex justify-between items-center bg-slate-900 p-6">
                <h1 className="text w-3xl font-bold">CashUp</h1>
                <ul className="flex gap-4">
                    {links.map(link =>
                        <li className={active === link.text ? activeClass : ""} ><Link href={link.href} >{link.text}</Link></li>)
                    }
                </ul>
                <img className="size-12 rounded-full" src="http://github.com/Caepena.png" alt="" />
            </nav>
        </>
    )
}