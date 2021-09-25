import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };


  const resetInput = () =>{
    setSearchInput('');
  }

  const search = () => {
    router.push({
      pathname:'/search',
      query:{
        location: searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        numberOfGuests
      }
    })
  }


  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="Razu Islam"
          />
        </div>

        {/* middle */}

        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            className="flex-grow outline-none pl-5 bg-transparent text-gray-600 text-sm placeholder-gray-400"
            type="text"
            placeholder={placeholder || 'Start Your Search'}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/* right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6" />
          <div className="flex items-center space-x-2  border-2 rounded-full p-2 cursor-pointer">
            <MenuIcon className="h-5" />
            <UserCircleIcon className="h-5" />
          </div>
        </div>
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 outline-none text-red-400"
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                min={1}
              />
            </div>
            <div className='flex '>
              <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
              <button onClick={search} className='flex-grow text-red-400'>Search</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
