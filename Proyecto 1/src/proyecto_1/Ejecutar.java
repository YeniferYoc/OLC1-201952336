package proyecto_1;

import java.util.LinkedList;

public class Ejecutar implements Instruccion{
	private String id;
	private LinkedList<Parametro_f> parametros;
	public static int contador = 0;
	public static int contador2 = 0;
	public Ejecutar(String id) {
		this.id = id;
	}
	public Ejecutar(String id,  LinkedList<Parametro_f> parametros) {
		this.id = id;
		this.parametros = parametros;
	}
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += id+"(";
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				pyt += parametros.get(i).Codigo_python().toString();
				
				if(i != parametros.size()-1){
					pyt += ",";
				}
				
			}
		}
		pyt += ") \n";
		
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String CodigoDot() {
		// TODO Auto-generated method stub
		
		String dot = "";
		
		int eje = contador;
		dot+="nodo"+(eje)+"_eje;";
		dot+="nodo"+(eje)+"_eje"+" [ label =\"Ejecutar "+"\"];\n";
		dot+="nodo"+(eje+1)+"_id_ej"+" [ label =\""+id.toString()+"\"];\n";
		dot+="nodo"+(eje)+"_eje"+" ->nodo"+(eje+1)+"_id_ej;";
		
		dot+="nodo"+(eje)+"_param_ej"+" [ label =\"PARAMETROS\"];\n";
		dot+="nodo"+(eje)+"_eje"+" ->nodo"+(eje)+"_param_ej;";
		
		if(parametros != null) {
			for(Parametro_f p_F:parametros) {
				
				dot+="nodo"+eje+"_param_ej"+" ->"+p_F.CodigoDot();
				
				
				contador++;
					
			}
		}else {
			contador++;
		}
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {
		// TODO Auto-generated method stub
		
		String dot = "";
		
		int eje = contador2;
		dot+="nodo"+(eje)+"_eje;";
		dot+="nodo"+(eje)+"_eje"+" [ label =\"Ejecutar "+id.toString()+" con parametros (";
		
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				dot += parametros.get(i).dot_flu().toString();
				
				if(i != parametros.size()-1){
					dot += ",";
				}
				
			}
		}
		dot += ")\"];\n";
		dot+="nodo"+(eje)+"_eje"+" ->";
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	

}

