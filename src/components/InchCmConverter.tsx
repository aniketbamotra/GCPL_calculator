import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InchCmConverter() {
  const [inchValue, setInchValue] = useState<string>('')
  const [cmValue, setCmValue] = useState<string>('')

  // Conversion constants
  const INCH_TO_CM = 2.54
  const CM_TO_INCH = 1 / INCH_TO_CM

  // Handle inch input change
  const handleInchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInchValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setCmValue('')
    } else {
      const inch = parseFloat(value)
      setCmValue((inch * INCH_TO_CM).toFixed(4))
    }
  }

  // Handle cm input change
  const handleCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCmValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setInchValue('')
    } else {
      const cm = parseFloat(value)
      setInchValue((cm * CM_TO_INCH).toFixed(4))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter INCH↔CM
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
                      Inches (INCH)
                    </Label>
                    <Input
                      type="number"
                      value={inchValue}
                      onChange={handleInchChange}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="Enter inches"
                      step="0.0001"
                    />
                  </div>
                  <div className="flex flex-col h-20">
                    <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                      Centimeters (CM)
                    </Label>
                    <Input
                      type="number"
                      value={cmValue}
                      onChange={handleCmChange}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                      placeholder="Enter centimeters"
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
                        {inchValue ? `${inchValue} INCH =` : 'INCH to CM'}
                      </Label>
                      <Input
                        value={inchValue ? `${(parseFloat(inchValue) * INCH_TO_CM).toFixed(4)} CM` : '0.0000 CM'}
                        readOnly
                        className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                      />
                    </div>
                  </div>
                  <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                    <div className="flex flex-col h-16">
                      <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                        {cmValue ? `${cmValue} CM =` : 'CM to INCH'}
                      </Label>
                      <Input
                        value={cmValue ? `${(parseFloat(cmValue) * CM_TO_INCH).toFixed(4)} INCH` : '0.0000 INCH'}
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
                About Length Conversion
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                This converter helps you convert between Inches and Centimeters (CM). 
                Inches are commonly used in the United States while centimeters are used internationally.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">📐</span>
                  <span>
                    <strong>Conversion Formula:</strong> 1 Inch = 2.54 CM | 1 CM = 0.393701 Inches
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