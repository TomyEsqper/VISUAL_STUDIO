#pedir valores
color = str(input("digite un color :"))
compra =float(input("digite el valor de la compra"))
#tomar decision y realizar debidas operaciones
if color =="rojo":
    descuento =compra*0.15
    valorPagar=compra-descuento
    print("El valor de la compra fue:",compra,"usted saco la balota: ",color,"con un descuento de:",descuento,"el valor a pagar es:",valorPagar)
    
elif color == "verde":
    descuento= compra*0.20
    valorPagar=compra-descuento
    print("El valor de la compra fue:",compra,"usted saco la balota: ",color,"con un descuento de:",descuento,"el valor a pagar es:",valorPagar)
else:
    print("no tienes descuento")

