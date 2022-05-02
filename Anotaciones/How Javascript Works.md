# HOW JAVASCRIPT WORKS (From Advanced Javascript Concept Course)

# INDICE:
* Javascript Engine
* Interpreters and Compilers
* WebAssembly

-------------------------------------------------------------------

## Javascript Engine

Permite que se ejecute, lea y entienda Javascript en una máquina o aplicación, como si fuera un traductor.

V8 en este caso, esta escrito en C++, y dentro del mismo se ve un proceso parecido al siguiente:

    -> JS FILE
    -> Parser
    -> AST (Abstract Syntax Tree) -> Byte Code
    -> Interpreter
    -> Profiler
    -> Compiler
    -> Optimized Code
    -> MACHINE

* Interpreter: Traduce y lee el archivo linea por linea durante la ejecución, interpretándose como Byte Code. Sin embargo, en altas cantidades de archivos por interpretar (e incluso loops), el proceso se hace lento.

* Compiler: Entiende primero toda la ejecución y la transforma en un lenguaje distinto, compilándose como Machine Code.

Ahora, si combinamos ambas filosofías, nace el "Jit Compiler (Just In Time".

-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------