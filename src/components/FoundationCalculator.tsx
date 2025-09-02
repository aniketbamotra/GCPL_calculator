import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface AngleResult {
  angle: number
  distanceFromWall: number
  lengthInSoilAndFoundation: number
  lengthInFoundation: number
  lengthInGround: number
}

interface CalculationResults {
  angleResults: AngleResult[]
}

export function FoundationCalculator() {
  const [wallThickness, setWallThickness] = useState<string>('')
  const [distanceToFoundation, setDistanceToFoundation] = useState<string>('')
  const [depthUnderFoundation, setDepthUnderFoundation] = useState<string>('')
  
  const [results, setResults] = useState<CalculationResults>({
    angleResults: []
  })

  const angles = [30, 45, 60, 75, 80]

  const calculateResults = (): CalculationResults => {
    const wallThicknessNum = parseFloat(wallThickness) || 0
    const distanceToFoundationNum = parseFloat(distanceToFoundation) || 0
    const depthUnderFoundationNum = parseFloat(depthUnderFoundation) || 0

    const angleResults: AngleResult[] = angles.map(angle => {
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
    })

    return { angleResults }
  }

  useEffect(() => {
    setResults(calculateResults())
  }, [wallThickness, distanceToFoundation, depthUnderFoundation])

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
            {/* Input Fields */}
            <div className="grid grid-cols-1 gap-6">
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
            </div>

            {/* Results Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results:</h3>
              
              {/* Results for each angle */}
              <div className="space-y-4">
                {results.angleResults.map((result) => (
                  <div key={result.angle} className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="flex flex-col h-16">
                        <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Angle</Label>
                        <Input
                          value={result.angle}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                        />
                      </div>
                      <div className="flex flex-col h-16">
                        <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Distance from wall [cm]</Label>
                        <Input
                          value={result.distanceFromWall.toFixed(1)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                        />
                      </div>
                      <div className="flex flex-col h-16">
                        <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Length of lance in soil and foundation</Label>
                        <Input
                          value={result.lengthInSoilAndFoundation.toFixed(1)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                        />
                      </div>
                      <div className="flex flex-col h-16">
                        <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Lance length in the foundation</Label>
                        <Input
                          value={result.lengthInFoundation.toFixed(1)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                        />
                      </div>
                      <div className="flex flex-col h-16">
                        <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Length of lance in the ground</Label>
                        <Input
                          value={result.lengthInGround.toFixed(1)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary:</h3>
              <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                <p className="text-gray-700 text-sm">
                  <strong>Foundation Parameters:</strong> Wall thickness: {wallThickness || '0'} cm, 
                  Distance to foundation: {distanceToFoundation || '0'} cm, 
                  Depth under foundation: {depthUnderFoundation || '0'} cm
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>Available Angles:</strong> Choose from 15°, 30°, 45°, 60°, 75°, 80°, or 85° 
                  based on your site conditions and drilling requirements.
                </p>
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                About the Foundation Stabilization Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The Foundation Stabilization and Lifting Calculator is designed for accurately planning 
                the drilling and injection process when reinforcing and stabilizing foundations. It provides 
                precise calculations for drilling angles, distances, and lance lengths needed for optimal 
                foundation underpinning projects.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">💡</span>
                  <span>
                    <strong>Practical Tips:</strong> Accurately measure foundation geometry and wall thickness. 
                    Select the right drilling angle based on site conditions. Consider soil conditions when 
                    choosing lance depth. Plan multi-point injections for larger projects and perform test 
                    injections to validate measurements.
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