
// Used to import the photos and add with images div
let cardTag='';
function getPhotos(images) {
   images.map(image => {
     cardTag += `
               <a href=${image.src.large} data-lightbox="myimage"><img src=${image.src.small} alt="img1" width=23% height="25%"></a>`;
         document.querySelector(".images").innerHTML += cardTag;
   })
   
}

  // Used to fetch the API Key to import images   
fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: "5F1GSltVGABDtNqXyiNQfxkPK1cSwlNSIg8BA1Wvb5nBQreiNO2BgYzM" // my API KEY 
  }
})
.then(resp => {
 return resp.json()
})
.then(data => {
    getPhotos(data.photos);
})