const button2 = document.createElement('button')
button2.innerText = 'CLEAR/RESTART'
button2.id = 'reset'
button2.addEventListener('click', () => {document.location.reload()})
document.body.appendChild(button2)