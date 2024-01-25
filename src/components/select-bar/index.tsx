export interface ISelectBar {
    id: string;
    selectbarlabel?: string;
    placeholder: string;
    options: {
        label: string;
        value: string
    }[];
    onChange: (selectedValue: string) => void
}
const SelectBar = ({ id, placeholder, options, selectbarlabel, onChange }: ISelectBar) => {
    return (
        <>
            {selectbarlabel && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900'>{selectbarlabel}</label>}
            <select id={id} className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' onChange={(event) => {
                console.log(event, 'event');
                onChange(event.target.value)
            }}>
                <option value="" disabled selected>{placeholder}</option>
                {
                    options.map(({ label, value }, index) => <option key={index} value={value} >{label}</option>)
                }
            </select>
        </>
    )
}

export default SelectBar