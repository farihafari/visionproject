fetch("json/cartegroy5.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`
          <div class="col overlay bulding">
									<img src="${objectsKey.images}" alt="image description" class="img-responsive">
									<div class="over text-center">
										<strong class="title text-uppercase"><a href="project-detail1.html">${objectsKey.description}</a></strong>
										<span class="sub-title">${objectsKey.description1}</span>
									</div>
								</div>`
        }
    }
    document.querySelector("#home002").innerHTML=col
})
