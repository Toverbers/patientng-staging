import React from 'react'
import { FileText } from 'lucide-react'

function EbookItem({ title }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
        <FileText className="w-6 h-6 text-gray-500" />
      </div>
      <h3 className="text-base text-gray-900 mt-1">{title}</h3>
    </div>
  )
}

function VideoItem({ image, title }) {
  return (
    <div className="space-y-2">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-base text-gray-900">{title}</h3>
    </div>
  )
}

function EbooksSection() {
  const ebooks = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    title: '[Ebook name goes in hereeeeeeee'
  }))

  return (
    <div className="space-y-4 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-semibold">Ebooks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ebooks.map((ebook) => (
          <EbookItem key={ebook.id} title={ebook.title} />
        ))}
      </div>
    </div>
  )
}

function VideosSection() {
  const videos = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    title: 'Video name goes in here and can be tis long.',
    image: `/placeholder.svg?height=200&width=300`
  }))

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoItem 
            key={video.id} 
            title={video.title}
            image={video.image}
          />
        ))}
      </div>
    </div>
  )
}

export default function AdvocacyTab() {
  return (
    <div className="space-y-12">
      <EbooksSection />
      <VideosSection />
    </div>
  )
}