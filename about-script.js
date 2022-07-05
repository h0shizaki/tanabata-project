id = [
    ["https://cdn.discordapp.com/avatars/123002824232665088/db7df1363c008238040bbf8ed113fd5f.webp", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa#5279"], 
    ["https://cdn.discordapp.com/avatars/254899949077135360/06a4d4cab6ad99f8af4f3aea41b68b51.webp", "Query#1976"], 
    ["https://cdn.discordapp.com/avatars/303505838369144834/19bffe036dde09fbde6b86b22777248e.webp", "! [K]#5205"],
    ["https://cdn.discordapp.com/avatars/777500136162983946/5b643034ee383d723846109337cec663.webp", "ชื่อ สนาม#4832"]
]

window.onload = () => (init());

function init() {
    console.log("initializing.")
    id.forEach(element => {
        let div = document.createElement('div');
        div.className = "discord-div";
        let img = document.createElement('img');
        img.className = "discord-img";
        img.src = element[0];
        let txt = document.createElement('p');
        txt.textContent = element[1]
        div.appendChild(img)
        div.appendChild(txt)
        document.getElementById("discord-list").appendChild(div)
    });
}
