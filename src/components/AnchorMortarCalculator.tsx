import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface CalculationResults {
  grooveWidth: number
  grooveDepth: number
  totalAnchorLength: number
  numberOfAnchors: number
  mortarQuantity: number
}

export function AnchorMortarCalculator() {
  const [materialType, setMaterialType] = useState<string>('brick')
  const [anchorDiameter, setAnchorDiameter] = useState<string>('8')
  const [distanceBetweenAnchors, setDistanceBetweenAnchors] = useState<string>('10')
  const [numberOfCracks, setNumberOfCracks] = useState<string>('10')
  
  const [results, setResults] = useState<CalculationResults>({
    grooveWidth: 0,
    grooveDepth: 0,
    totalAnchorLength: 0,
    numberOfAnchors: 0,
    mortarQuantity: 0
  })

  const calculateResults = (): CalculationResults => {
    const anchorDia = parseFloat(anchorDiameter) || 0
    const distance = parseFloat(distanceBetweenAnchors) || 0
    const cracks = parseFloat(numberOfCracks) || 0

    // Calculate groove width (anchor diameter + 4mm)
    const calculatedGrooveWidth = anchorDia + 4

    // Calculate groove depth based on material type
    let calculatedGrooveDepth = 0
    if (materialType === 'brick') {
      // For brick: deeper grooves needed
      calculatedGrooveDepth = anchorDia === 6 ? 30 : anchorDia === 8 ? 40 : 50
    } else if (materialType === 'concrete') {
      // For concrete: shallower grooves
      calculatedGrooveDepth = anchorDia === 6 ? 15 : anchorDia === 8 ? 20 : 25
    }

    // Calculate total anchor length based on material type
    let calculatedAnchorLength = 0
    if (materialType === 'brick') {
      calculatedAnchorLength = 100 // 50cm on each side
    } else if (materialType === 'concrete') {
      calculatedAnchorLength = 60 // 30cm on each side
    }

    // Calculate number of anchors
    // Corrected formula: total_crack_length / distance_between_anchors
    const numberOfAnchors = distance > 0 ? Math.ceil(cracks / distance) : 0

    // Calculate mortar quantity (kg)
    // Volume per groove = width(mm) × depth(mm) × length(cm)
    // Convert to consistent units: width(cm) × depth(cm) × length(cm) = cm³
    const grooveVolumePerAnchor = (calculatedGrooveWidth / 10) * (calculatedGrooveDepth / 10) * calculatedAnchorLength // cm³
    const totalVolumeCm3 = grooveVolumePerAnchor * numberOfAnchors
    const totalVolumeM3 = totalVolumeCm3 / 1000000 // cm³ to m³
    
    // Corrected mortar densities based on material properties
    const mortarDensity = materialType === 'brick' ? 2000 : 2400 // kg/m³
    const mortarQuantity = totalVolumeM3 * mortarDensity

    return {
      grooveWidth: calculatedGrooveWidth,
      grooveDepth: calculatedGrooveDepth,
      totalAnchorLength: calculatedAnchorLength,
      numberOfAnchors,
      mortarQuantity
    }
  }

  useEffect(() => {
    const newResults = calculateResults()
    setResults(newResults)
  }, [materialType, anchorDiameter, distanceBetweenAnchors, numberOfCracks])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Anchor mortar consumption
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
                
                {/* Type of material */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Type of material
                  </Label>
                  <Select value={materialType} onValueChange={setMaterialType}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="brick">Brick and others</SelectItem>
                      <SelectItem value="concrete">Concrete</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Spiral anchor diameter */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Spiral anchor diameter [mm]
                  </Label>
                  <Select value={anchorDiameter} onValueChange={setAnchorDiameter}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Distance between anchors */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Distance between anchors (range 30-45cm) [cm]
                  </Label>
                  <Input
                    type="number"
                    value={distanceBetweenAnchors}
                    onChange={(e) => setDistanceBetweenAnchors(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="eg. 10"
                  />
                </div>

                {/* Number of m/b masonry cracks */}
                <div className="flex flex-col h-20">
                  <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                    Number of m/b masonry cracks
                  </Label>
                  <Input
                    type="number"
                    value={numberOfCracks}
                    onChange={(e) => setNumberOfCracks(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                    placeholder="eg. 10"
                  />
                </div>
              </div>

              {/* Right Side - Output Results */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-accent-500 rounded-full mr-2"></div>
                  Calculation Results
                </h3>

                {/* Anchor Specifications */}
                <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Anchor Specifications</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Groove width [mm]</Label>
                      <Input
                        value={results.grooveWidth.toFixed(0)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Groove depth [mm]</Label>
                      <Input
                        value={results.grooveDepth.toFixed(0)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Total anchor length [cm]</Label>
                      <Input
                        value={results.totalAnchorLength.toFixed(0)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">Number of anchors [pcs]</Label>
                      <Input
                        value={results.numberOfAnchors.toFixed(0)}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Material Consumption */}
                <div className="bg-green-accent-100 p-4 rounded-lg border border-green-accent-300">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Final Summary</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">TOTAL MORTAR REQUIRED [KG]</Label>
                      <Input
                        value={results.mortarQuantity.toFixed(1)}
                        readOnly
                        className="bg-white border-green-accent-400 text-gray-900 font-bold mt-auto"
                      />
                    </div>

                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">TOTAL SPIRAL ANCHORS [PCS]</Label>
                      <Input
                        value={results.numberOfAnchors.toFixed(0)}
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
                About the Spiral Anchor Calculator
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The spiral anchor calculator is a tool that allows for accurate planning of the placement and 
                quantity of spiral anchors to effectively reinforce cracks and damages in masonry and concrete 
                structures. It helps engineers and contractors optimize material usage and ensure long-term 
                structural stability.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">💡</span>
                  <span>
                    <strong>Practical Tips:</strong> Remember to deepen the groove when there is plaster or a 
                    finishing layer. Cut into mortar joints where possible to minimize interference with the 
                    structural material. For irregular cracks, adjust anchor spacing based on damage extent.
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