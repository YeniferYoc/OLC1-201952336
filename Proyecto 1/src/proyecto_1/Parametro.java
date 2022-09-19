package proyecto_1;

import java.util.LinkedList;

public class Parametro implements Instruccion{
	private String id, tipo_dat;
	public static int contador = 0;
	
	public Parametro(String id, String tipo_dat) {
		this.id= id;
		this.tipo_dat = tipo_dat;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += id;
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public String CodigoDot() {
		String dot = "";
		int par = contador;
		dot+="nodo"+(par)+"_para;\n";
		dot+="nodo"+(par)+"_para"+" [ label =\"PARAMETRO\"];\n";
		
		dot+="nodo"+(par)+"_para"+" ->"+"nodo"+(par)+"_para_id"+"\n";
		dot+="nodo"+(par)+"_para_id"+" [ label =\""+id+"\"];\n";
		
		dot+="nodo"+(par)+"_para"+" ->"+"nodo"+(par)+"_para_tip_d"+"\n";
		dot+="nodo"+(par)+"_para_tip_d"+" [ label =\""+tipo_dat+"\"];\n";
		contador++;
		
		return dot;
	}
}
