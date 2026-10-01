import AssetImage from "@/components/ui/asset-image";
import type { Course } from "@/data/courses";
const avatars = ["2448e","06ad8","50d3a","51caf"];
export default function CourseCard({course}: {course:Course}) {
 return <article className="course-card" aria-label={course.title}>
 <div className="course-thumbnail"><AssetImage src={course.image} alt={course.title} width={341} height={195} className="h-full w-full object-cover"/>
 <div className="course-badges">{["17 Lessons","2 hours 16 mins","59 Comments"].map(label=><span key={label}>{label}</span>)}</div></div>
 <div className="course-meta"><h3 title={course.title}>{course.title}</h3><p className="course-author">by <a href="#creators">{course.creator}</a></p>
 <div className="course-students"><span className="course-level"><AssetImage src="/assets/b9640.svg" alt="" width={20} height={20}/>{course.level}</span>
 <div className="flex">{avatars.map(name=><AssetImage key={name} src={`/assets/${name}.png`} alt="" width={32} height={32} className="mr-[-8px] size-[32px]"/>)}<span className="course-count"><AssetImage src="/assets/2d215.svg" alt="" width={32} height={32}/><span>26+</span></span></div></div>
 <p className="course-price"><strong>${course.price}</strong><span>/lifetime</span></p></div>
 <div className="course-rating">{course.rating} <AssetImage src="/assets/5e7f1.svg" alt="stars" width={24} height={24}/></div>
 </article>;
}
