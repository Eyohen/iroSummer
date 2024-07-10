import React, {useState} from 'react'
import cuteceramiccup from '../assets/cuteceramiccup.jpeg'
import blueflask from '../assets/blueflask.jpg'
import ceramicplate from '../assets/ceramicplate.jpg'
import summer from '../assets/summer.jpg'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Navbar from '../components/Navbar';
import { SlTrash } from "react-icons/sl";


const Cart = () => {
  const [count, setCount] = useState(1)

const negative = () => {
  if(count == 1){
    return setCount(1)
  }
  setCount(count - 1)
}

const positive = () => {
  setCount(count + 1)
}

const navigate = useNavigate()

const datas = [
    {
        image : summer,
        name : "Summer dress",
        price : "50000",
        quantity: 2,
        total : 100000
    },
    {
        image: summer,
        name : "Summer dress",
        price : "70000",
        quantity: 3,
        total : 210000
    },
    {
        image : summer,
        name : "Summer dress",
        price : "30000",
        quantity: 2,
        total : 60000
    }
]
  return (
    <div className='p-16'>
        <div className='bg-white '>
            <p className='font-bold text-2xl ml-9'>Cart</p>

<div className='flex justify-center items-center gap-x-[50px]'>



            <div class="max-h-80 overflow-y-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" className="px-6 py-3 font-light ">
              id
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              image
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              name
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              price
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              quantity
            </th>
            <th scope="col" className="px-6 py-3 font-light">
              total
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              delete
            </th>   
          </tr>
        </thead>
        <tbody>
     
            {datas.map((user, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={user.id}
              >
                 <td class="px-6 py-2">{index + 1}</td>

                <td class="px-6 py-2"><img src={user?.image} className='object-cover w-12 h-12'/></td>
                <td class="px-6 py-2 font-semibold">{user.name}</td>
                <td class="px-6 py-2 font-semibold">{user.price}</td>    
                <td class="px-6 py-2 font-semibold">{user.quantity}</td>
                <td class="px-6 py-2 font-semibold">{user.price * user.quantity}</td>
                <td class="px-6 py-2" onClick={() => handleDelete3(user._id)}><SlTrash className='text-red-800'/></td>

        
              </tr>
            ))}
        </tbody>
      </table>
      </div>

      {/* put order summary here */}
      <div>
      <button className='border-2 border-gray-200 bg-gray-100 mt-16 py-5 px-12 ml-6 '>
      <p className='font-bold text-2xl  text-gray-500 text-center'>Order Summary</p>
      <div className='flex justify-between items-center'>
      <p className='font-semibold text-lg mt-4  text-gray-500'>Subtotal: </p>
      <p className='font-bold text-lg mt-4  text-green-500'>₦45000</p>
      </div>
      <div className='w-[300px] h-[0.5px] bg-gray-400 mt-6'></div>
      <div className='flex justify-between items-center'>
      <p className='font-semibold text-lg mt-3  text-gray-500'>Delivery fee:</p>
      <div>
      <p className='font-bold text-lg mt-3 ml-12  text-green-500'>₦4000</p>
      <p className='font-medium text-md mt-0  text-green-500'>change address</p>
      </div>
      </div>
      <div className='w-[300px] h-[0.5px] bg-gray-400 mt-6'></div>
      <div className='flex justify-between items-center'>
      <p className='font-semibold text-lg mt-3  text-red-500'>Total:</p>
      <p className='font-bold text-lg mt-3  text-green-500'>₦49000.00</p>
      </div>
     


      </button>
      <div>
      <button className='bg-red-500 font-medium text-white px-[110px] py-2 ml-6 mt-4'>PROCEED TO CHECKOUT</button>
      </div>
      </div>




      </div>
      </div> 

    
</div>
  )
}

export default Cart