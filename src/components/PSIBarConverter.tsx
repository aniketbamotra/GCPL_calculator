import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function PSIBarConverter() {
  const [psiValue, setPsiValue] = useState<string>('')
  const [barValue, setBarValue] = useState<string>('')
  const [psiToBarValue, setPsiToBarValue] = useState<string>('')
  const [barToPsiValue, setBarToPsiValue] = useState<string>('')

  // PSI to BAR conversion (1 PSI = 0.0689476 BAR)
  useEffect(() => {
    const psi = parseFloat(psiValue)
    if (!isNaN(psi) && psiValue !== '') {
      setPsiToBarValue((psi * 0.0689476).toFixed(2))
    } else {
      setPsiToBarValue('0.00')
    }
  }, [psiValue])

  // BAR to PSI conversion (1 BAR = 14.5038 PSI)
  useEffect(() => {
    const bar = parseFloat(barValue)
    if (!isNaN(bar) && barValue !== '') {
      setBarToPsiValue((bar * 14.5038).toFixed(2))
    } else {
      setBarToPsiValue('0.00')
    }
  }, [barValue])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter PSI→BAR
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* PSI to BAR Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  PSI
                </Label>
                <Input
                  type="number"
                  value={psiValue}
                  onChange={(e) => setPsiValue(e.target.value)}
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
                  value={psiToBarValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
              </div>
            </div>

            {/* BAR to PSI Conversion */}
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
                  PSI
                </Label>
                <Input
                  value={barToPsiValue}
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