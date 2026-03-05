import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  featured?: boolean
}

export default function ServiceCard({ title, description, icon, link, featured = false }: ServiceCardProps) {
  const cardContent = (
    <div
      className={`
        rounded-2xl p-7 transition-all duration-300 h-full flex flex-col
        ${featured 
          ? 'bg-gradient-to-br from-primary to-primary/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-[1.03] border border-secondary/20' 
          : 'bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-secondary/30'
        }
      `}
    >
      <div className={`
        mb-5 inline-flex
        ${featured ? 'text-secondary' : 'text-secondary'}
      `}>
        {icon}
      </div>
      <h3 className={`
        text-xl font-bold mb-3
        ${featured ? 'text-white' : 'text-dark-gray'}
      `}>
        {title}
      </h3>
      <p className={`
        flex-grow leading-relaxed
        ${featured ? 'text-gray-300' : 'text-gray-600'}
      `}>
        {description}
      </p>
      {link && (
        <div className="mt-5">
          <span className={`
            inline-flex items-center font-semibold text-sm
            ${featured ? 'text-secondary' : 'text-secondary'}
          `}>
            Learn More
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}
    </div>
  )

  if (link) {
    return (
      <Link href={link} className="block group">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
