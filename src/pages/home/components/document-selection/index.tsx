
import Search from '../../../../components/search'
import SelectBar from '../../../../components/select-bar'
import Toggle from '../../../../components/toggle'
import Accordion from '../../../../components/accordion'
import { accordionData, selectbarData } from '../../../../constants/static-datas'
import Badge from '../../../../components/badge'
import { useDocumnetContext } from '../../../../context/document'

const DocumentSelection = () => {
    const { state, updateSearch, updateFilters, updateSelectedDocs, removeFilter } = useDocumnetContext()
    return (
        <div className='bg-white border border-gray-300 p-4 rounded-lg flex flex-col gap-4'>
            <div>
                <h2 className='font-medium mb-3'>Available Documents</h2>
                <Search value={state.search} onSearch={updateSearch} />
            </div>
            <div>
                <h2 className='font-medium text-sm mb-3'>Filter by:</h2>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                    {
                        selectbarData.map((selectbar) => <SelectBar {...selectbar} key={selectbar.id} onChange={updateFilters} />)
                    }
                </div>
            </div>
            {!!state.filters.length && <div>
                <div className="flex p-2 items-center content-center gap-8 md:gap-2 self-stretch flex-wrap rounded-lg border border-gray-200 bg-white">
                    {
                        state.filters.map((filter, index) => <Badge key={index} lable={filter} onRemove={(item) => removeFilter(item)} color='blue' />)
                    }
                </div>
            </div>}
            <div>
                <div className='flex justify-between mb-3'>
                    <h2 className='font-medium  text-sm'>
                        53 Available Documents
                    </h2>
                    <div>
                        <Toggle title='Select All' />
                    </div>
                </div>
                <div className='rounded-lg border border-orange-500 shadow-sm'>
                    {
                        accordionData.map((accordion, index) => <Accordion {...accordion} key={index} onClick={updateSelectedDocs} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default DocumentSelection