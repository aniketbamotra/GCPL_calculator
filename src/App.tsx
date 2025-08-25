import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { DrillingCracksCalculator } from './components/DrillingCracksCalculator'
import { InjectionMaterialsCalculator } from './components/InjectionMaterialsCalculator'
import { JointDrillingCalculator } from './components/JointDrillingCalculator'
import { AnchorMortarCalculator } from './components/AnchorMortarCalculator'
import { InjectionCreamCalculator } from './components/InjectionCreamCalculator'
import { VolumeCalculator } from './components/VolumeCalculator'
import { PipeCalculator } from './components/PipeCalculator'
import { FoundationCalculator } from './components/FoundationCalculator'
import { MPaBarConverter } from './components/MPaBarConverter'
import { PSIBarConverter } from './components/PSIBarConverter'
import { GalLiterConverter } from './components/GalLiterConverter'
import { InchCmConverter } from './components/InchCmConverter'
import { LbKgConverter } from './components/LbKgConverter'
import bannerBg from './assets/banner bg.jpg'
import './App.css'

function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="GCPL" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="flex items-center">
            <a
              href="https://gcpl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-accent-700 text-sm font-medium transition-colors flex items-center space-x-1"
            >
              <span>Main Website</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function HomeBanner() {
  return (
    <div 
      className="w-full bg-gradient-to-r text-white bg-cover bg-center bg-no-repeat relative min-h-[600px] flex items-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-green-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 animate-pulse">
              Professional Tools
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Engineering
            <span className="block text-green-accent-400">Calculators</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Precision tools designed for contractors, engineers, and construction professionals
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            From foundation stabilization to unit conversions - all your calculations in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/drilling-cracks"
              className="group bg-green-accent-600 hover:bg-green-accent-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Calculating</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://gcpl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Visit Main Website</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeBanner />
      
      {/* Stats Section */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-green-accent-600 mb-2 group-hover:scale-110 transition-transform">13+</div>
              <div className="text-gray-600 font-medium">Professional Tools</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-accent-600 mb-2 group-hover:scale-110 transition-transform">8</div>
              <div className="text-gray-600 font-medium">Engineering Calculators</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-accent-600 mb-2 group-hover:scale-110 transition-transform">5</div>
              <div className="text-gray-600 font-medium">Unit Converters</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-accent-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-gray-600 font-medium">Precision Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full py-20 px-4 sm:px-6 lg:px-32">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block bg-green-accent-100 text-green-accent-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Professional Tools
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Available Calculators</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive collection of engineering tools designed for precision and reliability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Link
            to="/drilling-cracks"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Drilling Cracks Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Precision targeting of cracks with accurate drilling depth, angle, and distance calculations.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/injection-materials"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Injection Materials Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Estimate consumption of injection materials, optimize costs and minimize material waste.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/joint-drilling"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Joint Drilling Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Precision drilling at wall-foundation interfaces with optimal angle and depth calculations.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/anchor-mortar"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Anchor Mortar Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Calculate spiral anchor placement and mortar consumption for structural reinforcement of cracks.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/injection-cream"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Injection Cream Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Estimate injection cream consumption for creating effective horizontal damp-proof barriers.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/calculate-volume"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Volume Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Calculate precise volumes for filling expansion joints, cracks, and building structure spaces.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/pipe-volume"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Pipe Volume Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Calculate volume of material needed to fill spaces between pipes and passages for sealing projects.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/foundation-lifting"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                Foundation Lifting Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Plan precise drilling and injection for foundation stabilization with accurate lance positioning calculations.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Calculator</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/mpa-bar-converter"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                MPa to BAR Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Convert pressure units between Megapascals (MPa) and Bar with precise calculations.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Converter</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/psi-bar-converter"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                PSI to BAR Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Convert pressure units between Pounds per Square Inch (PSI) and Bar.
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Converter</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/gal-liter-converter"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                GAL to L Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Convert volume units between US Gallons (GAL) and Liters (L).
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Converter</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/inch-cm-converter"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                INCH to CM Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Convert length units between Inches and Centimeters (CM).
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Converter</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/lb-kg-converter"
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-accent-300 hover:shadow-xl shadow-sm transition-all duration-300 group transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-accent-700 transition-colors">
                LB to KG Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Convert weight units between Pounds (LB) and Kilograms (KG).
            </p>
            <div className="flex items-center text-green-accent-600 font-semibold group-hover:text-green-accent-700 transition-colors">
              <span>Open Converter</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
        
        {/* Features Section */}
        <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose GCPL Calculators?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Precision Engineering</h4>
              <p className="text-gray-600">Accurate calculations based on proven engineering principles and industry standards.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast & Efficient</h4>
              <p className="text-gray-600">Save time with instant calculations and streamlined workflows for professionals.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Knowledge</h4>
              <p className="text-gray-600">Built by experts with deep understanding of construction and engineering practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
                    <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/drilling-cracks" element={<DrillingCracksCalculator />} />
              <Route path="/injection-materials" element={<InjectionMaterialsCalculator />} />
              <Route path="/joint-drilling" element={<JointDrillingCalculator />} />
              <Route path="/anchor-mortar" element={<AnchorMortarCalculator />} />
              <Route path="/injection-cream" element={<InjectionCreamCalculator />} />
              <Route path="/calculate-volume" element={<VolumeCalculator />} />
              <Route path="/pipe-volume" element={<PipeCalculator />} />
              <Route path="/foundation-lifting" element={<FoundationCalculator />} />
              <Route path="/mpa-bar-converter" element={<MPaBarConverter />} />
              <Route path="/psi-bar-converter" element={<PSIBarConverter />} />
              <Route path="/gal-liter-converter" element={<GalLiterConverter />} />
              <Route path="/inch-cm-converter" element={<InchCmConverter />} />
              <Route path="/lb-kg-converter" element={<LbKgConverter />} />
            </Routes>
      </div>
    </Router>
  )
}

export default App
