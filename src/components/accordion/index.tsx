export interface ISingleAccordion {
    id: string;
    title: string;
    list: string[]
}

interface IAccordion {
    accordionData: ISingleAccordion[]
}
const Accordion = ({ accordionData }: IAccordion) => {
    return (
        <>
            <div id="accordion-collapse" data-accordion="collapse">
                {
                    accordionData.map((accordion, index) => <div key={accordion.id}>
                        <h2 id={`accordion-collapse-heading-${accordion.id}`}>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={`#accordion-collapse-body-${accordion.id}`} aria-expanded="true" aria-controls={`accordion-collapse-body-${accordion.id}`}>
                                <span>{accordion.title}</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id={`accordion-collapse-body-${accordion.id}`} className="hidden" aria-labelledby={`accordion-collapse-heading-${accordion.id}`}>
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <ul>
                                    {
                                        accordion.list.map((accordionListItem) => <li>
                                            {accordionListItem}
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default Accordion