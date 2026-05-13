# 1.Coletando as informações e usando .string() para limpar espaços extras
nome =input ("Digite seu nome completo:").strip()
idade = int (input("Digite sua idade:"))

# Convertendo para número inteiro
cidade =input("Digite a cidade onde mora:").strip()
profissao = input("Digite sua profissão:").strip()
hobby = input("Digite seu hobby favorito:").strip()

#definindo alinha de separação para manter ovisual organizado
separador = "=" * 35

# 2.Exibindo a mensagemformatada exatamente como no exemplo
print(separador)
print("     MENSAGEM PERSONALIZADA")
print(separador)

print(f"\nOlá, meu nome é {nome}!")
print(f"Tenho {idade} anos e moro em{cidade}.")
print(f"Atualmente trabalho como {profissao}.")
print(f"No meu tempo livre, gosto muito de {hobby}.")

#3. Resumo da vida (conforme o modelo da imagem)
print(f"\nResumo da sua vida: {nome} é uma pessoa de {idade} anos que trabalha como{profissao}, mora em {cidade } e adora {hobby}.")
print(separador)
