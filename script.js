function load() {
    var msg = document.getElementById('msg') 
    var img = document.getElementById('card') 
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    msg.innerHTML = `It is now ${hour}:${minutes} o'clock.`
    if (hour >= 0 && hour < 12) {           
        img.src = 'images/img-morning.png'
        document.body.style.backgroundColor = '#BEA78F';
    } else if (hour >= 12 && hour <= 18){
        img.src = 'images/img-afternoon.png'
        document.body.style.backgroundColor = '#AD9A6D'
    } else {
        img.src = 'images/img-night.png'
        document.body.style.backgroundColor = '#0B0201';
    }

}