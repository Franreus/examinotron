const fishList = document.querySelector('.test-list')
fetch(`https://fishbase.ropensci.org/species?limit=15&offset=${(Math.floor(Math.random() * 1000) + 1).toString()}`)
	.then(response => response.json())
	.then(data => {
		if(data['error'] === null){
			data['data'].forEach(test => {
					if(test['image'] === null) test['image'] = 'https://bitsofco.de/content/images/2018/12/broken-1.png'
					fishList.innerHTML += `<div class="test">
						<a href="test/${test['SpecCode'].toString()}">
							<div class="test-title">
								${test['Species'].charAt(0).toUpperCase() + test['Species'].slice(1)}
							</div>
							<img src="${test['image']}"/>
						</a>
					</div>`
		  })
		}
	}).catch(err => console.log(err)) 