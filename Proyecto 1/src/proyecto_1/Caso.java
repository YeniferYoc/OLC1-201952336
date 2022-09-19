package proyecto_1;

import java.util.LinkedList;

public class Caso implements Instruccion{
	private Expresion expresion;
	private LinkedList<Instruccion> instrucciones;
	public static int contador=0;
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
			for(Instruccion instruccion: instrucciones) {
				pyt += instruccion.Codigo_python().toString();
				pyt += "\n";
			}
			
		}else {
		pyt += "if("+expresion_switch.Codigo_python()+"=="+expresion.Codigo_python()+"): \n";
		for(Instruccion instruccion: instrucciones) {
			if(instruccion != null) {

				pyt += instruccion.Codigo_python().toString();
				pyt += "\n";
			}
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

}
