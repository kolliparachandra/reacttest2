export const getPluralized=(count,string)=> count > 1 ? string +'s' : string;
export const getPluralizedWithCount=(count,string)=> count > 1 ? count + ' ' + string + 's': count + ' ' + string;