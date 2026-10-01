export interface Course {
  id: number;
  title: string;
  creator: string;
  image: string;
  level: string;
  rating: number;
  price: number;
  category: string;
}
export const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/assets/course-figma.png",
    category: "UI/UX Design",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    image: "/assets/course-digital-assets.png",
    category: "Graphic Design",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    image: "/assets/course-big-data.png",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    image: "/assets/course-productivity.png",
    category: "Productivity",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    image: "/assets/course-money-management.png",
    category: "Business",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    image: "/assets/course-startup.png",
    category: "Freelance & Entrepreneurship",
  },
].map((course) => ({
  ...course,
  creator: "purepearl studio",
  level: "Beginner",
  rating: 4.5,
  price: 25,
}));
