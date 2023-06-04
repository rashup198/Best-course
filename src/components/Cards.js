import React from 'react';
import Card from './Card';

const Cards = (props) => {

    let courses=props.courses;
    //returns you a list of all courses recived from the api response

    function getCourses(){
       let allCourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4' >
      {getCourses().map((course)=>{
        return(<Card key = {course.id} course={course}></Card>)
      })
    }
    </div>
  )
}

export default Cards
