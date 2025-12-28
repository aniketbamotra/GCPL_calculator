import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface CalculationResult {
  angle: number
  distanceFromWall: number
  lengthInSoilAndFoundation: number
  lengthInFoundation: number
  lengthInGround: number
}

export function FoundationCalculator() {
  const [wallThickness, setWallThickness] = useState<string>('')
  const [distanceToFoundation, setDistanceToFoundation] = useState<string>('')
  const [depthUnderFoundation, setDepthUnderFoundation] = useState<string>('')
  const [selectedAngle, setSelectedAngle] = useState<string>('45')
  
  const [result, setResult] = useState<CalculationResult>({
    angle: 45,
    distanceFromWall: 0,
    lengthInSoilAndFoundation: 0,
    lengthInFoundation: 0,
    lengthInGround: 0
  })

  const calculateResult = (): CalculationResult => {
    const wallThicknessNum = parseFloat(wallThickness) || 0
    const distanceToFoundationNum = parseFloat(distanceToFoundation) || 0
    const depthUnderFoundationNum = parseFloat(depthUnderFoundation) || 0
    const angle = parseFloat(selectedAngle) || 45

    if (wallThicknessNum === 0 || distanceToFoundationNum === 0 || depthUnderFoundationNum === 0) {
      return {
        angle,
        distanceFromWall: 0,
        lengthInSoilAndFoundation: 0,
        lengthInFoundation: 0,
        lengthInGround: 0
      }
    }

    const angleRad = (angle * Math.PI) / 180

    // Total vertical distance from drilling point to target under foundation
    const totalVerticalDistance = distanceToFoundationNum + depthUnderFoundationNum

    // Distance from wall calculation - complex geometric relationship
    // Based on analysis of multiple test cases from screenshots
    const baseDistanceFromWall = totalVerticalDistance / Math.tan(angleRad)
    
    // The wall thickness affects the drilling start point
    // Corrected formula based on client feedback
    const distanceFromWall = baseDistanceFromWall - (wallThicknessNum / 2)

    // Total lance length (hypotenuse) - remains the same regardless of wall thickness
    const lengthInSoilAndFoundation = totalVerticalDistance / Math.sin(angleRad)

    // Length in foundation (from surface to bottom of foundation) - remains the same
    const lengthInFoundation = distanceToFoundationNum / Math.sin(angleRad)

    // Length in ground (in soil under foundation) - remains the same
    const lengthInGround = depthUnderFoundationNum / Math.sin(angleRad)

    return {
      angle,
      distanceFromWall,
      lengthInSoilAndFoundation,
      lengthInFoundation,
      lengthInGround
    }
  }

  useEffect(() => {
    setResult(calculateResult())
  }, [wallThickness, distanceToFoundation, depthUnderFoundation, selectedAngle])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Foundation Lifting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Main Layout: Inputs Left, Outputs Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Side - Input Fields */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-accent-500 rounded-full mr-2"></div>
                  Input Parameters
                </h3>
                
                {/* Wall thickness */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Wall thickness [cm]
                  </Label>
                  <Input
                    type="number"
                    value={wallThickness}
                    onChange={(e) => setWallThickness(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="e.g 10"
                    step="0.01"
                  />
                </div>

                {/* Distance to underside of foundation */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Distance to underside of foundation [cm]
                  </Label>
                  <Input
                    type="number"
                    value={distanceToFoundation}
                    onChange={(e) => setDistanceToFoundation(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="e.g 10"
                    step="0.01"
                  />
                </div>

                {/* Depth under foundation */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    To what depth under the foundation to insert the lances [cm]
                  </Label>
                  <Input
                    type="number"
                    value={depthUnderFoundation}
                    onChange={(e) => setDepthUnderFoundation(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="e.g 10"
                    step="0.01"
                  />
                </div>

                {/* Drilling Angle Select Field */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Drilling angle [°]
                  </Label>
                  <Select value={selectedAngle} onValueChange={setSelectedAngle}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="30">30°</SelectItem>
                      <SelectItem value="45">45°</SelectItem>
                      <SelectItem value="60">60°</SelectItem>
                      <SelectItem value="75">75°</SelectItem>
                      <SelectItem value="80">80°</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Side - Output Results */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-accent-500 rounded-full mr-2"></div>
                  Calculation Results
                </h3>
                
                {/* Single Angle Result */}
                <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Results for {result.angle}° Angle</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Distance from wall [cm]</Label>
                      <Input
                        value={result.distanceFromWall.toFixed(2)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Total lance length in soil and foundation [cm]</Label>
                      <Input
                        value={result.lengthInSoilAndFoundation.toFixed(2)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Lance length in foundation [cm]</Label>
                      <Input
                        value={result.lengthInFoundation.toFixed(2)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Lance length in ground [cm]</Label>
                      <Input
                        value={result.lengthInGround.toFixed(2)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Foundation Parameters Summary */}
                <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Foundation Parameters Summary</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">
                      <strong>Wall Thickness:</strong> {wallThickness || '0'} cm | <strong>Angle:</strong> {result.angle}°
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Foundation Distance:</strong> {distanceToFoundation || '0'} cm | <strong>Lance Depth:</strong> {depthUnderFoundation || '0'} cm
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Distance from Wall:</strong> {result.distanceFromWall.toFixed(2)} cm | <strong>Total Lance:</strong> {result.lengthInSoilAndFoundation.toFixed(2)} cm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                About the Foundation Stabilization and Lifting Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The Foundation Stabilization and Lifting Calculator is an advanced tool designed for accurately 
                planning the drilling and injection process, particularly when reinforcing and stabilizing 
                foundations with products like ResinBau GeoPolymer.55, SoilConsolid, and others.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                  <p className="text-gray-800 text-sm font-medium flex items-start">
                    <span className="text-green-accent-600 mr-2">🎯</span>
                    <span>
                      <strong>Precision:</strong> Eliminates guesswork by providing exact drilling and lance length parameters.
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                  <p className="text-gray-800 text-sm font-medium flex items-start">
                    <span className="text-green-accent-600 mr-2">⚙️</span>
                    <span>
                      <strong>Versatility:</strong> Supports various drilling angles and lance depths tailored to soil conditions.
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                  <p className="text-gray-800 text-sm font-medium flex items-start">
                    <span className="text-green-accent-600 mr-2">⚡</span>
                    <span>
                      <strong>Efficiency:</strong> Optimizes the injection process, saving time and materials.
                    </span>
                  </p>
                </div>
                <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                  <p className="text-gray-800 text-sm font-medium flex items-start">
                    <span className="text-green-accent-600 mr-2">🔄</span>
                    <span>
                      <strong>Repeatability:</strong> Precisely planned injections minimize the risk of destabilizing the foundation.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 