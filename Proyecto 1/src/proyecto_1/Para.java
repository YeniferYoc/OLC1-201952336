package proyecto_1;

import java.util.LinkedList;

public class Para implements Instruccion{
	private String id;
	public static int contador =0;
	public static int contador2 =0;
	private Expresion desde, hasta, incremento;
	private LinkedList<Instruccion> instrucciones;
	
	public Para(String id, Expresion desde, Expresion hasta, LinkedList<Instruccion> instrucciones, Expresion incremento) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		this.incremento = incremento;
		this.instrucciones = instrucciones;
		
	}
	public Para(String id, Expresion desde, Expresion hasta,  Expresion incremento) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		this.incremento = incremento;
		
	}
	public Para(String id, Expresion desde, Expresion hasta) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		
		
	}
	public Para(String id, Expresion desde, Expresion hasta, LinkedList<Instruccion> instrucciones) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		this.instrucciones = instrucciones;
		
		
	}
	
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "for "+id.toString()+" in range("+desde.Codigo_python()+", "+hasta.Codigo_python()+",";
		if(incremento == null) {
			pyt += "1):\n";
		}
		
		else{
			pyt += incremento.Codigo_python()+"):\n";
		}
		if(instrucciones != null) {
			String instru = "";
			for(Instruccion instruccion:instrucciones) {
				instru += instruccion.Codigo_python()+"\n";
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
		
		int for_ = contador;
		dot+="nodo"+(for_)+"_for;\n";
		dot+="nodo"+(for_)+"_for"+" [ label =\"PARA "+"\"];\n";
		dot+="nodo"+(for_)+"_cfor"+" [ label =\"Para "+"\"];\n";
		dot+="nodo"+for_+"_for"+" ->"+"nodo"+(for_)+"_cfor;";
		dot+="nodo"+(for_)+"_id_for"+" [ label =\""+id.toString()+"\"];\n";
		dot+="nodo"+(for_)+"_cfor"+" ->nodo"+(for_)+"_id_for;";
		
		dot+="nodo"+(for_)+"_cfor"+" ->"+desde.CodigoDot();
		dot+="nodo"+(for_)+"_cfor"+" ->"+hasta.CodigoDot();
		
		dot+="nodo"+(for_)+"_instru_for"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(for_)+"_for"+" ->nodo"+(for_)+"_instru_for;";
		
		
		if(incremento == null) {
			dot+="nodo"+(for_)+"_inc_for"+" [ label =\"1\"];\n";
			dot+="nodo"+(for_)+"_cfor"+" ->nodo"+(for_)+"_inc_for;";
		}
		
		else{
			dot+="nodo"+(for_)+"_cfor"+" ->"+incremento.CodigoDot();
		}
		
		
		
		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+="nodo"+for_+"_instru_for"+" ->"+ins.CodigoDot();
					
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
		dot+="nodo"+(si_)+"_for;";
		dot+="nodo"+(si_)+"_for"+" [ label =\"PARA "+id+" "+desde.dot_flu()+"\"];\n";
		dot+="nodo"+si_+"_for"+" ->";
		dot+="nodo"+(si_)+"_cond_for;";
		dot+="nodo"+(si_)+"_cond_for"+" [shape=diamond, style=filled, label =\""+id+" < "+hasta.dot_flu()+"\"];\n";
		
		dot+="nodo"+(si_)+"_cond_for"+" ->";

		if(instrucciones != null) {
			for(Instruccion ins:instrucciones) {
				if(ins != null) {
					dot+=ins.dot_flu();
					
				}
			}
		}
		else {
			dot+="nodo"+si_+"_cond_for"+" ->"+"nodo"+si_+"_null_for;";
			dot+="nodo"+(si_)+"_null_for"+" [ label =\"NULL "+"\"];\n";
			dot+="nodo"+si_+"_null_for"+" ->";
		}
		dot+="nodo"+(si_)+"_cond_for;";
		dot+="nodo"+(si_)+"_cond_for"+" ->";

		dot+="nodo"+(si_)+"_for_f;";
		dot+="nodo"+(si_)+"_for_f"+" [ label =\"Fin FOR \"];\n";
		
		
		
		dot+="nodo"+(si_)+"_for_f"+" ->";
		
		
		
		contador2++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	

}