import React, { useState } from 'react';
import Card from './Card';


const Cards = (props) => {

    let courses=props.courses;
    let category=props.category;

    const [likedCourses, setLikeCourses] = useState([]);
    //returns you a list of all courses recived from the api response

    function getCourses(){
      if(category==="All"){
       let allCourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
      }

      else{
        //isme sirf specific categiry ka data enter hoga
        return courses[category]
      }
    }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4' >
      {getCourses().map((course)=>{
        return(<Card key = {course.id} course={course} likedCourses={likedCourses} setLikeCourses={setLikeCourses}></Card>)
      })
    }
    </div>
  )
}

export default Cards
