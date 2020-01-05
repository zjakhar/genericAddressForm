import React from "react"

const AddressFormsList = props => {
  let formObject = props.addressInfo.map(info => {
    let infoDescription = ""
    // if (info.description) {
    //   infoDescription = <blockquote>{info.description}</blockquote>
    // }
    return (
      <li key={info.phoneNumber}>
        <strong>{info.info}Name: </strong>
          {info.firstName} {info.lastName}
        <strong> {info.info}Address: </strong>
          {info.address}, {info.city}, {info.state} {info.zipcode}
        <strong> {info.info}Phone Number: </strong>
          {info.phoneNumber}
        <strong> {info.info}Email: </strong>
          {info.email}
      </li>
    )
  })

  return (
    <div>
      <ul>{formObject}</ul>
    </div>
  )
}

export default AddressFormsList
