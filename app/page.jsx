"use client";

import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Link from "next/link"
import Courses from "./components/Courses"
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {

  const [courses,setCourses] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();

  },[])

  if(loading){
    return <LoadingPage/>
  }
  return (
    <div className="pt-8">
      <h1 className="text-4xl font-bold flex justify-center">Welcome To Traversy Media</h1>
      <div className="pt-8 flex flex-col gap-8">
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <Courses courses={courses}/>
      </div>
      
    </div>
  )
}

export default HomePage