
import { ReactElement } from "react";
import { CiSearch } from "react-icons/ci";

interface ISearch {
    placeholder?: string;
    prefixIcon?: ReactElement;
    value: string;
    onSearch: (newValue: string) => void
}
const Search = ({ value, onSearch, placeholder = 'search', prefixIcon = <CiSearch /> }: ISearch) => {
    return (
        <>
            <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    {prefixIcon}
                </div>
                <input type='search' value={value} onChange={(event) => onSearch(event.target.value)} id='default-search' className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500' placeholder={placeholder} required />
            </div>
        </>
    )
}

export default Search