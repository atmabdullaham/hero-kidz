import { myBangla } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog - Hero Kidz",
  description:
    "Read articles about child development, educational toys, and parenting tips.",
};

export default function BlogPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-12">
        <div className="text-center space-y-4 mb-12">
          <h1
            className={`${myBangla.className} text-4xl md:text-5xl font-bold text-gray-900`}
          >
            আমাদের ব্লগ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tips, and articles about child development,
            educational toys, and parenting
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl overflow-hidden text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          <div className="space-y-4">
            <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              খেলার মাধ্যমে শিশুর সৃজনশীলতা বিকাশ
            </h2>
            <p className="text-lg opacity-90">
              সঠিক খেলনা এবং পরিবেশ কীভাবে আপনার শিশুর সৃজনশীল চিন্তাভাবনা এবং
              কল্পনাশক্তি বৃদ্ধি করতে পারে তা জানুন।
            </p>
            <div className="flex gap-4 text-sm opacity-75">
              <span>📅 May 15, 2026</span>
              <span>✍️ By Admin</span>
            </div>
            <Link
              href="/blog/1"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Read More →
            </Link>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/assets/hero.png"
              fill
              className="object-contain"
              alt="Featured Post"
            />
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors font-semibold text-gray-700"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Featured Image */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={post.image}
                  fill
                  className="object-cover"
                  alt={post.title}
                />
                <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  <span>📅 {post.date}</span>
                  <span>✍️ {post.author}</span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest articles, tips, and updates about child development and
          educational toys delivered to your inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

const categories = [
  "Child Development",
  "Educational Toys",
  "Parenting Tips",
  "Learning Activities",
  "Safety Guidelines",
  "Product Reviews",
];

const blogPosts = [
  {
    id: 1,
    title: "খেলার মাধ্যমে শিশুর সৃজনশীলতা বিকাশ",
    excerpt:
      "সঠিক খেলনা এবং পরিবেশ কীভাবে আপনার শিশুর সৃজনশীল চিন্তাভাবনা বৃদ্ধি করে তা জানুন।",
    content:
      "এই নিবন্ধে আমরা আলোচনা করব কীভাবে খেলার মাধ্যমে শিশুরা তাদের সৃজনশীলতা এবং কল্পনাশক্তি বিকাশ করতে পারে...",
    category: "Child Development",
    date: "May 15, 2026",
    author: "Admin",
    image: "/assets/hero.png",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "STEM খেলনা: শিশুর ভবিষ্যৎ গড়ার চাবিকাঠি",
    excerpt: "বিজ্ঞান, প্রযুক্তি এবং গণিত শেখার জন্য সেরা খেলনা নির্বাচন করুন।",
    content:
      "STEM খেলনা শিশুদের প্রাথমিক বয়সে বিজ্ঞান এবং প্রযুক্তির প্রতি আগ্রহ জাগাতে সাহায্য করে...",
    category: "Educational Toys",
    date: "May 12, 2026",
    author: "Sarah Admin",
    image: "/assets/hero.png",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "শিশুর খেলনা নির্বাচনের পাঁচটি গুরুত্বপূর্ণ টিপস",
    excerpt:
      "আপনার শিশুর জন্য সঠিক খেলনা বেছে নেওয়ার সময় কী বিবেচনা করতে হবে।",
    content:
      "খেলনা নির্বাচন শুধুমাত্র মজার জন্য নয়, বরং শিশুর বিকাশে গুরুত্বপূর্ণ ভূমিকা পালন করে...",
    category: "Parenting Tips",
    date: "May 10, 2026",
    author: "Admin",
    image: "/assets/hero.png",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "প্রথম বছরের শিশুর জন্য সেরা খেলনা",
    excerpt:
      "০-১২ মাস বয়সী শিশুদের সংবেদনশীল এবং মোটর দক্ষতা বিকাশে সহায়ক খেলনা।",
    content:
      "নবজাতক এবং ছোট শিশুদের জন্য নিরাপদ এবং উপযুক্ত খেলনা নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ...",
    category: "Product Reviews",
    date: "May 8, 2026",
    author: "Dr. Emily",
    image: "/assets/hero.png",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "খেলনার নিরাপত্তা: যা আপনাকে জানতে হবে",
    excerpt:
      "শিশুর জন্য খেলনা কেনার সময় নিরাপত্তা মানদণ্ড এবং সার্টিফিকেশন চেক করুন।",
    content:
      "শিশুদের জন্য খেলনা নির্বাচনের সময় নিরাপত্তা সবচেয়ে গুরুত্বপূর্ণ বিবেচনা হওয়া উচিত...",
    category: "Safety Guidelines",
    date: "May 5, 2026",
    author: "Admin",
    image: "/assets/hero.png",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "বাড়িতে শিক্ষামূলক খেলার আয়োজন করুন",
    excerpt:
      "সাধারণ খেলনা এবং সামগ্রী দিয়ে শিশুদের জন্য মজাদার শিক্ষা কার্যক্রম তৈরি করুন।",
    content:
      "আপনার ঘরেই শিশুদের জন্য বিভিন্ন শিক্ষামূলক কার্যক্রম আয়োজন করা সম্ভব...",
    category: "Learning Activities",
    date: "May 1, 2026",
    author: "Mia",
    image: "/assets/hero.png",
    readTime: "7 min read",
  },
];
