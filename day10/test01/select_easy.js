function select_easy(tree,expr){
    return select(tree,parse_selection_exp(expr))
}