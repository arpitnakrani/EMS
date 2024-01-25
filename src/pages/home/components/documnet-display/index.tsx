
import { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Search from '../../../../components/search';
import EmptyArea from '../../../../components/empty-area';
import { useDocumnetContext } from '../../../../context/document';
import DocumetList from '../document-list';


const DocumentDisplay = () => {
    const [documentNameSearch, setDocumentNameSearch] = useState('')
    const { state } = useDocumnetContext()
    return (
        <div className='bg-white border border-gray-300 p-4 rounded-lg flex flex-col gap-4 h-full'>
            <h2 className='font-medium'>Selected Documents</h2>
            <Search value={documentNameSearch} onSearch={setDocumentNameSearch} />
            {


                !!state.selectedDocs.length ?
                    <div className="flex flex-col p-2 gap-12 rounded-lg border border-green-500">
                        <DocumetList documentList={state.selectedDocs} />
                    </div>
                    :
                    <div className='rounded-lg border border-gray-200 bg-gray-100 h-full'>
                        <EmptyArea icon={<FaArrowLeftLong className='text-8xl text-gray-300' />} text='Select documents from the left panel to have employees review them and provide a signature acknowledging review' />
                    </div>
            }
        </div>
    )
}

export default DocumentDisplay