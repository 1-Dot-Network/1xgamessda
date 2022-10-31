var notiArr = []
var notiDiv = document.getElementById('notifications')

function newNoti(Title, Content) {
    var newNoti = document.createElement('div')
    newNoti.setAttribute('class', 'notification')
    newNoti.Title = document.createElement('div')
    newNoti.Title.setAttribute('id', 'Title')
    newNoti.Title.innerText = Title
    newNoti.append(newNoti.Title)
    newNoti.Content = document.createElement('div')
    newNoti.Content.setAttribute('id', 'Content')
    newNoti.Content.innerText = Content
    newNoti.append(newNoti.Content)
    notiDiv.append(newNoti)
    notiArr.push(newNoti)
}

newNoti('New Site!', 'We have changed to a new website for 1xgames')


setInterval(() => {
    for (let i = 0; i < notiArr.length; i++) {
        if (i !== 0) {
            notiArr[i].style.top = (i * 15 + 20).toString() + "%"
        } else notiArr[i].style.top = "20%"
    }
}, 100)