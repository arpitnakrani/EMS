import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export interface IAccordion {
    id: string;
    title: string;
    list: string[];
    onClick: (selectedDocValue: string) => void
}

function Accordion({ id, list, title, onClick }: IAccordion) {
    const [open, setOpen] = useState(false);
    //toggle accordion function
    let toggleHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //switch state
        setOpen(!open);
    };
    return (
        <div className="w-full  overflow-hidden cursor-pointer border-b border-gray-300">
            <div className="flex items-center justify-between  p-4 bg-gray-100" onClick={toggleHandler}>
                <h4 className="transition-all duration-200 ease-in-out text-base font-normal">{title}</h4>
                <i className="transition-all duration-200 ease-in-out transform-origin-center">
                    <MdOutlineExpandMore />
                </i>
            </div>
            {open && <div>
                <ul className="flex p-2 flex-col items-start gap-3 self-stretch text-sm">
                    {
                        list.map((listItem, index) => <li key={index} className="flex justify-between w-full" onClick={() => onClick(listItem)}>
                            <div>
                                {listItem}
                            </div>
                            <div className="flex p-1 justify-center items-center border border-gray-200 bg-white rounded-md">
                                <FaArrowRight />
                            </div>
                        </li>)
                    }
                </ul>
            </div>}
        </div>
    );
}


export default Accordion