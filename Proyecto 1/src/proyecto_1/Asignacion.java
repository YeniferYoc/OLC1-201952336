package proyecto_1;

import java.util.LinkedList;

public class Asignacion implements Instruccion{
	private LinkedList<String> identificadores;
	private Expresion valor;
	public Asignacion( LinkedList<String> identificadores, Expresion valor) {
		super();
		this.identificadores = identificadores;
		this.valor = valor;
	}
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		for(String id:identificadores) {
			pyt += id.toString()+" = "+valor.Codigo_python()+"\n";
		}
		
		
		return pyt;
	}



	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}