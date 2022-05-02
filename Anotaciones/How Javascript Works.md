# HOW JAVASCRIPT WORKS (From Advanced Javascript Concept Course)

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

Ahora, si combinamos ambas filosofías, nace el "JIT Compiler (Just In Time".

**Web Assembly:** Es un "Standard Binary Executable Format".

**Call Stack:** Es donde se mantiene registro de en que parte de la ejecución del código estamos, y no perder el orden.

**Memory Heap:** Es donde se almacena y escribe información de la ejecución.

**Stack Overflow:** Sobre carga cuando se supera el máximo de tamaño del stack de ejecución.

**Garbage Collection:** Cuando un objeto no es reutilizado, se limpia ese espacio de memoria, se "colecta la basura" y liberar memoria.

**Memory Leak:** Memoria incrementando y nunca limpiandose.

**Single Threaded::** Solo ejecuta un hilo de funciones a la vez (Un solo Call Stack), no múltiples. Javascript es un Single Threaded Language.

-------------------------------------------------------------------



