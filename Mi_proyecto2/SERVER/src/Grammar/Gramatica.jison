

%lex 


%options case-insensitive


%%

\s+											// se ignoran espacios en blanco
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas

//palabras reservadas
"if"          return 'pr_si'
"else"          return 'pr_contrario'
"elif"          return 'pr_elif'
"print"          return 'pr_imprimir'
"println"          return 'pr_imprimir_ln'
"switch"          return 'pr_switch'
"case"          return 'pr_case'
"break"          return 'pr_break'
"while"          return 'pr_while'
"for"          return 'pr_for'
"do"          return 'pr_do'
"until"          return 'pr_until'
"return"          return 'pr_retorno'
"tolower"             return 'pr_minuscula'
"toupper"             return 'pr_mayuscula'
"round"             return 'pr_redondear'
"void"              return 'pr_void'
"length"            return 'pr_longi'
"typeof"            return 'pr_tipo'
"tostring"            return 'pr_a_cadena'
"tochararray"            return 'pr_arreglo'
"push"            return 'pr_push'
"pop"               return 'pr_pop'
"run"               return 'pr_run'


//tipos de datos 
"int"              return 'pr_int'
"double"              return 'pr_double'
"boolean"              return 'pr_boolean'
"char"              return 'pr_char'
"string"              return 'pr_string'
"true"              return 'pr_true'
"false"              return 'pr_false'
"new"              return 'pr_new'

//signos de escape
"\n"              return 'salto de linea'
"\\"              return 'doble_b'
"\""              return 'com_barra'
"\t"              return 'tab'
"\'"              return 'simple_barra'

//aritmeticos
"+"              return 'suma'
"++"              return 'incre'
"-"              return 'resta'
"--"              return 'decre'
"*"              return 'mult'
"/"              return 'div'
"^"              return 'pot'
"%"              return 'mod'

//relacionales
"="             return 'igual'
">"             return 'mayor'
"<"             return 'menor'
">="             return 'mayor_igual'
"<="             return 'menor_igual'
"=="             return 'igual_igual'
"!="             return 'no_igual'
"?"             return 'interrogacion_cierra'

//logicos
"||"             return 'or'
"&&"             return 'and'
"!"             return 'not'

//agrupacion
";"             return 'punto_c'
":"             return 'dos_puntos'
"{"             return 'llave_abre'
"}"             return 'llave_cierra'
"("             return 'par_abre'
")"             return 'par_cierra'
"["             return 'cor_abre'
"]"             return 'cor_cierra'
"+="				return 'O_MAS';
"-="				return 'O_MENOS';
"*="				return 'O_POR';
"/="				return 'O_DIVIDIDO';


\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'cadena'; }
[0-9]+("."[0-9]+)?\b  	return 'decimal';
[0-9]+\b				return 'entero';
([a-zA-Z])[a-zA-Z0-9_]*	return 'identificador';

"\'\$""\{"[0-9]+"\}\'"|'{L}' return 'caracter'
<<EOF>>				return 'EOF';
.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex



%{
	const TIPO_OPERACION	= require('./instrucciones').TIPO_OPERACION;
	const TIPO_VALOR 		= require('./instrucciones').TIPO_VALOR;
	const TIPO_DATO			= require('./tabla_simbolos').TIPO_DATO; //para jalar el tipo de dato
	const instruccionesAPI	= require('./instrucciones').instruccionesAPI;
%}





//PRECEDENCIA 
%left '+'
%left '^' '-'
%left '*' '/'
%left '%'
%left UMENOS
%left '=='
%left '!=' '>='
%left '<=' '>'
%left '<' '||'
%left '&&'
%right '!'


%start Init

%%

Init    
    : INSTRUCCIONES EOF  {  return $1;  }
;

INSTRUCCIONES
    : INSTRUCCIONES INSTRUCCION  { $1.push($2); $$ = $1; }
    | INSTRUCCION               { $$ = [$1];            }
