package proyecto_1;

public class Comentario implements Instruccion{
	private String contenido;
	public Comentario(String contenido) {
		this.contenido = contenido;
	}
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		
			pyt += "# "+contenido.toString()+"\n";
				
		System.out.println(pyt+" comentario");
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}

