import time

def tiempo():
	def mi_decorador(f):

		def wrapper(*args, **kwargs):
			antes = time.perf_counter()
			resultado = f(*args, **kwargs)
			total = time.perf_counter() - antes
			print(f"paso {total} segundos")
			return resultado
		return wrapper
	return mi_decorador

@tiempo()
def sumaDivisores(n):
    return sum((i for i in range(1, abs(n)) if n % i == 0))

print(sumaDivisores(284))
	
		
