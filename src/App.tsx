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
      className="w-full bg-gradient-to-r text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Engineering Calculators
          </h1>
          <p className="text-xl md:text-2xl text-green-accent-100 mb-8">
            Precision tools for contractors and engineers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/drilling-cracks"
              className="bg-white text-green-accent-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-accent-50 transition-colors"
            >
              Start Calculating
            </Link>
            <a
              href="https://gcpl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-accent-700 transition-colors"
            >
              Visit Main Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeBanner />
      
      <div className="w-full py-16 px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Calculators</h2>
          <p className="text-lg text-gray-600">
            Choose from our collection of specialized engineering calculators
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Link
            to="/drilling-cracks"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Drilling Cracks Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Precision targeting of cracks with accurate drilling depth, angle, and distance calculations.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/injection-materials"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Injection Materials Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Estimate consumption of injection materials, optimize costs and minimize material waste.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/joint-drilling"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Joint Drilling Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Precision drilling at wall-foundation interfaces with optimal angle and depth calculations.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/anchor-mortar"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Anchor Mortar Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Calculate spiral anchor placement and mortar consumption for structural reinforcement of cracks.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/injection-cream"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Injection Cream Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Estimate injection cream consumption for creating effective horizontal damp-proof barriers.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/calculate-volume"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Volume Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Calculate precise volumes for filling expansion joints, cracks, and building structure spaces.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/pipe-volume"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Pipe Volume Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Calculate volume of material needed to fill spaces between pipes and passages for sealing projects.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          
          <Link
            to="/foundation-lifting"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                Foundation Lifting Calculator
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Plan precise drilling and injection for foundation stabilization with accurate lance positioning calculations.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Calculator</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/mpa-bar-converter"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                MPa to BAR Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Convert pressure units between Megapascals (MPa) and Bar with precise calculations.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Converter</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/psi-bar-converter"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                PSI to BAR Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Convert pressure units between Pounds per Square Inch (PSI) and Bar.
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Converter</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/gal-liter-converter"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                GAL to L Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Convert volume units between US Gallons (GAL) and Liters (L).
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Converter</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/inch-cm-converter"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                INCH to CM Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Convert length units between Inches and Centimeters (CM).
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Converter</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/lb-kg-converter"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-accent-300 hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-accent-700">
                LB to KG Converter
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Convert weight units between Pounds (LB) and Kilograms (KG).
            </p>
            <div className="flex items-center text-green-accent-600 text-sm font-medium">
              <span>Open Converter</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
