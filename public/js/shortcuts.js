let search = document.querySelector("#search")
let users = document.querySelector(".short")


let data = [
  { id :1 , shorts:"yaman" , name:"nour" , usage:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium obcaecati iusto placeat voluptatum? Atque, ex suscipit asperiores reprehenderit fuga hic, accusamus repellat sunt, quia accusantium veritatis doloribus beatae qui explicabo?"},
  { id :2 , shorts:"ayham" , name:"ahmed" , usage:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium"},
  { id :3 , shorts:"12345" , name:"modamed" , usage:"Lorem ipsum, dolor sit amet beatae qui explicabo?"},
  { id :4 , shorts:"aaaa" , name:"uuser" , usage:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium obcaecati iusto placeat voluptatum? Atque, ex suscipit asperiores reprehenderit fuga hic, accusamus repellat sunt"},
  ]
  




UI(data)
function UI (data){
    users.innerHTML = ""
    data.forEach(user =>{
    return  users.innerHTML += `
    
          <tr style="color: white ;height: 30px; overflow-y: scroll">
            <td>${user.shorts}</td>
            <td>${user.name}</td>
            <td id="usage"><p>${user.usage}</p></td>
          </tr>
          
          `
          
    })
    
}


search.addEventListener("keyup", event =>{
  let value = event.target.value.toLowerCase().trim()
  UI(filterData(data, value))
} )


function filterData(data, value){
let result =  []
data
     .forEach(user =>{
       if(user.shorts.toLowerCase().includes(value) || user.name.toLowerCase().includes(value) || user.usage.toLowerCase().includes(value)){
          return result.push(user)
       }
     })

return result
}