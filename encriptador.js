
//Encriptador de texto
//var letras= ["a", "e", "i", "o", "u"];
// var mexclas= ["ai", "enter", "imes", "ober", "ufat"];
    

  
function encriptar(){


    let texto =document.getElementById("textOriginal").value
    let textoEncriptado= texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("text_encrip_Desencrip").value = textoEncriptado
    //document.getElementById("textOriginal").value
    }
   

function desencriptar(){
        let texto =document.getElementById("textOriginal").value
        var textDesencriptado= texto.replace(/imes/g, "i").replace(/enter/g, "e").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("text_encrip_Desencrip").value = textDesencriptado
        //document.getElementById("textOriginal").value

    }

function copiar(){
    let text=document.getElementById("text_encrip_Desencrip")
    text.select()
    document.execCommand("copy")

    alert("Texto Copiado!")
}



