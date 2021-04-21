/***********************
** CRUD-PROCEDIMENTOS **
************************/
$('#editarProcedimento').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal	
	var nome = button.data('nome') // Extract info from data-* attributes
	var duracao = button.data('duracao')
	var preco = button.data('preco')
	var id = button.data('id')
	var modal = $(this)

	modal.find('.modal-content #cod_proced').val(id)
	modal.find('.modal-content #nome').val(nome)
	modal.find('.modal-content #duracao').val(duracao)
	modal.find('.modal-content #preco').val(Number(preco))

})

$('#deletarProcediemento').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var id = button.data('id') // Extract info from data-* attributes
	var modal = $(this)
	modal.find('.modal-content #cod_proced').val(id)
})

/**********************
** CRUD-AGENDAMENTOS **
***********************/

$('#editarAgendamento').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal	
	var id = button.data('id')
	var dt = button.data('dt')
	var dtFormatada = `${dt.substring(6, 10)}-${dt.substring(3, 5)}-${dt.substring(0, 2)}`
	var hora = button.data('hora')
	var cliente = button.data('cliente')
	var proced = button.data('proced')
	var modal = $(this)

	modal.find('.modal-content #cod_agend').val(id)
	modal.find('.modal-content #data_agend').val(dtFormatada)
	modal.find('.modal-content #horario').val(hora)
	modal.find('.modal-content #nome_proced').val(proced)
	modal.find('.modal-content #nome_cliente').val(cliente)


})

$('#deletarAgenda').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var id = button.data('id') // Extract info from data-* attributes
	var modal = $(this)
	modal.find('.modal-content #cod_agend').val(id)
})

/***********************
** CRUD-PRODUTO **
************************/
$('#editarProduto').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal	
	var nome = button.data('nome') // Extract info from data-* attributes
	var preco = button.data('preco')
	var qtd_estoque = button.data('qtd_estoque')
	var id = button.data('id')
	var modal = $(this)

	modal.find('.modal-content #cod_produto').val(id)
	modal.find('.modal-content #nome').val(nome)
	modal.find('.modal-content #preco').val(preco)
	modal.find('.modal-content #qtd_estoque').val(qtd_estoque)

})

$('#deletarProduto').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var id = button.data('id') // Extract info from data-* attributes
	var modal = $(this)
	modal.find('.modal-content #cod_produto').val(id)
})
/******************
** CRUD-CLIENTES **
*******************/
$('#editarCliente').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal	
	var id = button.data('id')
	var cpf = button.data('cpf')
	var nome = button.data('nome') // Extract info from data-* attributes
	var endereco = button.data('endereco')
	var dtnasc = button.data('dtnasc')
	var dtFormatada = `${dtnasc.substring(6, 10)}-${dtnasc.substring(3, 5)}-${dtnasc.substring(0, 2)}`
	var email = button.data('email')
	var telefone = button.data('telefone')

	var modal = $(this)

	modal.find('.modal-content #cod_cliente').val(id)
	modal.find('.modal-content #cpf').val(cpf)
	modal.find('.modal-content #nome_cliente').val(nome)
	modal.find('.modal-content #endereco').val(endereco)
	modal.find('.modal-content #data_nasc').val(dtFormatada)
	modal.find('.modal-content #email').val(email)
	modal.find('.modal-content #telefone').val(telefone)

})

$('#deletarCliente').on('show.bs.modal', function(event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var id = button.data('id') // Extract info from data-* attributes
	var modal = $(this)
	modal.find('.modal-content #cod_cliente').val(id)
})

/***************
** CRUD-VENDA **
****************/
function preenche(){
	qtd = Number($( "#cod_prod option:selected" ).data('qtd'));
	select = $("#sel-qtd");
	select.empty();
	select = document.getElementById("sel-qtd");
	
	for(var i=0; i <= qtd; i++){
		option = document.createElement("option");

		if(i==0){
			option.textContent = "";
			option.value = "";
		}
		else {
			option.textContent = i;
			option.value = i;
		} 
		
		select.appendChild(option);
	}
	
	$("#qtd_estoque").val(qtd);
	$("#val-unitario").val(`R$ ${$( "#cod_prod option:selected" ).data('preco')}`);
	$("#val-total").val(" ");
}

function totalVenda(){
	var qtd = Number($("#sel-qtd option:selected").val());
	document.getElementById("val-total").value = `R$ ${qtd * Number($( "#cod_prod option:selected" ).data('preco'))}`;
}