import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function PSIBarConverter() {
  const [psiValue, setPsiValue] = useState<string>('')
  const [barValue, setBarValue] = useState<string>('')

  // Conversion constants
  const PSI_TO_BAR = 0.0689476
  const BAR_TO_PSI = 14.5038

  // Handle PSI input change
  const handlePsiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPsiValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setBarValue('')
    } else {
      const psi = parseFloat(value)
      setBarValue((psi * PSI_TO_BAR).toFixed(4))
    }
  }

  // Handle Bar input change
  const handleBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setBarValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setPsiValue('')
    } else {
      const bar = parseFloat(value)
      setPsiValue((bar * BAR_TO_PSI).toFixed(4))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter PSI↔BAR
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
                      Pounds per Square Inch (PSI)
                    </Label>
                    <Input
                      type="number"
                      value={psiValue}
                      onChange={handlePsiChange}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="Enter PSI"
                      step="0.0001"
                    />
                  </div>
                  <div className="flex flex-col h-20">
                    <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Bar
                    </Label>
                    <Input
                      type="number"
                      value={barValue}
                      onChange={handleBarChange}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="Enter Bar"
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
                        {psiValue ? `${psiValue} PSI =` : 'PSI to Bar'}
                      </Label>
                      <Input
                        value={psiValue ? `${(parseFloat(psiValue) * PSI_TO_BAR).toFixed(4)} Bar` : '0.0000 Bar'}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                  </div>
                  <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                        {barValue ? `${barValue} Bar =` : 'Bar to PSI'}
                      </Label>
                      <Input
                        value={barValue ? `${(parseFloat(barValue) * BAR_TO_PSI).toFixed(4)} PSI` : '0.0000 PSI'}
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
                About Pressure Conversion
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                This converter helps you convert between Pounds per Square Inch (PSI) and Bar pressure units. 
                PSI is commonly used in the US while Bar is used internationally.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">📐</span>
                  <span>
                    <strong>Conversion Formula:</strong> 1 PSI = 0.0689476 Bar | 1 Bar = 14.5038 PSI
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