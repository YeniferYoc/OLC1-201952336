package proyecto_1;

import java.util.LinkedList;

public class Segun implements Instruccion{
	private Expresion expresion;
	private LinkedList<Caso> casos;
	private LinkedList<Instruccion> contrario;
	public static int contador =0;
	public static int contador2 =0;
	
	public Segun(Expresion expresion, LinkedList<Caso> casos) {
		this.expresion = expresion;
		this.casos = casos;
	}
	public Segun(Expresion expresion, LinkedList<Caso> casos, LinkedList<Instruccion> contrario) {
		this.expresion = expresion;
		this.casos = casos;
		this.contrario = contrario;
	}

	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		int contador = 0;
		for(Caso caso: casos) {
			pyt += caso.Codigo_c(expresion,contador).toString();
			pyt += "\n";
			contador += 1;
		}
		if(contrario != null) {
			pyt += "else: \n";
			String instru = "";
			for(Instruccion ins:contrario) {
				instru += ins.Codigo_python().toString();
			}
			String [] partes = instru.split("\n");
			 
			 for(String part:partes) {
				 String con_ident ="\t";
				 con_ident += part+"\n";
				 pyt += con_ident;
			 }
		}
		pyt +="\n";
		
		
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String CodigoDot() {String dot = "";
	
	int seg_ = contador;
	dot+="nodo"+(seg_)+"_seg;";
	dot+="nodo"+(seg_)+"_seg"+" [ label =\"SEGUN "+"\"];\n";
	dot+="nodo"+seg_+"_seg"+" ->"+expresion.CodigoDot();
	
	if(casos != null) {
		for(Caso cas: casos) {
			if(cas !=null) {
				dot+= "nodo"+seg_+"_seg"+" ->"+cas.CodigoDot();
				
			}
		}
	}if(contrario != null) {
		dot+="nodo"+seg_+"_seg"+" ->"+"nodo"+seg_+"_contra;";
		dot+="nodo"+(seg_)+"_contra"+" [ label =\"de_lo_contrario entonces "+"\"];\n";
	
		//System.out.println("entro else");
		for(Instruccion ins_else: contrario) {
			if(ins_else != null) {
				//String instr = "";
				dot+="nodo"+seg_+"_contra"+" ->"+ins_else.CodigoDot();
			}
			else {
				dot+="nodo"+seg_+"_contra"+" ->"+"nodo"+seg_+"_null_contra;";
				dot+="nodo"+(seg_)+"_null_contra"+" [ label =\"NULL "+"\"];\n";
			}
		}
	}
	contador++;
	//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
	
	return dot;}
	@Override
	public String dot_flu() {
		String dot = "";
		
		int si_ = contador2;
		dot+="nodo"+(si_)+"_se;";
		dot+="nodo"+(si_)+"_se"+" [ shape=diamond, style=filled, label =\"SEGUN "+expresion.dot_flu()+"\"];\n";
		dot+="nodo"+si_+"_se"+" ->";
		
		
		
		
		if(casos != null) {
			
			for(Caso _elif: casos) {
				if(_elif !=null) {
					dot+=_elif.dot_flu();
					
					
				}
			}
			if(contrario != null) {
				dot+="nodo"+(si_)+"_els_s";
				dot+="nodo"+(si_)+"_els_s"+" [ label =\"ELSE "+"\"];\n";
				dot+="nodo"+(si_)+"_els_s"+" ->";
				
				
				for(Instruccion ins_else: contrario) {
					if(ins_else != null) {
						//String instr = "";
						dot+=ins_else.dot_flu();;
						
					}
					
			}
				dot+="nodo"+(si_)+"_els_s_f;";
				dot+="nodo"+(si_)+"_els_s_f"+" [ label =\"Fin else \"];\n";
				dot+="nodo"+(si_)+"_els_s_f ->";
		
		}
			}
			dot+="nodo"+(si_)+"_se_f;";
			dot+="nodo"+(si_)+"_se_f"+" [ label =\"Fin SEGUN \"];\n";
			
		
		
		dot+="nodo"+(si_)+"_se_f"+" ->";
		
		
		
		contador2++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}

}
