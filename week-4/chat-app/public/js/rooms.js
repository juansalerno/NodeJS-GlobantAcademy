const socket = io()

const $dropdown = document.querySelector('#active')
const $messageFormInput = document.querySelector('.room-input')

socket.on('activeRooms', (rooms) => {
    let html = '<option disabled selected>Active Rooms</option>'
    if (rooms.length > 0) {
        rooms.forEach(room => {
            html += ` <option class="room" value="${room}">${room}</option>`
            $dropdown.innerHTML = html
        })
    } else {
        $dropdown.innerHTML = html
    }
})

$dropdown.addEventListener('change', (e) => {
    let element = e.target
    element.addEventListener('click', (ev) => {
        $messageFormInput.value = ev.target.value
    })
})