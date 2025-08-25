import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function MPaBarConverter() {
  const [mpaValue, setMpaValue] = useState<string>('')
  const [barValue, setBarValue] = useState<string>('')
  const [mpaToBarValue, setMpaToBarValue] = useState<string>('')
  const [barToMpaValue, setBarToMpaValue] = useState<string>('')

  // MPa to BAR conversion (1 MPa = 10 BAR)
  useEffect(() => {
    const mpa = parseFloat(mpaValue)
    if (!isNaN(mpa) && mpaValue !== '') {
      setMpaToBarValue((mpa * 10).toFixed(2))
    } else {
      setMpaToBarValue('0.00')
    }
  }, [mpaValue])

  // BAR to MPa conversion (1 BAR = 0.1 MPa)
  useEffect(() => {
    const bar = parseFloat(barValue)
    if (!isNaN(bar) && barValue !== '') {
      setBarToMpaValue((bar * 0.1).toFixed(2))
    } else {
      setBarToMpaValue('0.00')
    }
  }, [barValue])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter MPa→BAR
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* MPa to BAR Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  MPa
                </Label>
                <Input
                  type="number"
                  value={mpaValue}
                  onChange={(e) => setMpaValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  BAR
                </Label>
                <Input
                  value={mpaToBarValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
              </div>
            </div>

            {/* BAR to MPa Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  BAR
                </Label>
                <Input
                  type="number"
                  value={barValue}
                  onChange={(e) => setBarValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="Np. 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  MPA
                </Label>
                <Input
                  value={barToMpaValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-8 p-6 bg-green-accent-50 rounded-lg border border-green-accent-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <div className="w-2 h-2 bg-green-accent-600 rounded-full mr-2"></div>
                About Pressure Conversion
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                This converter helps you convert between Megapascals (MPa) and Bar pressure units. 
                Both units are commonly used in engineering and industrial applications.
              </p>
              <div className="p-4 bg-white rounded border-l-4 border-green-accent-500 shadow-sm">
                <p className="text-gray-800 text-sm font-medium flex items-start">
                  <span className="text-green-accent-600 mr-2">📐</span>
                  <span>
                    <strong>Conversion Formula:</strong> 1 MPa = 10 Bar | 1 Bar = 0.1 MPa
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