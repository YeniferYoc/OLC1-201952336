package proyecto_1;

import java.util.LinkedList;

public class O_si implements Instruccion{
	private Expresion expresion_log;
	private LinkedList<Instruccion> instrucciones_osi;
	public static int contador=0;
	public static int contador2=0;
	
	public O_si(Expresion expresion_log, LinkedList<Instruccion> inst) {
		this.expresion_log = expresion_log;
		this.instrucciones_osi = inst;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "elif "+expresion_log.Codigo_python().toString()+": \n";
		//System.out.println("***"+pyt);
		String instru = "";
		for(Instruccion ins_if: instrucciones_osi) {
			instru+= ins_if.Codigo_python();
		}
		String [] partes = instru.split("\n");
		 
		 for(String part:partes) {
			 String con_ident ="\t";
			 con_ident += part+"\n";
			 pyt += con_ident;
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
		
		int osi_ = contador;
		dot+="nodo"+(contador)+"_osi;\n";
		dot+="nodo"+(osi_)+"_osi"+" [ label =\"O_SI "+"\"];\n";
		dot+="nodo"+osi_+"_osi"+" ->"+expresion_log.CodigoDot();
		
		dot+="nodo"+(osi_)+"_instru_osi"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(osi_)+"_osi"+" ->nodo"+(osi_)+"_instru_osi;";
		
		
		
		if(instrucciones_osi != null) {
			for(Instruccion ins:instrucciones_osi) {
				if(ins != null) {
					dot+="nodo"+osi_+"_instru_osi"+" ->"+ins.CodigoDot();
					
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
	dot+="nodo"+(si_)+"_osi;";
	dot+="nodo"+(si_)+"_osi"+" [ label =\"O SI "+"\"];\n";
	dot+="nodo"+si_+"_osi"+" ->";
	dot+="nodo"+(si_)+"_cond_osi;";
	dot+="nodo"+(si_)+"_cond_osi"+" [shape=diamond, style=filled, label =\""+expresion_log.dot_flu()+"\"];\n";
	
	dot+="nodo"+(si_)+"_cond_osi"+" ->nodo"+(si_)+"_instru_osi [ label =\"O SI\"];";
	
	dot+="nodo"+(si_)+"_instru_osi"+" [ label =\"INSTRUCCIONES\"];\n";


	dot+="nodo"+(si_)+"_instru_osi"+" ->";
	if(instrucciones_osi != null) {
		for(Instruccion ins:instrucciones_osi) {
			if(ins != null) {
				dot+=ins.dot_flu();
				
			}
		}
	}
	else {
		dot+="nodo"+si_+"_instru_osi"+" ->"+"nodo"+si_+"_null_osi;";
		dot+="nodo"+(si_)+"_null_soi"+" [ label =\"NULL "+"\"];\n";
		dot+="nodo"+si_+"_null_osi"+" ->";
	}
	dot+="nodo"+(si_)+"_osi_f;";
	dot+="nodo"+(si_)+"_osi_f"+" [ label =\"Fin O SI \"];\n";
	dot+="nodo"+(si_)+"_cond_osi"+" ->";
	
	
	
	
	contador2++;
	//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
	
	return dot;
	}
	

}
