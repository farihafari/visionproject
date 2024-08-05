fetch("json/faq.json")
.then(Response=>Response.json())
.then(data=>{
    let col = ` `;
    console.log(data);
    for(let key in data){
        // console.log(data[key][0].description)
        for(let objectsKey of data[key]){
               // console.log(objectsKey.description)
            col+=`
             
                // <div class="main-title">Shopping Help</div>
                // <input type="radio" id="radioYour Account" name="accordion" checked="checked"/>
                // <label class="item" for="radioYour Account">
                //   <div class="title">Your Account</div>
                //   <div class="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis aliquid harum velit sed similique exercitationem, quasi in, nulla quos accusamus nemo vel dolores. Est id sint dolore, deserunt dolorum accusantium.</div>
                // </label>
              
           
        
			`
        }
    }
    document.querySelector("#faq09").innerHTML=col
})
co