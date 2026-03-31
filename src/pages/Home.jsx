import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

function Home() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 bg-gray-50">
                <Header />
                <div className="p-6">
                    Home Content
                </div>
            </div>
        </div>
    );
}

export default Home;