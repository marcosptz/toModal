/**
 * Classe que cria modal para ser utilizada em diversas situações, a classe possui diversas configurlções, a seguir a descrição de cada método:
 * - **show:** Esse método exibe a modal e recebe três paramêtros que não são obrigatórios, os paranêtros são os seguintes:
 *    - *class_color:* Uma classe CSS que define uma cor, no qual será utilizada para definir a cor da modal, podendo utilizar as classes prontas do Bootstrap, seu uso não é obrigatório;
 *    - *option_sizes:* Define o tamanho da modal utilizando os tamanhos definidos da Bootstrap (sm, lg, xl e outros...), esse paramêtro recebe um texto e seu uso não é obrigatório;
 *    - *title:* É o título da modal, podendo ser passado texto ou HTML e seu uso não é obrigatório;
 *    - *body:* É o corpo da modal que pode ser passado um HTML com toda a estrura necessária ou somente um texto, seu uso não é obrigatório;
 *    - *Ex. de uso:* Primeiro deverá ser instanciado um objeto da classe ---> const modalPedidos = new Modal(), depois poderá ser iniciada assim ---> modal.show('verde', 'Pedidos', 'Pedido salvo com sucesso!');
 * - **hide:** Esse método fecha a modal, não recebe nenhum paramêtro;
 * - **width:** Esse método define a largura da modal, seu paramêtro é o *width* que é uma string e é obrigatório, se nenhum valor for definido nesse método, a modal assumirá a largura padrão definida;
 * - **height:** Esse método define a altura da modal, seu paramêtro é o *height* que é uma string e é obrigatório se nenhum valor for definido nesse método, a modal assumirá a altura padrão definida;
 * - **setTitle:** Esse método altera o título da modal, recebe como paramêtro *title* que é obrigatório e pode ser um HTML ou um texto, sendo uma outra opção caso não seja definido nos paramêtros da função show;
 * - **setBody:** Esse método altera o corpo da modal, recebe como paramêtro *body* que é obrigatório e pode ser um HTML ou um texto, também serve como outra opção caso não seja definido nos paramêtros da função show;
 * - **footer:** Esse método define o footer da modal caso haja a necessidade de definir outros tipos de botões, recebe como paramêtro o *footer* que é obrigatório e deve ser um HTML;
 * - **setClassColor:** Esse método seta uma classe para alterar a cor da modal, seu paramêtro é o *color* que é uma string e é obrigatório, podendo ser uma opção para definir a cor da modal caso não seja definida nos paramêtros da função show;
 * - **addClass:** Esse método adiciona uma classe e tem dois paramêtros que são obrigatórios, esses paramêtros são:
 *    - *element:* Esse paramêtro é uma string e define qual o identificador de qual elemento será adicioba a classe, esse identificador pode ser um id (#) ou uma classe (.);
 *    - *name_class:* Esse paramêtro é uma string e define o nome da classe que será excluída;
 * - **size:** Esse método define o tamanho da modal utilizando os tamanhos definidos da Bootstrap (sm, lg, xl e outros...), esse paramêtro recebe um texto e seu uso é obrigatório;
 * - **removeClass:** Esse método remove uma classe e tem dois paramêtros que são obrigatórios, esses paramêtros são:
 *    - *element:* Esse paramêtro é uma string e define qual o identificador de qual elemento será excluída a classe, esse identificador pode ser um id (#) ou uma classe (.);
 *    - *name_class:* Esse paramêtro é uma string e define o nome da classe que será excluída;
 * - **button:** Esse método altera os dois botões padrão que a modal tem, recebe dois paramêtros obrigatórios, que são:
 *    - *type:* Esse paramêtro é um Number do tipo inteiro que define qual modal será alterada, type=1 altera o primeiro botão de fechar a modal, type=2 altera o outro botão que tem alguma ação;
 *    - *config:* Esse paramêtro é um objeto que define as alterações que serão aplicadas no botão, a propriedade hide do objeto pode ter o valor como true (deixa o botão visível caso não esteja) ou false (deixa o botão escondido),
 *              a propriedade text do objeto altera o texto do botão, a propriedade type_class do objeto define uma classe CSS para alterar a cor ou tipo de botão, podendo ser utilizada as classes do Bootstrap, a propriedade click_func
 *              define uma função para o evento click do botão escolhido a receber as alterações;
 * - **style:** Esse método altera o estilo CSS da modal podendo ser totalmente estilizada, recebe dois paramêtro que são:
 *    - *element_class:* Esse paramêtro é uma string que recebe a classe ou id do elemento HTML que será alterado;
 *    - *styles:* Esse paramêtro é um objeto que define os estilos CSS que serão aplicadas na modal, com propriedade a ser alterada sendo a chave do objeto e o valor que foi definido o estilo sendo o valor do objeto;
 * - **styleObj:** Esse método altera o estilo CSS de diversos elementos da modal, recebe o paramêtro *styles_obj* que é um objeto, onde poderá ser setado diversos styles para diversos elementos de uma só vez;
 * - **callback:** Esse método define uma função de callback para a modal, recebe o paramêtro *func_callback* que é a função definida;
 * - **setValue:** Esse método seta um valor para o campo escondido da modal, recebe o paramêtro *modal_value* que é obrigatório e pode ser string ou number;
 * - **getValue:** Esse método retorna o valor do campo escondido da modal, não recebe nenhum paramêtro.
 */
