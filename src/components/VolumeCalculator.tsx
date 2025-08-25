import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface CalculationResults {
  totalVolume: number
}

export function VolumeCalculator() {
  const [length, setLength] = useState<string>('')
  const [width, setWidth] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  
  const [results, setResults] = useState<CalculationResults>({
    totalVolume: 0
  })

  const calculateResults = (): CalculationResults => {
    const lengthNum = parseFloat(length) || 0
    const widthNum = parseFloat(width) || 0
    const heightNum = parseFloat(height) || 0

    // Calculate volume: length (m) × width (cm) × height (cm)
    // Convert length from meters to cm: length × 100
    // Result in cm³, then convert to liters: ÷ 1000
    const volumeCm3 = (lengthNum * 100) * widthNum * heightNum
    const totalVolume = volumeCm3 / 1000 // Convert cm³ to liters

    return {
      totalVolume
    }
  }

  useEffect(() => {
    setResults(calculateResults())
  }, [length, width, height])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Calculate volume
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Input Fields */}
            <div className="grid grid-cols-1 gap-6">
              {/* Length */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Length [m]
                </Label>
                <Input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                  step="0.01"
                />
              </div>

              {/* Width / Crack opening */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Width / Crack opening [cm] *you can use numbers after the decimal point, such as 0.01cm
                </Label>
                <Input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                  step="0.01"
                />
              </div>

              {/* Height / Thickness */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Height / Thickness of masonry [cm]
                </Label>
                <Input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                  step="0.01"
                />
              </div>

              {/* Total Volume Result */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Total
                </Label>
                <div className="flex items-center mt-auto">
                  <Input
                    value={results.totalVolume.toFixed(2)}
                    readOnly
                    className="bg-white border-green-accent-300 text-gray-900 font-medium"
                  />
                  <span className="ml-2 text-gray-700 font-medium">L</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results:</h3>
              
              {/* Volume Details */}
              <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200 mb-6">
                <h4 className="text-md font-medium text-gray-900 mb-3">Volume Calculation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Total volume [L]</Label>
                    <Input
                      value={results.totalVolume.toFixed(2)}
                      readOnly
                      className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                    />
                  </div>
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Total volume [cm³]</Label>
                    <Input
                      value={(results.totalVolume * 1000).toFixed(0)}
                      readOnly
                      className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary:</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">TOTAL VOLUME REQUIRED [L]</Label>
                    <Input
                      value={results.totalVolume.toFixed(2)}
                      readOnly
                      className="bg-white border-green-accent-400 text-gray-900 font-bold mt-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                About the Injection Volume Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The injection volume calculator allows for precise estimation of the amount of material needed 
                to fill various spaces in building structures, such as expansion joints, cracks, or other areas 
                requiring injection. It is particularly useful for expansion joints where accurate volume 
                calculations help optimize material usage.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">💡</span>
                  <span>
                    <strong>Practical Tips:</strong> Measure the width and depth of gaps accurately, especially 
                    in irregular expansion joints or cracks. Remember that some products are sold in kilograms 
                    while others in liters. Use a liter-to-kilogram converter for specific ResinBau products 
                    due to different material densities.
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 