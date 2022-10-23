import { useState } from 'react';
import './App.css'
import { AccountForm, AddressForm, UserForm } from './forms'
import { useMultistepForm } from './useMultistepForm'

export type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ...fields }))
  }

  const { steps, currentStepIndex, step, next, back, goto, isFirstStep, isLastStep } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ])

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (!isLastStep) return next()
    console.table(data)

  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="progress">
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div className="controller">
          {!isFirstStep && <button type='button' onClick={back}>Back</button>}
          <button type={"submit"}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
