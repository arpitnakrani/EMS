
import { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Search from '../../../../components/search';
import EmptyArea from '../../../../components/empty-area';


const DocumentDisplay = () => {
    const [documentNameSearch, setDocumentNameSearch] = useState('')
    return (
        <div>
            <h2>Selected Documents</h2>
            <Search value={documentNameSearch} onSearch={setDocumentNameSearch} />
            <EmptyArea icon={<FaArrowLeftLong />} text='Select documents from the left panel to have employees review them and provide a signature acknowledging review' />
        </div>
    )
}

export default DocumentDisplay