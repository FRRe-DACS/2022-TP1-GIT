function formattransfor(cadena){
    const txt=cadena.toUpperCase();
    if(txt===cadena){
        return cadena.toLowerCase();
    }else{
        return txt
    }
}
module.exports = formattransfor;