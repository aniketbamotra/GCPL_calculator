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
              href="https://geoconstech.com/"
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
      className="w-full bg-gradient-to-r text-white bg-cover bg-center bg-no-repeat relative min-h-[700px] flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-green-accent-900/60"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-accent-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-accent-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center bg-gradient-to-r from-green-accent-500 to-green-accent-600 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Professional Engineering Tools
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Engineering
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-accent-400 via-green-accent-300 to-green-accent-500 mt-2">
              Calculators
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-100 mb-6 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
            Precision tools designed for contractors, engineers, and construction professionals
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            From foundation stabilization to unit conversions - all your calculations in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-400">
            <Link
              to="/drilling-cracks"
              className="group relative bg-gradient-to-r from-green-accent-600 to-green-accent-500 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-accent-500/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-accent-500 to-green-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Start Calculating</span>
              <svg className="w-6 h-6 relative group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://geoconstech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white hover:bg-white hover:text-gray-900 px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Visit Main Website</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <svg className="w-8 h-12 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <HomeBanner />
      
      {/* Stats Section - Modern Design */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-accent-600 to-green-accent-500 mb-2">13+</div>
                <div className="text-gray-600 font-semibold text-sm">Professional Tools</div>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                </div>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-accent-600 to-green-accent-500 mb-2">8</div>
                <div className="text-gray-600 font-semibold text-sm">Engineering Calculators</div>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-accent-600 to-green-accent-500 mb-2">5</div>
                <div className="text-gray-600 font-semibold text-sm">Unit Converters</div>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-accent-600 to-green-accent-500 mb-2">100%</div>
                <div className="text-gray-600 font-semibold text-sm">Precision Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section - Why Choose GCPL */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-accent-50/50 via-transparent to-green-accent-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-accent-600 to-green-accent-500">GCPL</span> Calculators?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Built by engineers, for engineers. Experience the difference.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Precision Engineering</h4>
              <p className="text-gray-600 text-center leading-relaxed">Accurate calculations based on proven engineering principles and industry standards.</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Fast & Efficient</h4>
              <p className="text-gray-600 text-center leading-relaxed">Save time with instant calculations and streamlined workflows for professionals.</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">Expert Knowledge</h4>
              <p className="text-gray-600 text-center leading-relaxed">Built by experts with deep understanding of construction and engineering practices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Section - Modern Design */}
      <div className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-accent-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-accent-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Quick Navigation</h3>
            <p className="text-gray-400 text-lg">Jump directly to the calculator section you need</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#drilling-injection"
              className="group relative bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-green-accent-600 hover:to-green-accent-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:shadow-green-accent-500/50 transition-all duration-300 flex items-center space-x-3 border border-white/20 hover:border-green-accent-400 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Drilling & Injection</span>
            </a>
            <a
              href="#volume-space"
              className="group relative bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-green-accent-600 hover:to-green-accent-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:shadow-green-accent-500/50 transition-all duration-300 flex items-center space-x-3 border border-white/20 hover:border-green-accent-400 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Volume & Space</span>
            </a>
            <a
              href="#foundation-structural"
              className="group relative bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-green-accent-600 hover:to-green-accent-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:shadow-green-accent-500/50 transition-all duration-300 flex items-center space-x-3 border border-white/20 hover:border-green-accent-400 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              <span>Foundation & Structural</span>
            </a>
            <a
              href="#unit-converters"
              className="group relative bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-green-accent-600 hover:to-green-accent-500 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:shadow-green-accent-500/50 transition-all duration-300 flex items-center space-x-3 border border-white/20 hover:border-green-accent-400 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span>Unit Converters</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center bg-gradient-to-r from-green-accent-500 to-green-accent-600 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Professional Tools Collection
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Available <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-accent-600 to-green-accent-500">Calculators</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive collection of engineering tools designed for precision and reliability
            </p>
          </div>
        
        {/* Section 1: Drilling & Injection Solutions */}
        <div id="drilling-injection" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex-grow h-1 bg-gradient-to-r from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
              <div className="mx-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 px-8 py-3 rounded-3xl">
                  <h3 className="text-3xl font-black text-white whitespace-nowrap">Drilling & Injection Solutions</h3>
                </div>
              </div>
              <div className="flex-grow h-1 bg-gradient-to-l from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools for drilling operations, crack repairs, and injection material calculations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            to="/drilling-cracks"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Drilling Cracks Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                Precision targeting of cracks with accurate drilling depth, angle, and distance calculations.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link
            to="/injection-materials"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Injection Materials Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Estimate consumption of injection materials, optimize costs and minimize material waste.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link
            to="/joint-drilling"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Joint Drilling Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Precision drilling at wall-foundation interfaces with optimal angle and depth calculations.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link
            to="/anchor-mortar"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Anchor Mortar Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Calculate spiral anchor placement and mortar consumption for structural reinforcement of cracks.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link
            to="/injection-cream"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Injection Cream Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Estimate injection cream consumption for creating effective horizontal damp-proof barriers.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Section 2: Volume & Space Calculations */}
      <div id="volume-space" className="mb-24 scroll-mt-24">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-grow h-1 bg-gradient-to-r from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
            <div className="mx-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 px-8 py-3 rounded-3xl">
                <h3 className="text-3xl font-black text-white whitespace-nowrap">Volume & Space Calculations</h3>
              </div>
            </div>
            <div className="flex-grow h-1 bg-gradient-to-l from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Accurate volume calculations for filling spaces, joints, pipes, and passages
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Link
            to="/calculate-volume"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Volume Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Calculate precise volumes for filling expansion joints, cracks, and building structure spaces.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link
            to="/pipe-volume"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Pipe Volume Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Calculate volume of material needed to fill spaces between pipes and passages for sealing projects.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Section 3: Foundation & Structural */}
      <div id="foundation-structural" className="mb-24 scroll-mt-24">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-grow h-1 bg-gradient-to-r from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
            <div className="mx-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 px-8 py-3 rounded-3xl">
                <h3 className="text-3xl font-black text-white whitespace-nowrap">Foundation & Structural</h3>
              </div>
            </div>
            <div className="flex-grow h-1 bg-gradient-to-l from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Advanced tools for foundation stabilization, lifting, and precise lance positioning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Link
            to="/foundation-lifting"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                Foundation Lifting Calculator
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Plan precise drilling and injection for foundation stabilization with accurate lance positioning calculations.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Calculator</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Section 4: Unit Converters */}
      <div id="unit-converters" className="mb-24 scroll-mt-24">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-grow h-1 bg-gradient-to-r from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
            <div className="mx-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-green-accent-500 to-green-accent-600 px-8 py-3 rounded-3xl">
                <h3 className="text-3xl font-black text-white whitespace-nowrap">Unit Converters</h3>
              </div>
            </div>
            <div className="flex-grow h-1 bg-gradient-to-l from-transparent via-green-accent-200 to-green-accent-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Fast and accurate conversion tools for pressure, volume, length, and weight units
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Link
            to="/mpa-bar-converter"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                MPa to BAR Converter
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Convert pressure units between Megapascals (MPa) and Bar with precise calculations.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Converter</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            to="/psi-bar-converter"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                PSI to BAR Converter
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Convert pressure units between Pounds per Square Inch (PSI) and Bar.
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Converter</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            to="/gal-liter-converter"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                GAL to L Converter
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Convert volume units between US Gallons (GAL) and Liters (L).
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Converter</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            to="/inch-cm-converter"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                INCH to CM Converter
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Convert length units between Inches and Centimeters (CM).
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Converter</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            to="/lb-kg-converter"
            className="group relative bg-white rounded-3xl border border-gray-200 hover:border-green-accent-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-accent-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-accent-400 to-green-accent-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-accent-500 to-green-accent-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-accent-600 transition-colors">
                LB to KG Converter
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Convert weight units between Pounds (LB) and Kilograms (KG).
              </p>
              <div className="flex items-center text-green-accent-600 font-bold group-hover:text-green-accent-700 transition-colors">
                <span>Open Converter</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
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
