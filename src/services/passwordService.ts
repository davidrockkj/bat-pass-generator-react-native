export default function generatePassword() {
  let password: string = ''; 
    // A senha inicialmente será vazia
  let characters: string = '!@#$ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // Caracteres que podem ser usados na senha

  let passwordLenght: number = 8;
    // Tamanho da senha a ser gerada
  
  for(let i = 0; i < passwordLenght; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length))
      // A cada iteração, um caractere aleatório é adicionado à senha
  }

  return password;
    // Senha gerada e completa
}