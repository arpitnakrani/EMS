import DocumentSelection from "./components/document-selection"

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <div>
                <h1>
                    Select the agreements, notices and documents you want Jason Smith to sign*
                </h1>
                <div className="flex justify-between">
                    <div className="flex-1">
                        <DocumentSelection />
                    </div>
                    <div className="flex-1">
                        <DocumentSelection />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home