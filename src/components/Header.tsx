
const Header = () => {
    return (
        <header className="border-b border-slate-300 shadow-lg bg-white">
            <div className="w-[1200px] mx-auto py-2 flex justify-between">
                <h1 className="px-3 py-2 bg-blue-500 text-white font-medium rounded-lg">Facebook Lor</h1>
                <button className=" py-2 px-3 font-medium hover:bg-slate-200 rounded-lg"> Login</button>
            </div>
        </header>
    )
}

export default Header