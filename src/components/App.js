import React, { useState } from "react"
import AddressFormsList from "./AddressFormsList"
import AddressForm from "./AddressForm"

const App = props => {
  const [addressInfo, setAddressInfo] = useState([])

  const addressInfoSubmittedHandler = info => {
    setAddressInfo([...addressInfo, info])
  }

  return (
    <div className="row">
      <div className="medium-6 medium-offset-3 small-12 columns">
        <AddressForm
          onAddressSubmitted={addressInfoSubmittedHandler}
        />
        <AddressFormsList
          addressInfo={addressInfo}
        />
      </div>
    </div>
  )
}

export default App
