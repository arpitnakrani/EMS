import { IoCheckmark } from "react-icons/io5";
import { IoMdClose } from 'react-icons/io'
import { useDocumnetContext } from "../../../../context/document";

const DocumetList = ({ documentList }: { documentList: string[] }) => {
    const { removeSelectedDocs } = useDocumnetContext()
    return (
        <ul>
            {
                documentList.map((document, index) => <li key={index} className="flex justify-between w-full p-2">
                    <div className="flex items-center gap-4">
                        <div>
                            <IoCheckmark className="text-green-500 text-lg" />
                        </div>
                        <div>
                            {document}
                        </div>
                    </div>
                    <div className="flex p-1 justify-center items-center border border-gray-200 bg-white rounded-md">
                        <IoMdClose className="cursor-pointer" onClick={() => removeSelectedDocs(document)} />
                    </div>
                </li>)
            }
        </ul>
    )
}

export default DocumetList