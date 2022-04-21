def suma_divisores(numero):
    suma = 0
    for i in range(2, int(numero/2)+1):
        if numero % i == 0:
        	print(i)
        	suma += i
    ##suma = suma + 129
    return suma


numero = int(input("Ingresa el número: "))
print("La suma es de sus divisores es: ")
print(suma_divisores(numero))