import { Button } from '@mui/material'
import React from 'react'

const Search = () => {
    function showmenuClick() {
        console.log('SALAM')
    }
    return (
        <div>
            <div className='flex absolute justify-around bg-black mt-20 items-center'>
                <input type="text" placeholder='Search..' className='absolute  py-1.5 rounded-md text-center'/>
            </div>
                <Button onClick={showmenuClick} variant='contained' color='inherit' className='ml-40'>Search</Button>
        </div>
    )
}

export default Search