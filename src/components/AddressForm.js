import React, { useState } from "react"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const states = ["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]

const AddressForm = props => {
  const [errors, setErrors] = useState ({})
  const [addressRecord, setAddressRecord] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    email: ""
  })

  const stateOptions = [""].concat(states).map(state => {
    return (
      <option key={state} value={state}>
        {state}
      </option>
    )
  })

  const handleInputChange = event => {
    setAddressRecord({
      ...addressRecord,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["firstName", "lastName", "address", "city", "state", "zipCode", "phoneNumber", "email"]
    requiredFields.forEach(field => {

      if (addressRecord[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    if (validForSubmission()) {
      props.onAddressSubmitted(addressRecord)
    }
    console.log(addressRecord)
  }

  return (
    <form className="callout" id="shipping-address-form" onSubmit={onSubmitHandler}>
      <ErrorList errors={errors} />
      <h1>Shipping Address</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleInputChange}
          value={addressRecord.firstName}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleInputChange}
          value={addressRecord.lastName}
         />
      </div>

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleInputChange}
          value={addressRecord.address}
        />

      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleInputChange}
          value={addressRecord.city}
        />
      </div>

        <label htmlFor="state">
          State:
          <select id="state" onChange={handleInputChange} value={addressRecord.state}>
            {stateOptions}
          </select>
        </label>

      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          onChange={handleInputChange}
          value={addressRecord.zipCode}
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleInputChange}
          value={addressRecord.phoneNumber}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={addressRecord.email}
        />
      </div>

      <input
        type="submit"
        className="button"
        value="Submit "
      />
    </form>
  )
}

export default AddressForm
