
const inputLastEvent = document.querySelector('#lastEvent')
inputLastEvent.style.backgroundColor = " white"
const inputNextEvent = document.querySelector('#nextEvent')
const selectCompany = document.querySelector('#selectedCompany')
const sendEvent = document.querySelector('#send')

async function getDataEvent(company) {
  const response = await fetch(`http://localhost:3000/event/${company}`)
  const event = await response.json()
  const { lastEvent, nextEvent } = event[0]

  // Convertendo as datas para o formato "yyyy-MM-dd"
  const formattedNextEvent = new Date(nextEvent).toISOString().split('T')[0]
  inputLastEvent.value = formattedNextEvent
}

selectCompany.addEventListener("change", ()=> {
  getDataEvent(selectCompany.value)
})

async function sendDataEvent(event) 
{
event.preventDefault()
 formEvent = 
 {
    lastEvent : inputLastEvent.value,
    nextEvent : inputNextEvent.value,
    company : selectCompany.value
 }
 console.log(formEvent)
 const response = await fetch(`http://localhost:3000/event/${selectCompany.value}`,{
    method : 'POST',
    body : JSON.stringify(formEvent),
    headers: { 'Content-Type': 'application/json' }
 })
 const data = await response.json()
 alert(`evento com ID ${data.insertId} inserido com sucesso`)
}document.querySelector('#lastEvent').value = ""
sendEvent.addEventListener('click',()=>
{
    sendDataEvent(event)
})
