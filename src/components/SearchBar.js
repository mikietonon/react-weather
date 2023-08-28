import {useState} from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
        setTerm('');
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return(
        <div>
            <form className="flex flex-row justify-center m-2" onSubmit={handleFormSubmit}>
                <input className='w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search Location...' value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;