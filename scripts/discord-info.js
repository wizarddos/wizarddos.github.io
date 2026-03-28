document.getElementById("hehe").addEventListener("click", ()=>{
    const box = document.getElementById("info")
    box.innerHTML = "<span id = \"hidden-typing\"></span>";
    typeWriter("Hehe, it's not that easy to get me", document.getElementById("hidden-typing"))
    setTimeout(()=>{
       typeWriter("But if you find me somewhere on discord, feel free to ping me ;)", document.getElementById("hidden-typing"))
    },5000)
}, false)