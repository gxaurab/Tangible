// Rubric: Manage multiple state variables and update UI based on user input or events.
// Task: Create a search box that filters a hardcoded list of items as the user types.

import { useState } from "react"
import { cities } from "../../assets/cityList"

const Application2 = () => {

  const [search, setSearch]= useState<string>('')

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>){
    setSearch(e.target.value)
    console.log(search)
  }

const filteredList =cities.filter(city=>city.toLowerCase().includes(search))

  return (
    <div>
        <section className="flex gap-3 justify-center m-3">
          <label className="text-xl ">There is a list of American Cities, Search for one</label>
          <input type="text" placeholder="eg: Jhon Doe" name="search" className="border-2 text-xl rounded-md"
            onChange={handleSearch}/>
        </section>

        <div className="flex justify-around ">
          <p className=" bg-amber-100 w-1/2 p-4">
            <b className="text-xl font-medium">List of all American City</b>
            <ul className="ml-5">
              {cities.map((city)=>(
                <li>{city}</li>
              ))}
            </ul>
          </p>
          <div className="bg-red-100 w-1/2 p-4">
            <p className="text-xl font-medium">Searched Results {search}</p>
            <ul>
                {filteredList.length>0?
                filteredList.map((city)=>(
                  <li>{city}</li>
                )):<p>No search result for the {search}</p>
                }
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Application2