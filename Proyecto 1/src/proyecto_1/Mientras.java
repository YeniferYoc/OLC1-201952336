package proyecto_1;

import java.util.LinkedList;

public class Mientras implements Instruccion{
	private Expresion expresion_log;
	public static int contador=0;
	public static int contador2=0;
	private LinkedList<Instruccion> instrucciones;
	
	public Mientras(Expresion expresion_log, LinkedList<Instruccion> inst) {
		this.expresion_log = expresion_log;
		this.instrucciones = inst;
	}
	public Mientras(Expresion expresion_log) {
		this.expresion_log = expresion_log;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "while "+expresion_log.Codigo_python().toString()+": \n";
		if(instrucciones != null) {
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
		
		int mi_ = contador;
		dot+="nodo"+(mi_)+"_mi;";
		dot+="nodo"+(mi_)+"_mi"+" [ label =\"MIENTRAS "+"\"];\n";
		dot+="nodo"+mi_+"_mi"+" ->"+expresion_log.CodigoDot();
		dot+="nodo"+(mi_)+"_instru"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(mi_)+"_mi"+" ->nodo"+(mi_)+"_instru;";
		
		
		
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+="nodo"+mi_+"_instru"+" ->"+ins.CodigoDot();
					
				}
				contador++;	
			}
		}
		else {
			dot+="nodo"+mi_+"_mi"+" ->"+"nodo"+mi_+"_null_mi;";
			dot+="nodo"+(mi_)+"_null_mi"+" [ label =\"NULL "+"\"];\n";
			contador++;
		}
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {
		String dot = "";
		
		int si_ = contador2;
		dot+="nodo"+(si_)+"_mi;";
		dot+="nodo"+(si_)+"_mi"+" [ label =\"MIENTRAS "+"\"];\n";
		dot+="nodo"+si_+"_mi"+" ->";
		dot+="nodo"+(si_)+"_cond_mi;";
		dot+="nodo"+(si_)+"_cond_mi"+" [shape=diamond, style=filled, label =\""+expresion_log.dot_flu()+"\"];\n";
		
		dot+="nodo"+(si_)+"_cond_mi"+" ->";

		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+=ins.dot_flu();
					
				}
			}
		}
		else {
			dot+="nodo"+si_+"_instru_si"+" ->"+"nodo"+si_+"_null_si;";
			dot+="nodo"+(si_)+"_null_si"+" [ label =\"NULL "+"\"];\n";
			dot+="nodo"+si_+"_null_si"+" ->";
		}
		dot+="nodo"+(si_)+"_mi;";
		
		
		
		
			dot+="nodo"+(si_)+"_cond_mi"+" ->";
			
		
			dot+="nodo"+(si_)+"_mi_f;";
			dot+="nodo"+(si_)+"_mi_f"+" [ label =\"Fin MIENTRAS \"];\n";
		
		
		
		
		dot+="nodo"+(si_)+"_mi"+" ->";
		
		
		
		contador2++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}

}
