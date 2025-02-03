import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import moment from "moment"
import { motion } from "framer-motion";
import { SlideDown, SlideLeft, SlideRight } from "@/utility/animation";

export default function BlogPostHeader({blogData}) {
  let writerImage = `${import.meta.env.VITE_MAIN_URL}/${blogData?.blog?.publisherImage}`;
  return (
    <div className="relative min-h-[60vh] w-full flex items-center bg-gray-50">
      {/* Forest Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${blogData?.blog?.titleImage}`}
          alt="Forest pattern"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto py-[100px] px-5 md:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* <span className="inline-block text-sm font-medium text-emerald-500 tracking-wide">
              1% OF THE INDUSTRY
            </span> */}
            <motion.h1
            variants={SlideRight(0.1)}
            whileInView={"animate"}
            initial="initial" 
            className="text-2xl md:text-[2.75rem] leading-[1.2] font-bold text-gray-900">
            {blogData?.blog?.title}
            </motion.h1>
            <motion.div
            variants={SlideDown(0.1)}
            whileInView={"animate"}
            initial="initial" 
            className="flex items-center gap-3 pt-2">
              <Avatar className="h-10 w-10">
                <img crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${blogData?.publisherImage}`} alt="image" />
                <AvatarFallback>{blogData?.blog?.publisher?.slice(0,1)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{blogData?.publisher}</span>
                <span className="text-sm text-gray-500">{moment(blogData?.blog?.createdAt).format('DD MMMM YYYY')}</span>
              </div>
            </motion.div>
          </div>

          {/* 3D Bottle Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72">
              <img
                crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${blogData?.blog?.titleImage}`}
                alt="3D Green Bottle"
                className="object-contain drop-shadow-xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}