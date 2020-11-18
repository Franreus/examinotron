/*const fishInfo = document.querySelector('.test-info')
if(fishInfo.dataset.spec){
	fetch(`https://fishbase.ropensci.org/species/${fishInfo.dataset.spec}?`)
	.then(response => response.json())
	.then(data => {
		if(data['error'] === null){
			const test = data['data'][0]
			if(test['Comments'] === null) test['Comments'] = 'There is no description'
			fishInfo.innerHTML += `<h2>${test['Species'].charAt(0).toUpperCase() + test['Species'].slice(1)}</h2>
				<p class="description"><b>Author:</b> ${test['Author']}<br/><br/>${test['Comments']}</p>
				<img src="${test['image']}"/>
				<div class="add-test">Add Test to favorites</div>`
			const addFishButton = document.querySelector('.add-test')
			addFishButton.addEventListener('click', async () => {
				await fetch('../api/tests',{
					method: "POST",
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					  },
					body: JSON.stringify({
						id:fishInfo.dataset.spec,
						gender:test['Species'].charAt(0).toUpperCase() + test['Species'].slice(1),
						author:test['Author'],
						description:test['Comments'],
						image:test['image']
					})
				}).then(res => res.text()).then(data => alert(data)).catch(e => console.log(e))
				//alert('Added')
			})
		}else fishInfo.innerHTML = '<h2>Test Not found</h2>'
	}).catch(err => console.log(err))
} */