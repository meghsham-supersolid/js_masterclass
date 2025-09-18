(async function () {
    const url = "https://zenquotes.io/api/today";
    const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

    try {
        const response = await fetch(proxy);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const wrapped = await response.json();
        const result = JSON.parse(wrapped.contents);

        const { q: quote, a: author } = result[0];

        document.querySelector("#quote").innerHTML = `
          <p>"${quote}"</p>
          <p>— ${author}</p>
        `;
    } catch (error) {
        console.error(error.message);
    }
})();

setInterval(function () {
    let curDT = new Date();

    document.querySelector(
        "#full-date"
    ).textContent = `${curDT.getDate()} - ${curDT.getMonth()} - ${curDT.getFullYear()}`;

    let day = "";
    switch (curDT.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    document.querySelector("#day").textContent = `${day}`;

    document.querySelector(
        "#full-time"
    ).textContent = `${curDT.getHours().toString().padStart(2, "0")} : ${curDT.getMinutes().toString().padStart(2, "0")} : ${curDT.getSeconds().toString().padStart(2, "0")}`;
}, 1000);