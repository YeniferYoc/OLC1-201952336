package proyecto_1;

import java.util.LinkedList;

public class Si implements Instruccion{
	private Expresion expresion_log;
	private LinkedList<Instruccion> instrucciones_si;
	private LinkedList<O_si> o_si_s;
	private LinkedList<Instruccion> instrucciones_contrario;
	
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst) {
		expresion_log = expresion_log;
		instrucciones_si = inst;
	}
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst, LinkedList<Instruccion> inst_else) {
		expresion_log = expresion_log;
		instrucciones_si = inst;
		instrucciones_contrario = inst;
	}
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst, LinkedList<O_si> _osi_s, LinkedList<Instruccion> inst_else) {
		expresion_log = expresion_log;
		instrucciones_si = inst;
		o_si_s = _osi_s;
		instrucciones_contrario = inst_else;
	}
	public Si(Expresion expresion_log, LinkedList<Instruccion> inst, LinkedList<O_si> _osi_s, int n) {
		expresion_log = expresion_log;
		instrucciones_si = inst;
		o_si_s = _osi_s;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "if "+expresion_log.toString()+": \n";
		for(Instruccion ins_if: instrucciones_si) {
			pyt+= ins_if.Codigo_python().toString();
		}
		if(o_si_s != null) {
			for(O_si _elif: o_si_s) {
				pyt+= _elif.Codigo_python().toString();
			}
		}if(instrucciones_contrario != null) {
			pyt += "else: ";
			for(Instruccion ins_else: instrucciones_contrario) {
				pyt+= ins_else.Codigo_python().toString();
			}
		}
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
