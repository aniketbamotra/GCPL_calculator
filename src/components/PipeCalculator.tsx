import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface CalculationResults {
  pipeVolume: number
  culvertVolume: number
  volumeToFill: number
}

export function PipeCalculator() {
  const [pipeDiameter, setPipeDiameter] = useState<string>('')
  const [pipeLength, setPipeLength] = useState<string>('')
  const [culvertDiameter, setCulvertDiameter] = useState<string>('')
  const [culvertLength, setCulvertLength] = useState<string>('')
  
  const [results, setResults] = useState<CalculationResults>({
    pipeVolume: 0,
    culvertVolume: 0,
    volumeToFill: 0
  })

  const calculateResults = (): CalculationResults => {
    const pipeDiameterNum = parseFloat(pipeDiameter) || 0
    const pipeLengthNum = parseFloat(pipeLength) || 0
    const culvertDiameterNum = parseFloat(culvertDiameter) || 0
    const culvertLengthNum = parseFloat(culvertLength) || 0

    // Calculate pipe volume (cylinder: π * r² * h)
    const pipeRadius = pipeDiameterNum / 2
    const pipeVolumeCm3 = Math.PI * Math.pow(pipeRadius, 2) * pipeLengthNum
    const pipeVolume = pipeVolumeCm3 / 1000 // Convert cm³ to liters

    // Calculate culvert volume (cylinder: π * r² * h)
    const culvertRadius = culvertDiameterNum / 2
    const culvertVolumeCm3 = Math.PI * Math.pow(culvertRadius, 2) * culvertLengthNum
    const culvertVolume = culvertVolumeCm3 / 1000 // Convert cm³ to liters

    // Volume to fill = culvert volume - pipe volume (space around the pipe)
    const volumeToFill = Math.max(0, culvertVolume - pipeVolume)

    return {
      pipeVolume,
      culvertVolume,
      volumeToFill
    }
  }

  useEffect(() => {
    setResults(calculateResults())
  }, [pipeDiameter, pipeLength, culvertDiameter, culvertLength])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Pipe volume
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Pipe Volume Section */}
            <div className="grid grid-cols-1 gap-6">
              <h3 className="text-lg font-semibold text-gray-900">Pipe Volume</h3>
              
              {/* Pipe diameter */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Specify the diameter of the pipe [cm]
                </Label>
                <Input
                  type="number"
                  value={pipeDiameter}
                  onChange={(e) => setPipeDiameter(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                  step="0.01"
                />
              </div>

              {/* Pipe length */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Specify the length of the pipe [cm]
                </Label>
                <Input
                  type="number"
                  value={pipeLength}
                  onChange={(e) => setPipeLength(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                  step="0.01"
                />
              </div>

              {/* Pipe volume result */}
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Pipe volume [L]
                </Label>
                <Input
                  value={results.pipeVolume.toFixed(2)}
                  readOnly
                  className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
              </div>
            </div>

            {/* Culvert Volume Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 gap-6">
                <h3 className="text-lg font-semibold text-gray-900">Volume of the culvert</h3>
                
                {/* Culvert inside diameter */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Specify the inside diameter of the culvert [cm]
                  </Label>
                  <Input
                    type="number"
                    value={culvertDiameter}
                    onChange={(e) => setCulvertDiameter(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="Np. 10"
                    step="0.01"
                  />
                </div>

                {/* Culvert length */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Specify length of culvert [cm]
                  </Label>
                  <Input
                    type="number"
                    value={culvertLength}
                    onChange={(e) => setCulvertLength(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="Np. 10"
                    step="0.01"
                  />
                </div>

                {/* Culvert volume result */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Volume of the culvert [L]
                  </Label>
                  <Input
                    value={results.culvertVolume.toFixed(2)}
                    readOnly
                    className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                  />
                </div>

                {/* Volume needed to fill */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Volume needed to fill the culvert [L]
                  </Label>
                  <Input
                    value={results.volumeToFill.toFixed(2)}
                    readOnly
                    className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results:</h3>
              
              {/* Volume Details */}
              <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200 mb-6">
                <h4 className="text-md font-medium text-gray-900 mb-3">Volume Calculations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Pipe volume [L]</Label>
                    <Input
                      value={results.pipeVolume.toFixed(2)}
                      readOnly
                      className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                    />
                  </div>
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Culvert volume [L]</Label>
                    <Input
                      value={results.culvertVolume.toFixed(2)}
                      readOnly
                      className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                    />
                  </div>
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Volume to fill [L]</Label>
                    <Input
                      value={results.volumeToFill.toFixed(2)}
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
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">TOTAL VOLUME TO FILL [L]</Label>
                    <Input
                      value={results.volumeToFill.toFixed(2)}
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
                About the Pipes and Passages Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The pipes and passages calculator is designed to accurately determine the volume of material 
                needed to fill the space between a pipe and a passage. It calculates both the pipe volume 
                and passage volume, then determines the exact amount of material needed to fill the gap.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">💡</span>
                  <span>
                    <strong>Practical Tips:</strong> Measure pipe and passage diameters precisely as small 
                    differences can affect calculations. Account for material reserves by rounding up results. 
                    Provide accurate lengths and check material specifications for different product densities.
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