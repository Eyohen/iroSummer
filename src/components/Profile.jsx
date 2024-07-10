import React from 'react'

const Profile = () => {
  return (
    <div>

    <p className='text-4xl font-semibold text-center mt-12'>Profile</p>


    <div className='flex gap-x-12 justify-center mt-24'>
        <div>
        <p className='font-semibold'>First Name:</p>
    <input className='border border-red-400 px-4 py-3 rounded-md w-[300px]'/>
    </div>
    <div>
    <p className='font-semibold'>Last Name:</p>
    <input className='border border-red-400 px-4 py-3 rounded-md w-[300px]'/>
    </div>
    </div>


    <div className='flex gap-x-12 justify-center mt-9'>
    <div>
        <p className='font-semibold'>Email:</p>
    <input className='border border-red-400 px-4 py-3 rounded-md w-[300px]'/>
    </div>

    <div>
        <p className='font-semibold'>Phone number:</p>
    <input className='border border-red-400 px-4 py-3 rounded-md w-[300px]'/>
    </div>
    </div>

    <div className='flex gap-x-12 justify-center mt-9'>
    <div>
        <p className='font-semibold'>address:</p>
    <input className='border border-red-400 px-4 py-3 rounded-md w-[300px]'/>
    </div>

    <div>
        <p className='font-semibold'>City:</p>
    <input className='border border-red-400 px-4 py-3 rounded-md w-[300px]'/>
    </div>
    </div>
    <div className='flex gap-x-[540px] justify-center mt-9'>
<button className='rounded-lg bg-red-400 text-white '></button>
<button className='rounded-lg bg-red-400 text-white px-6 py-4'>Save</button>
</div>


    </div>
  )
}

export default Profile