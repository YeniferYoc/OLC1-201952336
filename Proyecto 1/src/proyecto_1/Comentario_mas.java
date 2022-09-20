package proyecto_1;

public class Comentario_mas implements Instruccion{
	private String contenido;
	public static int contador =0;
	public static int contador2=0;
	public Comentario_mas(String contenido) {
		this.contenido = contenido;
	}
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		contenido = contenido.toString().replace('/', ' ');
		contenido = contenido.toString().replace('*', ' ');
		
			pyt += "\"\"\" "+"\n"+contenido.toString()+"\n";
			pyt += "\"\"\" \n";	
		
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
		
		int comen = contador;
		dot+="nodo"+(comen)+"_com_m;";
		dot+="nodo"+(comen)+"_com_m"+" [ label =\"Comentario "+"\"];\n";
		dot+="nodo"+(comen)+"_id_c_m"+" [ label =\""+contenido.toString()+"\"];\n";
		dot+="nodo"+(comen)+"_com_m"+" ->nodo"+(comen)+"_id_c_m;\n";
		contador++;
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {
		String dot = "";
		
		int comen = contador2;
		dot+="nodo"+(comen)+"_com_m;";
		dot+="nodo"+(comen)+"_com_m"+" [ label =\"Comentario "+contenido.toString()+"\"];\n";
		dot+="nodo"+(comen)+"_com_m"+" ->";
		contador2++;
		
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
}
