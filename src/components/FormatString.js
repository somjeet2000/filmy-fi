export const FormatString = (string) => {
    let str = "" 
    if(string) {
        str=string.replaceAll(' ', '-').toLowerCase();
    }
    
    console.log(string);
    return str;
}

