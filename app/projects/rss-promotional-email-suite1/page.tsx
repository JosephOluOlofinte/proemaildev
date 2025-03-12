import React from 'react';

const PortfolioDetailPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

      {/* Project Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Red Stick Spice Co. Promotional Email Suite</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Responsive</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Vibrant Design</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Product Showcase</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Campaign Series</span>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            A series of vibrant and engaging email templates for Red Stick Spice Co., containing 4 emails and focusing on promoting their premium spice products. The goal was to create visually appealing, user-friendly designs that effectively communicate the brand's message and drive customer engagement.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">The Challenge</h3>
              <p className="text-gray-700 mb-4">
                Create a cohesive series of promotional emails that would showcase Red Stick Spice Co.'s premium products while maintaining their artisanal brand identity and driving sales through visually compelling content.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Showcase product photography in an appetizing way</li>
                <li>Create a consistent yet unique design for each campaign</li>
                <li>Ensure mobile responsiveness across all email clients</li>
                <li>Incorporate clear calls-to-action to drive conversions</li>
                <li>Maintain brand voice while creating excitement for promotions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">The Solution</h3>
              <p className="text-gray-700 mb-4">
                I developed a series of four distinct yet cohesive email templates, each featuring striking hero images, bold headlines, and carefully structured content to highlight product features and promotional offers.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Bold, attention-grabbing hero sections with product imagery</li>
                <li>Strategic color palette aligned with brand guidelines</li>
                <li>Clear typography hierarchy for scanning readability</li>
                <li>Modular content blocks for featured products</li>
                <li>Custom CTA buttons optimized for click-through rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Email Series */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">The Campaign Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">New Product Announcement Email</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Spring Collection Launch</h3>
                <p className="text-sm text-gray-600 mb-3">Introducing seasonal spice blends and limited edition products</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">33% Open Rate</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">12% CTR</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Special Offer Email</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Limited Time Promotion</h3>
                <p className="text-sm text-gray-600 mb-3">Weekend flash sale with tiered discounts based on purchase amount</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">41% Open Rate</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">18% CTR</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Recipe Collection Email</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Culinary Inspiration</h3>
                <p className="text-sm text-gray-600 mb-3">Curated recipes featuring seasonal ingredients and spice pairings</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">38% Open Rate</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">15% CTR</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Customer Appreciation Email</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Loyalty Rewards</h3>
                <p className="text-sm text-gray-600 mb-3">Exclusive offers for repeat customers with loyalty program highlights</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">45% Open Rate</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">22% CTR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Elements */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Key Design Elements</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-4">Hero Images & Headlines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Hero Section Example</span>
              </div>
              <div>
                <h4 className="font-medium mb-3">Impact-Driven Design</h4>
                <p className="text-gray-700 mb-4">
                  Each email features a striking hero image that captures attention immediately, paired with bold, clear headlines that highlight key promotions and product features.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Rich, vibrant product photography</li>
                  <li>Overlay text with high contrast for readability</li>
                  <li>Concise, benefit-driven headlines</li>
                  <li>Balanced visual hierarchy to direct attention</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-medium mb-4">Product Showcases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-medium mb-3">Compelling Product Presentation</h4>
                <p className="text-gray-700 mb-4">
                  Created visually appealing product blocks that highlight specific spice blends and collections with clear descriptions and prominent pricing.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Consistent product card layout</li>
                  <li>Clear product titles and descriptions</li>
                  <li>Visual emphasis on special offers</li>
                  <li>Individual CTAs for each product</li>
                </ul>
              </div>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Product Grid Example</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Call-to-Action Buttons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">CTA Button Examples</span>
              </div>
              <div>
                <h4 className="font-medium mb-3">Conversion-Optimized CTAs</h4>
                <p className="text-gray-700 mb-4">
                  Designed high-visibility buttons with action-oriented text that drives users toward conversion points throughout the email.
                </p>
                <div className="bg-gray-50 p-4 rounded border mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
                    <code>
{`<!-- Bulletproof button example -->
<table border="0" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td align="center" bgcolor="#E64626" 
        style="border-radius: 4px;">
      <a href="https://example.com" target="_blank" 
         style="display: inline-block; 
                padding: 12px 24px; 
                font-family: 'Arial', sans-serif; 
                font-size: 16px; 
                font-weight: bold;
                color: #ffffff; 
                text-decoration: none;
                border-radius: 4px;">
        SHOP FEATURED BLENDS
      </a>
    </td>
  </tr>
</table>`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Design */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Responsive Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">Desktop View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500">Desktop Email</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">Tablet View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500">Tablet Email</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">Mobile View</h3>
              <div className="bg-gray-200 h-80 w-full flex items-center justify-center">
                <span className="text-gray-500">Mobile Email</span>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-4">Mobile Optimization Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Single-column layouts for mobile views</li>
                  <li>Increased font sizes for better readability</li>
                  <li>Larger touch targets for buttons</li>
                  <li>Simplified navigation elements</li>
                  <li>Optimized image sizes for faster loading</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded border">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>
{`@media screen and (max-width: 480px) {
  .mobile-full-width {
    width: 100% !important;
  }
  .mobile-center {
    text-align: center !important;
  }
  .mobile-padding {
    padding: 15px !important;
  }
  .mobile-hidden {
    display: none !important;
  }
  .mobile-font {
    font-size: 18px !important;
    line-height: 125% !important;
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        {/* <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Brand Identity Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Color Palette</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="w-16 h-16 rounded bg-red-600 flex items-end justify-center p-1">
                  <span className="text-white text-xs">#E64626</span>
                </div>
                <div className="w-16 h-16 rounded bg-yellow-700 flex items-end justify-center p-1">
                  <span className="text-white text-xs">#B35C00</span>
                </div>
                <div className="w-16 h-16 rounded bg-green-700 flex items-end justify-center p-1">
                  <span className="text-white text-xs">#2C5F2D</span>
                </div>
                <div className="w-16 h-16 rounded bg-gray-800 flex items-end justify-center p-1">
                  <span className="text-white text-xs">#333333</span>
                </div>
                <div className="w-16 h-16 rounded bg-gray-100 border flex items-end justify-center p-1">
                  <span className="text-gray-800 text-xs">#F8F8F8</span>
                </div>
              </div>
              <p className="text-gray-700">
                Used the brand's warm, spice-inspired color palette to create visual continuity across all campaign emails, with strategic color accents to highlight key promotional elements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Typography & Imagery</h3>
              <div className="mb-4">
                <p className="font-bold text-2xl mb-1">Montserrat Bold</p>
                <p className="font-medium text-xl mb-1">Montserrat Medium</p>
                <p className="font-normal mb-4">Open Sans Regular</p>
              </div>
              <p className="text-gray-700 mb-4">
                Combined the brand's established typography with rich, appetizing product photography to create a cohesive visual experience that reinforces Red Stick Spice Co.'s artisanal, premium positioning.
              </p>
              <p className="text-gray-700">
                All product images were styled with complementary ingredients and natural textures to emphasize the quality and versatility of the spice products.
              </p>
            </div>
          </div>
        </section> */}

        {/* Results */}
        {/* <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Campaign Results</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">39%</div>
                <h3 className="text-xl font-medium mb-2">Average Open Rate</h3>
                <p className="text-gray-600 text-sm">12% higher than industry average</p>
              </div>
              <div className="text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">16.7%</div>
                <h3 className="text-xl font-medium mb-2">Click-Through Rate</h3>
                <p className="text-gray-600 text-sm">8% increase from previous campaigns</p>
              </div>
              <div className="text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">+24%</div>
                <h3 className="text-xl font-medium mb-2">Revenue Growth</h3>
                <p className="text-gray-600 text-sm">Compared to previous quarter</p>
              </div>
            </div>
            <div className="border-t pt-6">
              <h3 className="text-xl font-medium mb-4">Client Feedback</h3>
              <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 mb-4">
                "These email templates have completely transformed our promotional efforts. Not only do they look stunning and professional, but they've also significantly increased our conversion rates. Our customers have commented on how appetizing the product presentations are, and how easy it is to shop directly from the emails."
              </blockquote>
              <p className="text-right text-gray-600">— Marketing Director, Red Stick Spice Co.</p>
            </div>
          </div>
        </section> */}

        {/* Call To Action */}
        <section className="bg-indigo-700 text-white rounded-lg shadow-md p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need engaging promotional emails for your products?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I can help you create visually stunning, high-converting email campaigns that showcase your products and drive customer engagement.
          </p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium">Let's Work Together</button>
        </section>
      </main>

    </div>
  );
};

export default PortfolioDetailPage;