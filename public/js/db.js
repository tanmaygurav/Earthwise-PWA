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
    const query = encodeQuery(data);
    const response = await fetch(query);
    const res = await response.json();
    if (response.status != 200) alert("No data", res.status);
    if (response.status === 200) {
        console.log("res", res)
        alert(res.status || res.error);
    }
}

async function addgadgets() {
    // Get elements by id from frontend
    const oid = "1001";
    const org_name = "National Waste and Recylcing Org.";
    const uid = "1001";
    const user_name = "Bharatiya Recycler";
    const device_type = document.getElementById("device_type").value;
    const device_brand = document.getElementById("device_brand").value;
    const device_model = document.getElementById("device_model").value;
    const serial_number = document.getElementById("serial_number").value;
    const physicalcon = document.getElementById("physicalcon").value;
    const opcon = document.getElementById("opcon").value;
    const repairs = document.getElementById("repairs").value;
    const weight = document.getElementById("weight").value;
    data = {
        url: url,
        params: {
            code: "addevent",
            oid: oid,
            org_name: org_name,
            uid: uid,
            user_name: user_name,
            device_type: device_type,
            device_brand: device_brand,
            device_model: device_model,
            serial_number: serial_number,
            physicalcon: physicalcon,
            opcon: opcon,
            repairs: repairs,
            weight: weight
        },
    };
    console.log(data);
    const query = encodeQuery(data);
    const response = await fetch(query);
    const res = await response.json();
    if (response.status != 200) alert("No data", res.status);
    if (response.status === 200) {
        console.log("res", res)
        alert(res.status || res.error);
    }
}

async function getgadgets() {
    const list = document.getElementById("gadgetslist");
    data = {
        url: url,
        params: {
            code: "getjobs",
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
            if (i.device_type == "Mobile") i.points = i.weight * 333.5
            if (i.device_type == "Desktop") i.points = i.weight * 55.3
            if (i.device_type == "Laptop") i.points = i.weight * 145.5
            if (i.device_type == "Tablet") i.points = i.weight * 171.4
            if (i.device_type == "Digital Camera") i.points = i.weight * 50.4
            if (i.device_type == "Printer") i.points = i.weight * 8.1

        })
        res.forEach((i) => {
            list.innerHTML += `
            <div class="m-3 card">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
                <h5 class="card-title">ID: ${i.JID}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Device Type: ${i.device_type} </h6>
                <p class="card-text">Device Model: ${i.device_model}</p>
                <p class="card-text">Serial NUmber: ${i.serial_number}</p>
                <p class="card-text">Physical Condition: ${i.physicalcon}</p>
                <p class="card-text">Operational Condition: ${i.opcon}</p>
                <p class="card-text">Repairs: ${i.repairs}</p>
                <p class="card-text">Weight: ${i.weight}</p>
                <p class="card-text">GloRe Point: ${i.point}</p>

                <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/"
                    data-layout="" data-size=""><a target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore">Share</a></div>

            </div>
        </div>
            `;
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
