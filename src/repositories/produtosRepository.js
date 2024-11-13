let produtos = [];

function adicionarProdutosRepo(produto) {
    produtos.push(produto);
    return produto;
}

function listarProdutosRepo() {
    return produtos;
}

function atualizarProdutosRepo(id, produtoAtualizado) {
    const index = produtos.findIndex(produto => produto.id === id);

    if (index !== -1) {
        const produto = produtos[index];
        
        // Atualiza as propriedades somente se elas forem fornecidas
        produto.nome = produtoAtualizado.nome || produto.nome;
        produto.categoria = produtoAtualizado.categoria || produto.categoria;
        produto.preco = produtoAtualizado.preco !== undefined ? produtoAtualizado.preco : produto.preco;
        produto.estoque = produtoAtualizado.estoque !== undefined ? produtoAtualizado.estoque : produto.estoque;

        return { sucesso: true, mensagem: 'Produto atualizado com sucesso.' };
    } else {
        return { sucesso: false, mensagem: 'Produto não encontrado.' };
    }
}


function deletarProdutosRepo(id) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos.splice(index, 1);
        return { sucesso: true, mensagem: 'Produto removido com sucesso.' };
    } else {
        return { sucesso: false, mensagem: 'Produto não encontrado.' };
    }
}

function buscarProdutosRepo({nome, categoria, preco, estoque}) {
    const produtosEncontrados = produtos.filter(produto => {
        if (nome && produto.nome.toLowerCase().includes(nome.toLowerCase())) return true;
        if (categoria && produto.categoria.toLowerCase().includes(categoria.toLowerCase())) return true;
        if (preco && produto.preco === parseFloat(preco)) return true;
        if (estoque && produto.estoque === parseInt(estoque)) return true;
        return false;
    });

    return produtosEncontrados;
}

module.exports = {
    adicionarProdutosRepo,
    listarProdutosRepo,
    atualizarProdutosRepo,
    deletarProdutosRepo,
    buscarProdutosRepo,
}