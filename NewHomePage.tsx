import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrimaryCTA from '../components/PrimaryCTA';
import GeneralFAQ from '../components/GeneralFAQ';
import Integrations from '../components/Integrations';
import InteractiveDemo from '../components/InteractiveDemo';
const HomePage = () => {
  const [activeTab, setActiveTab] = useState('meeting');
  const tabData = {
    meeting: {
      title: 'Get accurate summaries and action items after every meeting.',
      image: '/meeting-summary.png'
    },
    sales: {
      title: 'Stay close to customers by always having sales and customer meetings at hand.',
      image: '/Sales-conversation.png'
    },
    feedback: {
      title: 'Learn what your customers are struggling with and identify their pain points easily.',
      image: '/feedback-talk-with-data.png'
    },
    assistant: {
      title: 'Get Sindre to create precise and well formulated tickets for you.',
      image: '/project-manager-assistant-linear-tickets.png'
    },
    hosting: {
      title: 'Your data, your choice. Host it locally, on the cloud, or hybrid. It\'s GDPR compliant no matter what you choose.',
      image: '/Security.png'
    }
  };
  return <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
          <div className="py-20 px-4 mx-auto max-w-7xl relative z-10">
            <div className="text-center">
              {/* Main Heading */}
              <h1 className="mb-6 text-5xl font-bold tracking-tight leading-tight md:text-6xl lg:text-7xl dark:text-white text-text-custom">
                Work Smarter with{' '}
                <span className="text-gradient">AI</span>
              </h1>
              
              {/* Subheading */}
              <h2 className="mb-4 text-2xl font-semibold dark:text-gray-200 lg:text-3xl text-text-custom">
                The AI Agent for Product Teams That Gets Work Done
              </h2>
              
              {/* Supporting text */}
              <p className="mb-12 max-w-4xl mx-auto text-xl leading-relaxed dark:text-gray-300 text-gray-600">
                The coach that organizes your work, uncovers insights, and accelerates progress—so your team can focus on creating exceptional products
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="https://app.sindre.ai/login" className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-br from-primary-900 to-primary-700">
                  Get Started
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
              </div>
              
              {/* Trust indicators with customer logos */}
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    14 days free trial
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    GDPR compliant
                  </div>
                </div>
                
                {/* Customer logos */}
                <div className="flex items-center gap-8 opacity-60">
                  
                  
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse bg-gradient-to-br from-primary-400 to-primary-300"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse bg-gradient-to-br from-primary-200 to-primary-100" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse bg-gradient-radial from-primary-200 to-transparent" style={{animationDelay: '6s'}}></div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <InteractiveDemo />

        {/* Features Section */}
        

        {/* Tabs Section */}
        <section className="dark:bg-gray-800 bg-primary-100">
          
        </section>

        {/* Product Management Section */}
        <section className="py-20 px-4 mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl dark:text-white text-text-custom">
              Product Management Is Complex. Sindre Makes It Manageable
            </h2>
            <p className="text-xl leading-relaxed dark:text-gray-300 text-gray-600">
              Juggling meetings, tasks, feedback, and strategy across multiple tools slows your team down. Misalignment, lost insights, and manual follow-ups drain your energy and delay impact.
            </p>
          </div>
        </section>

        {/* AI Operating System Section */}
        <section className="py-20 px-4 mx-auto max-w-7xl dark:bg-gray-800 bg-primary-200">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl dark:text-white text-text-custom">
              The AI-Powered Operating System for Product Teams
            </h2>
            <p className="mb-16 text-xl leading-relaxed dark:text-gray-300 text-gray-600">
              Sindre unifies your product work in one intelligent workspace. Our AI agent listens, organizes, and acts—turning conversations into clear tasks, surfacing key insights, and keeping your team aligned from strategy to delivery.
            </p>
            
            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-6 dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="mb-3 text-xl font-semibold dark:text-white text-text-custom">
                  AI Meeting Coach
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Automatically captures decisions and action items so nothing slips through the cracks.
                </p>
              </div>
              
              <div className="p-6 dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="mb-3 text-xl font-semibold dark:text-white text-text-custom">
                  Unified Workspace
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Connect meetings, tasks, files, and conversations in one place.
                </p>
              </div>
              
              <div className="p-6 dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="mb-3 text-xl font-semibold dark:text-white text-text-custom">
                  Insight Engine
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Surface trends and feedback that drive smarter product decisions.
                </p>
              </div>
              
              <div className="p-6 dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="mb-3 text-xl font-semibold dark:text-white text-text-custom">
                  Seamless Collaboration
                </h3>
                <p className="dark:text-gray-300 text-gray-600">
                  Keep your team aligned with real-time updates and shared context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Notetaking and Tasks */}
        <section className="py-24 px-4 mx-auto max-w-7xl relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl dark:text-white text-text-custom">
                  Effortless Meeting Notes and{' '}
                  <span className="bg-gradient-to-br from-primary-900 to-primary-500 bg-clip-text text-transparent">Actionable Tasks</span>
                </h2>
                <p className="text-xl leading-relaxed dark:text-gray-300 max-w-xl text-gray-600">
                  Never miss a decision or action item again. Sindre's AI automatically captures meeting notes, extracts key decisions, and creates clear, assignable tasks—so your team can move from talk to action without delay.
                </p>
              </div>
              
              <div className="grid gap-4">
                {[
                  'Real-time transcription and summarization',
                  'Automatic task extraction and assignment', 
                  'Seamless integration with your calendars and task tools',
                  'Searchable meeting archives for easy reference'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 dark:bg-gray-800/50 rounded-xl border dark:border-gray-700/50 backdrop-blur-sm" style={{backgroundColor: 'rgba(249, 250, 251, 0.8)', borderColor: 'rgba(156, 163, 175, 0.2)'}}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary-900 to-primary-700">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="dark:text-gray-300 font-medium text-text-custom">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl p-12 border border-primary-300/30 bg-gradient-to-br from-primary-50 to-primary-100 dark:border-gray-700/50">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-brand-800 to-brand-700">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold dark:text-white text-text-custom">AI Meeting Assistant</h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Transform conversations into organized, actionable insights</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl bg-primary-400/20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl bg-primary-300/20"></div>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-24 px-4 mx-auto max-w-7xl dark:from-gray-900/10 dark:via-gray-900 dark:to-gray-900/10 relative overflow-hidden bg-gradient-to-br from-primary-300 to-primary-400">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-first">
              <div className="relative rounded-3xl p-12 border border-primary-300/30 bg-gradient-to-br from-primary-50 to-primary-100 dark:border-gray-700/50">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-brand-800 to-brand-600">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold dark:text-white text-text-custom">Smart Analytics Dashboard</h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Discover patterns and trends in your product data</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-xl bg-primary-400/20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-xl bg-primary-300/20"></div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl dark:text-white text-text-custom">
                  Turn Data into Decisions with{' '}
                  <span className="bg-gradient-to-br from-primary-900 to-primary-600 bg-clip-text text-transparent">AI-Driven Insights</span>
                </h2>
                <p className="text-xl leading-relaxed dark:text-gray-300 max-w-xl text-gray-600">
                  Sindre surfaces patterns, feedback, and risks hidden in your meetings and product data. Get actionable insights that help you prioritize features, identify blockers early, and align your roadmap with real user needs.
                </p>
              </div>
              
              <div className="grid gap-4">
                {[
                  'AI-powered trend detection across meetings and tasks',
                  'Customer feedback and sentiment analysis',
                  'Risk and opportunity alerts', 
                  'Customizable insight dashboards'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 dark:bg-gray-800/50 rounded-xl border dark:border-gray-700/50 backdrop-blur-sm" style={{backgroundColor: 'rgba(249, 250, 251, 0.8)', borderColor: 'rgba(156, 163, 175, 0.2)'}}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary-900 to-primary-600">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="dark:text-gray-300 font-medium text-text-custom">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{
            background: 'radial-gradient(circle, rgba(156, 163, 175, 0.7), transparent)',
            animationDelay: '2s'
          }}></div>
        </section>

        {/* AI Product Coach */}
        <section className="py-24 px-4 mx-auto max-w-7xl relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl dark:text-white text-text-custom">
                  Your{' '}
                  <span >AI Coach</span>
                  {' '}for Smarter Product Management
                </h2>
                <p className="text-xl leading-relaxed dark:text-gray-300 max-w-xl text-gray-600">
                  Sindre's AI coach guides your team through best practices, suggests next steps, and keeps everyone aligned on goals and priorities. It's like having a seasoned product manager available 24/7 to help you deliver better products faster.
                </p>
              </div>
              
              <div className="grid gap-4">
                {[
                  'Personalized recommendations based on your product data',
                  'Proactive reminders and follow-ups',
                  'Workflow optimization tips',
                  'Continuous learning from your team\'s work patterns'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 dark:bg-gray-800/50 rounded-xl border dark:border-gray-700/50 backdrop-blur-sm" style={{backgroundColor: 'rgba(249, 250, 251, 0.8)', borderColor: 'rgba(156, 163, 175, 0.2)'}}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary-800 to-primary-900">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="dark:text-gray-300 font-medium text-text-custom">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative lg:order-first">
              <div className="relative rounded-3xl p-12 border border-primary-300/30 bg-gradient-to-br from-primary-400/10 to-primary-300/20 dark:border-gray-700/50">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-brand-800 to-brand-900">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold dark:text-white text-text-custom">Intelligent AI Assistant</h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600">Your 24/7 product management companion</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl bg-primary-400/20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl bg-primary-300/15"></div>
            </div>
          </div>
        </section>

        <Integrations />
        <GeneralFAQ />
        <PrimaryCTA />
      </main>
      <Footer />
    </div>;
};
export default HomePage;