import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { CollapsedState } from '../../comp/vertical-navigation/VerticalNavigation';

const Search = ( ) => {
  const collapsed = useContext(CollapsedState)
  return (
    <div className='flex items-center justify-center border shadow-xs rounded-full mb-4 p-1.5'>
        <label htmlFor="search">
       <SearchIcon  sx={{fontSize:'1.1rem' }} className='mx-1 text-slate-400'/>   
        </label>
        {!collapsed&&<input type="text" name="search" id="search" placeholder='Search' className="mt-1 w-full h-full rounded-md outline-none border-none text-md " />}
    </div>
  )
}

export default Search