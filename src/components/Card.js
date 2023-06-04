import React from 'react'
import { FcLike,FcLikePlaceholder} from "react-icons/fc";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = (props) => {
  let course= props.course;
  let likedCourses =props.likedCourses;
  let setLikeCourses =props.setLikeCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //pehle se liked hai
      setLikeCourses((prev)=>{
        prev.filter((cid)=>(cid!==course.id))
        
      })
      toast.warning("like removed");
    }
    else{
      //pehle se liked nhi hai course
      //then  insert karo ye course liked course me

      if(likedCourses.length===0){
        setLikeCourses([course.id]);
      }
      else{
        setLikeCourses((prev)=>[...prev, course.id])
      }
      toast.success("Liked Successfully")


    }
  }
  return (
   <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative '>
          <img src={course.image.url}></img>
            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 -bottom-4 grid place-items-center'>
              <button onClick={clickHandler}>
                {!likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>):(<FcLike fontSize="1.75rem"></FcLike>)
                  }
              </button>
          </div>
        </div>
        
        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
          <p className='mt-2 text-white'>
            {
              course.description.length>100 ? `${(course.description.substr(0,100))}.....`:(course.description)
            }
          </p>
        </div>
   </div>
  )
}

export default Card
