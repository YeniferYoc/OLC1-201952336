package proyecto_1;

import java.util.LinkedList;

public class Repetir implements Instruccion{
	private Expresion expresion_log;
	public static int contador = 0;
	public static int contador2 = 0;
	private LinkedList<Instruccion> instrucciones;
	
	public Repetir(LinkedList<Instruccion> inst, Expresion expresion_log) {
		this.expresion_log = expresion_log;
		this.instrucciones = inst;
	}
	public Repetir(Expresion expresion_log) {
		this.expresion_log = expresion_log;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += expresion_log.Codigo_python() +" = True";
		pyt += "while "+expresion_log.Codigo_python()+"== True: \n";
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
		}else {
			pyt += "\tpass \n";
		}
		pyt += "\tif "+expresion_log+" == False: \n ";
		pyt +="\t\tbreak\n";
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
		
		int re_ = contador;
		dot+="nodo"+(re_)+"_re;";
		dot+="nodo"+(re_)+"_re"+" [ label =\"REPETIR "+"\"];\n";
		dot+="nodo"+re_+"_re"+" ->"+expresion_log.CodigoDot();
		dot+="nodo"+(re_)+"_instru_re"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(re_)+"_re"+" ->nodo"+(re_)+"_instru_re;";
		
		
		
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+="nodo"+re_+"_instru_re"+" ->"+ins.CodigoDot();
					
				}
				contador++;	
			}
		}
		else {
			dot+="nodo"+re_+"_re"+" ->"+"nodo"+re_+"_null_mi;";
			dot+="nodo"+(re_)+"_null_mi"+" [ label =\"NULL "+"\"];\n";
			contador++;
		}
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {
		String dot = "";
		
		int si_ = contador2;
		dot+="nodo"+(si_)+"_re;";
		dot+="nodo"+(si_)+"_re"+" [ label =\"REPETIR "+"\"];\n";
		dot+="nodo"+si_+"_re"+" ->";
		
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+=ins.dot_flu();
					
				}
			}
		}
		else {
			dot+="nodo"+si_+"_instru_re"+" ->"+"nodo"+si_+"_null_re;";
			dot+="nodo"+(si_)+"_null_re"+" [ label =\"NULL "+"\"];\n";
			dot+="nodo"+si_+"_null_re"+" ->";
		}
		
		dot+="nodo"+(si_)+"_cond_re;";
		dot+="nodo"+(si_)+"_cond_re"+" [shape=diamond, style=filled, label =\""+expresion_log.dot_flu()+"\"];\n";
		
		dot+="nodo"+(si_)+"_cond_re"+" ->";

		
		dot+="nodo"+(si_)+"_re;";
		
		
		
		
			dot+="nodo"+(si_)+"_cond_re"+" ->";
			
		
			dot+="nodo"+(si_)+"_re_f;";
			dot+="nodo"+(si_)+"_re_f"+" [ label =\"Fin repetir \"];\n";
		
		
		
		
		dot+="nodo"+(si_)+"_re_f"+" ->";
		
		
		
		contador2++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}

}
