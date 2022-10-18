const explore = document.getElementById('event');
// const preLoader = document.getElementsByClassName('pre-Loader');
document.querySelector('#event').addEventListener("click", function(){
    document.querySelector('.popup').style.display = 'none';
    // document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.pre-Loader').style.background = 'transparent';
    document.querySelector('.pre-Loader').style.height = '0vh';

});

function facebook() {
    window.location = "https://www.facebook.com/sceceaot/"
}
function instagram() {
    window.location = "https://instagram.com/aot_sc_ece?igshid=YmMyMTA2M2Y="
}
function linkdin() {
    window.location = "https://www.linkedin.com/company/student-s-chapter-of-iei-ece-academy-of-technology/"
}
function twitter() {
    window.location = "https://twitter.com/IeiEce?t=O0w4dUffK0Zm2RIg5fsdAg&s=08"
}
function whatsapp() {
    window.location = "https://chat.whatsapp.com/KPtqPU0aoLVEPdLxjXKpNT"
}
function youtube() {
    window.location = "https://www.youtube.com/channel/UCi2UTCTQnxo5XXkG5w8OUNQ"
}
function github() {
    window.location = "https://github.com/scEce-Tech"
}


const newyear = new Date().getFullYear();
document.getElementById('year').innerHTML = newyear;
