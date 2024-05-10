// const indianStates = [
//     "AndhraPradesh",
//     "ArunachalPradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "HimachalPradesh",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "MadhyaPradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "TamilNadu",
//     "Telangana",
//     "Tripura",
//     "UttarPradesh",
//     "Uttarakhand",
//     "WestBengal",
//     "JammuAndKashmir",
//     "AndamanAndNicobarIslands",
//     "DadraAndNagarHaveliAndDamanAndDiu",
//     "Lakshadweep",
//     "Puducherry",
// ];
// const state_select = document.getElementById("state-id")
// indianStates.map((stateName)=>{
//     const option = document.createElement('option');
//     option.value = stateName
//     option.textContent=stateName
//     state_select.appendChild(option)
// })
// console.log(state_select.value)
// const indianCities ={
//     AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
//     Telangana: ["Hyderabad", "Warangal", "Secunderabad"],
//     Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
//     TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
//     Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
//     Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
//     Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
//     Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
//     UttarPradesh: ["Lucknow", "Kanpur", "Varanasi", "Agra"],
//     Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
//     WestBengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
//     Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
//     Haryana: ["Gurgaon", "Faridabad", "Panipat", "Rohtak"],
//     MadhyaPradesh: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
//     Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
//     Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
//     Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba"],
//     Assam: ["Guwahati", "Dibrugarh", "Jorhat", "Silchar"],
//     JammuAndKashmir: ["Srinagar", "Jammu", "Anantnag", "Sopore"],
//     HimachalPradesh: ["Shimla", "Kullu", "Manali", "Dharamshala"],
//     Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
//     Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
//     Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"],
//     Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
//     Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar"],
//     Meghalaya: ["Shillong", "Tura", "Jowai", "Baghmara"],
//     Sikkim: ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
//     ArunachalPradesh: ["Itanagar", "Naharlagun", "Bomdila", "Aalo"],
//     Mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
//     AndamanAndNicobarIslands: ["Port Blair", "Diglipur", "Mayabunder"],
//     Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
//     DadraAndNagarHaveliAndDamanAndDiu: ["Silvassa", "Daman", "Diu", "Bhimpore"],
//     Lakshadweep: ["Kavaratti", "Kochi", "Minicoy", "Andrott"]
//     // Add more states and cities as needed
// };
// function populateCities() {
//     const stateDropdown = document.getElementById("state-id");
//     const cityDropdown = document.getElementById("city-id");

//     const selectedState = stateDropdown.value;

//     // cityDropdown.innerHTML = '<option value=""></option>';
//     if (selectedState && data[selectedState]){
//         indianCities[selectedState].forEach(city => {
//             const option = document.createElement("option");
//             option.value = city;
//             option.textContent = city;
//             cityDropdown.appendChild(option);
//         });
//     }
// }

// // window.onload = populateStates;

const data = {
    AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
    Telangana: ["Hyderabad", "Warangal", "Secunderabad"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Kota"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    UttarPradesh: ["Lucknow", "Kanpur", "Varanasi", "Agra"],
    Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
    WestBengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
    Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
    Haryana: ["Gurgaon", "Faridabad", "Panipat", "Rohtak"],
    MadhyaPradesh: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
    Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba"],
    Assam: ["Guwahati", "Dibrugarh", "Jorhat", "Silchar"],
    JammuAndKashmir: ["Srinagar", "Jammu", "Anantnag", "Sopore"],
    HimachalPradesh: ["Shimla", "Kullu", "Manali", "Dharamshala"],
    Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
    Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
    Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"],
    Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
    Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar"],
    Meghalaya: ["Shillong", "Tura", "Jowai", "Baghmara"],
    Sikkim: ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
    ArunachalPradesh: ["Itanagar", "Naharlagun", "Bomdila", "Aalo"],
    Mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
    AndamanAndNicobarIslands: ["Port Blair", "Diglipur", "Mayabunder"],
    Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
    DadraAndNagarHaveliAndDamanAndDiu: ["Silvassa", "Daman", "Diu", "Bhimpore"],
    Lakshadweep: ["Kavaratti", "Kochi", "Minicoy", "Andrott"]
    // Add more states and cities as needed
};

// Function to populate the state dropdown
function populateStates() {
    const stateDropdown = document.getElementById("state-id");

    // Clear existing options
    stateDropdown.innerHTML = '<option value="">Select State</option>';

    // Add options for each state from the JSON data
    for (const state in data) {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    }
}

// Function to populate the city dropdown based on the selected state
function populateCities() {
    const stateDropdown = document.getElementById("state-id");
    const cityDropdown = document.getElementById("city-id");
    const selectedState = stateDropdown.value;

    // Clear existing options
    cityDropdown.innerHTML = '<option value="">Select City</option>';

    if (selectedState && data[selectedState]) {
        // Add options for cities in the selected state
        data[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
    }
}

// Populate the state dropdown on page load
window.onload = populateStates;
