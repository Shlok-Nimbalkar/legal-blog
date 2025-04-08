import { blogs as allBlogs } from "@/.velite/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import { slug } from "github-slugger";

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const slugified = params?.slug || 'all';  // Safe access
  return {
    title: `${slugified.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${slugified === "all" ? "web development" : slugified} through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = async ({ params }) => {
  const slugified = params?.slug || 'all';  // Safe access

  const allCategories = ["all"];
  allBlogs.forEach(blog => {
    blog.tags.forEach(tag => {
      const slugifiedTag = slug(tag);
      if (!allCategories.includes(slugifiedTag)) {
        allCategories.push(slugifiedTag);
      }
    });
  });

  allCategories.sort();

  const blogs = allBlogs.filter(blog => {
    if (slugified === "all") return true;
    return blog.tags.some(tag => slug(tag) === slugified);
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{slugified}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={slugified} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;