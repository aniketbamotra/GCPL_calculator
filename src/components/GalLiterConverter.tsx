import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function GalLiterConverter() {
  const [galValue, setGalValue] = useState<string>('')
  const [literValue, setLiterValue] = useState<string>('')
  const [galToLiterValue, setGalToLiterValue] = useState<string>('')
  const [literToGalValue, setLiterToGalValue] = useState<string>('')

  // GAL to L conversion (1 US Gallon = 3.78541 Liters)
  useEffect(() => {
    const gal = parseFloat(galValue)
    if (!isNaN(gal) && galValue !== '') {
      setGalToLiterValue((gal * 3.78541).toFixed(2))
    } else {
      setGalToLiterValue('0.00')
    }
  }, [galValue])

  // L to GAL conversion (1 Liter = 0.264172 US Gallons)
  useEffect(() => {
    const liter = parseFloat(literValue)
    if (!isNaN(liter) && literValue !== '') {
      setLiterToGalValue((liter * 0.264172).toFixed(2))
    } else {
      setLiterToGalValue('0.00')
    }
  }, [literValue])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter GAL→L
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* GAL to L Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  GAL
                </Label>
                <Input
                  type="number"
                  value={galValue}
                  onChange={(e) => setGalValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="e.g 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  L
                </Label>
                <Input
                  value={galToLiterValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
              </div>
            </div>

            {/* L to GAL Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  L
                </Label>
                <Input
                  type="number"
                  value={literValue}
                  onChange={(e) => setLiterValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="e.g 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  GAL
                </Label>
                <Input
                  value={literToGalValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
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
                    <strong>Conversion Formula:</strong> 1 US Gallon = 3.78541 Liters | 1 Liter = 0.264172 US Gallons
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