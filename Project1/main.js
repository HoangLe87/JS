const myHeading = document.querySelector('h1');

/*document.querySelector('html').addEventListener('click', () => {
    alert('Ouch stop poking me!');
});*/

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'images/Google1.jpeg') {
        myImage.setAttribute('src','images/Google2.jpeg')
    } else {
        myImage.setAttribute('src','images/Google1.jpeg');
    }
}

let myVarriable = document.querySelector('h1').addEventListener('click', ()=> {
    alert('testing')
})

let myButton = document.querySelector('button');
myButton.onclick = function() {
    let a = prompt('Enter a new name: ')
    document.querySelector('h1').textContent = `CHanged your name to ${a}`
}

function setUserName() {
    let myName = prompt('Please enter your name: ')
    localStorage.setItem('name', myName)
    myHeading.textContent = `Mozzila is cool, ${myName}`
}

if (!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = `Mozzila is cool, ${storedName}`
}