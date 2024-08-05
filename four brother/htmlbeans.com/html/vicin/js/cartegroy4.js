fetch("json/cartegroy4.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`
            <div class="col-xs-12 col-sm-4">
                            <!-- service of the page -->
                            <div class="service text-center">
                                <div class="img">
                                    <img src="${objectsKey.images}" alt="icon" class="img-responsive">
                                </div>
                                <h2 class="text-uppercase"><a href="service-detail.html">${objectsKey.description}</a></h2>
                                <p>${objectsKey.description1}</p>
                            </div>
                        </div>`
        }
    }
    document.querySelector("#home02").innerHTML=col
})
