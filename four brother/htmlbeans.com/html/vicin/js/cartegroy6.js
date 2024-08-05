fetch("json/cartegroy6.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ``;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`
          <div class="col-xs-12 col-sm-6">
						<!-- blog of the page -->
						<div class="blog">
							<div class="img-holder">
								<img src="${objectsKey.images}" alt="image description" class="img-responsive">
								<div class="over">
									<a href="blog-detail.html"><span></span></a>
								</div>
							</div>
							<div class="txt-holder">
								<h3 class="text-uppercase"><a href="blog-detail.html">${objectsKey.description}</a></h3>
								<p>${objectsKey.description1}</p>
								<a href="blog-detail.html" class="read-more text-uppercase">Read more</a>
							</div>
						</div>
					</div>`
        }
    }
    document.querySelector("#home0002").innerHTML=col
})
