import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LbKgConverter() {
  const [lbValue, setLbValue] = useState<string>('')
  const [kgValue, setKgValue] = useState<string>('')
  const [lbToKgValue, setLbToKgValue] = useState<string>('')
  const [kgToLbValue, setKgToLbValue] = useState<string>('')

  // LB to KG conversion (1 LB = 0.453592 KG)
  useEffect(() => {
    const lb = parseFloat(lbValue)
    if (!isNaN(lb) && lbValue !== '') {
      setLbToKgValue((lb * 0.453592).toFixed(2))
    } else {
      setLbToKgValue('0.00')
    }
  }, [lbValue])

  // KG to LB conversion (1 KG = 2.20462 LB)
  useEffect(() => {
    const kg = parseFloat(kgValue)
    if (!isNaN(kg) && kgValue !== '') {
      setKgToLbValue((kg * 2.20462).toFixed(2))
    } else {
      setKgToLbValue('0.00')
    }
  }, [kgValue])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <div className="w-3 h-3 bg-green-accent-500 rounded-full mr-3"></div>
              Converter LB→KG
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* LB to KG Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  LB
                </Label>
                <Input
                  type="number"
                  value={lbValue}
                  onChange={(e) => setLbValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="e.g 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  KG
                </Label>
                <Input
                  value={lbToKgValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
              </div>
            </div>

            {/* KG to LB Conversion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  KG
                </Label>
                <Input
                  type="number"
                  value={kgValue}
                  onChange={(e) => setKgValue(e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-green-accent-500 focus:ring-green-accent-500 mt-auto"
                  placeholder="e.g 10"
                  step="0.01"
                />
              </div>
              <div className="flex flex-col h-20">
                <Label className="text-gray-700 font-medium text-sm leading-tight mb-2">
                  LB
                </Label>
                <Input
                  value={kgToLbValue}
                  readOnly
                  className="bg-green-accent-50 border-green-accent-300 text-gray-900 font-medium mt-auto"
                />
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