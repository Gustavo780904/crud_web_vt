package com.example.joaovitor.CrudWeb.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.joaovitor.CrudWeb.dominio.Cliente;


public class ClienteDAO {
	public void inserir(Cliente cliente) throws SQLException {
		Connection conexao = FabricaDeConexao.getConnection();
		String sql = "insert into cliente" + "(cpf, nome_cliente, endereco, data_nasc, email, telefone)" + " values (?,?,?,?,?,?)";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setString(1, cliente.getCpf());
		stmt.setString(2, cliente.getNome_cliente());
		stmt.setString(3, cliente.getEndereco());
		stmt.setString(4, cliente.getData_nasc());
		stmt.setString(5, cliente.getEmail());
		stmt.setString(6, cliente.getTelefone());
		stmt.execute();
		stmt.close();
		conexao.close();
	}

	public List<Cliente> listagem() throws SQLException {
		List<Cliente> lista = new ArrayList<Cliente>();
		Connection conexao = FabricaDeConexao.getConnection();
		String sql = "select * from cliente";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		ResultSet resultado = stmt.executeQuery();
		while (resultado.next()) {
			Integer cod_cliente = resultado.getInt("cod_cliente");
			String cpf = resultado.getString("cpf");
			String nome = resultado.getString("nome_cliente");
			String endereco = resultado.getString("endereco");
			String data_nasc = resultado.getString("data_nasc");
			String email = resultado.getString("email");
			String telefone = resultado.getString("telefone");
			
			
			String dataAjustada = data_nasc.substring(8, 10) + "/" + data_nasc.substring(5, 7) + "/" + data_nasc.substring(0, 4);
			
			Cliente cliente = new Cliente(cod_cliente, cpf, nome, endereco, dataAjustada, email, telefone);
			lista.add(cliente);
		}
		resultado.close();
		stmt.close();
		conexao.close();
		return lista;
	}

	public void excluir(int id) throws SQLException {
		Connection conexao = FabricaDeConexao.getConnection();
		String sql = "delete from cliente where cod_cliente=?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setInt(1, id);
		stmt.execute();
		stmt.close();
		conexao.close();
	}

	public void atualiza(Cliente c) throws SQLException {
		Connection conexao = FabricaDeConexao.getConnection();
		String sql = "update cliente set cpf =?, nome_cliente= ?, endereco = ?, data_nasc=?, email = ?, telefone = ? where cod_cliente = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setString(1, c.getCpf());
		stmt.setString(2, c.getNome_cliente());
		stmt.setString(3, c.getEndereco());
		stmt.setString(4, c.getData_nasc());
		stmt.setString(5, c.getEmail());
		stmt.setString(6, c.getTelefone());
		stmt.setInt(7, c.getCod_cliente());
		stmt.execute();
		stmt.close();
		conexao.close();
	}
}
