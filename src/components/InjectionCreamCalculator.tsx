import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface CalculationResults {
  drillingDepth: number
  creamConsumptionL: number
  creamConsumptionKg: number
}

export function InjectionCreamCalculator() {
  const [wallThickness, setWallThickness] = useState<string>('10')
  const [wallLength, setWallLength] = useState<string>('10')
  const [drillDiameter, setDrillDiameter] = useState<string>('12')
  const [holeShortage, setHoleShortage] = useState<string>('3')
  const [holeSpacing] = useState<string>('10.00') // Fixed at 10cm
  
  const [results, setResults] = useState<CalculationResults>({
    drillingDepth: 0,
    creamConsumptionL: 0,
    creamConsumptionKg: 0
  })

  const calculateResults = (): CalculationResults => {
    const wallThicknessNum = parseFloat(wallThickness) || 0
    const wallLengthNum = parseFloat(wallLength) || 0
    const drillDiameterNum = parseFloat(drillDiameter) || 0
    const holeShortageNum = parseFloat(holeShortage) || 0
    const holeSpacingNum = parseFloat(holeSpacing) || 0

    // Calculate drilling depth (wall thickness - hole shortage)
    const drillingDepth = wallThicknessNum - holeShortageNum

    // Calculate number of holes (wall length / hole spacing * 100 to convert m to cm)
    const numberOfHoles = holeSpacingNum > 0 ? (wallLengthNum * 100) / holeSpacingNum : 0

    // Calculate volume per hole (cylinder: π * r² * h)
    const radius = drillDiameterNum / 2 / 10 // mm to cm
    const volumePerHole = Math.PI * Math.pow(radius, 2) * drillingDepth // cm³

    // Total volume in cm³
    const totalVolume = volumePerHole * numberOfHoles

    // Convert to liters (1000 cm³ = 1 L)
    const creamConsumptionL = totalVolume / 1000

    // Convert to kg (assuming cream density of ~0.9 kg/L)
    const creamDensity = 0.9
    const creamConsumptionKg = creamConsumptionL * creamDensity

    return {
      drillingDepth: Math.max(0, drillingDepth),
      creamConsumptionL,
      creamConsumptionKg
    }
  }

  useEffect(() => {
    setResults(calculateResults())
  }, [wallThickness, wallLength, drillDiameter, holeShortage])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Consumption of injection cream
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  placeholder="Np. 10"
                />
              </div>

              {/* Wall length */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Wall length [m]
                </Label>
                <Input
                  type="number"
                  value={wallLength}
                  onChange={(e) => setWallLength(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                />
              </div>

              {/* Drilling depth */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Drilling depth [cm]
                </Label>
                <Input
                  value={results.drillingDepth.toFixed(2)}
                  readOnly
                  className="bg-gray-50 border-gray-300 text-gray-900 mt-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Drill diameter */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Drill diameter 12 / 14 (selectable)
                </Label>
                <Select value={drillDiameter} onValueChange={setDrillDiameter}>
                  <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="14">14</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Injection hole shorter than wall */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Injection hole shorter than wall 2-4cm (range)
                </Label>
                <Input
                  type="number"
                  value={holeShortage}
                  onChange={(e) => setHoleShortage(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 3"
                  min="2"
                  max="4"
                />
              </div>

              {/* Spacing of injection holes */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Spacing of injection holes every [cm]
                </Label>
                <Input
                  value={holeSpacing}
                  readOnly
                  className="bg-gray-50 border-gray-300 text-gray-900 mt-auto"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results:</h3>
              
              {/* Cream Consumption */}
              <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200 mb-6">
                <h4 className="text-md font-medium text-gray-900 mb-3">Material Consumption</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Cream consumption [L]</Label>
                    <Input
                      value={results.creamConsumptionL.toFixed(2)}
                      readOnly
                      className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                    />
                  </div>
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Cream consumption [kg]</Label>
                    <Input
                      value={results.creamConsumptionKg.toFixed(2)}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">TOTAL CREAM CONSUMPTION [L]</Label>
                    <Input
                      value={results.creamConsumptionL.toFixed(2)}
                      readOnly
                      className="bg-white border-green-accent-400 text-gray-900 font-bold mt-auto"
                    />
                  </div>
                </div>

                <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">TOTAL CREAM CONSUMPTION [KG]</Label>
                    <Input
                      value={results.creamConsumptionKg.toFixed(2)}
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
                About the Injection Cream Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The injection cream consumption calculator enables precise estimation of the amount of injection 
                cream needed to create a horizontal damp-proof course. Injection cream works by sealing the 
                capillaries in the wall, preventing capillary rise in brick or mixed masonry structures.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">💡</span>
                  <span>
                    <strong>Important:</strong> Cream injection counters dampness but not water under pressure. 
                    Always choose the right drilling depth and plan injection for the entire wall length. 
                    Consider breathable coatings and proper ventilation for effective moisture control.
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