;

INSTRUCCION
    : BLOQUE                {  $$ = $1;  }
    | DECLARACION             ';' {  $$ = $1;  }¿
    | ASIGNACION        ';' {  $$ = $1;  }
    | INCREDECRE        ';' {  $$ = $1;  }
    | PRINT          ';' {  $$ = $1;  }
    | PARSEO          ';' {  $$ = $1;  }
    | ARRAY          ';' {  $$ = $1;  }
    | MATRIZ          ';' {  $$ = $1;  }
    | ACCESO_ARRAY          ';' {  $$ = $1;  }
    | ACCESO_MATRIZ          ';' {  $$ = $1;  }
    | IF                 {  $$ = $1;  }
    | SEGUN          ';' {  $$ = $1;  }
    | MIENTRAS              {  $$ = $1;  }
    | PARA                   {  $$ = $1;  }
    | DOWHILE           ';' {  $$ = $1;  }
    | DOUNTIL          ';' {  $$ = $1;  }
    | OP_TERNARIO       ';' {  $$ = $1;  }
    | FUNCION               {  $$ = $1;  }
    | LLAMADA       ';' {  $$ = $1;  }
    | TOCHAR ';' {  $$ = $1;  }
    | TOLOWER          ';' {  $$ = $1;  }
    | TOUPPER          ';' {  $$ = $1;  }
    | TOSTRING          ';' {  $$ = $1;  }
    | ROUND          ';' {  $$ = $1;  }
    | LENGTH          ';' {  $$ = $1;  }
    | TYPEOF          ';' {  $$ = $1;  }
    | ARRAY_PQ      ';' {  $$ = $1;  }
    | RUN          ';' {  $$ = $1;  }
    | error            ';'  {  
                                console.log("error sintactico en linea " + (yylineno+1) );
                                //colocar el siguiente codigo en el archivo grammar.js en el= if(!recovering) como penultima instruccion
                                //let s=Singleton.getInstance();
                                //s.add_error(new error("Sintactico", `El caracter ${(this.terminals_[symbol] || symbol)} no se esperaba en esta posicion`, yyloc.last_line, yyloc.last_column+1))                  
                            } 
;



//DECLARACION --------------------------------------------------------------------------------------------------

DECLARACION
    : TIPOS LISTAIDS igual expresion punto_c { $$ = new Declaracion($2, $1, $4, @1.first_line, @1.first_column ); }
    | TIPOS LISTAIDS punto_c { $$ = new Declaracion($2, $1, null , @1.first_line, @1.first_column); }
;        
    
//ASIGANACION --------------------------------------------------------------------------------------------------

ASIGNACION
    : LISTAIDS '=' expresion { $$ = new Asignacion($1, $3, @1.first_line, @1.first_column);  }
;

//PARSEO --------------------------------------------------------------------------------------------------

PARSEO
    : par_abre TIPO par_cierra expresion punto_c { $$ = new Parseo($2, $4 ); }
;
//ARRAY --------------------------------------------------------------------------------------------------