class Modal {
  constructor(id_modal, select_modal = false) {
    this.id_modal = id_modal;
    this.select_modal = select_modal;
    this.codigo_random =
      "modal_" +
      btoa((new Date().getTime() / 1000) * Math.random()).slice(0, 8);
    // Se o id_modal não for passado nada então cria um id randomicamente
    if (typeof id_modal == "undefined") this.id_modal = this.codigo_random;

    // Executando o método createHTML() no momento em que a classe é instanciada
    this.createHTML();
  }

  // Método que cria o HTML da modal
  createHTML = () => {
    // HTML base da modal
    let html = `<div class="modal fade" id="${this.id_modal}" tabindex="1" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title"></h4>
                      </div>
                      <div hidden class="modal-hidden">
                        <input hidden class="form-control" type="text" id="modal_get_value" name="modal_get_value" value="0">
                      </div>
                      <div class="modal-body modal-dynamic">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" id="btn_hide" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-default" id="btn_action" >Continuar<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>`;

    if (!this.select_modal) {
      document.getElementById("modal_dynamic").innerHTML = html;
      html = document.getElementById(this.id_modal);
      document.querySelector("body").append(html);
      this.modal = document.getElementById(this.id_modal);
    } else {
      this.id_modal = this.select_modal;
      this.modal = document.getElementById(this.select_modal);
    }
  };

  timer = (interval, element, func, msg, regressive) => {
    element.setAttribute("disabled", true);
    let i = interval;
    if (!regressive) i = 0;
    let text_button = element.innerText;
    let tempo = setInterval(function () {
      if (regressive) {
        i--;
      } else {
        i++;
      }

      element.innerText = `${msg} ${i} segundos`;
      element.setAttribute("disabled", false);

      if (regressive && i == 0) {
        clearInterval(tempo);
        element.removeAttribute("disabled");
        element.innerText = text_button;
        if (func) element.click();
        // window.location.href = `${location.origin}/`
      }

      if (!regressive && i == interval) {
        clearInterval(tempo);
        element.removeAttribute("disabled");
        element.innerText = text_button;
        if (func) element.click();
        // window.location.href = `${location.origin}/`
      }
    }, 1000);
  };

