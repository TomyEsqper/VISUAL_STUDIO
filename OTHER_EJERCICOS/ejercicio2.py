#pedir valores
cantidad= int(input("digite la cantidad de la compra :"))

precio = int(input("digite el valor de la compra :"))
if cantidad >=3:
    descuento =0.2
else:
    descuento =0.1
#realizar operacion
valor=descuento*precio
valor_con_descuento= precio-valor

print("el valor a pagar:", valor_con_descuento)
