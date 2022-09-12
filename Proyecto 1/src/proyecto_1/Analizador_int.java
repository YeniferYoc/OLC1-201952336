package proyecto_1;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Frame;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.border.EmptyBorder;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.JTextArea;
import java.awt.List;
import java.awt.Menu;
import java.awt.MenuBar;
import java.awt.MenuItem;

import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JMenu;

public class Analizador_int extends JFrame {


	private JPanel prin_aut;
	static String mensaje;
	JTextArea area_autom;
	JLabel e_n_mov;
	
	public Analizador_int() {
		//Frame mi_fr = new Frame();
		
		setTitle("Proyecto 1 OLC1");
		setSize(950,550);
		setLocationRelativeTo(null);
		prin_aut = new JPanel();
		prin_aut.setBackground(new Color(0, 0, 128));
		prin_aut.setBorder(new EmptyBorder(5, 5, 5, 5));
		prin_aut.setLayout(null);
		setContentPane(prin_aut);
		
		
		
		JMenuBar mi_menu=new JMenuBar();
		mi_menu.setFont(new Font("Broadway", Font.PLAIN, 14));
        JMenu m_file = new JMenu("File");
        JMenu m_report=new JMenu("Report");
        JMenu m_view = new JMenu("View");
        JMenuItem open_file=new JMenuItem("Open File");
        JMenuItem save_as=new JMenuItem("Save_as");
        JMenuItem flow=new JMenuItem("Flowchart");
        JMenuItem err=new JMenuItem("Errors");
        JMenuItem user =new JMenuItem("User Manual");
        JMenuItem tec=new JMenuItem("Technical Manual");
        m_file.add(open_file);
        m_file.add(save_as);
        
        m_report.add(flow);
        m_report.add(err);
        
        m_view.add(user);
        m_view.add(tec);
        mi_menu.add(m_file);
        mi_menu.add(m_view);
        mi_menu.add(m_report);
        mi_menu.setBounds(34, 20, 150, 30);
        prin_aut.add(mi_menu);
        area_autom = new JTextArea();
		area_autom.setBounds(34, 169, 841, 250);
		area_autom.setLayout(null);
		//prin_aut.add(area_autom);
		area_autom.setText("//Here is for the code");
		
		JScrollPane scroll = new JScrollPane(area_autom);
		scroll.setBounds(34, 169, 841, 270);
		prin_aut.add(scroll);
        open_file.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
            	System.out.println("ohola");
            	//Creamos el objeto JFileChooser
            	JFileChooser fc=new JFileChooser();
            	//Creamos el filtro
            	FileNameExtensionFilter filtro = new FileNameExtensionFilter("*.olc", "olc");
            	 
            	//Le indicamos el filtro
            	fc.setFileFilter(filtro);
            	 
            	//Abrimos la ventana, guardamos la opcion seleccionada por el usuario
            	int seleccion=fc.showOpenDialog(getContentPane());
            	 
            	//Si el usuario, pincha en aceptar
            	if(seleccion==JFileChooser.APPROVE_OPTION){

               	 
            	    //Seleccionamos el fichero
            	    File fichero=fc.getSelectedFile();
            	    String documento = "";
                    try {
                        BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(fichero), StandardCharsets.UTF_8));
                        //entrada = new FileInputStream(fichero); Comento esto y uso el BufferedReader para indicarle el UTF

                        int ascci;

                        while ((ascci = in.read()) != -1) {
                            char c = (char) ascci;
                            documento += c;
                            area_autom.setText(documento);
                        }

                        in.close();
                    } catch (Exception e1) {
                        e1.printStackTrace();
                    }

            	}
            }
		});
        save_as.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) { 
				JFileChooser guardar = new JFileChooser();
		    guardar.showSaveDialog(null);
		    guardar.setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES);

		    File archivo = guardar.getSelectedFile();

		    try {

		        FileWriter escribir = new FileWriter(archivo, true);
		        escribir.write(area_autom.getText());
		        escribir.close();
		        JOptionPane.showMessageDialog(null, "Guardado con exito");

		    } catch (FileNotFoundException ex) {
		        JOptionPane.showMessageDialog(null, "Error al guardar, ponga nombre al archivo");
		    } catch (IOException ex) {
		        JOptionPane.showMessageDialog(null, "Error al guardar, en la salida");
		    }

		    }
		});
        
        
		
		JLabel e_titulo = new JLabel("OLC1_2S_2022_201952336");
		e_titulo.setForeground(Color.WHITE);
		e_titulo.setFont(new Font("Broadway", Font.BOLD, 17));
		e_titulo.setBounds(607, 20, 285, 51);
		prin_aut.add(e_titulo);
			
		
		JButton ver_golang = new JButton("View code Golang");
		ver_golang.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(e.getSource() == ver_golang) {
					//SE PRESIONA EL BOTON DE INICIAR
					//contador_mov = ((int)Math.pow(2, n_discos__))-1;
					//e_n_mov.setText(Integer.toString(contador_mov));
				}
			}

			
		});
		ver_golang.setFont(new Font("Broadway", Font.PLAIN, 16));
		ver_golang.setBackground(Color.GRAY);
		ver_golang.setBounds(462, 455, 197, 34);
		prin_aut.add(ver_golang);
		
		JButton ver_python = new JButton("View code Python");
		ver_python.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				
			}
		});
		ver_python.setFont(new Font("Broadway", Font.PLAIN, 16));
		ver_python.setBackground(Color.GRAY);
		ver_python.setBounds(678, 455, 197, 34);
		prin_aut.add(ver_python);
		
		 
		
		JLabel n_errores = new JLabel("0 errores");
		n_errores.setForeground(Color.WHITE);
		n_errores.setFont(new Font("Broadway", Font.PLAIN, 16));
		n_errores.setBounds(34, 462, 107, 21);
		prin_aut.add(n_errores);
		
		JButton b_clean = new JButton("Clean");
		b_clean.setBackground(Color.CYAN);
		b_clean.setFont(new Font("Broadway", Font.PLAIN, 14));
		b_clean.setBounds(670, 81, 92, 34);
		prin_aut.add(b_clean);
		
		JButton b_run = new JButton("Run");
		b_run.setBackground(Color.GREEN);
		b_run.setFont(new Font("Broadway", Font.PLAIN, 14));
		b_run.setBounds(783, 81, 92, 34);
		prin_aut.add(b_run);
		
		
		
		
		
	
	}
}
