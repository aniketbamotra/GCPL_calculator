import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface CalculationResult {
  distanceFromCrack: number
  drillingDepth: number
  resinVolume: number
}

export function DrillingCracksCalculator() {
  const [thickness, setThickness] = useState<string>('10')
  const [deepenPercentage, setDeepenPercentage] = useState<string>('30')
  const [packerDiameter, setPackerDiameter] = useState<string>('10')
  const [crackCutPercentage, setCrackCutPercentage] = useState<string>('50')
  const [drillingAngle, setDrillingAngle] = useState<string>('45')
  
  const [result, setResult] = useState<CalculationResult>({
    distanceFromCrack: 0,
    drillingDepth: 0,
    resinVolume: 0
  })

  const calculateDrillHole = (): CalculationResult => {
    const thicknessNum = parseFloat(thickness) || 0
    const deepenPercent = parseFloat(deepenPercentage) || 0
    const packerDia = parseFloat(packerDiameter) || 0
    const crackCutPercent = parseFloat(crackCutPercentage) || 0
    const angle = parseFloat(drillingAngle) || 45
    
    if (thicknessNum === 0 || angle === 0) {
      return { distanceFromCrack: 0, drillingDepth: 0, resinVolume: 0 }
    }

    // Calculate the depth where the crack is located (as percentage of wall thickness)
    const crackDepth = (thicknessNum * crackCutPercent) / 100
    
    // Calculate additional depth beyond the crack
    const additionalDepth = (crackDepth * deepenPercent) / 100
    
    // Target depth to reach in the structure
    const targetDepth = crackDepth + additionalDepth
    
    // Calculate actual drilling depth (hypotenuse of triangle)
    // drilling_depth = target_depth / sin(angle)
    const angleRad = (angle * Math.PI) / 180
    const totalDrillingDepth = targetDepth / Math.sin(angleRad)
    
    // Calculate horizontal distance from crack
    // Standard trigonometric calculation: distance = target_depth / tan(angle)
    const distanceFromCrack = targetDepth / Math.tan(angleRad)
    
    // Calculate resin volume (cylinder volume: π * r² * h)
    const radius = packerDia / 2 / 10 // Convert mm to cm
    const volume = Math.PI * Math.pow(radius, 2) * totalDrillingDepth // in cm³
    const volumeML = volume // 1 cm³ = 1 ml
    
    return {
      distanceFromCrack: Math.round(distanceFromCrack * 100) / 100,
      drillingDepth: Math.round(totalDrillingDepth * 100) / 100,
      resinVolume: Math.round(volumeML * 100) / 100
    }
  }

  useEffect(() => {
    setResult(calculateDrillHole())
  }, [thickness, deepenPercentage, packerDiameter, crackCutPercentage, drillingAngle])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Drilling Cracks
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
                
                {/* Thickness of construction */}
                <div className="flex flex-col h-20">
                  <Label htmlFor="thickness" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Thickness of construction [cm]
                  </Label>
                  <Input
                    id="thickness"
                    type="number"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="Np. 10"
                  />
                </div>

                {/* How much to deepen */}
                <div className="flex flex-col h-20">
                  <Label htmlFor="deepen" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    How much to deepen the hole from the crack cut to the selection [%]
                  </Label>
                  <Select value={deepenPercentage} onValueChange={setDeepenPercentage}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="20">20%</SelectItem>
                      <SelectItem value="30">30%</SelectItem>
                      <SelectItem value="40">40%</SelectItem>
                      <SelectItem value="50">50%</SelectItem>
                      <SelectItem value="60">60%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Packer diameter */}
                <div className="flex flex-col h-20">
                  <Label htmlFor="packer" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Packer diameter [mm]
                  </Label>
                  <Select value={packerDiameter} onValueChange={setPackerDiameter}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="14">14</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Crack cut percentage */}
                <div className="flex flex-col h-20">
                  <Label htmlFor="crackCut" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Crack cut in % of wall thickness of choice: [ 50% | 40% | 30 % ]
                  </Label>
                  <Select value={crackCutPercentage} onValueChange={setCrackCutPercentage}>
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

                {/* Drilling Angle - New Input Field */}
                <div className="flex flex-col h-20">
                  <Label htmlFor="drillingAngle" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Drilling angle [°]
                  </Label>
                  <Input
                    id="drillingAngle"
                    type="number"
                    value={drillingAngle}
                    onChange={(e) => setDrillingAngle(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="e.g. 45"
                    min="15"
                    max="75"
                    step="0.1"
                  />
                </div>
              </div>

              {/* Right Side - Output Results */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-accent-500 rounded-full mr-2"></div>
                  Calculation Results
                </h3>
                
                <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Drilling Results for {drillingAngle}°</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Distance from the crack [cm]</Label>
                      <Input
                        value={result.distanceFromCrack.toFixed(1)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Drilling depth [cm]</Label>
                      <Input
                        value={result.drillingDepth.toFixed(2)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Filling the hole with resin [ml]</Label>
                      <Input
                        value={result.resinVolume.toFixed(1)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Summary Results */}
                <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Summary</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">
                      <strong>Angle:</strong> {drillingAngle}° | <strong>Distance:</strong> {result.distanceFromCrack.toFixed(1)} cm
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Depth:</strong> {result.drillingDepth.toFixed(2)} cm | <strong>Resin:</strong> {result.resinVolume.toFixed(1)} ml
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                About the Crack Drilling Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The Crack Drilling Calculator is designed for contractors and engineers who need to accurately 
                determine the depth, angle, and distance of drilling to intersect a crack at the correct point 
                in the structure. It enables precise adjustment of parameters, ensuring the effectiveness of 
                injection and repeatability of the process.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">💡</span>
                  <span>
                    <strong>Practical Tip:</strong> Test different drilling points (50%, 40%, 30%) and angles (30°-75°). 
                    Not all cracks penetrate the entire structure. Performing a test injection helps evaluate the 
                    depth and reach of the crack before the main injection process.
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