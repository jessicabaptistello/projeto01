/* ENUNCIADO - PROJETO  01:
Dado um array de objetos (produtos com preço, categoria, stock), usar:
1) filter para achar produtos em stock;
2) filter para achar produtos em stock e com preços abaixo de 100 euros;
3) Utilize o some para identificar se possui algum elemento sem estoque e
    em seguida liste quais;
4) map para criar lista de preços com IVA 
(para facilitar considere que todos os produtos pagam 23% de IVA);
5) reduce para calcular o valor total do inventário. */

//ARRAY:

const inventario = [
{ id: 1, nome: "Teclado Mecânico RGB", preco: 85, categoria: ["Informática", "Periféricos"], emStock: true },
{ id: 2, nome: "Frigideira a Ar (Air Fryer)", preco: 110, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
{ id: 3, nome: "Cadeira de Escritório Ergonómica", preco: 180, categoria: ["Escritório", "Mobiliário"], emStock: false },
{ id: 4, nome: "Ecrã Curvo 27' 144Hz", preco: 250, categoria: ["Informática", "Ecrãs"], emStock: true },
{ id: 5, nome: "Máquina de Café de Cápsulas", preco: 75, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
{ id: 6, nome: "Caderno Inteligente A5", preco: 30, categoria: ["Escritório", "Papelaria"], emStock: true },
{ id: 7, nome: "Trotinete Elétrica", preco: 450, categoria: ["Lazer", "Mobilidade"], emStock: false },
{ id: 8, nome: "Rato Sem Fios Vertical", preco: 55, categoria: ["Informática", "Periféricos"], emStock: true }
];

// 1)

function produtosEmStock(inventario) {
    return inventario.filter(produto => produto.emStock);
    
}

// console.log(produtosEmStock(inventario)); 

// 2) 

function produtosEmStockAbaixoDe100(inventario) {
  return inventario.filter(produto => produto.emStock && produto.preco < 100);
}

// console.log(produtosEmStockAbaixoDe100(inventario));

//3) 

function produtoSemStock(inventario) {
    return inventario.some(produto => !produto.emStock);
}

// console.log(produtoSemStock(inventario));

function produtosSemStockLista(inventario) {
    return inventario.filter(produto => !produto.emStock);
    
}

// console.log(produtosSemStockLista(inventario));


