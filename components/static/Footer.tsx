'use client'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <span>LinkedIn</span>
            <span>GitHub</span>
            <span>Twitter</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer