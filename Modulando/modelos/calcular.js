let taxa = 0.20;

exports.valor = function( p_valor ) {
    return (p_valor * taxa);
    
}
exports.adicionar = function( p_valor ) {
    return (p_valor + (p_valor * taxa));
    
}