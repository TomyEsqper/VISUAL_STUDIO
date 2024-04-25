#pido datos
nombre = input("Digite su nombre: ")
promedio = float(input("Digite el promedio de sus actividades realizadas: "))
proyecto = float(input("Digite el valor de su proyecto final: "))
evaluaciones = float(input("Digite el valor de su evaluacion: "))
# hago proceso sacar valor 
Tpromedio = promedio*0.3
Tproyecto = proyecto*0.5
Tevaluacion = evaluaciones*0.2

#saco nota final
notafinal = Tpromedio+Tproyecto+Tevaluacion

print(f"La nota final de algoritmia del estudainte {nombre}, es {notafinal}")