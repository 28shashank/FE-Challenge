let span_Text = document.getElementById('result').innerText;
let searchByEmail = span_Text;

const params = new URLSearchParams({
    email : `${searchByEmail}`
})

//Add a parameter.
params.set('email', searchByEmail);

//this will show our spinner
let loader = `<div id="loader"></div>`;
document.getElementById('apiresult').innerHTML = loader;

//Load JSON File [API] with AJAX Call using Fetch API
//This method returns a Promise that we can use to retrieve the response of the request.
let url = `https://cors-anywhere.herokuapp.com/https://ltv-data-api.herokuapp.com/api/v1/records.json?${params.toString()}`;

fetch(url, {mode: 'cors'})
.then ( (apidata) => {
    //console.log(apidata);
    return apidata.json();
})
.then ( (actualdata) => {
    //console.log(actualdata);
    var data2 = actualdata;
    document.getElementById('apiresult').innerHTML = 
    `<div class="card-list">
        <span class="circle user"><img src="images/icn_person@2x.png" alt="" /></span>
        <span class="info-container">
            <p class="title">${data2.first_name} ${data2.last_name}, 35</p>
            <p class="info">${data2.description}</p>
        </span>
    </div>
    <div class="row card-summary">
        <div class="col-sm">
            <div>
                <div class="desc-title">Address</div>
                <div class="desc">${data2.address}</div>
            </div>
            <div>
                <div class="desc-title">Email</div>
                <div class="desc">${data2.email}</div>
            </div>
        </div>
        <div class="col-sm">
            <div>
                <div class="desc-title">Phone Numbers</div>
                <div class="desc phone">
                    <p>${data2.phone_numbers[0]}</p>
                    <p>${data2.phone_numbers[1]}</p>
                    <p>${data2.phone_numbers[2]}</p>
                </div>
            </div>
            <div>
                <div class="desc-title">Relatives</div>
                <div class="desc relatives">
                    <p>${data2.relatives[0]}</p>
                    <p>${data2.relatives[1]}</p>
                </div>
            </div>
        </div>
    </div>`   
})
.catch ( (error) => {
    console.log (`The Error: ${error}`);
});
