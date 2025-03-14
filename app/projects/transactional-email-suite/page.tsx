import React from 'react';

const PortfolioDetailPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">


      {/* Project Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Transactional Email Suite</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Responsive</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Accessible</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Modular</span>
            <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">Multilingual</span>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl">
            A comprehensive suite of 15+ transactional email templates for a fintech platform, featuring responsive design, accessibility compliance, and modular components for easy maintenance and localization.
          </p>
        </div>

        {/* Project Overview */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">The Challenge</h3>
              <p className="text-gray-700 mb-4">
                Design and develop a unified system of transactional email templates to replace an inconsistent collection of legacy emails that were causing user confusion and technical issues.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Support for 15+ distinct transaction types</li>
                <li>Compliance with WCAG 2.1 accessibility standards</li>
                <li>Support for 8 different languages with RTL compatibility</li>
                <li>Consistent rendering across all major email clients</li>
                <li>Integration with the client&apos;s email service provider</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">The Solution</h3>
              <p className="text-gray-700 mb-4">
                I developed a component-based email architecture using a modular approach with reusable content blocks that ensured consistency while enabling customization for each transaction type.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Created a master template with variable content regions</li>
                <li>Built a component library of 20+ reusable email modules</li>
                <li>Implemented dynamic content logic for personalization</li>
                <li>Established a unified design language across all templates</li>
                <li>Developed a testing framework for multiple languages and clients</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Template Showcase */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Template Suite</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Welcome Email Template</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Account Welcome</h3>
                <p className="text-sm text-gray-600">Sent when a user creates a new account</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Transaction Receipt Template</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Payment Confirmation</h3>
                <p className="text-sm text-gray-600">Sent after successful payment processing</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-500">Password Reset Template</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Password Recovery</h3>
                <p className="text-sm text-gray-600">Secure template with password reset link</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <a href="#" className="text-indigo-600 hover:text-indigo-800">View all 15 email templates →</a>
          </div>
        </section>

        {/* Component Library */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Modular Component System</h2>
          <p className="text-gray-700 mb-6">
            To ensure consistency and maintainability, I developed a library of reusable components that could be assembled in different combinations to create each template.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Header Components</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Logo + Navigation</li>
                <li>Welcome Banner</li>
                <li>Account Summary</li>
              </ul>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Content Components</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Transaction Details</li>
                <li>Action Button</li>
                <li>Verification Code</li>
                <li>Support Information</li>
              </ul>
            </div>
            <div className="border rounded p-4">
              <h3 className="font-medium mb-2">Footer Components</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Social Media Links</li>
                <li>Legal Disclaimers</li>
                <li>Unsubscribe Options</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            <pre className="text-sm text-gray-800 overflow-x-auto">
              <code>
{`<!-- Example of component-based structure -->
<module name="header">
  <!-- Logo and branding elements -->
</module>

<module name="transactionSummary" data-type="{{transactionType}}">
  <!-- Dynamic transaction details -->
</module>

<module name="ctaButton" url="{{actionUrl}}" text="{{actionText}}">
  <!-- Bulletproof button component -->
</module>

<module name="footer" locale="{{userLocale}}">
  <!-- Localized footer content -->
</module>`}
              </code>
            </pre>
          </div>
        </section>

        {/* Multilingual Support */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Multilingual Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">LTR Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">English</span>
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">French</span>
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">German</span>
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Spanish</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-medium mb-4">RTL Support</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Arabic</span>
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Hebrew</span>
                </div>
                <div className="bg-gray-800 h-48 flex items-center justify-center">
                  <span className="text-gray-400">RTL Dark Mode</span>
                </div>
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Text Flow Diagram</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            Special consideration was given to right-to-left languages, ensuring proper text alignment, button positioning, and visual flow. Conditional CSS and table structures were implemented to maintain design consistency across all language variants.
          </p>
        </section>

        {/* Technical Challenges */}
        <section className="mb-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Technical Solutions</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-3">Accessibility Enhancements</h3>
            <p className="text-gray-700 mb-4">
              Implemented comprehensive accessibility features to ensure the email templates were usable by all recipients, including those using screen readers or other assistive technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-medium mb-2">Implemented Features:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Semantic HTML structure</li>
                  <li>Proper heading hierarchy</li>
                  <li>Alt text for all images</li>
                  <li>High contrast text options</li>
                  <li>Screen reader compatible tables</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded border">
                <pre className="text-sm text-gray-800 overflow-x-auto">
                  <code>
{`<!-- Accessible image example -->
<img src="logo.png" 
     alt="Company Name" 
     width="200" 
     role="presentation"
     style="display: block; 
            outline: none; 
            border: 0; 
            text-decoration: none;" />

<!-- Screen reader only text -->
<div class="sr-only" style="display:none; 
                           font-size:1px; 
                           line-height:1px; 
                           max-height:0; 
                           max-width:0; 
                           opacity:0; 
                           overflow:hidden;">
  Important information about your transaction
</div>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3">Dynamic Content System</h3>
            <p className="text-gray-700 mb-4">
              Developed a flexible templating system to handle variable content while maintaining consistent design and structure across all email types.
            </p>
            <div className="bg-gray-50 p-4 rounded border mb-4">
              <pre className="text-sm text-gray-800 overflow-x-auto">
                <code>
{`<!-- Dynamic content structure -->
<if:hasPaymentInfo>
  <table>
    <tr>
      <td style="font-family: Arial, sans-serif; 
                font-size: 16px; 
                color: #333333;">
        <p>Your payment of <b>{{amount}}</b> was processed on {{date}}.</p>
        <p>Reference ID: {{referenceId}}</p>
      </td>
    </tr>
  </table>
</if:hasPaymentInfo>

<elseif:hasAccountUpdate>
  <table>
    <tr>
      <td style="font-family: Arial, sans-serif; 
                font-size: 16px; 
                color: #333333;">
        <p>Your account information was updated on {{date}}.</p>
        <p>If you did not make this change, please <a href="{{securityUrl}}">contact us immediately</a>.</p>
      </td>
    </tr>
  </table>
</elseif:hasAccountUpdate>`}
                </code>
              </pre>
            </div>
            <p className="text-gray-700">
              This conditional content system allowed for maximum flexibility while maintaining consistent structure and styling, enabling the team to quickly deploy new transaction types without creating entirely new templates.
            </p>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-2">98.7%</div>
              <h3 className="text-xl font-medium mb-2">Delivery Rate</h3>
              <p className="text-gray-600 text-sm">Improved deliverability across all major email providers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-2">+27%</div>
              <h3 className="text-xl font-medium mb-2">Open Rate</h3>
              <p className="text-gray-600 text-sm">Increase in open rates compared to previous templates</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-indigo-600 text-4xl font-bold mb-2">-82%</div>
              <h3 className="text-xl font-medium mb-2">Support Tickets</h3>
              <p className="text-gray-600 text-sm">Reduction in email-related customer support inquiries</p>
            </div>
          </div>

          {/* <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-4">Client Feedback</h3>
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700 mb-4">
              "The new transactional email system has transformed our customer experience. Not only do the emails look more professional, but they&apos;ve also significantly reduced confusion and support requests. The modular approach has made it easy for our team to manage and update content as needed."
            </blockquote>
            <p className="text-right text-gray-600">— Director of Customer Experience</p>
          </div> */}
        </section>

        {/* Call To Action */}
        <section className="bg-indigo-700 text-white rounded-lg shadow-md p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need reliable transactional emails for your platform?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I can help you create a comprehensive system of responsive, accessible transactional emails that enhance your user experience and support your business goals.
          </p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium">Let&apos;s Work Together</button>
        </section>
      </main>

    </div>
  );
};

export default PortfolioDetailPage;