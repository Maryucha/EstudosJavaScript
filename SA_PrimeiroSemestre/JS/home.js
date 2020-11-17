

var menu, sair = 0; // menu
var sizeProd = 0, sizeFunc = 0;
var allProducts = "", allEmployees = "";
var qtdProduto = 0, qtdFuncionario = 0;
var produtosExcluidos = 0, funcionariosExcluidos = 0;


var produto = new Object() // Objeto produto
    produto.modelo = new Array() 
    produto.numSerie = new Array()
    produto.fabricante = new Array()
    produto.descricao = new Array()
    produto.estoque = new Array()
    produto.qntMinima = new Array()

var funcionario = new Object() // Objeto funcionario
    funcionario.nome = new Array()
    funcionario.cpf = new Array()
    funcionario.cargo = new Array()
    funcionario.matricula = new Array()
    funcionario.nascimento = new Array()
    funcionario.id = new Array()
    

do{

    menu = parseInt(prompt(
    ` ================= SISTEMA DE CADASTRO ================== \n
    SELECIONE UMA OPÇÃO:
    1: Cadastrar produto
    2: Visualizar produto
    3: Editar produto
    4: Apagar produto
    5: Cadastrar funcionario
    6: Visualizar funcionario
    7: Editar funcionario
    8: Apagar funcionario
    9: Verificar Estoque
    10: Sair`));

    switch(menu){
        case 1:
            registerProduct();
            break;
        case 2:
            viewProduct();
            break;   
        case 3:
            editProduct();
            break;
        case 4:
            delProduct();
            break;    
        case 5:
            registerEmployees();
            break;
        case 6:
            viewStaff();
            break;
        case 7:
            editEmployees();
            break;
        case 8:
            delEmployees();
            break
        case 9:
            viewStock()    
            break;
        case 10:
            exitMenu();
            break;    
        case 11:
            autoFill();        
            break;
        default:
            alert("Opção invalida");
            break;

    }

}while(sair == 0);    

function exitMenu(){ // Função para sair do programa.

    if(menu == 10)
        sair = 1;

    alert("Volte sempre");

}

function registerProduct(){ // Função para cadastrar os produtos
    
    let i;

    qtdProduto = parseInt(prompt("Quantos produtos deseja cadastrar: "));
    
    for(i = 0; i < qtdProduto; i++){

        produto.modelo.push(prompt("Digite o modelo do produto: "));
        produto.numSerie.push(prompt("Digite o numero de serie: "));
        produto.fabricante.push(prompt("Digite o fabricante: "));
        produto.descricao.push(prompt("Insirar uma descrição do produto: "));
        produto.qntMinima.push(prompt("Digite a quantidade minima em estoque: "))
        produto.estoque.push(prompt("Defina uma quantidade em estoque: "));

        sizeProd++
    }

        alert(`Você tem ${sizeProd} produtos cadastrados`);
    
    
}

function viewProduct(){ // Função para visualizar os produtos

    if(sizeProd == 0)
        alert("Nenhum produto cadastrado");

        allProducts = produto.modelo.join("\n - ")

    if(sizeProd != 0)
        alert(` ======================= PRODUTOS ======================== \n - ${allProducts}`);

    allProducts = "";
    
}

function editProduct(){ // Função para editar os produtos
    
    let buscar, menuEditProduct, indice;

    buscar = prompt("Digite o modelo do produto: ");

    indice = produto.modelo.indexOf(buscar)

    if(buscar == produto.modelo[indice]){

        menuEditProduct = parseInt(prompt(
        `Selecione o que deseja alterar:\n
        1: Modelo "${produto.modelo[indice]}" 
        2: Numero Serial "${produto.numSerie[indice]}" 
        3: Fabricante "${produto.fabricante[indice]}" 
        4: Descrição "${produto.descricao[indice]}" 
        5: Estoque "${produto.estoque[indice]}" 
        6: Quantidade Minima "${produto.qntMinima[indice]}"
        7: Sair`))

        switch(menuEditProduct){
            case 1:
                produto.modelo[indice] = prompt("Altere o modelo: ");
                break;
            case 2:
                produto.numSerie[indice] = prompt("Altere o numero de serie: ");
                break;
            case 3:
                produto.fabricante[indice] = prompt("Altere o fabricante: ");
                break;
            case 4:
                produto.descricao[indice] = prompt("Alterar descrição: ");
                break;
            case 5:
                produto.estoque[indice] = parseInt(prompt("Alterar estoque: "));
                break;
            case 6:
                produto.qntMinima[indice] = parseInt(prompt("Alterar quantidade minima: "));
                break;
            case 7:
                alert("Retornando ao MENU");     
                break;
        }

    }else
        alert("Modelo não encontrado");
    }

function registerEmployees(){ // Função para cadastrar os funcionarios
    
    let i;
    
    qtdFuncionario = parseInt(prompt("Quantos funcionarios deseja cadastar: "))

    for(i = 0; i < qtdFuncionario; i++){

        funcionario.nome.push(prompt("Digite o nome do funcionario: "))
        funcionario.cpf.push(parseInt(prompt("Digite o CPF: ")))
        funcionario.matricula.push(parseInt(prompt("Digite a matricula: ")))
        funcionario.cargo.push(prompt("Qual o cargo exercido: "));
        funcionario.nascimento.push(parseInt(prompt("Data de nascimento: ")));
        funcionario.id.push(sizeFunc+1);
        sizeFunc++
    }
    
        alert(`Você tem ${sizeFunc} funcionarios cadastrados`)
    

}

