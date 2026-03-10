# 📦 toModal (JS Library)

Uma biblioteca JavaScript leve e flexível para criação e gerenciamento de modais dinâmicas. Projetada para ser simples de implementar, ela se integra perfeitamente ao **Bootstrap** e permite total controle sobre estilos, conteúdos e comportamentos de forma programática.

## 🚀 Principais Recursos

* **Integração Bootstrap:** Suporte nativo para classes de cores e tamanhos (`sm`, `lg`, `xl`).
* **Conteúdo Flexível:** Aceita tanto texto simples quanto estruturas HTML complexas no corpo e no título.
* **Manipulação Dinâmica de Estilos:** Altere CSS de qualquer elemento dentro da modal através de objetos JavaScript.
* **Gerenciamento de Callbacks:** Execute funções ao interagir com a modal.
* **Valores Escondidos:** Suporte para armazenamento de IDs ou valores de referência via campos ocultos (`#modal_get_value`).

---

## 🛠️ Como Usar

### Inicialização

Basta instanciar a classe em seu arquivo JavaScript:

```javascript
const minhaModal = new ToModal();

```

### Exibindo a Modal

O método `show` é altamente configurável, permitindo definir cores, tamanhos e conteúdo de uma só vez:

```javascript
minhaModal.show(
    'bg-primary text-white', // Classe de cor (Bootstrap)
    'lg',                    // Tamanho (sm, lg, xl)
    'Título do Pedido',      // Título (Texto ou HTML)
    '<h4>Detalhes</h4><p>Conteúdo da modal aqui...</p>' // Corpo (HTML)
);

```

### Fechando a Modal

```javascript
minhaModal.hide();

```

---

## 🎨 Personalização de Estilo

A biblioteca oferece métodos específicos para ajustar a aparência da modal além dos padrões:

### Ajuste de Dimensões

```javascript
minhaModal.width('80%');
minhaModal.height('500px');

```

### Manipulação de Objetos CSS (`styleObj`)

Você pode alterar múltiplos estilos de múltiplos elementos internos enviando um objeto:

```javascript
minhaModal.styleObj({
    '.modal-header': {
        'background-color': '#333',
        'border-bottom': '2px solid orange'
    },
    '#modal_title': {
        'font-weight': 'bold'
    }
});

```

---

## 📋 Referência de Métodos

| Método | Descrição | Parâmetros |
| --- | --- | --- |
| `show()` | Exibe a modal na tela. | `class_color, option_sizes, title, body` |
| `hide()` | Remove a modal da visualização. | - |
| `width(v)` | Define a largura customizada. | `width` (string) |
| `height(v)` | Define a altura customizada. | `height` (string) |
| `setValue(v)` | Armazena um valor no campo oculto. | `modal_value` |
| `getValue()` | Recupera o valor do campo oculto. | - |
| `styleObj(obj)` | Altera CSS de elementos internos. | `styles_obj` (Objeto) |
| `callback(fn)` | Define uma função de retorno. | `func_callback` (Função) |

---

## 🧩 Exemplo de Fluxo com Callback

Você pode usar a biblioteca para fluxos de confirmação de forma muito simples:

```javascript
const confirmacao = new ToModal();

confirmacao.show('bg-danger', 'sm', 'Excluir Item', 'Tem certeza que deseja excluir?');

// Define a ação de confirmação
const acao = confirmacao.callback(() => {
    const id = confirmacao.getValue();
    console.log('Excluindo item ID:', id);
    confirmacao.hide();
});

```

---

## 📐 Requisitos

* **Bootstrap 4/5:** (Opcional, mas recomendado para os estilos de tamanho e cores).
* **DOM:** A biblioteca manipula elementos via `querySelector`, garantindo compatibilidade com browsers modernos.

---

## 🔗 Link do Projeto

Veja o código fonte e contribua em: [https://github.com/marcosptz/toModal](https://github.com/marcosptz/toModal)
