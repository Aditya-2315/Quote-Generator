async function getQuote(){
    const url = 'https://dummyjson.com/quotes/random';
    let response = await fetch(url)
    let json = await response.json()
    // let a = await response.text()
    return json
}

async function displayQuote(){
    let json = await getQuote()
    let Quote = json["quote"]
    let author = json["author"]
    document.querySelector(".QuoteBox").innerHTML = ` <div class="QuoteTitle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="#000000">
                    <path d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>  ${Quote}  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="#000000">
<path d="M10 8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8C2 6.11438 2 5.17157 2.58579 4.58579C3.17157 4 4.11438 4 6 4C7.88562 4 8.82843 4 9.41421 4.58579C10 5.17157 10 6.11438 10 8Z" stroke="currentColor" stroke-width="1.5" />
<path d="M10 7L10 11.4821C10 15.4547 7.48429 18.8237 4 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
<path d="M22 8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12C16.1144 12 15.1716 12 14.5858 11.4142C14 10.8284 14 9.88562 14 8C14 6.11438 14 5.17157 14.5858 4.58579C15.1716 4 16.1144 4 18 4C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8Z" stroke="currentColor" stroke-width="1.5" />
<path d="M22 7L22 11.4821C22 15.4547 19.4843 18.8237 16 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
 </div>
 <span class="author">By :- ${author}<span>`
}

let NewQuote = document.querySelector(".generate")

NewQuote.addEventListener("click",()=>{
    displayQuote()
    document.querySelector(".QuoteBox").classList.toggle("flip")
})