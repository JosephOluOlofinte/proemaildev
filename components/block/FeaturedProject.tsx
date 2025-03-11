import { Fragment } from "react"
import { FeaturedProjectProp } from "@/lib/types"


const FeaturedProject: React.FC<FeaturedProjectProp> = ({
    imgPreview,
    title,
    desc,
    tag1,
    tag2,
    tag3,
}) => {
  return (
    <Fragment>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500"> {imgPreview} </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2"> {title} </h3>
              <p className="text-gray-600 mb-3"> {desc} </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"> {tag1} </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"> {tag2} </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"> {tag3} </span>
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default FeaturedProject