import { myBangla } from "@/app/layout";
import Image from "next/image";

export const metadata = {
  title: "About Hero Kidz",
  description:
    "Learn about Hero Kidz - We provide quality educational toys for children.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-12">
        <div className="text-center space-y-4 mb-12">
          <h1
            className={`${myBangla.className} text-4xl md:text-5xl font-bold text-gray-900`}
          >
            হিরো কিডজ সম্পর্কে
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to Hero Kidz - Your trusted partner in child development and
            education through play
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            আমাদের মিশন
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            আমাদের লক্ষ্য প্রতিটি শিশুর জন্য মানসম্পন্ন শিক্ষামূলক খেলনা সরবরাহ
            করা যা তাদের সৃজনশীলতা, কল্পনা এবং সমস্যা সমাধান দক্ষতা বিকাশে
            সহায়তা করে।
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe that learning should be fun. Through innovative and
            carefully selected toys, we help children discover the joy of play
            while developing essential skills for their future.
          </p>
        </div>
        <div className="relative h-64 md:h-80">
          <Image
            src="/assets/hero.png"
            fill
            className="object-contain"
            alt="Our Mission"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          কেন আমাদের বেছে নিন?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          আমাদের মূল্যবোধ
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-gray-900 text-white rounded-2xl p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              গুণমান নিশ্চিতকরণ
            </h2>
            <ul className="space-y-4">
              {qualityPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">✓</span>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed space-y-4">
              <p>
                প্রতিটি খেলনা কঠোর মান নিয়ন্ত্রণ পরীক্ষার মধ্য দিয়ে যায় যাতে
                নিশ্চিত করা যায় যে এটি আন্তর্জাতিক নিরাপত্তা মান পূরণ করে।
              </p>
              <p>
                We source only from certified manufacturers and suppliers who
                share our commitment to safety, quality, and educational value.
              </p>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          আপনার শিশুর যাত্রা শুরু করুন
        </h2>
        <p className="text-lg mb-8 opacity-90">
          আবিষ্কার করুন কীভাবে আমাদের খেলনা আপনার সন্তানের বিকাশে সহায়তা করতে
          পারে।
        </p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg">
          আমাদের পণ্য এক্সপ্লোর করুন
        </button>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "🎓",
    title: "শিক্ষামূলক",
    description: "প্রতিটি খেলনা শিশুদের শেখার উদ্দেশ্যে ডিজাইন করা হয়েছে।",
  },
  {
    icon: "🛡️",
    title: "নিরাপদ",
    description: "সর্বোচ্চ নিরাপত্তা মান এবং মান নিয়ন্ত্রণ নিশ্চিত।",
  },
  {
    icon: "🌱",
    title: "পরিবেশ বান্ধব",
    description: "টেকসই এবং পরিবেশ সচেতন উপকরণ ব্যবহার করা হয়।",
  },
  {
    icon: "💚",
    title: "সাশ্রয়ী",
    description: "মানসম্পন্ন খেলনা সকলের নাগালের মধ্যে।",
  },
];

const values = [
  {
    title: "শিশু কেন্দ্রিক",
    description:
      "আমরা প্রতিটি পণ্য সিদ্ধান্তে শিশুদের সেরা স্বার্থকে অগ্রাধিকার দিই। তাদের বিকাশমূলক প্রয়োজনীয়তা এবং নিরাপত্তা আমাদের সর্বোচ্চ অগ্রাধিকার।",
  },
  {
    title: "গুণমান",
    description:
      "আমরা কখনও গুণমানের সাথে আপস করি না। প্রতিটি খেলনা শ্রেষ্ঠত্ব এবং স্থায়িত্বের প্রতিশ্রুতি প্রতিফলিত করে।",
  },
  {
    title: "উদ্ভাবন",
    description:
      "আমরা ক্রমাগত নতুন এবং উত্তেজনাপূর্ণ উপায় খুঁজে বের করি শিশুদের শেখার অভিজ্ঞতা উন্নত করতে।",
  },
];

const qualityPoints = [
  "আন্তর্জাতিক নিরাপত্তা সার্টিফিকেশন",
  "প্রাকৃতিক এবং অ-বিষাক্ত উপকরণ",
  "কঠোর পরীক্ষা এবং মান নিয়ন্ত্রণ",
  "দীর্ঘস্থায়ী এবং টেকসই নকশা",
];
