const messages = document.querySelector(".messages")
const fragment = document.createDocumentFragment()

    const firstMessage = document.createElement("section")
    firstMessage.classList = "message"
    firstMessage.textContent = "Hi Sally, how are you doing today?"
    fragment.appendChild(firstMessage) 

    const secondMessage = document.createElement("section")
    secondMessage.classList = "message"
    secondMessage.textContent = "Hey Margaret, I'm doing well. I've been busy painting my new masterpiece."
    fragment.appendChild(secondMessage) 

    const thirdMessage = document.createElement("section")
    thirdMessage.classList = "message"
    thirdMessage.textContent = "Oh, that sounds cool! What are you painting?"
    fragment.appendChild(thirdMessage) 

    const fourthMessage = document.createElement("section")
    fourthMessage.classList = "message"
    fourthMessage.textContent = "It's a contemporary piece, but it's on a massive canvas. We're talking 12 feet by 12 feet!"
    fragment.appendChild(fourthMessage) 

    const fifthMessage = document.createElement("section")
    fifthMessage.classList = "message"
    fifthMessage.textContent = "Oh wow! That is big!!"
    fragment.appendChild(fifthMessage) 

    messages.appendChild(fragment)

