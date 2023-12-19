const url =
    "https://script.google.com/macros/s/AKfycby01gEwngVgJdKr7dpD0dch8ViXHlAPmMi0GqyTsnWhs8Ru5nYlSmbjXhzAJ1M3WOC5/exec?";

async function getevents() {
    const list = document.getElementById("test");
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
    console.log(res);
    if (response.status != 200) alert("No data", res.status);
    if (response.status === 200) {
        list.innerHTML = "";
        res.forEach((i) => {
            list.innerHTML += `
            <div class="m-3 card">
            <!-- <img src="..." class="card-img-top" alt="...">-->
                <div class="card-body">
                    <h5 class="card-title">${i.event_name} &nbsp ${i.EID} </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${i.org_name} &nbsp &nbsp ${i.OID} &nbsp &nbsp &nbsp &nbsp &nbsp ${i.evt_cat}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p class="card-link">${i.venue} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${i.timing}</p>
                    <a href="#" class="btn btn-primary">Register</a>
                    <div class="fb-share-button" data-href="http://127.0.0.1:5501/public/pages/events.html" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F127.0.0.1%3A5501%2Fpublic%2Fpages%2Fevents.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                    </div>
                    
                </div>
            </div>
            `;
        });
    }
    console.log(res);
}

async function addevents() {
    const list = document.getElementById("test");
    const oid = "1001";
    const org_name = document.getElementById("orgname");
    const event_name = document.getElementById("eventname");
    const venue = document.getElementById("venue");
    const timing = document.getElementById("timing");
    const coordinator_name = document.getElementById("cordname");
    const coordinator_no = document.getElementById("corno");
    const date = document.getElementById("date");
    data = {
        url: url,
        params: {
            code: "addevent",
            oid: oid,
            org_name: org_name,
            event_name: event_name,
            venue: venue,
            timing: timing,
            coordinator_name: coordinator_name,
            coordinator_no: coordinator_no,
        },
    };
    console.log(data);
    const query = encodeQuery(data);
    const response = await fetch(query);
    const res = await response.json();
    if (response.status != 200) alert("No data", res.status);
    if (response.status === 200) {
        list.innerHTML = "";
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
            `;
        });
    }
}
/* Abstraction */
function encodeQuery(data) {
    let query = data.url;
    for (let d in data.params)
        query +=
            encodeURIComponent(d) + "=" + encodeURIComponent(data.params[d]) + "&";
    return query.slice(0, -1);
}
