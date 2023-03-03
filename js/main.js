$(document).ready(function () {

    $("#telefone").mask("(00) 00000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("000-0000");

    $("form").validate({
        rules: {
          nome: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          telefone: {
            required: true,
          },
          cpf: {
            required: true,
          },
          cep: {
            required: true,
          },
          endereco: {
            required: true,
          },
          numero: {
            required: false,
          },
          cidade: {
            required: false,
          },
          estado: {
            required: true,
          },
        },
        messages: {
          nome: "Por favor, insira o seu nome",
          email: "Por favor, insira o seu e-mail",
          telefone: "Por favor, insira o seu telefone",
          cpf: "Por favor, insira o seu cpf",
          cep: "Por favor, insira o seu cep",
          endereco: "Por favor, insira o seu endereço",
          estado: "Por favor, insira o seu estado"
        }
      })
})