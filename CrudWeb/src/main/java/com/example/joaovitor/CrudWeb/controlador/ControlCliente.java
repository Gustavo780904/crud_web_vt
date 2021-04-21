package com.example.joaovitor.CrudWeb.controlador;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.joaovitor.CrudWeb.dao.ClienteDAO;
import com.example.joaovitor.CrudWeb.dominio.Cliente;

@Controller
public class ControlCliente {
	@GetMapping("/clientes")
	public String listaCliente(Model modelo) throws SQLException {
		ClienteDAO dao = new ClienteDAO();
		List<Cliente> lista = dao.listagem();
		modelo.addAttribute("lista", lista);
		modelo.addAttribute("cliente", new Cliente());
		return "CRUD-Clientes/clientes";
	}

	@PostMapping("/novo-cliente")
	public String salvar(Cliente cliente) throws SQLException {
		ClienteDAO dao = new ClienteDAO();
		dao.inserir(cliente);
		return "redirect:/clientes";
	}

	@PostMapping("/salvar-cliente")
	public String processaoFormEdit(Cliente cliente) throws SQLException {
		ClienteDAO dao = new ClienteDAO();
		dao.atualiza(cliente);
		return "redirect:/clientes";
	}

	@GetMapping("/excluir-cliente")
	public String excluir(Integer cod_cliente) throws SQLException {
		ClienteDAO dao = new ClienteDAO();
		dao.excluir(cod_cliente);
		return "redirect:/clientes";
	}
}
