//kita buat sebuah fungsi untuk
//memunculkan MODAL

const showModal = () => {
    //kita dapatkan element MODAL
    //yang mau di munculkan
    let modal = document.getElementById('modalMenu')

    //kita atur styling element modalnya
    modal.style.display = 'flex'

}
`1  q`
const closeModal = () => {
    //kita dapatkan element MODAL
    //yang mau di munculkan
    let modal = document.getElementById('modalMenu')

    //kita atur styling element modalnya
    modal.style.display = 'none'

}

//kita ambil alamat by id
let showcase = document.getElementById("wrapper_showcase")

// kita inject elemntnya dengan sytax HTML
//showcase.innerHTML += `
//<img src="https://picsum.photos/seed/9/300" alt="ini Gambar" />
//<h1 style='color : white'>Selamat Datang ${nama}</h1>`

for (var i = 0; i < 9; i++) {
    showcase.innerHTML += `
    <img src="https://picsum.photos/seed/${1 + i}/235" alt='ini Gambar ke 1' />
    `
}