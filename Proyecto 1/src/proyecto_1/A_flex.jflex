package proyecto_1;
import java_cup.runtime.*;


%%



//directrices


%public 
%class Analizador_Lexico
%cupsym Simbolos
%cup
%char
%column
%full
%ignorecase
%line
%unicode


L=[a-zA-Z]
D=[0-9]
espacio=[ ,\t,\r,\n]+





%%
//EXPRESIONES REGULARES 
<YYINITIAL>{(_){L}({L}|{D})*(_)}   {
                    return new Symbol(Simbolos.identificador, yycolumn, yyline, yytext());
                  }
<YYINITIAL>{( "\"" ){L}({L}|{D}|" "|\t|\r|\n)*( "\"" )}   {
                    return new Symbol(Simbolos.cadena, yycolumn, yyline, yytext());
                  }                   
<YYINITIAL>{[\']([^\t\'\"\n]|(\\\")|(\\n)|(\\\')|(\\t))?[\']}   {
                    return new Symbol(Simbolos.caracter, yycolumn, yyline, yytext());
                  }

<YYINITIAL>{{D}+("."{D}+|"")}  {
                    return new Symbol(Simbolos.numero, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>("verdadero"|"falso")  {
                    return new Symbol(Simbolos.boolean, yycolumn, yyline, yytext()); 
                    }                    
                    
                    
                    
//PALABRAS RESERVADAS ----------------------------------------------------
<YYINITIAL>("cadena"|"numero"| "caracter"|"boolean")   {
                   
                    return new Symbol(Simbolos.tipo_dato, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"inicio"   {
                   
                    return new Symbol(Simbolos.pr_inicio, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin"   {
                   
                    return new Symbol(Simbolos.pr_fin, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"potencia"   {
                    return new Symbol(Simbolos.pr_pot, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"mod"  {
                    return new Symbol(Simbolos.pr_mod, yycolumn, yyline, yytext()); 
                    }

<YYINITIAL>"ingresar"   {
                    return new Symbol(Simbolos.pr_ingresar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"como"  {
                    return new Symbol(Simbolos.pr_como, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>"con_valor"   {
                    return new Symbol(Simbolos.pr_convalor, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"si"   {
                    return new Symbol(Simbolos.pr_si, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"entonces"  {
                    return new Symbol(Simbolos.pr_entonces, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>"fin_si"   {
                    return new Symbol(Simbolos.pr_finsi, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"de_lo_contrario"   {
                    return new Symbol(Simbolos.pr_contrario, yycolumn, yyline, yytext());
                  }
                    
<YYINITIAL>"o_si"   {
                    return new Symbol(Simbolos.pr_o_si, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"segun"   {
                    return new Symbol(Simbolos.pr_segun, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hacer"   {
                    return new Symbol(Simbolos.pr_hacer, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"de_lo_contrario_entonces"   {
                    return new Symbol(Simbolos.pr_contra_entonces, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"para"   {
                    return new Symbol(Simbolos.pr_para, yycolumn, yyline, yytext());
                  }                   
                    
<YYINITIAL>"hasta"   {
                    return new Symbol(Simbolos.pr_hasta, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"con_incremental"  {
                    return new Symbol(Simbolos.pr_incremento, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>"mientras"   {
                    return new Symbol(Simbolos.pr_mientras, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_mientras"   {
                    return new Symbol(Simbolos.pr_f_mientras, yycolumn, yyline, yytext());
                  }   
<YYINITIAL>"repetir"   {
                    return new Symbol(Simbolos.pr_repetir, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"hasta_que"  {
                    return new Symbol(Simbolos.pr_hasta, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>"retornar"   {
                    return new Symbol(Simbolos.pr_retornar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"metodo"   {
                    return new Symbol(Simbolos.pr_metodo, yycolumn, yyline, yytext());
                  }               
                    
<YYINITIAL>"fin_metodo"   {
                    return new Symbol(Simbolos.pr_f_metodo, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"funcion"   {
                    return new Symbol(Simbolos.pr_funcion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_funcion"   {
                    return new Symbol(Simbolos.pr_f_funcion, yycolumn, yyline, yytext());
                  }                   
<YYINITIAL>"ejecutar"   {
                    return new Symbol(Simbolos.pr_ejecutar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"imprimir"  {
                    return new Symbol(Simbolos.pr_imprimir, yycolumn, yyline, yytext()); 
                    }






//SIMBOLOS ----------------------------------------------------

<YYINITIAL>"+"   {
                   
                    return new Symbol(Simbolos.s_suma, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"-"   {
                    return new Symbol(Simbolos.s_resta, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"*"   {
                    return new Symbol(Simbolos.s_mult, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"/"   {
                    return new Symbol(Simbolos.s_div, yycolumn, yyline, yytext());
                  }

<YYINITIAL>","   {
                    return new Symbol(Simbolos.s_coma, yycolumn, yyline, yytext());
                  }

                    
<YYINITIAL>"("   {
                    return new Symbol(Simbolos.par_a, yycolumn, yyline, yytext());
                  }
<YYINITIAL>")"   {
                    return new Symbol(Simbolos.par_c, yycolumn, yyline, yytext());
                  }

<YYINITIAL>";"   {
                    return new Symbol(Simbolos.s_puntoComa, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"->"  {
                    return new Symbol(Simbolos.s_asignacion, yycolumn, yyline, yytext()); 
                    }
<YYINITIAL>"¿"   {
                    return new Symbol(Simbolos.s_interrogacion_a, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"?"  {
                    return new Symbol(Simbolos.s_interrogacion_c, yycolumn, yyline, yytext()); 
                    }                    
<YYINITIAL>"="  {
                    return new Symbol(Simbolos.s_igual, yycolumn, yyline, yytext()); 
                    }                    
                    


//COMENTARIOS -------------------------------------------------------------

<YYINITIAL>{("//")("/")*}  {
                    return new Symbol(Simbolos.comen_linea, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>{("/*")("*")*}   {
                    return new Symbol(Simbolos.comen_m_linea_a, yycolumn, yyline, yytext());
                  }
<YYINITIAL>{("*")("*")*("/")("/")*}   {
                    return new Symbol(Simbolos.comen_m_linea_c, yycolumn, yyline, yytext());
                  }



             


[ \t\r\n\f]         {  /*este es un comentario en java, omitirlos*/ }


.                   { System.out.println("Error Lexico : "+yytext()+"Linea"+(yyline+1)+" Columna "+yycolumn);    

}
