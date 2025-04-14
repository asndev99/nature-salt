import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    userImage: "/salt3.jpeg",
    name: "John Doe",
    review: "Amazing salt quality! Highly recommended.",
    rating: 4,
  },
  {
    id: 2,
    userImage: "/salt3.jpeg",
    name: "Emily Smith",
    review: "Best Himalayan salt I have ever used!",
    rating: 4,
  },
  {
    id: 3,
    userImage: "/salt3.jpeg",
    name: "Michael Brown",
    review: "Pure and natural, just as expected.",
    rating: 4,
  },
  {
    id: 4,
    userImage: "/salt3.jpeg",
    name: "John Doe",
    review: "Amazing salt quality! Highly recommended.",
    rating: 4,
  },
  {
    id: 5,
    userImage: "/salt3.jpeg",
    name: "Emily Smith",
    review: "Best Himalayan salt I have ever used!",
    rating: 4,
  },
  {
    id: 6,
    userImage: "/salt3.jpeg",
    name: "Michael Brown",
    review: "Pure and natural, just as expected.",
    rating: 4,
  },
];

const ReviewSection = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="text-4xl font-bold text-center">Our Client's Reviews</h1>
      <Carousel className="w-full mt-10">
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="basis-1/3 lg:basis-1/6">
              <div className="p-4 bg-white shadow-md rounded-lg text-center">
                {/* User Image */}

                <Image
                  src={review.userImage}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />

                {/* User Name */}
                <h3 className="text-lg font-semibold mt-3">{review.name}</h3>

                {/* Review Text */}
                <p className="text-sm text-gray-600 mt-1">{review.review}</p>

                {/* Star Rating */}
                <div className="flex justify-center mt-2 text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ReviewSection;
