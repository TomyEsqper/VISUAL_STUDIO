#pido cantidad de llantas compradas
llanta = int(input("Llantas compradas: "))
 
#hago descuentos segun llantas compradas
if llanta < 5:
    llanta = llanta * 300
    print(f"El valor total a pagar es de: {llanta}")
elif llanta >= 5 and llanta <= 10:
    llanta = llanta * 250
    print(f"El valor total a pagar es de: {llanta}")
elif llanta > 10:
    llanta = llanta * 200    
    print(f"el valor total a pagar es de: {llanta}")