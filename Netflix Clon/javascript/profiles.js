const data = [
    {
        "id": 1,
        "name": "Octavio",
        "image_profile": "../assets/profile_1.jpg"
    },
    {
        "id": 1,
        "name": "Juan",
        "image_profile": "../assets/profile_2.jfif"
    },
    {
        "id": 1,
        "name": "Martín",
        "image_profile": "../assets/profile_3.png"
    }
]

const cardsProfiles = document.querySelector(".cards-profiles"); 
const loader = document.querySelector(".loader");

const printData = () =>{
    const usersData = data;
    for(let item of usersData){
        cardsProfiles.innerHTML += `
            <div style="height: 14rem;
                        width: 14rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        border: none;
                        margin: 2rem;">
                <img style="height: 100%; width: 100%;" src="${item.image_profile}" alt="img-profiles"/>
                <p style="font-size: 1rem;
                          font-wight: bolder;
                          font-family: sans-serif;
                          color: white;">
                          ${item.name}
                </p>
            </div>
        `;
    };
};

printData();

setTimeout(()=>{
    cardsProfiles.style.opacity = "10";
    loader.style.display = "none";
},1500);
