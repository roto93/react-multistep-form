import { ReactElement, useState } from "react"

export const useMultistepForm = (steps: ReactElement[]) => {

  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const next = () => {
    setCurrentStepIndex(i => i >= steps.length - 1 ? i : i + 1)
  }

  const back = () => {
    setCurrentStepIndex(i => i <= 0 ? i : i - 1)
  }

  const goto = (index: number) => {
    setCurrentStepIndex(index)
  }

  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === steps.length - 1

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    goto,
    steps,
    isFirstStep,
    isLastStep,
  }
}