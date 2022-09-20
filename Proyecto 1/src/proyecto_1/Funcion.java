package proyecto_1;

import java.util.LinkedList;

public class Funcion implements Instruccion{
	private String id, tipo;

	public static int contador2 =0;
	public static int contador =0;
	private Expresion ex;
	private LinkedList<Instruccion> instrucciones;
	private LinkedList<Parametro> parametros;
	public Funcion(String id, String tipo, LinkedList<Instruccion> inst, Expresion ex) {
		this.id = id;
		this.tipo = tipo;
		this.instrucciones = inst;
		this.ex = ex;
	}
	public Funcion(String id, String tipo, LinkedList<Instruccion> inst, LinkedList<Parametro> parametros, Expresion ex) {
		this.id = id;
		this.tipo = tipo;
		this.instrucciones = inst;
		this.parametros = parametros;
		this.ex = ex; 
	}
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "def "+id+" (";
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				pyt += parametros.get(i).Codigo_python().toString();
				if(i == parametros.size()-1){
					pyt += ",";
				}
				
			}
		}
		pyt += "): \n";
		if(instrucciones !=null) {
			String instru = "";
			for(Instruccion ins: instrucciones) {
				instru+= ins.Codigo_python().toString();
			instru += "\n";
			}	
			String [] partes = instru.split("\n");
			 
			 for(String part:partes) {
				 String con_ident ="\t";
				 con_ident += part+"\n";
				 pyt += con_ident;
			 }
			
		}
		pyt += "\treturn "+ex.Codigo_python().toString()+"\n";
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String CodigoDot() {
		// TODO Auto-generated method stub
		
		String dot = "";
		
		int fun = contador;
		dot+="nodo"+(fun)+"_fun;";
		dot+="nodo"+(fun)+"_fun"+" [ label =\"FUNCION "+"\"];\n";
		dot+="nodo"+(fun+1)+"_id_fun"+" [ label =\""+id.toString()+"\"];\n";
		dot+="nodo"+(fun)+"_fun"+" ->nodo"+(fun+1)+"_id_fun;";
		dot+="nodo"+(fun)+"_param"+" [ label =\"PARAMETROS\"];\n";
		dot+="nodo"+(fun)+"_fun"+" ->nodo"+(fun)+"_param;";
		
		if(parametros != null) {
			for(Parametro p_:parametros) {
				
				dot+="nodo"+fun+"_param"+" ->"+p_.CodigoDot();
				
				
				contador++;
					
			}
		}else {
			contador++;
		}
		
		dot+="nodo"+(fun)+"_instru_fun"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(fun)+"_fun"+" ->nodo"+(fun)+"_instru_fun;";
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+="nodo"+fun+"_instru_fun"+" ->"+ins.CodigoDot();
					
				}
			}
		}
		else {
			dot+="nodo"+fun+"_instru_fun"+" ->"+"nodo"+fun+"_null_fu;";
			dot+="nodo"+(fun)+"_null_fu"+" [ label =\"NULL "+"\"];\n";
			
		}
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {
		// TODO Auto-generated method stub
		
		String dot = "";
		
		int fun = contador2;
		dot+="nodo"+(fun)+"_fun;";
		dot+="nodo"+(fun)+"_fun"+" [ label =\"FUNCION "+id.toString()+" con parametros (";
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				dot += parametros.get(i).dot_flu().toString();
				
				if(i != parametros.size()-1){
					dot += ",";
				}
				
			}
		}
		dot += ")\"];\n";
		dot+="nodo"+(fun)+"_fun"+" ->nodo"+(fun)+"_instru_fun;";
		
		dot+="nodo"+(fun)+"_instru_fun"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(fun)+"_instru_fun"+" ->";
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+=ins.dot_flu();
					
				}
			}
		}
		else {
			dot+="nodo"+fun+"_instru_fun"+" ->"+"nodo"+fun+"_null_fu;";
			dot+="nodo"+(fun)+"_null_fu"+" [ label =\"NULL "+"\"];\n";
			dot+="nodo"+fun+"_null_fu"+" ->";
		}
		dot+="nodo"+(fun)+"_fun_f;";
		dot+="nodo"+(fun)+"_fun_f"+" [ label =\"Fin funcion "+ex.dot_flu()+"\"];\n";
		
		dot+="nodo"+(fun)+"_fun"+" ->";
		contador2++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	

}
