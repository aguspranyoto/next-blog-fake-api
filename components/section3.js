import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import fetcher from "../lib/fetcher";

function section3() {
  const { data, isLoading, isError } = fetcher("api/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}
      <Swiper
        loop={true}
        breakpoints={{ 640: { slidesPerView: 2, spaceBeetwen: 30 } }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value}></Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default section3;

function Post({ data }) {
  const { id, title, category, img, published, author, description } = data;
  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width={600} height={400} alt="" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4"></div>
      <div className="cat">
        <Link
          className="text-orange-600 hover:text-orange-800"
          href={`/posts/${id}`}
        >
          {category || "Unknown"}
        </Link>
        <Link
          className="text-gray-800 hover:text-gray-600"
          href={`/posts/${id}`}
        >
          - {published || "Unknown"}
        </Link>
      </div>
      <div className="title">
        <Link
          href={`/posts/${id}`}
          className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
        >
          {title || "Unknown"}
        </Link>
      </div>
      <p className="text-gray-500 py-3">{description || "No description"}</p>
      {author ? <Author {...author}></Author> : <></>}
    </div>
  );
}
