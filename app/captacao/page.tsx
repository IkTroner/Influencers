"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Trophy, Star, Users } from "lucide-react"
import { useRouter } from "next/navigation"

type FormStep = {
  id: number
  title: string
  subtitle: string
  field: string
  type: string
  placeholder: string
  icon: React.ReactNode
}

const formSteps: FormStep[] = [
  {
    id: 1,
    title: "Vamos começar sua jornada!",
    subtitle: "Qual é o seu nome?",
    field: "name",
    type: "text",
    placeholder: "Digite seu nome completo",
    icon: <Users className="h-8 w-8 text-orange-500" />,
  },
  {
    id: 2,
    title: "Perfeito, {name}!",
    subtitle: "Qual é o seu melhor e-mail?",
    field: "email",
    type: "email",
    placeholder: "seu@email.com",
    icon: <Target className="h-8 w-8 text-orange-500" />,
  },
  {
    id: 3,
    title: "Quase lá!",
    subtitle: "Qual é o seu WhatsApp?",
    field: "phone",
    type: "tel",
    placeholder: "(11) 99999-9999",
    icon: <Trophy className="h-8 w-8 text-orange-500" />,
  },
]

export default function CaptacaoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const currentFormStep = formSteps[currentStep]
  const progress = ((currentStep + 1) / formSteps.length) * 100

  const handleInputChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [currentFormStep.field]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simular envio dos dados
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirecionar para WhatsApp
    const message = `Olá! Acabei de me cadastrar na Next Academy. Meus dados: Nome: ${formData.name}, E-mail: ${formData.email}, Telefone: ${formData.phone}`
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)
  }

  const isCurrentStepValid = () => {
    const value = formData[currentFormStep.field as keyof typeof formData]
    return value.trim().length > 0
  }

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <h2 className="text-xl font-bold text-white mb-2">Processando seus dados...</h2>
            <p className="text-gray-400">Você será redirecionado para o WhatsApp em instantes!</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Target className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Next Academy</h1>
          <p className="text-gray-400 text-lg">Transforme sua vida através do futebol e da educação</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progresso</span>
            <span>{Math.round(progress)}% completo</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-800">
            <div
              className="h-full gradient-orange transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </div>

        {/* Form Card */}
        <Card className="bg-gray-900 border-gray-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-8 text-center">
              <div className="mb-6">{currentFormStep.icon}</div>

              <h2 className="text-3xl font-bold text-white mb-2">
                {currentFormStep.title.replace("{name}", formData.name)}
              </h2>
              <p className="text-gray-400 text-lg mb-8">{currentFormStep.subtitle}</p>

              <div className="space-y-6">
                <div className="text-left">
                  <Label htmlFor={currentFormStep.field} className="text-white text-lg mb-3 block">
                    {currentFormStep.subtitle}
                  </Label>
                  <Input
                    id={currentFormStep.field}
                    type={currentFormStep.type}
                    placeholder={currentFormStep.placeholder}
                    value={formData[currentFormStep.field as keyof typeof formData]}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white text-lg h-14 text-center"
                    autoFocus
                  />
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!isCurrentStepValid()}
                  className="w-full gradient-orange hover:opacity-90 text-black font-semibold text-lg h-14 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === formSteps.length - 1 ? (
                    <>
                      Finalizar Cadastro
                      <Star className="ml-2 h-5 w-5" />
                    </>
                  ) : (
                    <>
                      Próximo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Motivational Footer */}
            <div className="bg-gray-800 p-6 text-center">
              <p className="text-gray-300 text-sm">
                🏆 <strong className="text-orange-500">Mais de 10.000 jovens</strong> já transformaram suas vidas
                conosco
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Steps Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {formSteps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index <= currentStep ? "bg-orange-500" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
