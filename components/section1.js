import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import fetcher from "../lib/fetcher";

function section1() {
  const { data, isLoading, isError } = fetcher("api/trending");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default section1;

function Slide({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width={600} height={600} alt="" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident voluptatum laborum!{" "}
        </p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
