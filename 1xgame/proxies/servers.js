var serverArr = []
var serverDiv = document.getElementById('servers')

function newServer(Title) {
    var newServer = document.createElement('div')
    newServer.setAttribute('class', 'server')
    newServer.Title = document.createElement('div')
    newServer.Title.setAttribute('id', 'Title')
    newServer.Title.innerText = Title
    serverDiv.append(newServer)
    serverArr.push(newServer)
}

newServer('Server 1')


setInterval(() => {
    for (let i = 0; i < serverArr.length; i++) {
        if (i !== 0) {
            serverArr[i].style.top = (i * 10 + 20).toString() + "%"
        } else serverArr[i].style.top = "20%"
    }
}, 100)