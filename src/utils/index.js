export const uniqueArray = function(a) {
    a.filter((item, pos) => a.indexOf(item) === pos);
}  

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
export const formatDate = (data) => {
    return ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
}