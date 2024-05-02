#pedir valores
prestamoBanco=0
montoTotal=int(input("Digite el monto total de la compra:"))
#tomar una decision yrealizar su debida operacion
if montoTotal>500000:
    dineroPropio=montoTotal*0.55
    prestamoBanco=montoTotal*0.30
    creditoFabricante=(montoTotal*0.15)+(montoTotal*0.20)
else:
    dineroPropio=montoTotal*0.70
    creditoFabricante=(montoTotal*0.30)+(montoTotal*0.20)

print("La empresa invirtió:",dineroPropio,"le solicitó prestado al banco:",prestamoBanco,"y el valor del crédito solicitado al fabricante fue de:",creditoFabricante)