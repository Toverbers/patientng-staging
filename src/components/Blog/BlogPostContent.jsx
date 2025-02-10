import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { BiLike, BiComment, BiShareAlt, BiSolidLike } from 'react-icons/bi'
import { FaRegComment } from 'react-icons/fa'
import { HiOutlineReply } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { mockPost } from '@/lib/mockpost'
import { FaGoogle, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { UseBlogStore } from '@/store/blogStore'
import moment from 'moment'
import useAuthStore from '@/store/authStore'
import { CustomButton } from '../CustomButton'


const TableOfContents = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <span className="text-emerald-500">⬡</span>
      <span className="text-emerald-500">Content</span>
    </div>
    {['Introduction', 'Tools', 'Resources', 'Credits'].map((item) => (
      <div key={item} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
        <span>⬢</span>
        <a href={`#${item.toLowerCase()}`}>{item}</a>
      </div>
    ))}
  </div>
)

const SocialShare = () => (
  <div className="flex gap-2">
    {[
      { icon: <FaGoogle />, alt: 'Google' },
      { icon: <FaTwitter />, alt: 'Twitter' },
      { icon: <FaFacebook />, alt: 'Facebook' },
      { icon: <FaLinkedin />, alt: 'LinkedIn' }
    ].map((platform) => (
      <a
        key={platform.alt}
        href="#"
        className="w-8 h-8 flex items-center justify-center rounded-full border hover:border-gray-400"
      >
        {platform.icon}
      </a>
    ))}
  </div>
)

const CommentForm = ({onClick, myData, ...props}) => (
  <div className="flex gap-4">
    
    <img crossOrigin='anonymous' src={ myData?.image? `${import.meta.env.VITE_MAIN_URL}/${myData?.image}`: '/user.png'} className="h-6 w-6 rounded-full" />   
      
    <div className="flex items-center space-x-2 flex-1">
    
      <Textarea 
        placeholder="Write your comment here..." 
        className="min-h-12 resize-none"
        //value={value}
        //onChange={onChange}
        {...props}
      />
      <Button className="h-12 w-auto" onClick={onClick}>Comment</Button>
    </div>
  </div>
)

