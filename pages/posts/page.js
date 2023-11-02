import Format from "@/layout/format";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";

function page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            quasi? Vel debitis, dolorem necessitatibus eos neque alias tempora
            et quisquam.
          </p>

          <div className="py-10">
            <Image src={"/images/img1.jpg"} alt="" width={900} height={600} />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, in vero! Illo, consectetur numquam architecto rerum
              repudiandae, atque modi excepturi nihil rem autem asperiores et
              debitis voluptate earum similique temporibus! Lorem ipsum dolor
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, in vero! Illo, consectetur numquam architecto rerum
              repudiandae, atque modi excepturi nihil rem autem asperiores et
              debitis voluptate earum similique temporibus! Lorem ipsum dolor
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, in vero! Illo, consectetur numquam architecto rerum
              repudiandae, atque modi excepturi nihil rem autem asperiores et
              debitis voluptate earum similique temporibus! Lorem ipsum dolor
            </p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}

export default page;
