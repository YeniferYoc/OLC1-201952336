package proyecto_1;

import java.util.LinkedList;

public class Metodo implements Instruccion{
	private String id;
	private LinkedList<Instruccion> instrucciones;
	private LinkedList<Parametro> parametros;
	public static int contador =0;
	public static int contador2 =0;
	public int indi=0;
	public Metodo(String id, LinkedList<Instruccion> inst) {
		this.id = id;
		this.instrucciones = inst;
	}
	public Metodo(String id, LinkedList<Instruccion> inst, LinkedList<Parametro> parametros) {
		this.id = id;
		this.instrucciones = inst;
		this.parametros = parametros;
	}
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		if(id !=null) {
			pyt += "def "+id+" (";
		}
		else {
			pyt += "def metodo"+indi+" (";
			indi++;
		}
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				pyt += parametros.get(i).Codigo_python().toString();
				if(i != parametros.size()-1){
					pyt += ",";
				}
				
			}
		}
		pyt += "): \n";
		if(instrucciones !=null) {
			String instru = "";
			for(Instruccion ins: instrucciones) {
				if(ins != null) {
					instru+= ins.Codigo_python().toString();
					instru += "\n";
				}else {
					instru += "pass";
				}
				
			}	
			String [] partes = instru.split("\n");
			 
			 for(String part:partes) {
				 String con_ident ="\t";
				 con_ident += part+"\n";
				 pyt += con_ident;
			 }
		}
		
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
		
		int met = contador;
		dot+="nodo"+(met)+"_met;";
		dot+="nodo"+(met)+"_met"+" [ label =\"METODO "+"\"];\n";
		dot+="nodo"+(met+1)+"_id_met"+" [ label =\""+id.toString()+"\"];\n";
		dot+="nodo"+(met)+"_met"+" ->nodo"+(met+1)+"_id_met;";
		dot+="nodo"+(met)+"_param_m"+" [ label =\"PARAMETROS\"];\n";
		dot+="nodo"+(met)+"_met"+" ->nodo"+(met)+"_param_m;";
		
		if(parametros != null) {
			for(Parametro p_:parametros) {
				
				dot+="nodo"+met+"_param_m"+" ->"+p_.CodigoDot();
				
				
				contador++;
					
			}
		}else {
			contador++;
		}

		dot+="nodo"+(met)+"_instru_met"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(met)+"_met"+" ->nodo"+(met)+"_instru_met;";
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+="nodo"+met+"_instru_met"+" ->"+ins.CodigoDot();
					
				}
			}
		}
		else {
			dot+="nodo"+met+"_instru_met"+" ->"+"nodo"+met+"_null_met;";
			dot+="nodo"+(met)+"_null_met"+" [ label =\"NULL "+"\"];\n";
			
		}
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {
		// TODO Auto-generated method stub
		
		String dot = "";
		
		int met = contador2;
		dot+="nodo"+(met)+"met;";
		dot+="nodo"+(met)+"met"+" [ label =\"Metodo "+id.toString()+" con parametros (";
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				dot += parametros.get(i).dot_flu().toString();
				
				if(i != parametros.size()-1){
					dot += ",";
				}
				
			}
		}
		dot += ")\"];\n";
		dot+="nodo"+(met)+"met"+" ->nodo"+(met)+"_instru_met;";
		
		dot+="nodo"+(met)+"_instru_met"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(met)+"_instru_met"+" ->";
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+=ins.dot_flu();
					
				}
			}
		}
		else {
			dot+="nodo"+met+"_instru_met"+" ->"+"nodo"+met+"_null_met;";
			dot+="nodo"+(met)+"_null_met"+" [ label =\"NULL "+"\"];\n";
			dot+="nodo"+met+"_null_met"+" ->";
		}
		dot+="nodo"+(met)+"_met_f;";
		dot+="nodo"+(met)+"_met_f"+" [ label =\"Fin Metodo \"];\n";
		
		dot+="nodo"+(met)+"met"+" ->";
		contador2++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	

}
