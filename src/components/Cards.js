import React from 'react';
import Card from './Card';

const Cards = ({courses}) => {

    let allCourses=[];
    //returns you a list of all courses recived from the api response
    const getCourses=()=>{
        console.log(courses);
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }


  return (
    <div>
      {getCourses().map((course)=>{
        return(<Card key = {course.id} course={course}></Card>)
      })
    }
    </div>
  )
}

export default Cards
