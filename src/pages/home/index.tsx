import DocumentSelection from "./components/document-selection"
import DocumentDisplay from "./components/documnet-display"

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <div>
                <h1>
                    Select the agreements, notices and documents you want Jason Smith to sign*
                </h1>
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <DocumentSelection />
                    <div >
                    </div>
                    <DocumentDisplay />
                    <div >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home