import { FormWrapper } from "./FormWrapper"

type UserData = {
  firstName: string,
  lastName: string,
  age: string,
}

type userFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}

export const UserForm = ({ firstName, lastName, age, updateFields }: userFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input autoFocus required type="text" value={firstName} onChange={(e) => updateFields({
        firstName: e.target.value
      })} />

      <label>Last Name</label>
      <input required type="text" value={lastName} onChange={(e) => updateFields({
        lastName: e.target.value
      })} />

      <label>Age</label>
      <input required min={1} type="number" value={age} onChange={(e) => updateFields({
        age: e.target.value
      })} />
    </FormWrapper>
  )
}


type AddressData = {
  street: string,
  city: string,
  state: string,
  zip: string,
}

type UserFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export const AddressForm = ({ street, city, state, zip, updateFields }: UserFormProps) => {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input autoFocus required type="text" value={street} onChange={e => updateFields({
        street: e.target.value
      })} />

      <label>City</label>
      <input required type="text" value={city} onChange={e => updateFields({
        city: e.target.value
      })} />

      <label>State</label>
      <input required type="text" value={state} onChange={e => updateFields({
        state: e.target.value
      })} />

      <label>Zip</label>
      <input required type="text" value={zip} onChange={e => updateFields({
        zip: e.target.value
      })} />

    </FormWrapper>
  )
}


type AccountData = {
  email: string,
  password: string,
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input autoFocus required type="email" value={email} onChange={e => updateFields({
        email: e.target.value
      })} />

      <label>Password</label>
      <input required type="password" value={password} onChange={e => updateFields({
        password: e.target.value
      })} />

    </FormWrapper>
  )
}