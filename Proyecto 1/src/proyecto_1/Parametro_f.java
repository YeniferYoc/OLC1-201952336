package proyecto_1;

public class Parametro_f implements Instruccion{
	private Expresion ex;
	public static int contador=0;
	public static int contador2=0;
	
	public Parametro_f(Expresion e) {
		this.ex= e;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += ex.Codigo_python().toString();
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
		int par = contador;
		dot+="nodo"+(par)+"_par;\n";
		dot+="nodo"+(par)+"_par"+" [ label =\"PARAMETRO\"];\n";
		
		dot+="nodo"+(par)+"_par"+" ->"+(ex.CodigoDot())+"\n";
		contador++;
		
		return dot;
	}
	@Override
	public String dot_flu() {
		String dot = "";
		dot += ex.dot_flu().toString();
		
		return dot;
	}
	
	

}
