import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InchCmConverter() {
  const [inchValue, setInchValue] = useState<string>('')
  const [cmValue, setCmValue] = useState<string>('')
  const [inchToCmValue, setInchToCmValue] = useState<string>('')
  const [cmToInchValue, setCmToInchValue] = useState<string>('')

  // Inch to CM conversion (1 Inch = 2.54 cm)
  useEffect(() => {
    const inch = parseFloat(inchValue)
    if (!isNaN(inch) && inchValue !== '') {
      setInchToCmValue((inch * 2.54).toFixed(2))
    } else {
      setInchToCmValue('0.00')
    }
  }, [inchValue])

  // CM to Inch conversion (1 cm = 0.393701 inches)
  useEffect(() => {
    const cm = parseFloat(cmValue)
    if (!isNaN(cm) && cmValue !== '') {
      setCmToInchValue((cm * 0.393701).toFixed(2))
    } else {
      setCmToInchValue('0.00')
    }
  }, [cmValue])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter INCH→CM
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* Inch to CM Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  INCH
                </Label>
                <Input
                  type="number"
                  value={inchValue}
                  onChange={(e) => setInchValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="e.g 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  CM
                </Label>
                <Input
                  value={inchToCmValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
              </div>
            </div>

            {/* CM to Inch Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  CM
                </Label>
                <Input
                  type="number"
                  value={cmValue}
                  onChange={(e) => setCmValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="e.g 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  INCH
                </Label>
                <Input
                  value={cmToInchValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
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