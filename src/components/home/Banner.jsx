import { myBangla } from "@/app/layout";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-3">
        <h2 className={`${myBangla.className} text-3xl md:text-5xl font-bold`}>
          আমাদের খেলনা দিয়ে আপনার শিশুর খেলার{" "}
          <span className="text-primary">আনন্দ বাড়ান!</span>
        </h2>
        <p className="text-base font-normal font-accent">
          Buy every toy with up to 15% off and free shipping. Shop now and give
          your child the gift of play!
        </p>
        <button className="btn btn-primary btn-outline">Explore Product</button>
      </div>
      <div className="flex-1">
        <Image
          src={"/assets/hero.png"}
          width={500}
          height={400}
          alt="Toy Picture"
        />
      </div>
    </div>
  );
};

export default Banner;
