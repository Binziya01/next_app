"use client";
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {

    const [query, setQuery] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(query);

        const res = await fetch(`/api/courses/search?query=${query}`)
        const courses = await res.json()
        getSearchResults(courses);
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="search-form">
        <input type="text" className="search-input text-black tracking-wider bg-gray-300" placeholder="Search Courses..." value={ query } onChange={(e) => setQuery(e.target.value)} />
        <button className="search-button" type="submit">Search</button>
        </form>
        
    </div>
  )
}

export default CourseSearch