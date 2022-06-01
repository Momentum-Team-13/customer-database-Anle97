// make sure both all js files are linked appropriately
console.log(usStates);
console.log(customers);

// selecting the customerList class and creating a variable
const customerList = document.querySelector('.customerList')

//loop to create profiles
for (let customer of customers) {
    let contentElement = document.createElement('div')
    contentElement.classList.add("content")

    //image
    let imageElement = document.createElement('img')
    imageElement.src = `${customer.picture.large}`
    imageElement.alt = "profile pic"
    contentElement.appendChild(imageElement)

    //name
    let nameElement = document.createElement('h1')
    nameElement.classList.add("name")
    nameElement.innerText = `${customer.name.title + " " + customer.name.first + " " + customer.name.last}`
    contentElement.appendChild(nameElement)
    customerList.appendChild(contentElement)

    //email
    let emailElement = document.createElement('p')
    emailElement.classList.add("email")
    emailElement.innerText = `${customer.email}`
    contentElement.appendChild(emailElement)

    //address
    let address1Element = document.createElement('p')
    address1Element.classList.add("address")
    address1Element.innerText = `${customer.location.street.number + " " + customer.location.street.name}`
    contentElement.appendChild(address1Element)

    let stateAbbr = (nameToAbbr(customer.location.state))

    let address2Element = document.createElement('p')
    address2Element.classList.add("address")
    address2Element.innerText = `${customer.location.city}, ${stateAbbr}, ${customer.location.postcode}`
    contentElement.appendChild(address2Element)

    //birthday
    let birthday = moment(`${customer.dob.date}`).format("MMM Do, YYYY")

    let birthdayElement = document.createElement('p')
    birthdayElement.classList.add("birthday")
    birthdayElement.innerText = "DOB: " + birthday
    contentElement.appendChild(birthdayElement)

    //date registered
    let date = moment(`${customer.registered.date}`).format("MMM Do, YYYY")

    let customerSinceElement = document.createElement('p')
    customerSinceElement.classList.add("customer-since")
    customerSinceElement.innerText = "Customer since: " + date
    contentElement.appendChild(customerSinceElement)
    customerList.appendChild(contentElement)
}

//hard coded template
/* <div class="customerList">
    <img src="https://placekitten.com/200/300">
    <h1 class="name">First Name</h1>
    <p class="email">email@email.com</p>
    <p class="address">1234 randomway rd
        <p>randomcity, NC 12345</p>
    </p>
    <p class="birthday">DOB: Aug 10, 1997</p>
    <p class="customer-since">Customer since: Mar 10, 2007</p>
</div> */