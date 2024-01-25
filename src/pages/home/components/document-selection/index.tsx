
import { useState } from 'react'
import Search from '../../../../components/search'
import SelectBar from '../../../../components/select-bar'
import Toggle from '../../../../components/toggle'
import Accordion from '../../../../components/accordion'
import { accordionData, selectbarData } from '../../../../constants/static-datas'

const DocumentSelection = () => {
    const [search, setSearch] = useState('')
    return (
        <div className='bg-white border border-gray-300 p-4 rounded-lg'>
            <div>
                <h2>Available Documents</h2>
                <Search value={search} onSearch={setSearch} />
            </div>
            <div>
                <h2>Filter by:</h2>
                <div className='grid grid-rows-2 grid-flow-col gap-4'>
                    {
                        selectbarData.map((selectbar) => <SelectBar {...selectbar} key={selectbar.id} />)
                    }
                </div>
            </div>
            <div>
                <div>
                    <div>
                        53 Available Documents
                    </div>
                    <div>
                        <Toggle title='Select All' />
                    </div>
                </div>
                <div>
                    <Accordion accordionData={accordionData} />
                </div>
            </div>
        </div>
    )
}

export default DocumentSelection