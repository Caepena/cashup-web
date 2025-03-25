import NavBar from "@/components/nav-bar";

export default function TransactionsPage() {
    return(
        <>
            <NavBar active="Movimentações"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 rounded p-6">
                    <h2 className="text-lg font-bold">Movimentações</h2>
                </div>
            </main>
        </>
    )
}