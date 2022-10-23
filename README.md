# react-multistep-form

## Custom Hook: useMultistepForm

This custom hook is useful when dealing with multistep forms. 

```typescript
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
```

### Input

- steps `(array)`<br> 
Different elements/value/information in each steps

### Output

- currentStepIndex `(number)`<br>
return the current step index. Starts from 0.

- step `(any)`<br>
return the current step.

- next `(function)`<br>
Go to the next step if it is not the last step.

- back `(function)`<br>
Go to the previous step if it is not the first step.

- goto `(function)`<br>
Go to the specific step.

- steps `(array)`<br>
Same array as the input.

- isFirstStep `(boolean)`<br>
If the current step is the first step, return true.

- isLastStep `(boolean)`<br>
If the current step is the last step, return true.


