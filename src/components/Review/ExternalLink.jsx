import { ExternalLink, ArrowRight } from 'lucide-react'

export function ExternalLinkComponent({ href, className }) {
  return (
    <a
      href={href}
      className={`
        hidden group md:flex flex-col bg-gray-50 rounded-lg px-3 py-2 
        hover:bg-gray-100 transition-colors
        ${className}
      `}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-gray-400" />
          <span className="text-emerald-500">{href}</span>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
      </div>
      <span className="text-xs text-gray-400 ml-6">Visit this website</span>
    </a>
  )
}