ARRAY
    : TIPOS cor_abre cor_cierra identificador  igual pr_new TIPOS cor_abre expresion cor_cierra punto_c { $$ = new Vector($4, $1,$7 ,$9, @1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra identificador  igual pr_new TIPOS llave_abre lista_valores llave_cierra punto_c { $$ = new Vector($4, $1, $7,$9, @1.first_line, @1.first_column  ); }
;  
//ARRAY --------------------------------------------------------------------------------------------------

MATRIZ
    : TIPOS cor_abre cor_cierra cor_abre cor_cierra identificador  igual pr_new TIPOS cor_abre expresion cor_cierra cor_abre expresion cor_cierra punto_c { $$ = new Matriz($6, $1, $10,$12, $14 ); }
    |TIPOS cor_abre cor_cierra cor_abre cor_cierra identificador  igual pr_new TIPOS llave_abre expresion llave_cierra punto_c { $$ = new Matriz($6, $1,$10 ,$12, null ); }
; 


ACCESO_ARRAY
    : identificador cor_abre expresion cor_cierra  igual expresion  { $$=new Acceso_arr($1, $3  , $6, true, @1.first_line, @1.first_column); }
;
ACCESO_MATRIZ
    : identificador cor_abre expresion cor_cierra cor_abre expresion cor_cierra  igual expresion  { $$=new Acceso_arr($1, $3  , $6,$9, true, @1.first_line, @1.first_column); }
;

//IF----------------------------------------------------------------------------------------------------
IF
        :pr_si par_abre expresion par_cierra  BLOQUE  {$$ = new Si($3, $5, null, false, null, false) ;}
	|pr_si par_abre expresion par_cierra  BLOQUE  pr_contrario  BLOQUE   {$$ = new Si($3, $5,null, false, $7, true) ;}
	|pr_si par_abre expresion par_cierra  BLOQUE  O_SIS pr_contrario  BLOQUE  {$$ = new Si($3, $5,$6, true, $8, true) ;}
	|pr_si  par_abre expresion par_cierra BLOQUE   O_SIS   {$$ = new Si($3, $5,$6, true, null, false) ;}
;
//segun---------------------------------------------------------------------------------------------------------------------
SEGUN
	:pr_segun par_abre expresion par_cierra llave_abre  default dos_puntos BLOQUE llave_cierra {$$ = new Segun($3, null, false, $7, true) ;}
	|pr_segun par_abre expresion par_cierra  llave_abre CASOS default dos_puntos BLOQUE llave_cierra {$$ = new Segun($3, $6, true, $9, true) ;}
        |pr_segun par_abre expresion par_cierra llave_abre  CASOS llave_cierra {$$ = new Segun($3, $6, true, null, false) ;}
;
//MIENTRAS---------------------------------------------------------------------------------------------------------------------
MIENTRAS	
	:pr_while par_abre expresion par_cierra  BLOQUE  {$$ = new Mientras($3, $6) ;}
;	

//FOR-------------------------------------------------------------------------------------------------------------------------
PARA
    : pr_for par_abre DECLARACION_PARA punto_c expresion punto_c ITERADOR par_cierra BLOQUE { $$=new InstFor($3, $5, $7 , $9, @1.first_line, @1.first_column );   }
;

DECLARACION_PARA 
    : DECLARACION        { $$=$1; } 
    | ASIGNACION { $$=$1; } 
;

ITERADOR
    : ASIGNACION  { $$=$1; }
    | INCREDECRE  { $$=$1; }
   ;


DOWHILE
    : pr_do BLOQUE pr_while par_abre expresion par_cierra  {  $$ = new DoWhile($5, $2, @1.first_line, @1.first_column);    }
;
DOUNTIL
    : pr_do BLOQUE pr_until par_abre expresion par_cierra  {  $$ = new DoUntil($5, $2, @1.first_line, @1.first_column);    }
;


IMPRIMIR 
    : pr_imprimir '(' expresion ')'  { $$ = new Imprimir($3  , @1.first_line, @1.first_column); }
    | pr_imprimir '('      ')'  { $$ = new Imprimir(null, @1.first_line, @1.first_column); }
    |pr_imprimir_ln '(' expresion ')'  { $$ = new Imprimir_nl($3  , @1.first_line, @1.first_column); }
    | pr_imprimir_ln '('      ')'  { $$ = new Imprimir_nl(null, @1.first_line, @1.first_column); }
;





/* --------------------------------------- funcion   -------------------------------------  */

FUNCION
    : identificador '('            ')'      dos_puntos  TIPOS      BLOQUE { $$ = new Funcion($1, $6, [], $5, @1.first_line, @1.first_column); }
    | identificador '(' PARAMETROS ')'     dos_puntos TIPOS         BLOQUE { $$ = new Funcion($1, $6, $3, $5, @1.first_line, @1.first_column); }
    | identificador '('            ')' ':' pr_void BLOQUE { $$ = new Funcion($1, $7, [], "void", @1.first_line, @1.first_column); }
    | identificador '(' PARAMETROS ')' ':' pr_void BLOQUE { $$ = new Funcion($1, $7, $3, "void", @1.first_line, @1.first_column); }
;
LISTAIDS
    : LISTAIDS ',' identificador   { $1.push($3); $$ = $1;  }
    |                identificador { $$ = [$1];             }
;
PARAMETROS
    : PARAMETROS ',' identificador ':' TIPOS  { $1.push($3+","+$5); $$ = $1;  }
    |                identificador ':' TIPOS  { $$ = [$1+","+$3];             }
;

TIPOS
    : pr_int { $$=$1; }
    | pr_string  { $$=$1; }
    | pr_double  { $$=$1; }
    | pr_char  { $$=$1; }
    | pr_boolean  { $$=$1; }
;

LLAMADA
    : identificador '('                        ')' { $$ = new LLAMADA($1, [], @1.first_line, @1.first_column);  }
    | identificador '(' PARAMETROS_LLAMADA ')' { $$ = new LLAMADA($1, $3, @1.first_line, @1.first_column);  }
;

PARAMETROS_LLAMADA 
    : PARAMETROS_LLAMADA ',' expresion  {    $1.push($3);    $$ = $1;   }
    |                            expresion  {    $$ = [$1];                 }
;    

TOLOWER
    : pr_minuscula '('       expresion   ')' { $$ = new To_lower($3, @1.first_line, @1.first_column);  }
   ;
TOUPPER
    : pr_mayuscula '('       expresion   ')' { $$ = new To_upper($3, @1.first_line, @1.first_column);  }
   ;

ROUND
    : pr_redondear '('       expresion   ')' { $$ = new Redondear($3,  @1.first_line, @1.first_column);  }
   ;
LENGTH
    : pr_longi '('       expresion   ')' { $$ = new Longitud($3,  @1.first_line, @1.first_column);  }
   ;
TYPEOF
    : pr_tipo '('       expresion   ')' { $$ = new Tipo($3, @1.first_line, @1.first_column);  }
   ;

TOSTRING
    : pr_a_cadena '('       expresion   ')' { $$ = new To_string($3,@1.first_line, @1.first_column);  }
   ;

TOCHAR
    : pr_arreglo '('       expresion   ')' punto_c { $$ = new To_arr($3,  @1.first_line, @1.first_column);  }
   ;
ARRAY_PQ
    : identificador '.' pr_push '(' Expresion ')'                        { $$=new Arreglo_mod($1 , $5  , true ,false, @1.first_line, @1.first_column); }
    | identificador '.' pr_pop  '(' ')'                             { $$=new Arreglo_mod($1, null, false,true , @1.first_line, @1.first_column); }
    | ID              '=' '[' CALLFUNCION_PARAMETROS ']'  { $$=new ArregloAsignacion($1, $4  , null, null, @1.first_line, @1.first_column); }
    | ID '[' Expresion ']' '='  Expresion                           { $$=new ArregloAsignacion($1, null, $3  , $6  , @1.first_line, @1.first_column); }
;

RUN
    : pr_run identificador par_abre par_cierra punto_c { $$=new Run($1, [], @1.first_line, @1.first_column); }
    | pr_run identificador '(' PARAMETROS_LLAMADA ')' { $$ = new RUN($1, $3, @1.first_line, @1.first_column);  }
;
//bloque------------------------------------------------------------

BLOQUE
    : '{' INSTRUCCIONES '}' { $$ = new Instruccion($2         , @1.first_line, @1.first_column); }
    | '{'              '}' { $$ = new Instruccion(new Array(), @1.first_line, @1.first_column); }
;






/*--------------------------------   Expresion -------------------------------------------*/

expresion 
    : '-'  expresion %prec UMENOS { $$ = new Operacion($2, $2, Tipo.NEGACION,        @1.first_line, @1.first_column); }       
    | identificador  '++'               { $$ = new IncreDecre(I_derecha.INCREMENTO1, $1, @1.first_line, @1.first_column); } 
    | '++' identificador                { $$ = new IncreDecre(I_izquierda.INCREMENTO2, $2, @2.first_line, @2.first_column); } 
    | identificador  '--'               { $$ = new IncreDecre(I_dd.DECREMENTO1, $1, @1.first_line, @1.first_column); } 
    | '--' identificador                { $$ = new IncreDecre(I_di.DECREMENTO2, $2, @2.first_line, @2.first_column); } 
    | expresion '+'  expresion { $$ = new Operacion($1, $3, Tipo.MAS            , @2.first_line, @2.first_column); }       
    | expresion '-' expresion { $$ = new Operacion($1, $3, Tipo.MENOS          , @2.first_line, @2.first_column); }
    | expresion '*'  expresion { $$ = new Operacion($1, $3, Tipo.MULTIPLICACION , @2.first_line, @2.first_column); }       
    | expresion '/'  expresion { $$ = new Operacion($1, $3, Tipo.DIV            , @2.first_line, @2.first_column); }
    | expresion '%'  expresion { $$ = new Operacion($1, $3, Tipo.MODULO         , @2.first_line, @2.first_column); }
    | expresion '^' expresion { $$ = new Operacion($1, $3, Tipo.POT            , @2.first_line, @2.first_column); }
    | expresion '<'  expresion { $$ = new Operacion($1, $3, Tipo.MENOR          , @2.first_line, @2.first_column); }
    | expresion '<=' expresion { $$ = new Operacion($1, $3, Tipo.MENORIGUAL     , @2.first_line, @2.first_column); }
    | expresion '>'  expresion { $$ = new Operacion($1, $3, Tipo.MAYOR          , @2.first_line, @2.first_column); }
    | expresion '>=' expresion { $$ = new Operacion($1, $3, Tipo.MAYORIGUAL     , @2.first_line, @2.first_column); }
    | expresion '==' expresion { $$ = new Operacion($1, $3, Tipo.IGUAL          , @2.first_line, @2.first_column); }
    | expresion '!=' expresion { $$ = new Operacion($1, $3, Tipo.DIFERENCIACION , @2.first_line, @2.first_column); }
    | expresion '&&' expresion { $$ = new Operacion($1, $3,Tipo.AND  , @2.first_line, @2.first_column); }
    | expresion '||' expresion { $$ = new Operacion($1, $3,Tipo.OR   , @2.first_line, @2.first_column); }
    | '!' expresion       { $$ = new Operacion($2, $2,Tipo.NOT  , @1.first_line, @1.first_column); }
    | tip  {  $$ = $1; }
    | identificador '['  expresion ']'           { $$= new Acceso_arr($1,true ,true ,$3  ,@1.first_line, @1.first_column); }
;

tip   
    : '(' expresion ')'  {  $$ = $2; } 
    | entero      {  $$ = new Variable($1,                   Type.NUMBER , @1.first_line, @1.first_column); }
    | decimal         {  $$ = new Variable($1,                   Type.NUMBER , @1.first_line, @1.first_column); }
    | cadena        {  $$ = new Variable($1.replace(/\"/g,""), Type.STRING , @1.first_line, @1.first_column); }
    | caracter       {  $$ = new Variable($1.replace(/\'/g,""), Type.CHAR , @1.first_line, @1.first_column); }
    | true          {  $$ = new Variable($1,                   Type.BOOLEAN, @1.first_line, @1.first_column); }
    | false         {  $$ = new Variable($1,                   Type.BOOLEAN, @1.first_line, @1.first_column); }
    | identificador            {  $$ = new Acceso($1,@1.first_line, @1.first_column);  }
;
