import {useState} from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        onSubmit(term.trim()); //removing all empty space after last character or else we get a null error
        setTerm('');
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return(
        <div>
            <form className="flex justify-center mt-2 mb-1" onSubmit={handleFormSubmit}>
                <input className='w-96 bg-gray-50 border border-gray-300 hover:border-neutral-100 text-gray-900 text-sm rounded-lg block p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='City, Province...' value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;