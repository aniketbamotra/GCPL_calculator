import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface CalculationResults {
  buildingMaterialFill: number
  mlPerHole: number
  totalPackers: number
  fillingBuildingMaterial: number
  fillingBores: number
  pumpLoss: number
  totalResinConsumption: number
  cleanerConsumption: number
}

export function InjectionMaterialsCalculator() {
  // Input states
  const [length, setLength] = useState<string>('10')
  const [width, setWidth] = useState<string>('10')
  const [thickness, setThickness] = useState<string>('10')
  const [packersPerMeter, setPackersPerMeter] = useState<string>('10')
  const [packerDiameter, setPackerDiameter] = useState<string>('10')
  const [drillingDepth, setDrillingDepth] = useState<string>('10')
  const [pumpCleanings, setPumpCleanings] = useState<string>('10')
  const [hoseLength, setHoseLength] = useState<string>('10')
  const [resinInPump, setResinInPump] = useState<string>('0.10')

  // Calculation results
  const [results, setResults] = useState<CalculationResults>({
    buildingMaterialFill: 0,
    mlPerHole: 0,
    totalPackers: 0,
    fillingBuildingMaterial: 0,
    fillingBores: 0,
    pumpLoss: 0,
    totalResinConsumption: 0,
    cleanerConsumption: 0
  })

  const calculateResults = (): CalculationResults => {
    const lengthNum = parseFloat(length) || 0
    const widthNum = parseFloat(width) || 0
    const thicknessNum = parseFloat(thickness) || 0
    const packersPerMeterNum = parseFloat(packersPerMeter) || 0
    const packerDiameterNum = parseFloat(packerDiameter) || 0
    const drillingDepthNum = parseFloat(drillingDepth) || 0
    const pumpCleaningsNum = parseFloat(pumpCleanings) || 0
    const hoseLengthNum = parseFloat(hoseLength) || 0
    const resinInPumpNum = parseFloat(resinInPump) || 0

    // Building material fill calculation (L)
    // Length (m) × Width (cm) × Thickness (cm) = Volume
    // Convert: length(m) to cm, then cm³ to L
    const buildingMaterialFill = (lengthNum * 100 * widthNum * thicknessNum) / 1000

    // Calculate ml needed to fill one hole
    const radius = packerDiameterNum / 2 / 10 // Convert mm to cm
    const holeVolume = Math.PI * Math.pow(radius, 2) * drillingDepthNum
    const mlPerHole = holeVolume

    // Total number of packers
    const totalPackers = lengthNum * packersPerMeterNum

    // Filling building material with resin
    const fillingBuildingMaterial = buildingMaterialFill

    // Filling the bores with resin
    const fillingBores = (mlPerHole * totalPackers) / 1000

    // Loss of resin from pump cleaning
    // Calculate hose volume: π × r² × length (assuming internal hose diameter of 8mm = 0.4cm radius)
    const hoseInternalRadius = 0.4 // 8mm internal diameter = 0.4cm radius
    const hoseVolume = Math.PI * Math.pow(hoseInternalRadius, 2) * hoseLengthNum / 1000 // Convert cm³ to L
    const pumpLoss = (hoseVolume + resinInPumpNum) * pumpCleaningsNum

    // Total resin consumption
    const totalResinConsumption = fillingBuildingMaterial + fillingBores + pumpLoss

    // Cleaner consumption - typically 1.5x the pump loss for thorough cleaning
    const cleanerConsumption = pumpLoss * 1.5

    return {
      buildingMaterialFill,
      mlPerHole,
      totalPackers,
      fillingBuildingMaterial,
      fillingBores,
      pumpLoss,
      totalResinConsumption,
      cleanerConsumption
    }
  }

  useEffect(() => {
    setResults(calculateResults())
  }, [length, width, thickness, packersPerMeter, packerDiameter, drillingDepth, pumpCleanings, hoseLength, resinInPump])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Consumption Of Injection Materials
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
                
                {/* Basic Input Fields */}
                <div className="space-y-6">
                  <div className="flex flex-col h-20">
                    <Label htmlFor="length" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Length (cracks / expansion joints / etc.) - [m]
                    </Label>
                    <Input
                      id="length"
                      type="number"
                      step="0.01"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="E.g., 10"
                    />
                  </div>

                  <div className="flex flex-col h-20">
                    <Label htmlFor="width" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Width (crack / expansion joint / etc.) *may use digits after the decimal point 0.01 - [cm]
                    </Label>
                    <Input
                      id="width"
                      type="number"
                      step="0.01"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="e.g. 10"
                    />
                  </div>

                  <div className="flex flex-col h-20">
                    <Label htmlFor="thickness" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Thickness of the structure (wall / ceiling / floor / etc.) [cm]
                    </Label>
                    <Input
                      id="thickness"
                      type="number"
                      step="0.01"
                      value={thickness}
                      onChange={(e) => setThickness(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="e.g. 10"
                    />
                  </div>

                  <div className="flex flex-col h-20">
                    <Label htmlFor="packersPerMeter" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      number of pacers per m/p (pcs)
                    </Label>
                    <Input
                      id="packersPerMeter"
                      type="number"
                      value={packersPerMeter}
                      onChange={(e) => setPackersPerMeter(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="e.g. 10"
                    />
                  </div>

                  <div className="flex flex-col h-20">
                    <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">Selectable packer diameter (mm)</Label>
                    <Select value={packerDiameter} onValueChange={setPackerDiameter}>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200">
                        <SelectItem value="8">8</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                        <SelectItem value="14">14</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col h-20">
                    <Label htmlFor="drillingDepth" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Drilling depth (cm) {'->'} you can find in "drilling cracks"
                    </Label>
                    <Input
                      id="drillingDepth"
                      type="number"
                      step="0.01"
                      value={drillingDepth}
                      onChange={(e) => setDrillingDepth(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="e.g. 10"
                    />
                  </div>

                  <div className="flex flex-col h-20">
                    <Label htmlFor="pumpCleanings" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Enter how many times you will clean the pump
                    </Label>
                    <Input
                      id="pumpCleanings"
                      type="number"
                      value={pumpCleanings}
                      onChange={(e) => setPumpCleanings(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="e.g. 10"
                    />
                  </div>

                  <div className="flex flex-col h-20">
                    <Label htmlFor="hoseLength" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Injection pump hose length [cm]
                    </Label>
                    <Input
                      id="hoseLength"
                      type="number"
                      value={hoseLength}
                      onChange={(e) => setHoseLength(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="e.g. 10"
                    />
                  </div>

                  <div className="flex flex-col h-20">
                    <Label htmlFor="resinInPump" className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Quantity of resin in the injection pump [L]
                    </Label>
                    <Input
                      id="resinInPump"
                      type="number"
                      step="0.01"
                      value={resinInPump}
                      onChange={(e) => setResinInPump(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="0.10"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Output Results */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-accent-500 rounded-full mr-2"></div>
                  Calculation Results
                </h3>

                {/* Primary Results */}
                <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Primary Calculations</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">SUM of building material fill [L]</Label>
                      <div className="flex items-center mt-auto">
                        <Input
                          value={results.buildingMaterialFill.toFixed(3)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium"
                        />
                        <span className="ml-2 text-gray-700 font-medium">L</span>
                      </div>
                    </div>

                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">The number of ml needed to fill one well only</Label>
                      <Input
                        value={results.mlPerHole.toFixed(2)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>

                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">Forecast of the number of injection packers (pcs)</Label>
                      <div className="flex items-center mt-auto">
                        <Input
                          value={results.totalPackers.toFixed(0)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium"
                        />
                        <span className="ml-2 text-gray-700 font-medium">szt.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consumption Results */}
                <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Material Consumption</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Filling the building material with resin [L]</Label>
                      <div className="flex items-center mt-auto">
                        <Input
                          value={results.fillingBuildingMaterial.toFixed(3)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium"
                        />
                        <span className="ml-2 text-gray-700 font-medium">L</span>
                      </div>
                    </div>

                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Filling the bores with resin [L]</Label>
                      <div className="flex items-center mt-auto">
                        <Input
                          value={results.fillingBores.toFixed(3)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium"
                        />
                        <span className="ml-2 text-gray-700 font-medium">L</span>
                      </div>
                    </div>

                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Loss of resin from the pump [L]</Label>
                      <div className="flex items-center mt-auto">
                        <Input
                          value={results.pumpLoss.toFixed(3)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium"
                        />
                        <span className="ml-2 text-gray-700 font-medium">L</span>
                      </div>
                    </div>

                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">PI-CLEANER (pump cleaner) CONSUMPTION [L]</Label>
                      <div className="flex items-center mt-auto">
                        <Input
                          value={results.cleanerConsumption.toFixed(3)}
                          readOnly
                          className="bg-white border-green-accent-300 text-gray-900 font-medium"
                        />
                        <span className="ml-2 text-gray-700 font-medium">L</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary Results */}
                <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Final Summary</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">FORECAST CONSUMPTION OF INJECTION PACKERS [PCS]</Label>
                      <Input
                        value={results.totalPackers.toFixed(0)}
                        readOnly
                        className="bg-white border-green-accent-400 text-gray-900 font-bold mt-auto"
                      />
                    </div>

                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Forecast of total resin consumption [L]</Label>
                      <Input
                        value={results.totalResinConsumption.toFixed(3)}
                        readOnly
                        className="bg-white border-green-accent-400 text-gray-900 font-bold mt-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                About the Injection Material Consumption Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The injection material consumption calculator is designed for engineers and contractors who want to 
                estimate the consumption of injection materials for a specific project. This tool helps plan the 
                required amount of materials, minimizing the risk of shortages or surpluses and optimizing both 
                costs and work time.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">💡</span>
                  <span>
                    <strong>Practical Tips:</strong> Remember these are estimates – actual consumption may differ 
                    due to structure quality. Include a margin of error and carry out a test injection to assess 
                    actual material consumption before full implementation.
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