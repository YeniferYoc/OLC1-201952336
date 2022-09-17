package proyecto_1;

public class Comentario_mas implements Instruccion{
	private String contenido;
	public Comentario_mas(String contenido) {
		this.contenido = contenido;
	}
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		
			pyt += "\"\"\" "+contenido.toString()+"\n";
			pyt += "\"\"\" ";	
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
