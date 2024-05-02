costo = 2000000
promedio = float(input("Digite su promedio de su periodo anterior: "))

if promedio >= 9:
    costo = costo-(costo*0.3)
    print (f"Se le hará un desucento del 30% al valor de su pension y queda en: {costo}")
elif promedio < 9:
    costo = (costo*0.1)+costo
    print(f"Su pension queda igual y se le agrega el 10% de IVA yqueda en: {costo}")