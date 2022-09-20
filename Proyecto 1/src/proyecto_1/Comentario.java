package proyecto_1;

public class Comentario implements Instruccion{
	private String contenido;
	public static int contador=0;
	public static int contador2=0;
	public Comentario(String contenido) {
		this.contenido = contenido;
	}
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
			contenido = contenido.toString().replace('/', '#');
			pyt += contenido.toString()+"\n";
				
		//System.out.println(pyt+" comentario");
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
		dot+="nodo"+(comen)+"_com;";
		dot+="nodo"+(comen)+"_com"+" [ label =\"Comentario "+"\"];\n";
		dot+="nodo"+(comen)+"_id_c"+" [ label =\""+contenido.toString()+"\"];\n";
		dot+="nodo"+(comen)+"_com"+" ->nodo"+(comen)+"_id_c;\n";
		contador++;
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}

	@Override
	public String dot_flu() {
		String dot = "";
		
		int comen = contador2;
		dot+="nodo"+(comen)+"_com;";
		dot+="nodo"+(comen)+"_com"+" [ label =\"Comentario "+contenido.toString()+"\"];\n";
		dot+="nodo"+(comen)+"_com ->";
		contador2++;
		
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}

}

