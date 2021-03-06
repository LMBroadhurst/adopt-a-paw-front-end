import axios from 'axios';

// ANIMALS

export const getAnimalsFilter = async (setAnimals, filter) => {
    console.log("Filter method", filter)
    try {
        const response = axios.get('http://127.0.0.1:8080/animal/filteranimals', {params: filter});
        const animals = (await response).data;
        setAnimals(animals);
    } catch (e) {
        console.log(e)
    }
}

export const getAnimalByID = async (setAnimal, id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/animal/findAnimalById/${id}`);
        const animal = response.data;
        setAnimal(animal);
    } catch (e) {
        console.log(e)
    }   
}


export const getAllAnimals = async (setAnimals) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/animal/getAllAnimals`);
        console.log("Next...", response.data)
        const animals = response.data;
        setAnimals(animals);
    } catch (err) {
        console.log(err)
    } 
}


export const deleteAnimal = async (id) => {
    try {
        console.log(`ID: ${id}`);
        const response = await axios.delete(`http://127.0.0.1:8080/animal/deleteAnimal/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const addAnimal = async (animalData) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/animal/addNewAnimal`, animalData)
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

export const updateAnimal = async (id, animalData) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/animal/updateAnimal/${id}`, animalData)
        console.log(response)
    } catch (err) {
        console.log(err);
    }
}

// ENUMS

export const getAllSpecies = async (setSpecies) => {
    try{
        const response = await axios.get(`http://127.0.0.1:8080/enums/getAllSpecies`);
        console.log(response);
        setSpecies(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const getAllSexes = async (setSexes) => {
    try{
        const response = await axios.get(`http://127.0.0.1:8080/enums/getAllSexes`);
        console.log(response);
        setSexes(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const getAllAppStatuses = async (setAppStatuses) => {
    try{
        const response = await axios.get(`http://127.0.0.1:8080/enums/getAllAppStatuses`);
        console.log(response);
        setAppStatuses(response.data);
    } catch (err) {
        console.log(err);
    }
}

export const getAllAvlStatuses = async (setAvlStatuses) => {
    try{
        const response = await axios.get(`http://127.0.0.1:8080/enums/getAllAvlStatuses`);
        console.log(response);
        setAvlStatuses(response.data);
    } catch (err) {
        console.log(err);
    }
}


// ORGANISATIONS


export const getOrganisations = async (setOrganisations) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/organisation/findAllOrganisations`);
        const organisations = response.data;
        console.log(response.data);
        setOrganisations(organisations);
    } catch (err) {
        console.log(err);
    }   
}

export const getOrganisationById = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/organisation/findOrganisationByID/${id}`);
        const organisation = response.data;
        console.log(response.data);
        return organisation;
    } catch (err) {
        console.log(err)
    }
}

export const deleteOrgansation = async (id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8080/organisation/deleteOrganisation/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }  
}

export const updateOrganisation = async (id, orgData) => {
    try{
        const response = await axios.put(`http://127.0.0.1:8080/organisation/updateOrganisation/${id}`, orgData);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

// CUSTOMERS

export const getCustomers = async (setCustomers) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/customer/findAllCustomers`);
        const customers = response.data;
        setCustomers(customers);
    } catch (err) {
        console.log(err);
    }     
}

export const deleteCustomer = async (id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8080/customer/deleteCustomer/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

export const addNewCustomer = async (custData) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/customer/addNewCustomer`, custData);
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export const findCustomerByID = async (setCustomer, id) => {

    // try {

    //     const response = await axios.get(`http://127.0.0.1:8080/customer/findCustomerByID/${id}`);
    //     const customer = response;
    //     setCustomer(customer);

    // } catch (e){
    //     console.log(e);


    // }





    axios.get(`http://127.0.0.1:8080/customer/findCustomerByID/${id}`)
    .then(res => {
        const customer = res.data;
        setCustomer(customer);
    }).catch((err) => console.log(err))


}



// APPLICATIONS

export const getAllApplications = async (setApplications) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/application/findAll`);
        const applications = response.data;
        setApplications(applications);
    } catch (err) {
        console.log(err);
    }
}

export const addNewApplication = async (animal_id, customer_id) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8080/application/addNewApplication/${animal_id}/${customer_id}`);
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}

export const deleteAdoptionApplication = async (id) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8080/application/deleteApplication/${id}`);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

export const updateAdoptionApplication = async (id, application_status) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8080/application/updateApplicationStatus/${id}`, null, {params: {application_status}});
        console.log(response.data);
    } catch (err) {
        console.log(err)
    }
}

// SECURITY 
export const getApplicationByID = async (id, setApplication) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/application/${id}`)
        console.log(response.data);
        setApplication(response.data)
    } catch (err) {
        console.log(err)
    }
}

// REGISTRATIONS

export const RegisterNewUser = async (registrationRequest) => {

    try {
        const response = await axios.post(`http://127.0.0.1:8080/api/v1/registration`, registrationRequest)
        console.log(response)
    } catch (err) {
        console.log(err);
    }

}

export const FindUserBy_email_password = async (setAppUser, email, password) => {

    try {
        const response = await axios.get(`http://127.0.0.1:8080/AppUser/findUserBy_email_password?email=${email}&password=${password}`)
        setAppUser(response);
        console.log(response);
    } catch (err) {
        console.log(err);
    }



}


//bot

export const getAllBotKeyWords = async (setBotKeyWords) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/bot/getAllBotKeyWords`);
        
        const botKeyWordsresponse = response.data;
        
        setBotKeyWords(botKeyWordsresponse);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    } 
}

export const getAllAnimalKeyWords = async (setAnimalKeyWords) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/animalKeyWords/getAllAnimalKeyWords`);
        
        const animalKeyWordsresponse = response.data;
        
        setAnimalKeyWords(animalKeyWordsresponse);
        console.log(response.data);
    } catch (err) {
        console.log(err)
    } 
}


