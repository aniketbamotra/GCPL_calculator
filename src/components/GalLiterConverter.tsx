import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function GalLiterConverter() {
  const [galValue, setGalValue] = useState<string>('')
  const [literValue, setLiterValue] = useState<string>('')

  // Conversion constants (US Gallon)
  const GAL_TO_LITER = 3.785411784
  const LITER_TO_GAL = 1 / GAL_TO_LITER

  // Handle gallon input change
  const handleGalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setGalValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setLiterValue('')
    } else {
      const gal = parseFloat(value)
      setLiterValue((gal * GAL_TO_LITER).toFixed(4))
    }
  }

  // Handle liter input change
  const handleLiterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLiterValue(value)
    
    if (value === '' || isNaN(parseFloat(value))) {
      setGalValue('')
    } else {
      const liter = parseFloat(value)
      setGalValue((liter * LITER_TO_GAL).toFixed(4))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter GAL↔L
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* Bidirectional Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  US Gallons (GAL)
                </Label>
                <Input
                  type="number"
                  value={galValue}
                  onChange={handleGalChange}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Enter gallons"
                  step="0.0001"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  Liters (L)
                </Label>
                <Input
                  type="number"
                  value={literValue}
                  onChange={handleLiterChange}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Enter liters"
                  step="0.0001"
                />
              </div>
            </div>

            {/* Conversion Results Display */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Results:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                      {galValue ? `${galValue} GAL =` : 'GAL to L'}
                    </Label>
                    <Input
                      value={galValue ? `${(parseFloat(galValue) * GAL_TO_LITER).toFixed(4)} L` : '0.0000 L'}
                      readOnly
                      className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                    />
                  </div>
                </div>
                <div className="bg-green-accent-50 p-4 rounded-lg border border-green-accent-200">
                  <div className="flex flex-col h-16">
                    <Label className="text-gray-700 font-medium text-xs leading-tight mb-2">
                      {literValue ? `${literValue} L =` : 'L to GAL'}
                    </Label>
                    <Input
                      value={literValue ? `${(parseFloat(literValue) * LITER_TO_GAL).toFixed(4)} GAL` : '0.0000 GAL'}
                      readOnly
                      className="bg-white border-green-accent-300 text-gray-900 font-medium mt-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                About Volume Conversion
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                This converter helps you convert between US Gallons (GAL) and Liters (L). 
                Gallons are commonly used in the United States while liters are used internationally.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">📐</span>
                  <span>
                    <strong>Conversion Formula:</strong> 1 US Gallon = 3.785411784 Liters | 1 Liter = 0.264172 US Gallons
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