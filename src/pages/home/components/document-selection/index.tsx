
import { useState } from 'react'
import Search from '../../../../components/search'
import SelectBar from '../../../../components/select-bar'
import Toggle from '../../../../components/toggle'
import Accordion from '../../../../components/accordion'
import { accordionData, selectbarData } from '../../../../constants/static-datas'

const DocumentSelection = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <div>
                <h2>Available Documents</h2>
                <Search value={search} onSearch={setSearch} />
            </div>
            <div>
                <h2>Filter by:</h2>
                <div>
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