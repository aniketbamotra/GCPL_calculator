import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LbKgConverter() {
  const [lbValue, setLbValue] = useState<string>('')
  const [kgValue, setKgValue] = useState<string>('')

  // Conversion constants
  const LB_TO_KG = 0.453592
  const KG_TO_LB = 2.20462

  // Handle LB input change
  const handleLbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLbValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setKgValue('')
    } else {
      const lb = parseFloat(value)
      setKgValue((lb * LB_TO_KG).toFixed(4))
    }
  }

  // Handle KG input change
  const handleKgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setKgValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setLbValue('')
    } else {
      const kg = parseFloat(value)
      setLbValue((kg * KG_TO_LB).toFixed(4))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter LB↔KG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Main Layout: Inputs Left, Outputs Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Side - Input Fields */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-accent-500 rounded-full mr-2"></div>
                  Input Values
                </h3>
                
                {/* Bidirectional Conversion */}
                <div className="space-y-6">
                  <div className="flex flex-col h-20">
                    <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Pounds (LB)
                    </Label>
                    <Input
                      type="number"
                      value={lbValue}
                      onChange={handleLbChange}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="Enter pounds"
                      step="0.0001"
                    />
                  </div>
                  <div className="flex flex-col h-20">
                    <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Kilograms (KG)
                    </Label>
                    <Input
                      type="number"
                      value={kgValue}
                      onChange={handleKgChange}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="Enter kilograms"
                      step="0.0001"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Output Results */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-accent-500 rounded-full mr-2"></div>
                  Conversion Results
                </h3>

                {/* Conversion Results Display */}
                <div className="space-y-4">
                  <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                        {lbValue ? `${lbValue} LB =` : 'LB to KG'}
                      </Label>
                      <Input
                        value={lbValue ? `${(parseFloat(lbValue) * LB_TO_KG).toFixed(4)} KG` : '0.0000 KG'}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                  </div>
                  <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                        {kgValue ? `${kgValue} KG =` : 'KG to LB'}
                      </Label>
                      <Input
                        value={kgValue ? `${(parseFloat(kgValue) * KG_TO_LB).toFixed(4)} LB` : '0.0000 LB'}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
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
                About Weight Conversion
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                This converter helps you convert between Pounds (LB) and Kilograms (KG). 
                Pounds are commonly used in the United States while kilograms are used internationally.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">📐</span>
                  <span>
                    <strong>Conversion Formula:</strong> 1 LB = 0.453592 KG | 1 KG = 2.20462 LB
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