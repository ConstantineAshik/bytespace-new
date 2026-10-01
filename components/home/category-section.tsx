import AssetImage from "@/components/ui/asset-image";
const categories = [
  { name: "Design", icon: "category-design" },
  { name: "Development", icon: "category-development" },
  { name: "IT & Software", icon: "category-software" },
  { name: "Business", icon: "category-business" },
  { name: "Marketing", icon: "category-marketing" },
  { name: "Photography", icon: "category-photography" },
];
export default function CategorySection() {
  return (
    <section className="learning-categories container" id="categories">
      <div className="learning-heading">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>
        <p>
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>
      </div>
      <div className="learning-category-grid">
        {categories.map((category) => (
          <a
            href="#courses"
            key={category.name}
            className="learning-category-card"
          >
            <span>
              <AssetImage
                src={`/assets/${category.icon}.svg`}
                width={36}
                height={36}
                alt=""
              />
            </span>
            <h3>{category.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
