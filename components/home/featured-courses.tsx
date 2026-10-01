"use client";
import {useState} from "react";
import CourseCard from "@/components/course/course-card";
import {courses} from "@/data/courses";
const chipRows = [
 ["Featured","Music","Drawing & Painting","Marketing","Animation","Social Media","UI/UX Design","Creative Marketing"],
 ["Digital Illustration","Film & Video","Crafts","Freelance & Entrepreneurship","Graphic Design","Photography"],
 ["Productivity","Web Development","Data Science","Cooking","+ More"]
];
export default function FeaturedCourses() {
 const [selected,setSelected]=useState("Featured");
 const matching=courses.filter(course=>course.category===selected);
 const visible=selected==="Featured"||selected==="+ More"?courses:matching;
 return <section className="featured-courses container" id="courses">
 <div className="discovery-heading"><h2>Discover Your Passion, Build Your Skills</h2><p>At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p></div>
 <div className="category-filters" aria-label="Course categories">{chipRows.map((row,i)=><div key={i}>{row.map(label=><button key={label} type="button" aria-pressed={selected===label} onClick={()=>setSelected(label)} className={`category-chip ${selected===label?"is-active":""} ${label==="+ More"?"more-chip":""}`}>{label}</button>)}</div>)}</div>
 <div className="course-grid">{visible.map(course=><CourseCard key={course.id} course={course}/>)}</div>
 {visible.length===0&&<p className="empty-courses" role="status">No featured courses in this category yet. Choose Featured to browse all courses.</p>}
 </section>;
}
