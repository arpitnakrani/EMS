import DocumentSelection from "./components/document-selection"
import DocumentDisplay from "./components/documnet-display"

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-[1024px] mx-auto">
                <h1 className="text-gray-900 font-bold mb-2">
                    Select the agreements, notices and documents you want Jason Smith to sign
                </h1>
                <div className="flex gap-4 items-stretch">
                    <div className="flex-1">
                        <DocumentSelection />
                    </div>
                    <div className="flex-1">
                        <DocumentDisplay />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home