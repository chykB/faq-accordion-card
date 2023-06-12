const header = document.querySelectorAll('.paragraph .question')

header.forEach((headers, i) => {
    headers.addEventListener('click', () =>{
        headers.nextElementSibling.classList.toggle('active');
        const close = headers.querySelector('.open')
        const open = headers.querySelector('.close')

        if (headers.nextElementSibling.classList.contains('active')){
            close.classList.add('active')
            open.classList.remove('active')
        }else{
            close.classList.remove('active');
            open.classList.add('active')
        }
    })
})







// const hide = document.querySelectorAll('.hidden')
// const showElement = document.querySelectorAll('.visible')

// showElement.addEventListener('click', showAndHide)

// function showAndHide(){
//     if (hide.classList.contains('hiddden')){
//         hide.classList.remove('hidden')
//         hide.classList.add('visible')
//     }else{
//         hide.classList.add('hidden')
//         hide.classList.remove('visible')
//     }
// } 



