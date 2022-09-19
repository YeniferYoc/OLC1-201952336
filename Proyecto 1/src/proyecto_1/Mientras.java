package proyecto_1;

import java.util.LinkedList;

public class Mientras implements Instruccion{
	private Expresion expresion_log;
	public static int contador=0;
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
		for(Instruccion ins: instrucciones) {
			pyt+= ins.Codigo_python().toString();
		pyt += "\n";
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
		
		
		
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+="nodo"+mi_+"_mi"+" ->"+ins.CodigoDot();
					
				}
				contador++;	
			}
		}
		else {
			dot+="nodo"+si_+"_si"+" ->"+"nodo"+si_+"_null;";
			dot+="nodo"+(si_)+"_null"+" [ label =\"NULL "+"\"];\n";
			
		}
		if(o_si_s != null) {
			for(O_si _elif: o_si_s) {
				if(_elif !=null) {
					dot+= "nodo"+si_+"_si"+" ->"+_elif.CodigoDot();
					
				}
			}
		}if(instrucciones_contrario != null) {
			dot+="nodo"+si_+"_si"+" ->"+"nodo"+si_+"_els;";
			dot+="nodo"+(si_)+"_els"+" [ label =\"de_lo_contrario "+"\"];\n";
		
			//System.out.println("entro else");
			for(Instruccion ins_else: instrucciones_contrario) {
				if(ins_else != null) {
					//String instr = "";
					dot+="nodo"+si_+"_els"+" ->"+ins_else.CodigoDot();
				}
				else {
					dot+="nodo"+si_+"_els"+" ->"+"nodo"+si_+"_null_e;";
					dot+="nodo"+(si_)+"_null_e"+" [ label =\"NULL "+"\"];\n";
				}
			}
		}
		contador++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	

}
