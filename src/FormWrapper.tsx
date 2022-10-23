import { ReactNode } from "react";

type IFormWrapper = {
  title: string,
  children: ReactNode
}
export const FormWrapper = ({ title, children }: IFormWrapper) => {
  return (
    <>
      <h2 className="formTitle">{title}</h2>
      <div className="formContent">
        {children}
      </div>
    </>
  )
}