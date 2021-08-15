import { useState } from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
} from '@heroicons/react/solid';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from 'react-date-range';

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate]=useState(new Date());
    const [endDate, setEndDate]=useState(new Date());
    const [noOfGuests, setNoOfGuests]=useState(1);
    
    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    
    const resetInput=()=>{
        setSearchInput('');
    }

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:'selection'
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white
        shadow-md md:px-10 p-5'>
            {/*Left*/}
            <div className='relative flex items-center h-10 cursor-pointer
            my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />

            </div>

            {/* Middle*/}
            <div className='flex items-center bg-white rounded-full md:border-2 py-2 md:shadow-sm'>
                <input
                    className='outline-none bg-transparent pl-5 flex-grow
                                    text-sm text-gray-600 placeholder-gray-400'
                    placeholder='Start your search'
                    value={searchInput}
                    onChange={(e)=>setSearchInput(e.target.value)}
                    />
                <SearchIcon className='hidden md:inline-flex rounded-full bg-red-400 text-white h-8
                p-2 cursor-pointer md:mx-2' />
            </div>

            {/* Right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            
            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UserIcon className='h-5'/>
                        <input 
                        value={noOfGuests}
                        onChange={e=>setNoOfGuests(e.target.value)}
                        type="number" 
                        className='w-12 pl-2 outline-none text-lg text-red-400'
                        min={1}
                        />
                    </div>
                    <div className='flex'>
                        <button className='flex-grow text-gray-500'
                         onClick={resetInput}>Cancle</button>
                        <button className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
