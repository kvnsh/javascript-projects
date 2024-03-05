//TODO: Add Your Code Below
// window.addEventListener("load", function(){
//     fetch("<https://handlers.education.launchcode.org/static/astronauts.json>").then(function(response){
//       if (!response.ok){
//         throw new console.error("Network response is not acceptable");
//       }
//       return response.json();
//     }).then(function(data){ 
//         const container = document.querySelector("#container");
//         let astronaut = "";
//         for (astronaut of data) {
//             astronaut += `<div class="astronaut">
//             <div class="bio">
//                 <h3>Mae Jemison</h3>
//                 <ul>
//                 <li>Hours in space: 190</li>
//                 <li>Active: false</li>
//                 <li>Skills: Physician, Chemical Engineer</li>
//                 </ul>
//             </div>
//             <img class="avatar" src="images/mae-jemison.jpg">
//         </div>`
//         }

//        container.innerHTML = astronaut;
//     });
// });


window.addEventListener('load', function(event) {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let container = document.getElementById('container');
        let htmlContent = '';
        data.forEach(function(astronaut) {
            htmlContent += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
            `;
        });
        container.innerHTML = htmlContent;
    })
});