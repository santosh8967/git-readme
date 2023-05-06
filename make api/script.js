const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const makeupList = document.getElementById("makeupList");

async function getMakeupData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMakeupList(data);
    } catch (error) {
        console.log(error);
    }
}

function displayMakeupList(data) {
    let makeupHTML = "";
    for (let i = 0; i < data.length; i++) {
        makeupHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${data[i].brand} ${data[i].name}</h5>
                    <p class="card-text">${data[i].price}</p>
                    <img src="${data[i].image_link}" alt="${data[i].name}" width="100">
                    <p class="card-text"><a href="${data[i].product_link}" target="_blank">Product Link</a></p>
                    <p class="card-text">${data[i].description}</p>
                </div>
            </div>
        `;
    }
    makeupList.innerHTML = makeupHTML;
}

getMakeupData();