function viewStaff(){ // Função para visualizar os funcionarios
    
    if(sizeFunc == 0)
        alert("Nenhum produto cadastrado");

        allEmployees = funcionario.nome.join("\n - ")

    if(sizeFunc != 0)
        alert(` ===================== FUNCIONARIOS ====================== \n - ${allEmployees}`);

    allEmployees = "";
    
}

function editEmployees(){ // Função para editar os funcionarios

    let buscar, menuEditEmployees, indice;

    buscar = prompt("Digite o nome do funcionario: ");

    indice = funcionario.nome.indexOf(buscar);

    if(buscar == funcionario.nome[indice]){
        
        menuEditEmployees = parseInt(prompt(
        `Selecione o que deseja alterar:\n 
        1: Nome "${funcionario.nome[indice]}" 
        2: CPF "${funcionario.cpf[indice]}"
        3: Matricula "${funcionario.matricula[indice]}"
        4: Cargo "${funcionario.cargo[indice]}"
        5: Nascimento "${funcionario.nascimento[indice]}"
        6: Sair`))
        
        switch(menuEditEmployees){
            case 1:
                funcionario.nome[indice] = prompt("Altere o nome do funcionario: ")
                break;
            case 2:
                funcionario.cpf[indice] = prompt("Altere o CPF do funcionario: ")
                break;
            case 3:
                funcionario.matricula[indice] = prompt("Altere a matricula do funcionario: ")
                break;
            case 4:
                funcionario.cargo[indice] = prompt("Altere o cargo do funcionario: ")
                break;
            case 5:
                funcionario.nascimento[indice] = prompt("Altere o nascimento do funcionario: ")
                break;
            case 6:
                alert("Retornando ao MENU");     
                break;       
        }
    }else
        alert("Funcionario não cadastrado")
}     

function delProduct(){ // Função deletar produtos

    let stop, confirmar, buscar, indice, excluidos;

    do{

        buscar = prompt("Digite o modelo do produto que deseja apagar: ");

        indice = produto.modelo.indexOf(buscar);
                
            if(buscar == produto.modelo[indice]){

                confirmar = parseInt(prompt("Deseja apagar este produto ( Sim 1 / Não 0 )?"));

                if(confirmar == 1){
                    
                    produtosExcluidos += produto.modelo.splice(indice, 1);
                    produto.numSerie.splice(indice, 1);
                    produto.fabricante.splice(indice, 1);
                    produto.descricao.splice(indice, 1);
                    produto.estoque.splice(indice, 1);    

                    sizeProd -= 1;
                    qtdProduto -=1;

                }

                alert("Produto apagado com sucesso!");             

            }else
                alert("Modelo não cadastrado!");

            excluidos = confirm("Gostaria de verificar os produtos excluidos ?")

            if(excluidos)
                alert(produtosExcluidos);

        stop = parseInt(prompt("Digite '1' para apagar mais produtos ou '0' para sair"));

    }while(stop != 0);   

}

function delEmployees(){ // Função deletar funcionarios

    let stop, confirmar, buscar, indice, excluidos;

    do{

        buscar = prompt("Digite o nome do funcionario que deseja apagar: ");

        indice = funcionario.no.indexOf(buscar);
                
            if(buscar == funcionario.nome[indice]){

                confirmar = parseInt(prompt("Deseja apagar este funcionario ( Sim 1 / Não 0 )?"));

                if(confirmar == 1){
                    
                    funcionariosExcluidos += funcionario.nome.splice(indice, 1);
                    funcionario.cpf.splice(indice, 1);
                    funcionario.cargo.splice(indice, 1);
                    funcionario.matricula.splice(indice, 1);
                    funcionario.nascimento.splice(indice, 1);
                        

                    sizeFunc -= 1;
                    qtdFuncionario -=1;

                }

                alert("Funcionario apagado com sucesso!");

            }else
                alert("Funcionario não cadastrado!");

            excluidos = confirm("Gostaria de verificar os funcionarios excluidos ?")

            if(excluidos)
                alert(funcionariosExcluidos);  

        stop = parseInt(prompt("Digite '1' para apagar mais funcionarios ou '0' para sair"));

    }while(stop != 0);   

}

function autoFill(){ // Função de teste para autopreenchimento.

    let i;

    qtdProduto = parseInt(prompt("Quantos produtos deseja cadastrar: "));
    
    for(i = 0; i < qtdProduto; i++){

        produto.modelo.push("Teclado");
        produto.numSerie.push("1234509876");
        produto.fabricante.push("Logitech");
        produto.descricao.push("Gamer");
        produto.estoque.push(10);
        produto.qntMinima.push(10);

        sizeProd++
    }
    
    qtdFuncionario = parseInt(prompt("Quantos funcionarios deseja cadastar: "))

    for(i = 0; i < qtdFuncionario; i++){

        funcionario.nome.push("Sidney");
        funcionario.cpf.push("000.000.000-00");
        funcionario.matricula.push("123UF687");
        funcionario.cargo.push("CEO");
        funcionario.nascimento.push("00/00/0000");

        sizeFunc++
    }

}

function viewStock(){

    let buscar, indice

    buscar = prompt("Digite o modelo do produto que gostaria de buscar: ");

    indice = produto.modelo.indexOf(buscar);

    if(buscar == produto.modelo[indice]){

        if(produto.estoque < produto.qntMinima){
            alert("Produto com estoque abaixo do limite")
        }
                
        alert(` ======================= PRODUTOS ======================= \n
        Modelo: ${produto.modelo[indice]}
        Estoque: ${produto.estoque[indice]}
        Quantidade Min: ${produto.qntMinima[indice]}`);

    }

}
