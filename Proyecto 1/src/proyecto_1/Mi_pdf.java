package proyecto_1;
import java.io.FileOutputStream;
import java.io.IOException;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;
public class Mi_pdf {
    /**
     * Crea un documento con encabezado y conteo de
     * paginas, para este ejemplo se crean 100 paginas
     * @param filename Nombre del archivo
     */
    public void createPdf(String filename) throws IOException, DocumentException
    {        
        Document document = new Document(PageSize.LETTER , 36, 36, 54, 36);
        Paragraph parrafo, parrafo2, parrafo3;
        Image imagen = Image.getInstance("diagrama.png");       
        
        PdfWriter.getInstance(document, new FileOutputStream("diagrama.pdf"));

        document.open();
        
        //Creamos una cantidad significativa de paginas para probar el encabezado
       

        imagen.setAlignment(Element.ALIGN_CENTER);

        document.add(imagen);
              
        document.close();    

}
    static public void main(String[] args)
    {
        Mi_pdf doc = new Mi_pdf();
        
        try{
            // Creamos el documento Pdf
            doc.createPdf("do.pdf");
            
        }catch(DocumentException ed)
        {
            System.err.println("Error al crear el documento Pdf");
        }
        catch(IOException ex)
        {
            System.err.println("Error General de Entrada/Salida");
        }
      
}
}
