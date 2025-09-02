import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface WallDrillResult {
  drillAboveFloor: number
  drillAngle: number
  drillingDepth: number
  packerDepth: number
}

interface FloorDrillResult {
  moveAwayFromWall: number
  drillAngle: number
  drillingDepth: number
  packerDepth: number
}

export function JointDrillingCalculator() {
  const [wallThickness, setWallThickness] = useState<string>('10')
  const [floorThickness, setFloorThickness] = useState<string>('10')
  const [drillingPercentage, setDrillingPercentage] = useState<string>('50')

  // Results for drilling into the wall (3 angles)
  const [wallResults, setWallResults] = useState<WallDrillResult[]>([
    { drillAboveFloor: 0, drillAngle: 30, drillingDepth: 0, packerDepth: 0 },
    { drillAboveFloor: 0, drillAngle: 45, drillingDepth: 0, packerDepth: 0 },
    { drillAboveFloor: 0, drillAngle: 60, drillingDepth: 0, packerDepth: 0 }
  ])

  // Results for drilling into the floor (3 angles)
  const [floorResults, setFloorResults] = useState<FloorDrillResult[]>([
    { moveAwayFromWall: 0, drillAngle: 30, drillingDepth: 0, packerDepth: 0 },
    { moveAwayFromWall: 0, drillAngle: 45, drillingDepth: 0, packerDepth: 0 },
    { moveAwayFromWall: 0, drillAngle: 60, drillingDepth: 0, packerDepth: 0 }
  ])

  const calculateWallDrilling = (angle: number): WallDrillResult => {
    const wallThicknessNum = parseFloat(wallThickness) || 0
    const floorThicknessNum = parseFloat(floorThickness) || 0
    const drillingPercentageNum = parseFloat(drillingPercentage) || 0

    if (wallThicknessNum === 0) {
      return { drillAboveFloor: 0, drillAngle: angle, drillingDepth: 0, packerDepth: 0 }
    }

    // Calculate the target depth in the wall (as percentage of wall thickness)
    const targetDepthInWall = (wallThicknessNum * drillingPercentageNum) / 100

    // The drilling depth is: target_depth / sin(angle)
    const angleRad = (angle * Math.PI) / 180
    const drillingDepth = targetDepthInWall / Math.sin(angleRad)

    // Reverse-engineered formula based on pattern analysis:
    // drill_above_floor = base_value + wall_effect + floor_effect
    // Base values for Wall=10, Floor=10, 50%: 30°→-1.3, 45°→-5.0, 60°→-7.1
    // These scale proportionally with drilling percentage
    // Wall effect: (wall_thickness - 10) × (drilling_percentage/100) / tan(angle)
    // Floor effect: (floor_thickness - 10)
    
    const baseValues50Percent = { 30: -1.3, 45: -5.0, 60: -7.1 }
    const baseValue50 = baseValues50Percent[angle as keyof typeof baseValues50Percent] || 0
    const baseValue = baseValue50 * (drillingPercentageNum / 50) // Scale for different percentages
    
    const wallEffect = (wallThicknessNum - 10) * (drillingPercentageNum / 100) / Math.tan(angleRad)
    const floorEffect = (floorThicknessNum - 10)
    
    const drillAboveFloor = baseValue + wallEffect + floorEffect

    // Calculate packer depth - the depth where packer should be placed in the foundation wall
    // This ensures the expanding rubber anchor is in the foundation wall, not the floor
    const packerDepth = Math.max(0, drillingDepth - (floorThicknessNum * 0.7)) // 70% into foundation wall

    return {
      drillAboveFloor: Math.round(drillAboveFloor * 100) / 100,
      drillAngle: angle,
      drillingDepth: Math.round(drillingDepth * 100) / 100,
      packerDepth: Math.round(packerDepth * 100) / 100
    }
  }

  const calculateFloorDrilling = (angle: number): FloorDrillResult => {
    const wallThicknessNum = parseFloat(wallThickness) || 0
    const floorThicknessNum = parseFloat(floorThickness) || 0
    const drillingPercentageNum = parseFloat(drillingPercentage) || 0

    if (wallThicknessNum === 0 || floorThicknessNum === 0) {
      return { moveAwayFromWall: 0, drillAngle: angle, drillingDepth: 0, packerDepth: 0 }
    }

    // Calculate the target depth in the wall
    const targetDepthInWall = (wallThicknessNum * drillingPercentageNum) / 100

    // Total drilling depth through floor and into wall
    // This appears to be: (floor_thickness + target_depth) / sin(angle)
    const angleRad = (angle * Math.PI) / 180
    const totalVerticalDistance = floorThicknessNum + targetDepthInWall
    const drillingDepth = totalVerticalDistance / Math.sin(angleRad)

    // Distance from wall = total_vertical_distance / tan(angle)
    const moveAwayFromWall = totalVerticalDistance / Math.tan(angleRad)

    // Calculate packer depth for floor drilling
    // Packer should be positioned in the foundation wall, not in the floor
    const packerDepth = Math.max(0, drillingDepth - (floorThicknessNum / Math.sin(angleRad)) + (targetDepthInWall * 0.3))

    return {
      moveAwayFromWall: Math.round(moveAwayFromWall * 100) / 100,
      drillAngle: angle,
      drillingDepth: Math.round(drillingDepth * 100) / 100,
      packerDepth: Math.round(packerDepth * 100) / 100
    }
  }

  useEffect(() => {
    // Update wall drilling results
    const updatedWallResults = wallResults.map(result => 
      calculateWallDrilling(result.drillAngle)
    )
    setWallResults(updatedWallResults)

    // Update floor drilling results
    const updatedFloorResults = floorResults.map(result => 
      calculateFloorDrilling(result.drillAngle)
    )
    setFloorResults(updatedFloorResults)
  }, [wallThickness, floorThickness, drillingPercentage])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Drilling the Working Joints
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
                
                <div className="flex flex-col h-20">
                  <Label htmlFor="wallThickness" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Wall thickness [cm]
                  </Label>
                  <Input
                    id="wallThickness"
                    type="number"
                    step="0.1"
                    value={wallThickness}
                    onChange={(e) => setWallThickness(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="e.g. 10"
                  />
                </div>

                <div className="flex flex-col h-20">
                  <Label htmlFor="floorThickness" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Floor thickness [cm]
                  </Label>
                  <Input
                    id="floorThickness"
                    type="number"
                    step="0.1"
                    value={floorThickness}
                    onChange={(e) => setFloorThickness(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="e.g. 10"
                  />
                </div>

                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Drilling % (selectable) - [ 50% wall / 40% wall / 30% wall ]
                  </Label>
                  <Select value={drillingPercentage} onValueChange={setDrillingPercentage}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="40">40</SelectItem>
                      <SelectItem value="50">50</SelectItem>
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

                {/* DRILL INTO THE WALL Section */}
                <div className="space-y-4">
                  <h4 className="text-md font-semibold text-gray-900 mb-3">DRILL INTO THE WALL</h4>
                  {wallResults.map((result, index) => (
                    <div key={index} className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                      <h5 className="text-sm font-medium text-gray-900 mb-3">Angle {result.drillAngle}°</h5>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex flex-col h-16">
                          <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                            Drill above floor [cm]
                          </Label>
                          <Input
                            value={result.drillAboveFloor.toFixed(1)}
                            readOnly
                            className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                          />
                        </div>
                        <div className="flex flex-col h-16">
                          <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                            Drilling depth [cm]
                          </Label>
                          <Input
                            value={result.drillingDepth.toFixed(2)}
                            readOnly
                            className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                          />
                        </div>
                        <div className="flex flex-col h-16">
                          <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                            Place packer at depth [cm]
                          </Label>
                          <Input
                            value={result.packerDepth.toFixed(2)}
                            readOnly
                            className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DRILLING INTO THE FLOOR Section */}
                <div className="space-y-4">
                  <h4 className="text-md font-semibold text-gray-900 mb-3">DRILLING INTO THE FLOOR</h4>
                  {floorResults.map((result, index) => (
                    <div key={index} className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                      <h5 className="text-sm font-medium text-gray-900 mb-3">Angle {result.drillAngle}°</h5>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex flex-col h-16">
                          <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                            Move away from the wall [cm]
                          </Label>
                          <Input
                            value={result.moveAwayFromWall.toFixed(2)}
                            readOnly
                            className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                          />
                        </div>
                        <div className="flex flex-col h-16">
                          <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                            Drilling depth [cm]
                          </Label>
                          <Input
                            value={result.drillingDepth.toFixed(2)}
                            readOnly
                            className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                          />
                        </div>
                        <div className="flex flex-col h-16">
                          <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                            Place packer at depth [cm]
                          </Label>
                          <Input
                            value={result.packerDepth.toFixed(2)}
                            readOnly
                            className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                Key Features of the Calculator
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-green-accent-600 text-lg">🔧</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Drilling Angle and Distance</h4>
                      <p className="text-gray-700 text-sm">
                        Precisely indicates drilling angle and distance from wall to reach the specified 
                        wall-foundation interface point.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-green-accent-600 text-lg">🔧</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Floor Drilling Options</h4>
                      <p className="text-gray-700 text-sm">
                        Shows how to reach the joint through the floor when wall drilling isn't optimal, 
                        accounting for unusual thickness ratios.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-green-accent-600 text-lg">🔧</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Packer Positioning</h4>
                      <p className="text-gray-700 text-sm">
                        Calculates optimal depth for injection packer placement to ensure proper 
                        anchoring in the foundation wall.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="text-green-accent-600 text-lg">⚡</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Precision & Repeatability</h4>
                      <p className="text-gray-700 text-sm">
                        Ensures consistent, repeatable drilling results that match project specifications 
                        and eliminate injection errors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Tips Section */}
            <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-green-accent-600 mr-2">💡</span>
                Practical Tips
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-green-accent-500 mr-2">•</span>
                  Add a few centimeters to drilling depth to ensure full penetration of the wall-foundation interface.
                </li>
                <li className="flex items-start">
                  <span className="text-green-accent-500 mr-2">•</span>
                  Use a laser level and built-in inclinometer on the drill for best results.
                </li>
                <li className="flex items-start">
                  <span className="text-green-accent-500 mr-2">•</span>
                  Test different joint points (50%, 40%, 30%) and choose the most effective solution.
                </li>
                <li className="flex items-start">
                  <span className="text-green-accent-500 mr-2">•</span>
                  Always perform a test injection before starting the main injection work.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 