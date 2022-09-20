package proyecto_1;

import java.util.LinkedList;

public class Caso implements Instruccion{
	private Expresion expresion;
	private LinkedList<Instruccion> instrucciones;
	public static int contador=0;
	public static int contador2=0;
	public Caso(Expresion expresion, LinkedList<Instruccion> instrucciones) {
		this.expresion = expresion;
		this.instrucciones= instrucciones;
	}
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		
		
		
		return pyt;
	}
	public String Codigo_c(Expresion expresion_switch, int indice) {
		// TODO Auto-generated method stub
		String pyt = "";
		if(indice != 0) {
			pyt += "elif("+expresion_switch.Codigo_python()+"=="+expresion.Codigo_python()+"): \n";
			String instru = "";
			for(Instruccion instruccion: instrucciones) {
				instru += instruccion.Codigo_python().toString();
				instru += "\n";
			}
			String [] partes = instru.split("\n");
			 
			 for(String part:partes) {
				 String con_ident ="\t";
				 con_ident += part+"\n";
				 pyt += con_ident;
			 }
			
		}else {
		pyt += "if("+expresion_switch.Codigo_python()+"=="+expresion.Codigo_python()+"): \n";
		String instru = "";
		for(Instruccion instruccion: instrucciones) {
			if(instruccion != null) {

				pyt += instruccion.Codigo_python().toString();
				pyt += "\n";
			}
		}
		String [] partes = instru.split("\n");
		 
		 for(String part:partes) {
			 String con_ident ="\t";
			 con_ident += part+"\n";
			 pyt += con_ident;
		 }
		}
		pyt += "\n";
		
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
		
		int cas_ = contador;
		dot+="nodo"+(contador)+"_cas;\n";
		dot+="nodo"+(cas_)+"_cas"+" [ label =\"CASO "+"\"];\n";
		dot+="nodo"+cas_+"_cas"+" ->"+expresion.CodigoDot();
		
		
		
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+="nodo"+cas_+"_cas"+" ->"+ins.CodigoDot();
					
				}
				contador++;	
			}
		}else {
			contador++;
		}
		
		return dot;
	}
	@Override
	public String dot_flu() {
		String dot = "";
	
	int si_ = contador2;
	dot+="nodo"+(si_)+"_caso;";
	dot+="nodo"+(si_)+"_caso"+" [ shape=diamond, style=filled,  label =\"CASO = "+expresion.dot_flu()+"\"];\n";
	dot+="nodo"+si_+"_caso"+" ->";
	
	if(instrucciones != null) {
		for(Instruccion ins:instrucciones) {
			if(ins != null) {
				dot+=ins.dot_flu();
				
			}
		}
	}
	else {
		dot+="nodo"+si_+"_null_caso;";
		dot+="nodo"+(si_)+"_null_caso"+" [ label =\"NULL "+"\"];\n";
		dot+="nodo"+si_+"_null_caso"+" ->";
	}
	dot+="nodo"+(si_)+"_caso_f;";
	dot+="nodo"+(si_)+"_caso_f"+" [ label =\"Fin CASO \"];\n";
	dot+="nodo"+(si_)+"_caso"+" ->";
	
	
	
	
	contador2++;
	//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
	
	return dot;
	}

}
