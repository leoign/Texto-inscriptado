const ingreso_texto = document.getElementById("ingreso_texto");

const boton_i = document.getElementById("boton_i");

const boton_d = document.getElementById("boton_d");

const msj_final = document.getElementById("msj_final");

const boton_copiar = document.getElementById("boton_copiar");

const figura_1 = document.getElementById("figura_1");

const info = document.getElementById("info");

const j = document.getElementById("j");

const tag = document.getElementById("tag");

let remplazar =[
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

boton_i .addEventListener('click',()=>{ 
    const texto = ingreso_texto.value.toLowerCase()
    function encriptar(newtext){
        for (let i = 0; i < remplazar.length; i++){
            if (newtext. includes(remplazar[i][0])){
                newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newtext;
    };
    const textoenscriptado = encriptar(texto);

    msj_final.innerHTML = textoenscriptado;

    figura_1.style.display = "none";
    ingreso_texto .value="";
    info.style.display = "none";
    tag.style.display = "none";
    boton_copiar.style.display = "block";
   // j.classlist.add("ajustar");
});
    
boton_d .addEventListener('click',()=>{
    const texto = ingreso_texto.value.toLowerCase();
    function desincriptar(newtext){
       for(let i = 0; i <remplazar.length; i++){
        if(newtext.includes(remplazar[i][1]));{
            newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
       };
       return newtext
    };
    const textodesincriptado = desincriptar(texto);
    
    msj_final.innerHTML = textodesincriptado;

    figura_1.style.display = "none";
    info.style.display = "none";
    tag.style.display = "none";
    boton_copiar.style.display = "block";

    
    
})

boton_copiar .addEventListener('click',()=>{
    let texto = msj_final;
   // navigator.clipboard.writeText(texto.value);
    document.execCommand("boton_copiar")
    alert("texto copiado")

    msj_final.innerHTML="";


    figura_1.style.display="block"
    tag.style.display = "block";
    boton_copiar.style.display = "none";
   
    ingreso_texto.focus();
   


})