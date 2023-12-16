const url = "https://script.google.com/macros/s/AKfycby01gEwngVgJdKr7dpD0dch8ViXHlAPmMi0GqyTsnWhs8Ru5nYlSmbjXhzAJ1M3WOC5/exec?";

async function getevents() {
    const list = document.getElementById("test")
    data = {
        url: url,
        params: {
            code: "getevents",
        },
    };
    console.log(data);
    const query = encodeQuery(data);
    const response = await fetch(query);
    const res = await response.json();
    if (response.status != 200) alert("No data", res.status);
    if (response.status === 200) {
        list.innerHTML = ""
        res.forEach((i) => {
            list.innerHTML += `
            <div class="m-3 card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${i.event_name} &nbsp ${i.EID} </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${i.org_name} &nbsp &nbsp ${i.OID} &nbsp &nbsp &nbsp &nbsp &nbsp ${i.evt_cat}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p class="card-link">${i.venue} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${i.timing}</p>
                    <a href="#" class="btn btn-primary">Register</a>
                </div>
            </div>
            `
        });
    }
    console.log(res);
}

/* Abstraction */
function encodeQuery(data) {
    let query = data.url;
    for (let d in data.params)
        query +=
            encodeURIComponent(d) + "=" + encodeURIComponent(data.params[d]) + "&";
    return query.slice(0, -1);
}
