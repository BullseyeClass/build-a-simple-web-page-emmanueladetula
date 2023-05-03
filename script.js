const button = document.querySelector('#btn');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
  alert('Hello, World!');
  result.innerText = 'Button clicked!';
});

// $('#btn').on('click',()=>{{
//   alert('Hello World');
//   $('#result').text("Button clicked");
//   $('#result').addClass('result')
// }})