const Comment = ({ comment }) => (
  <div className="space-y-4">
    <div className="flex items-start gap-4">
      <Avatar className="h-8 w-8">
        <img crossOrigin='anonymous' src={`${import.meta.env.VITE_MAIN_URL}/${comment?.user?.image}`} />
        <AvatarFallback>{comment?.user?.firstName[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">{comment?.user?.firstName} {comment?.user?.lastName}</span>
          <span className="text-sm text-gray-500">{moment(comment?.createdAt).format('DD MMMM YYYY')}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{comment?.comment}</p>
        {/* <div className="flex gap-4 mt-2">
          <button className="text-gray-500 hover:text-emerald-500 text-xs flex items-center gap-1">
            <BiLike className="h-4 w-4" />
            Like
          </button>
          <button className="text-gray-500 hover:text-emerald-500 text-xs flex items-center gap-1">
            <HiOutlineReply className="h-4 w-4" />
            Reply
          </button>
        </div> */}
      </div>
    </div>
    {comment.replies && comment.replies.length > 0 && (
      <div className="ml-12 space-y-4">
        {comment.replies.map(reply => (
          <Comment key={reply.id} comment={reply} />
        ))}
      </div>
    )}
  </div>
)

export default function BlogPostContent({blogData, getBlogs}) {
  const {postComment, getBlogComments, blogComments, likeBlog} = UseBlogStore()
  const {getme, myData} = useAuthStore()
  const [likes, setLikes] = useState(20)
  const [comment, setComment] = useState('')
  const [hasLiked, setHasLiked] = useState(false)


  useEffect(()=> {
   getBlogComments({id: blogData?.urlSlug?.slice(1)})
   getme()
  },[])

  console.log("SINGLE BLOG DATA INFORMATION", blogData)
  //console.log("BLOG COMMENT", blogComments)


  const handleLike = async () => {
   /*  if (hasLiked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }
    setHasLiked(!hasLiked) */

    await likeBlog({id: blogData?.blog?._id})
    getBlogs({id: blogData?.blog?.urlSlug?.slice(1)})
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out the latest Blog!',
          text: `${blogData?.content?.slice(0,50)}...`,
          url: window.location.href, // Current page URL
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API not supported in this browser.');
    }
  };

  const handlePostComment = async (e) => {
    e.preventDefault();
    await postComment({id: blogData?.blog?._id, comment: comment})
    getBlogs({id: blogData?.blog?.urlSlug?.slice(1)})
  }

  const allowedId = myData?._id; // ID to check
  const [isAvailable, setIsAvailable] = useState(false); // Initial state

  useEffect(() => {
    // Check if allowedId exists in the data array
    const idExists = blogData?.blog?.likes?.some(item => item === allowedId);

    // If the ID exists, set state to false
    if (idExists) {
      setIsAvailable(true);
    }
  }, [blogData?.blog?.likes, allowedId]); // Run effect when data or allowedId changes

 const userImage = `${import.meta.env.VITE_MAIN_URL}/${myData?.images}`

  console.log("if available", isAvailable)
  console.log("ALLOWED ID", allowedId)
  //console.log("COMMENT", comment)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* <div className="grid md:grid-cols-[200px_1fr] gap-12"> */}
      <div className="grid gap-12">
        {/* Sidebar */}
        {/* <aside className="space-y-8">
          <TableOfContents />
          <SocialShare />
        </aside> */}

        {/* Main Content */}
        <article className="prose prose-gray max-w-none">
          {/* <div className="flex items-center gap-4 text-sm text-emerald-500 mb-4">
            <span>20k</span>
            <span>15k</span>
          </div> */}

          <div 
            dangerouslySetInnerHTML={{ __html: blogData?.blog?.content }}
            className="mb-8"
          />

          <div className='flex items-center mb-2'>
          
          {blogData?.blog?.publisherImage ?
           <img
           crossOrigin='anonymous'
           src={`${import.meta.env.VITE_MAIN_URL}/${blogData?.blog?.publisherImage}`}
           alt="Modern workspace"
           className="w-10 h-10 rounded-full "
         />
          : 
          <Avatar className="h-10 w-10">
           {/* <AvatarImage src={writerImage} alt="Abayomi Olowu" />  */}
          <AvatarFallback>{blogData?.blog?.publisher?.slice(0,1)}</AvatarFallback>
          </Avatar>
          }
           
          <p className="text-sm text-gray-500 ">{blogData?.blog?.publisher}</p>
          {!myData && (
            <button onClick={handleShare} className=" ml-5 flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
            <BiShareAlt className="h-5 w-5" />
            Share
          </button>
          )}
          </div>

         {myData?
          <>
           {/* Engagement Section */}
           <div className="border-t border-b py-6 my-8">
            <h3 className="font-medium mb-2">Like what you have read?</h3>
            <p className="text-sm text-gray-600 mb-4">Share your thoughts</p>
            <div className="flex gap-4">
              <button 
                onClick={handleLike}
                disabled={isAvailable}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500"
              >
                {isAvailable ? <BiSolidLike className="h-5 w-5 text-emerald-500" /> : <BiLike className="h-5 w-5" />}
                
                
                Like ({blogData?.blog?.likes?.length})
              </button>
               <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                <FaRegComment className="h-5 w-5" />
                Comment ({blogData?.blog?.comments?.length})
              </button> 
              <button onClick={handleShare} className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                <BiShareAlt className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>

          {/* Comments Section */}
           <div className="space-y-8">
            <h3 className="text-lg font-medium">
              Comments ({blogData?.blog?.comments?.length})
            </h3>
            
            {blogData?.comments?.map((comment) => (
              <Comment key={comment?._id} comment={comment} />
            ))}
            
            <CommentForm
             value={comment}
             onChange={(e)=> setComment(e.target.value)}
             onClick={handlePostComment}
             myData={myData}
             userImage={userImage}
             />

          </div>  
         </> 
         
         : <>
          <section className="py-16 my-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center bg-emerald-50">
      <h2 className="text-3xl font-bold mb-1">Login or Sign up to like and comment</h2>
      <p className="text-gray-600 mb-8">
      You can make a difference. Sign up now
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row gap-1 group">
        {/* <Input id={"sign as advocate"} placeholder="Enter your email" className="flex-grow w-80" /> */}
        <Link to={'/login'}>
        <CustomButton buttonVariant={"primary"} className="w-80 md:w-80 md:h-12 rounded-md">
          Login
        </CustomButton>
        </Link>
        <Link to={'/signup'}>
        <CustomButton buttonVariant={"primary"} className="w-80 md:w-80 md:h-12 rounded-md">
          Signup
        </CustomButton>
        </Link>
      </div>
    </section>
         </>}
         

          {/* Related Article */}
          {/* <div className="mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <span className="text-red-500 text-sm font-medium">Hot</span>
              <h3 className="text-xl font-medium mt-2">
                Gestalt psychology in UI/UX design and beyond.
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Working from home requires self-discipline to stay focused amidst potential distractions. Setting boundaries between work and personal life is crucial to maintain a healthy work-life balance and prevent burnout.
              </p>
              
              <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                  <AiOutlineHeart className="h-4 w-4" />
                  Like
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                  <FaRegComment className="h-4 w-4" />
                  Comment
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-500">
                  <BiShareAlt className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div> */}
        </article>
      </div>
    </div>
  )
}