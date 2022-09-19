package proyecto_1;

import java.util.LinkedList;

public class O_si implements Instruccion{
	private Expresion expresion_log;
	private LinkedList<Instruccion> instrucciones_osi;
	public static int contador=0;
	
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
		for(Instruccion ins_if: instrucciones_osi) {
			pyt+= ins_if.Codigo_python();
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
		
		
		
		if(instrucciones_osi != null) {
			for(Instruccion ins:instrucciones_osi) {
				if(ins != null) {
					dot+="nodo"+osi_+"_osi"+" ->"+ins.CodigoDot();
					
				}
				contador++;	
			}
		}else {
			contador++;
		}
		
		return dot;
	}
	

}
