fetch("json/cartegroy12.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`
       <div class="col overlay building">
									<img src="${objectsKey.images}" alt="image description" class="img-responsive">
									<div class="over text-center">
										<strong class="title text-uppercase"><a href="project-detail2.html">${objectsKey.description}</a></strong>
										<span class="sub-title">${objectsKey.description}</span>
									</div>
								</div>`
        }
    }
    document.querySelector("#home06").innerHTML=col
})
