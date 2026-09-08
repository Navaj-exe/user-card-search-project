let users =[
    {
        name: "Navaj shaikh",
        pic:"https://i.pinimg.com/736x/78/4a/33/784a33af72d612b1ecde2c5001a875b4.jpg",
        bio: "₊· ͟͟͞͞➳❥ ꜱᴏꜰᴛ ꜱᴏᴜʟ ☁️ head in the clouds 🌿 grounded in nature ✨ guided by light",
    },
    {
        name : "Nihal Mahat",
        pic: "https://i.pinimg.com/736x/19/65/3d/19653da6abd077b8e756636c7dc1b5db.jpg",
         bio: "🌿 grounded in nature ✨ guided by light",

    },
    {
        name : "Yash Wadekar",
        pic: "https://i.pinimg.com/736x/c0/f2/5b/c0f25b5aef8709a39036c38215ddf7fd.jpg",
         bio: "soft heart, sharp mind, ✨ guided by light",
    },
     {
        name : "Alex Roy",
        pic: "https://i.pinimg.com/736x/b4/6d/96/b46d964fcfa97867a343bca151f0ac59.jpg",
         bio: " ✨ guided by light",
    },
    {
        name : "Harshita sharma",
        pic: "https://i.pinimg.com/736x/ed/be/8f/edbe8f032ae4edfab21e30c113e373f3.jpg",
         bio: "dreams in progress, blooming beautifully",
    },
    {
        name : "Harsh sharma",
        pic: "https://i.pinimg.com/736x/78/26/bb/7826bbdd4c33926e79777d213163a09d.jpg",
         bio: "💪 Fitness Freak 🏋️",
    },
];

function show(arr) {
    arr.forEach(function(user){
        // Main card
     let card = document.createElement("div");
    card.className = "card";

    // Background image
    let img = document.createElement("img");
    img.className = "bg-img";
    img.src = user.pic

    // Blurred layer
    let blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.className = "blurred-layer";

    // Content
    let content = document.createElement("div");
    content.className = "content";

    // Heading
    let h3 = document.createElement("h3");
    h3.textContent = user.name;

    // Paragraph
    let p = document.createElement("p");
    p.textContent = user.bio;

    // Content ke andar h3 aur p
    content.appendChild(h3);
    content.appendChild(p);

    // Card ke andar sab elements
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Body me card add
        document.querySelector(".cards").append(card);
    });
};

show(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function(){
   let filuser = users.filter(function(user){
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());

    });
    document.querySelector(".cards").innerHTML=""; 
    show(filuser);
});

