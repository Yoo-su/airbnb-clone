import Image from 'next/image';
import { 
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
 } from '@heroicons/react/solid'; 

function Header() {
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
                <input className='outline-none bg-transparent pl-5 flex-grow
                text-sm text-gray-600 placeholder-gray-400' placeholder='Start your search'/>
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
        </header>
    )
}

export default Header
