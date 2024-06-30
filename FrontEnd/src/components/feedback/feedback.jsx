// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
function Feedback() {
  const { data, loading, error } = useFetchData(`${BASE_URL}/reviews/`);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading feedback</p>;

  return (
    <>
      <div className="mt-[30px] lg:mt-[55px]">
        <Swiper
          // modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="py-[30px] px-5 rounded-[13px]  ">
                <div className="flex items-center gap-[13px]">
                  <img src={review.user.photo} alt={review.user.name} className="w-[50px] h-[50px] rounded-full" />
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      {review.user.name}
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      {[...Array(review.rating)].map((_, i) => (
                        <HiStar key={i} className="text-yellowColor w-[18px] h-5" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
                  {review.reviewText}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Feedback;
