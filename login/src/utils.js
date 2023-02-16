export function login({ email, password }) {
  const delay = (0.7 + Math.random() * 2) * 1000; // simulando um delay de servidor

  return new Promise((resolve, reject) => { // Promisse é uma função que vai executar um bloco de código de maneira assincrona
    setTimeout(function () {
      if (password === 'password123' && email === 'kaio@gmail.com') {
        resolve();
      } else {
        reject({ message: 'e-mail or password wrong.' });
      }
    }, delay);
  });
}
