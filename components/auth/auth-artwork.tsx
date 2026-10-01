import StudentPortraits from "@/components/ui/student-portraits";
import AssetImage from "@/components/ui/asset-image";
import CourseCard from "@/components/course/course-card";
import { courses } from "@/data/courses";
export default function AuthArtwork({ signup = false }: { signup?: boolean }) {
  return (
    <div
      className={`auth-artwork ${signup ? "signup-artwork" : ""}`}
      aria-label="ByteSpace featured courses"
    >
      <div className="auth-course-back">
        <CourseCard course={courses[1]} />
      </div>
      <div className="auth-course-front">
        <CourseCard course={courses[2]} />
      </div>
      <div className="auth-happy">
        <p>Happy Students</p>
        <div className="auth-rating">
          4.5 (240)
          <AssetImage
            src="/assets/rating-star-lime.svg"
            alt=""
            width={13.1625}
            height={12.5676}
          />
        </div>
        <div className="auth-avatars">
          <StudentPortraits />
          <span>2K+</span>
        </div>
      </div>
      <AssetImage
        className="auth-ornament-top"
        src="/assets/auth-torus.svg"
        alt=""
        width={146}
        height={146}
      />
      <AssetImage
        className="auth-ornament-bottom"
        src={
          signup ? "/assets/auth-cone-white.svg" : "/assets/auth-cone-lime.svg"
        }
        alt=""
        width={188}
        height={188}
      />
      <AssetImage
        className="auth-ornament-coil"
        src="/assets/auth-coil.svg"
        alt=""
        width={175}
        height={175}
      />
    </div>
  );
}