  // Método que exibe a modal e recebe a cor, o título e o conteúdo
  show = (title = "", body = "", options = {}) => {
    // Atribuindo os valores as variáveis e aos campos da modal
    this.title = title;
    this.body = body;
    this.options = options;
    this.obj_btn = {
      verde: "success",
      azul: "primary",
      ciano: "info",
      "cinza-chumbo": "secondary",
      amarelo: "warning",
      vermelho: "danger",
    };

    if (typeof this.options == "string") {
      if (
        typeof this.modal.querySelector(".modal-header").classList[1] ==
        "undefined"
      )
        this.modal.querySelector(".modal-header").classList.add(this.options);
      else
        this.modal
          .querySelector(".modal-header")
          .classList.replace(
            this.modal.querySelector(".modal-header").classList[1],
            this.options
          );
      if (
        typeof this.modal.querySelector("#btn_action").classList[1] ==
        "undefined"
      )
        this.modal.querySelector("#btn_action").classList.add(this.options);
      else
        this.modal
          .querySelector("#btn_action")
          .classList.replace(
            this.modal.querySelector("#btn_action").classList[1],
            `btn-${this.obj_btn[this.options]}`
          );
    }
    if (typeof this.options.color != "undefined") {
      if (
        typeof this.modal.querySelector(".modal-header").classList[1] ==
        "undefined"
      )
        this.modal
          .querySelector(".modal-header")
          .classList.add(this.options.color);
      else
        this.modal
          .querySelector(".modal-header")
          .classList.replace(
            this.modal.querySelector(".modal-header").classList[1],
            this.options.color
          );
      if (
        typeof this.modal.querySelector("#btn_action").classList[1] ==
        "undefined"
      )
        this.modal
          .querySelector("#btn_action")
          .classList.add(this.options.color);
      else
        this.modal
          .querySelector("#btn_action")
          .classList.replace(
            this.modal.querySelector("#btn_action").classList[1],
            this.options.color
          );
    }
    if (typeof this.options.size != "undefined") {
      if (
        typeof this.modal.querySelector(".modal-dialog").classList[1] ==
        "undefined"
      )
        this.modal
          .querySelector(".modal-dialog")
          .classList.add(`modal-${this.options.size}`);
      else
        this.modal
          .querySelector(".modal-dialog")
          .classList.replace(
            this.modal.querySelector(".modal-dialog").classList[1],
            `modal-${this.options.size}`
          );
    }
    if (typeof this.options.button_color != "undefined") {
      this.modal
        .querySelectorAll(".btn")[1]
        .classList.replace(
          this.modal.querySelectorAll(".btn")[1].classList[1],
          `btn-${this.options.button_color}`
        );
    }
    this.modal.querySelector(".modal-title").innerHTML = this.title;
    this.modal.querySelector(".modal-body").innerHTML = this.body;
    $(`#${this.id_modal}`).modal("show");
  };
  // Método que fecha a modal
  hide = () => {
    $(`#${this.id_modal}`).modal("hide");
  };
  width = (width) => {
    this.setWidth = width;
    this.modal.querySelector(".modal-dialog").style.width = this.setWidth;
  }; // Seta a largura da modal da modal
  height = (height) => {
    this.setHeight = height;
    this.modal.querySelector(".modal-dialog").style.height = this.setHeight;
  }; // Seta a altura da modal da modal
  setTitle = (title) => {
    this.title = title;
    this.modal.querySelector(".modal-title").innerHTML = this.title;
  }; // Seta o título da modal, podendo passar um HTML
  setBody = (body) => {
    this.body = body;
    this.modal.querySelector(".modal-body").innerHTML = this.body;
  }; // Seta body podendo passar um HTML do conteúdo da modal
  footer = (html_footer) => {
    this.html_footer = html_footer;
    this.modal.querySelector(".modal-footer").innerHTML = this.html_footer;
  }; // Seta um HTML para o footer da modal, podendo passar outros botões
  // Seta uma classe de cor para o header da modal
  setClassColor = (color) => {
    this.color = color;
    if (
      typeof this.modal.querySelector(".modal-header").classList[1] ==
      "undefined"
    )
      this.modal.querySelector(".modal-header").classList.add(this.color);
    else
      this.modal
        .querySelector(".modal-header")
        .classList.replace(
          this.modal.querySelector(".modal-header").classList[1],
          this.color
        );
  };
  // Adiciona uma classe
  addClass = (element, name_class) => {
    this.element = element;
    this.name_class = name_class;
    this.modal.querySelector(element).classList.add(this.name_class);
  };
  // Remove uma classe
  removeClass = (element, name_class) => {
    this.element = element;
    this.name_class = name_class;
    this.modal.querySelector(element).classList.remove(this.name_class);
  };
  // Define o tamanho da modal utilizando as classes de tamanhos definidos do Bootstrap
  size = (size) => {
    this.size = size;
    if (
      typeof this.modal.querySelector(".modal-dialog").classList[1] ==
      "undefined"
    )
      this.modal
        .querySelector(".modal-dialog")
        .classList.add(`modal-${this.size}`);
    else
      this.modal
        .querySelector(".modal-dialog")
        .classList.replace(
          this.modal.querySelector(".modal-dialog").classList[1],
          `modal-${this.size}`
        );
  };
  // Configura os botões padrão da modal, type defina qual botão vai configurar (type=1 ou type=2), config define as configurações
  button = (type, config = {}) => {
    this.type = type;
    this.config = config;
    this.buttons = this.modal.querySelectorAll(".btn");

    if (Object.values(config).length == 0) return this.buttons[type]; // Retorna o elemento button escolhido, sendo possível adicionar um evento.
    if (typeof this.config.hide != "undefined" && this.config.hide)
      this.buttons[type].setAttribute("hidden", this.config.hide);
    if (typeof this.config.hide != "undefined" && !this.config.hide)
      this.buttons[type].removeAttribute("hidden");
    if (typeof this.config.text != "undefined")
      this.buttons[type].innerText = this.config.text;
    if (typeof this.config.type_class != "undefined")
      this.buttons[type].classList.replace(
        this.buttons[type].classList[1],
        `btn-${this.config.type_class}`
      ); // Passando as classes do de cores do Bootstrap (success, warning, danger, primary, secundary, secondary, info e outros...)
    if (typeof this.config.dismiss != "undefined" && this.config.dismiss)
      this.buttons[type].setAttribute("data-dismiss", "modal"); // Ativa o atributo data-dismiss que fecha a modal
    if (typeof this.config.dismiss != "undefined" && !this.config.dismiss)
      this.buttons[type].removeAttribute("data-dismiss"); // Desativa o atributo data-dismiss que fecha a modal
    if (typeof this.config.timer != "undefined" && this.config.timer) {
      // Função que ativa o contador
      this.timer_interval = 6;
      this.timer_msg = `${this.buttons[type].innerText} em`;
      this.timer_func = false;
      this.timer_regressive = true;
      if (typeof this.config.timer_interval != "undefined")
        this.timer_interval = this.config.timer_interval;
      if (typeof this.config.timer_msg != "undefined")
        this.timer_msg = this.config.timer_msg;
      if (
        typeof this.config.timer_func != "undefined" &&
        this.config.timer_func
      )
        this.timer_func = this.config.timer_func;
      if (
        typeof this.config.timer_regressive != "undefined" &&
        !this.config.timer_regressive
      )
        this.timer_regressive = this.config.timer_regressive;

      this.timer(
        this.timer_interval,
        this.buttons[type],
        this.timer_func,
        this.timer_msg,
        this.timer_regressive
      );
    }
  };
  // Altera o style CSS, element_class é uma classe ou id do elemento HTML que será alterado, styles é um objeto com propriedade a ser alterada sendo a chave e o valor sendo o valor do objeto
  style = (element_class, styles) => {
    this.element_class = element_class;
    this.styles = styles;
    for (let prop in this.styles) {
      this.modal.querySelector(`${this.element_class}`).style[prop] =
        this.styles[prop];
    }
  };
  // Altera o style CSS, element_class é uma classe ou id do elemento HTML que será alterado, styles é um objeto com propriedade a ser alterada sendo a chave e o valor sendo o valor do objeto
  styleObj = (styles_obj) => {
    this.styles_obj = styles_obj;
    for (let el in this.styles_obj) {
      // console.log('el -', this.styles_obj[el])
      for (let prop in this.styles_obj[el]) {
        // console.log('pro -', prop);
        // console.log('style -', this.styles_obj[el][prop]);
        this.modal.querySelector(`${el}`).style[prop] =
          this.styles_obj[el][prop];
      }
      // modal.querySelector(`${this.element_class}`).style[prop] = this.styles[prop];
    }
  };
  // Remove propriedades CSS
  styleRemoveProperty = (element_class, style_property) => {
    this.element_class = element_class;
    this.style_property = style_property;
    for (let prop in this.style_property) {
      this.modal.querySelector(`${this.element_class}`).style.removeProperty[
        prop
      ];
    }
  };
  // Define uma função de callback
  callback = (func_callback) => {
    return func_callback;
  };
  // Seta um valor para o campo escondido
  setValue = (modal_value) => {
    this.modal.querySelector("#modal_get_value").value = modal_value;
    console.log("modal_get_value -", modal_get_value);
  };
  // Pega o valor do campo escondido
  getValue = () => {
    let modal_get_value = modal.querySelector("#modal_get_value").value;
    return modal_get_value;
  };
}
