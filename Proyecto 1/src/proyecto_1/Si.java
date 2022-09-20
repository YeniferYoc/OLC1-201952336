package proyecto_1;

import java.util.LinkedList;

public class Si implements Instruccion{
	private Expresion expresion_log;
	private LinkedList<Instruccion> instrucciones_si;
	private LinkedList<O_si> o_si_s;
	private LinkedList<Instruccion> instrucciones_contrario;
	public static int contador = 0;
	public static int contador2 = 0;
	
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst) {
		this.expresion_log = expresion_log;
		this.instrucciones_si = inst;
	}
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst, LinkedList<Instruccion> inst_else) {
		this.expresion_log = expresion_log;
		this.instrucciones_si = inst;
		this.instrucciones_contrario = inst_else;
	}
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst, LinkedList<O_si> _osi_s, LinkedList<Instruccion> inst_else) {
		this.expresion_log = expresion_log;
		this.instrucciones_si = inst;
		this.o_si_s = _osi_s;
		this.instrucciones_contrario = inst_else;
	}
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst, LinkedList<O_si> _osi_s, int n) {
		this.expresion_log = expresion_log;
		this.instrucciones_si = inst;
		this.o_si_s = _osi_s;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "if "+expresion_log.Codigo_python().toString()+": \n";
		//System.out.println("ddddddddddddd"+pyt);
		if(instrucciones_si != null){
			String instru = "";
			for(Instruccion ins_if: instrucciones_si) {
			//	System.out.println(ins_if);
				if(ins_if != null) {
					instru+= ins_if.Codigo_python().toString();
					
				}
			}
			String [] partes = instru.split("\n");
			 
			 for(String part:partes) {
				 String con_ident ="\t";
				 con_ident += part+"\n";
				 pyt += con_ident;
			 }
			
			}else {
				pyt += "\tpass";
			}
	
		if(o_si_s != null) {
			//String instru = "";
			for(O_si _elif: o_si_s) {
				if(_elif !=null) {
					pyt+= _elif.Codigo_python().toString();
					
				}
				//else {la queite recien
					//pyt += "pass";
				//}
			}
			/*String [] partes = instru.split("\n");
			 boolean primera = false;
			 for(String part:partes) {
				 if(primera == false) {
					 primera = true;
				 }else {
					 String con_ident ="\t";
					 con_ident += part+"\n";
					 pyt += con_ident; 
				 }
				 
			 }*/
		}if(instrucciones_contrario != null) {
			pyt += "else: \n";
			String instru = "";
			//System.out.println("entro else");
			for(Instruccion ins_else: instrucciones_contrario) {
				
				if(ins_else != null) {
					//String instr = "";
					//pyt+= ins_else.Codigo_python().toString();
					instru +=ins_else.Codigo_python().toString();;
					//System.out.println(instr);
				}
				else {
					pyt += "\tpass\n";
				}
				
			}
			String [] partes = instru.split("\n");
			 
			 for(String part:partes) {
				 String con_ident ="\t";
				 con_ident += part+"\n";
				 pyt += con_ident;
			 }
		}
		//System.out.println("consola");
		//System.out.println(pyt);
		//System.out.println("fin consola if");
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
		
		int si_ = contador;
		dot+="nodo"+(si_)+"_si;";
		dot+="nodo"+(si_)+"_si"+" [ label =\"SI "+"\"];\n";
		dot+="nodo"+si_+"_si"+" ->"+expresion_log.CodigoDot();
		
		dot+="nodo"+(si_)+"_instru_si"+" [ label =\"INSTRUCCIONES\"];\n";
		dot+="nodo"+(si_)+"_si"+" ->nodo"+(si_)+"_instru_si;";
		
		
		
		if(instrucciones_si != null) {
			for(Instruccion ins:instrucciones_si) {
				if(ins != null) {
					dot+="nodo"+si_+"_instru_si"+" ->"+ins.CodigoDot();
					
				}
				contador++;	
			}
		}
		else {
			dot+="nodo"+si_+"_instru_si"+" ->"+"nodo"+si_+"_null;";
			dot+="nodo"+(si_)+"_null"+" [ label =\"NULL "+"\"];\n";
			
		}
		if(o_si_s != null) {
			for(O_si _elif: o_si_s) {
				if(_elif !=null) {
					dot+= "nodo"+si_+"_instru_si"+" ->"+_elif.CodigoDot();
					
				}
			}
		}if(instrucciones_contrario != null) {
			dot+="nodo"+si_+"_instru_si"+" ->"+"nodo"+si_+"_els;";
			dot+="nodo"+(si_)+"_els"+" [ label =\"de_lo_contrario "+"\"];\n";
			dot+="nodo"+(si_)+"_instru_els"+" [ label =\"INSTRUCCIONES\"];\n";
			dot+="nodo"+(si_)+"_els"+" ->nodo"+(si_)+"_instru_els;";
			
			
			//System.out.println("entro else");
			for(Instruccion ins_else: instrucciones_contrario) {
				if(ins_else != null) {
					//String instr = "";
					dot+="nodo"+si_+"_instru_els"+" ->"+ins_else.CodigoDot();
					
				}
				else {
					dot+="nodo"+si_+"_instru_els"+" ->"+"nodo"+si_+"_null_e;";
					dot+="nodo"+(si_)+"_null_e"+" [ label =\"NULL "+"\"];\n";
				}
			}
		}
		contador++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {
		String dot = "";
		
		int si_ = contador2;
		dot+="nodo"+(si_)+"_si;";
		dot+="nodo"+(si_)+"_si"+" [ label =\"SI "+"\"];\n";
		dot+="nodo"+si_+"_si"+" ->";
		dot+="nodo"+(si_)+"_cond_si;";
		dot+="nodo"+(si_)+"_cond_si"+" [shape=diamond, style=filled, label =\""+expresion_log.dot_flu()+"\"];\n";
		
		dot+="nodo"+(si_)+"_cond_si"+" ->";

		if(instrucciones_si != null) {
			for(Instruccion ins:instrucciones_si) {
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
		dot+="nodo"+(si_)+"_si_f;";
		dot+="nodo"+(si_)+"_si_f"+" [ label =\"Fin SI \"];\n";
		
		
		
		if(o_si_s != null) {
			dot+="nodo"+(si_)+"_cond_si"+" ->";
			
			for(O_si _elif: o_si_s) {
				if(_elif !=null) {
					dot+=_elif.dot_flu();
					
					
				}
			}
		
		}
		dot+="nodo"+(si_)+"_els";
		dot+="nodo"+(si_)+"_els"+" [ label =\"ELSE "+"\"];\n";
		if(o_si_s == null && instrucciones_contrario != null) {
			dot+="nodo"+(si_)+"_cond_si"+" ->";
			
		}
		if(instrucciones_contrario != null) {
			dot += "nodo"+(si_)+"_els";
			dot+="nodo"+(si_)+"_els"+" ->";
			
			
			for(Instruccion ins_else: instrucciones_contrario) {
				if(ins_else != null) {
					//String instr = "";
					dot+=ins_else.dot_flu();;
					
				}
				
					
				
			}
			dot+="nodo"+(si_)+"_els_f;";
			dot+="nodo"+(si_)+"_els_f"+" [ label =\"Fin else \"];\n";
		
		}
		
		
		dot+="nodo"+(si_)+"_si"+" ->";
		
		
		
		contador2++;
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}

}
