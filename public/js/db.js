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
                    
                    <!-- <a href="#" class="btn btn-primary">Register</a> -->
                    <div class="fb-share-button" data-href="https://earthwise-d8eb1.web.app/pages/events.html" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fearthwise-d8eb1.web.app%2Fpages%2Fevents.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                    </div>
                    
                </div>
            </div>
            `;
        });
    }
    console.log(res);
}

async function addevents() {
    // Get elements by id from frontend
    const oid = "1001";
    const org_name = document.getElementById("orgname").value;
    const event_name = document.getElementById("eventname").value;
    const venue = document.getElementById("venue").value;
    const timing = document.getElementById("timing").value;
    const coordinator_name = document.getElementById("cordname").value;
    const coordinator_no = document.getElementById("cordno").value;
    const date = document.getElementById("date").value;
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
            date: date,
        },
    };
    console.log(data);
    // if (
    //     oid.length >= 0 &&
    //     org_name >= 0 &&
    //     event_name >= 0 &&
    //     venue >= 0 &&
    //     date >= 0 &&
    //     timing >= 0 &&
    //     coordinator_name >= 0 &&
    //     coordinator_no >= 0
    // ) {
    const query = encodeQuery(data);
    const response = await fetch(query);
    const res = await response.json();
    if (response.status != 200) alert("No data", res.status);
    if (response.status === 200) {
        console.log("res", res)
        alert(res.status || res.error);

        // }
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
