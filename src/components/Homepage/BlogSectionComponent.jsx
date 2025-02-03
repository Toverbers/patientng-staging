import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { UseBlogStore } from '@/store/blogStore';
import { motion } from "framer-motion";
import { SlideDown, SlideRight } from '@/utility/animation';

const BlogSection = () => {
  const {getAllBlogs, blogData} = UseBlogStore()

  useEffect(() =>{
   getAllBlogs()
  },[])

  console.log("BLOGS LIST", blogData)
  const blogPosts = [
    {
      id: 1,
      title: "Say Goodbye to Digital Asset Chaos with this App.",
      date: "25 Apr 2023",
      image: "/blog image 1.png",
      slug: "digital-asset-chaos"
    },
    {
      id: 2,
      title: "Unlock Your Digital Potential and Enhance Your Productivity.",
      date: "25 Apr 2023",
      image: "/blog image 2.png",
      slug: "digital-potential"
    },
    {
      id: 3,
      title: "Elevate Your Digital Asset Management Game.",
      date: "25 Apr 2023",
      image: "/blog image 3.png",
      slug: "digital-asset-management"
    }
  ];

  return (
    <section className="py-8">
      <div className="px-8">
        <div className="mb-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-2">
          <div className=''>
            <span className="text-sm font-medium text-emerald-500">
              Blog
            </span>
            <motion.h2
            variants={SlideRight(0.3)}
            whileInView={"animate"}
            initial="initial"  
            className="mt-4 text-3xl font-bold sm:text-4xl">
              Latest Blog Posts
            </motion.h2>
            <motion.p
            variants={SlideRight(0.3)}
            whileInView={"animate"}
            initial="initial"  
            className="mt-4 text-lg text-gray-600">
              Here's a quick glance over our latest blog posts and media articles written by our team members, staff and guest writers.
            </motion.p>
          </div>
          <Link to={'/blog'}>
          <Button 
            variant="outline" 
            className="group text-emerald-500 hover:text-emerald-600"
          >
            See all blog posts
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogData?.slice(0,3).map((post) => (
            <motion.Card
            variants={SlideDown(0.3)}
            whileInView={"animate"}
            initial="initial"  
            key={post._id} className="overflow-hidden border-0">
              <Link to={`/blog${post?.urlSlug}`}>
                <CardContent className="p-0">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${post?.titleImage}`}
                      alt={post?.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-600" dateTime={post?.date}>
                      {post?.date}
                    </time>
                    <h3 className="mt-2 text-2xl font-bold">
                      {post?.title?.slice(0,70)}...
                    </h3>
                    <Button
                      variant="link"
                      className="mt-4 h-auto p-0 text-emerald-500 hover:text-emerald-600"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </motion.Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;