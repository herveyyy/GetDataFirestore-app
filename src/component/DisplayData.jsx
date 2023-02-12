
import React ,{ useState } from 'react';
import {
          getDocs,
        collection
} from 'firebase/firestore';
import Title from "./Title";
import { database } from '../../firebaseConfig';
export default function DisplayData() {
    const [fireData, setFireData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const databaseReference = collection(database, 'Beneficiaries');

    const getData = async () => {
        await getDocs(databaseReference)
        .then((response) => {
            setFireData(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    return ( 
        
        <div ref={getData}>        
  <div> 
            <Title />
        <div className=" mr-10 ml-10 pt-20" >
<form >
<div 
  className="grid md:grid-cols-3 md:gap-6">
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="floating_first_name" 
        id="floating_first_name" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        autoComplete="off"
        disabled="on"
        required />
        <label 
        htmlFor="floating_first_name" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="floating_middle_name" 
        id="floating_middle_name" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        autoComplete="off" 
       disabled="on"
        required />
        <label 
        htmlFor="floating_middle_name" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Middle name</label>
    </div>
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="floating_last_name" 
        id="floating_last_name" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
        autoComplete="off"
        disabled = "on"
        required />
        <label 
        htmlFor="floating_last_name" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  
  <div 
  className="grid md:grid-cols-2 md:gap-6">
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="number" 
        pattern="[0-9]" 
        name="floating_phone" id="floating_phone" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
        autoComplete="off"
     disabled="on"
        required />
        <label htmlFor="floating_phone" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Phone number (09123456789)</label>
    </div>
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="number" 
        name="floating_age"
        id="floating_age" 
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
       disabled="on"
        required
        autoComplete="off" 
        />
        <label htmlFor="floating_age" 
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Age</label>
    </div>
  </div>
  <div 
  className="relative z-0 w-full mb-6 group">
      <input 
      type="text" 
      name="floating_address" 
      id="floating_address" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder=" "
      autoComplete="off"
     disabled="on"
      required />
      <label 
      htmlFor="floating_address" 
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
    Complete address</label>
  </div>
  <div 
  className="grid md:grid-cols-2 md:gap-6">
    <div 
    className="relative z-0 w-full mb-6 group">
    </div>
    <div 
    className="relative z-0 w-full mb-6 group">
        <input 
        type="text" 
        name="floating_sign"
        id="floating_sign" 
        className="block py-2.5 px-4 absolute right-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" "
       disabled="on"
       value={""}
        required
        autoComplete="off" 
        />
        <label htmlFor="floating_sign" 
        className="right-16 top-11 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Signiture</label>
    </div>
  </div>
<input
  type="submit"
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  value={"Print"}
  /> 
</form>
</div>
</div>
<div className="mt-10 sm:mx-10">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

<tr>
<th scope="col" className="px-6 py-3">First name</th>
<th scope="col" className="px-6 py-3">Middle name</th>
<th scope="col" className="px-6 py-3">Last Name</th>
<th scope="col" className="px-6 py-3">Age</th>
<th scope="col" className="px-6 py-3">address</th>
<th scope="col" className="px-6 py-3">Phone Number</th>
<th scope="col" className="px-6 py-3">
<span className="sr-only">Edit</span></th>
</tr>
</thead>
<tbody>
 
{fireData.map((data) => {
return(
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
    {data.firstName}
</th>
<td className="px-6 py-4">{data.middleName}</td>
<td className="px-6 py-4">{data.lastName}</td>
<td className="px-6 py-4">{data.age}</td>
<td className="px-6 py-4">{data.address}</td>
<td className="px-6 py-4">{data.number}</td>
<td className="px-6 py-4 text-right">
<a href="#" className="font-medium text-text-fuchsia-500 dark:text-fuchsia-400-600 dark:text-text-fuchsia-500 dark:text-fuchsia-400-500 hover:underline">Edit</a>
</td>
</tr>
    
)
})}

</tbody>
</table>

</div>
{/* <button
  type="button"
  onClick={getData}
  className="mt-20  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    DisplayData</button>  */}
</div>
</div>

     );
}