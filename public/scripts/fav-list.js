/* const fishList = document.querySelector('.test-list')
fetch(`api/films`)
	.then(response => response.json())
	.then(data => {
		data.forEach(test => {
			if(test['image'] === null) test['image'] = 'https://bitsofco.de/content/images/2018/12/broken-1.png'
			fishList.innerHTML += `<div class="test">
				<a>
					<div class="test-title">
						${test['gender'].charAt(0).toUpperCase() + test['gender'].slice(1)}
					</div>
					<img src="${test['image']}"/>
				</a>
			</div>`
		})
	}).catch(err => console.log(err)) */