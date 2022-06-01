// make sure both all js files are linked appropriately
console.log(usStates);
console.log(customers);

// selecting the customerList class and creating a variable
const customerList = document.querySelector('.customerList')

for (let customer of customers) {
    let profileElement = document.createElement('div')
    profileElement.classList.add("profile")

    let contentElement = document.createElement('article')
    contentElement.classList.add("content")

    let imageElement = document.createElement('img')
    imageElement.src = `${customer.picture.large}`
    imageElement.alt = "profile pic"
    contentElement.appendChild(imageElement)
    profileElement.appendChild(contentElement)

    let nameElement = document.createElement('h1')
    nameElement.classList.add("name")
    nameElement.innerText = `${customer.name.title + " " + customer.name.first + " " + customer.name.last}`
    contentElement.appendChild(nameElement)

    let emailElement = document.createElement('p')
    emailElement.classList.add("email")
    emailElement.innerText = `${customer.email}`
    contentElement.appendChild(emailElement)

    let address1Element = document.createElement('p')
    address1Element.classList.add("address")
    address1Element.innerText = `${customer.location.street.number + " " + customer.location.street.name}`
    contentElement.appendChild(address1Element)

    let address2Element = document.createElement('p')
    address2Element.classList.add("address")
    address2Element.innerText = `${customer.location.city + ", " + customer.location.state + " " + customer.location.postcode}`
    contentElement.appendChild(address2Element)

    let birthdayElement = document.createElement('p')
    birthdayElement.classList.add("birthday")
    birthdayElement.innerText = "DOB: " + `${customer.dob.date}`
    contentElement.appendChild(birthdayElement)

    let customerSinceElement = document.createElement('p')
    customerSinceElement.classList.add("customer-since")
    customerSinceElement.innerText = "Customer since: " + `${customer.registered.date}`
    contentElement.appendChild(customerSinceElement)
    customerList.appendChild(contentElement)
}

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