#defino variables
sueldo = 2000000
tcomisiones = 0
comisiones = 500
ventas = 0
total = 0
#pido datos
nombre = str(input("Nombre del verdedor"))
ventas = int(input("Digite cantidad de ventas"))
#hago debidas operaciones
tcomisiones = ventas*comisiones
total = tcomisiones+sueldo

print(f"el vendedor {nombre}, tiene un sueldo de {sueldo}, durante el mes obtuvo una comision de {tcomisiones} y el valor final a pagar es {total}")
