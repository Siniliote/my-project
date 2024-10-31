import CoverImage from './CoverImage'
import Link from 'next/link'

const PostPreview = ({ title, excerpt, slug }) => {
  return (
    <div>
      <div className="mb-5">
        {/* <CoverImage title={title} url={coverImage.imgix_url} /> */}
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    </div>
  )
}
export default PostPreview
