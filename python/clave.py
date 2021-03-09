password_correcta = 'admin1234'
password_Usuario = input("""
Bienvenidos a la venta de carros virtual 🚘

1 - User: 
2 - password:

password needs special character: """)

while password_Usuario != password_correcta:
    print('Clave incorrecta')
    break
else:
    print('Clave correcta')