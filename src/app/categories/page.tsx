import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";

export default function CategoriesPage() {
    return(
        <>
            <NavBar active="Categorias"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 rounded p-6">
                    <h2 className="text-lg font-bold">Categorias</h2>

                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                    <CategoryItem/>
                </div>
            </main>
        </>
    )
}