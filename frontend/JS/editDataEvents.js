
const inputLastEvent = document.querySelector('#lastEvent')
const inputNextEvent = document.querySelector('#nextEvent')
const selectCompany = document.querySelector('#selectedCompany')
const sendEvent = document.querySelector('#send')
let idEvent;

async function getDataEvent(company) {
  const response = await fetch(`http://localhost:3000/event/${company}`)
  const event = await response.json()
  const {id, lastEvent, nextEvent } = event[0]
  idEvent=id;

  const formattedNextEvent = nextEvent.substring(0, 10)
  const formattedLastEvent = lastEvent.substring(0, 10)
  inputLastEvent.value = formattedLastEvent
  inputNextEvent.value = formattedNextEvent
}

selectCompany.addEventListener("change", ()=> {
  getDataEvent(selectCompany.value)
})

async function sendDataEvent(event) 
{
    console.log("o id do evento é: "+idEvent)
event.preventDefault()
 formEvent = 
 {
    lastEvent : inputLastEvent.value,
    nextEvent : inputNextEvent.value
 }
 console.log(formEvent)
 const response = await fetch(`http://localhost:3000/event/${idEvent}`,{
    method : 'PUT',
    body : JSON.stringify(formEvent),
    headers: { 'Content-Type': 'application/json' }
 })
 alert(`evento com ID ${idEvent} alterado com sucesso`)
}document.querySelector('#lastEvent').value = ""
sendEvent.addEventListener('click',()=>
{
    sendDataEvent(event)
})
