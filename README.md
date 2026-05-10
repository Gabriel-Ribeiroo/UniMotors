# 🏍️ UniMotors — E-Commerce de Motos

Projeto integrador da disciplina **Design para Web** (Ensino Superior).  
Simulação de uma loja virtual de motos com foco em HTML semântico, CSS moderno, SASS, JavaScript e boas práticas de UX.

---

## 🛠️ Tecnologias

- HTML5 (tags semânticas)
- SASS/SCSS (compilado via `sass`)
- CSS3 (Flexbox + Grid)
- JavaScript (vanilla)
- Google Fonts (Inter)

---

## 📁 Estrutura do Projeto

```
/
├── index.html
├── css/
│   └── style.css               # CSS compilado (não editar diretamente)
├── scss/
│   ├── style.scss               # Arquivo principal (importa os parciais)
│   ├── variables.scss           # Variáveis de cor, tipografia e breakpoints
│   ├── resets.scss              # Reset / base global
│   ├── animations.scss          # Animações (ex: bump do badge do carrinho)
│   ├── header.scss              # Estilos do header
│   ├── aside.scss               # Estilos da sidebar
│   ├── main.scss                # Estilos da área principal / produtos
│   ├── footer.scss              # Estilos do footer
│   └── components/              # Componentes reutilizáveis (modulares)
│       ├── index.scss           # Forward de todos os componentes
│       ├── accordion.scss       # Estilos do accordion de categorias
│       ├── badge.scss           # Badge do contador do carrinho
│       ├── buttons.scss         # Botões reutilizáveis
│       ├── card.scss            # Cards de produto
│       ├── carousel.scss        # Carrossel de motos
│       ├── dropdown-menu.scss   # Dropdown do QR Code do WhatsApp
│       └── toast.scss           # Toast de confirmação
├── js/
│   ├── script.js                # Entry point — importa e inicializa os módulos
│   ├── theme.js                 # Alternância dark/light no <html>
│   ├── sidebar.js               # Abertura, fechamento e overlay da sidebar
│   ├── accordion.js             # Expand/recolhe categorias com troca de ícone
│   ├── dropdown.js              # Abre/fecha o dropdown do QR Code do WhatsApp
│   ├── carousel.js              # Controla o carrossel de motos
│   ├── cartCount.js             # Incrementa o contador e anima o badge
│   ├── onKeydown.js             # Listener global de teclas (ex: Esc)
│   └── showCartToast.js         # Exibe o toast de confirmação
├── images/
│   ├── bmw-m1000r.avif
│   ├── bmw-s1000rr.webp
│   ├── ducati-panigale-v4a.jpg
│   ├── ducati-streetfighter-v4.webp
│   ├── honda-cb1000r.webp
│   ├── honda-cbr10000rr-r-fireblade.jpg
│   ├── suzuki-gsx-r1000r.webp
│   ├── suzuki-r1000.jpg
│   ├── wa.png
│   ├── yamaha-mt10.jpg
│   └── yamaha-yzf-r1s.jpg
├── .gitignore
├── LICENSE
├── package.json
└── yarn.lock
```

---

## ✨ Funcionalidades

| Funcionalidade | Status |
|---|---|
| Layout com Grid (sidebar + conteúdo) | ✅ |
| Navbar com Flexbox | ✅ |
| Alternância de tema dark/light | ✅ |
| Sidebar com abertura/fechamento | ✅ |
| Fechar sidebar com tecla `Esc` | ✅ |
| Overlay de fundo ao abrir sidebar | ✅ |
| Accordion de categorias na sidebar | ✅ |
| 10 motos exibidas em cards | ✅ |
| Botão "Adicionar ao carrinho" | ✅ |
| Contador (badge) com animação no ícone do carrinho | ✅ |
| Toast de confirmação ao adicionar produto | ✅ |
| Responsividade | ✅ |
| Acessibilidade (aria-live, aria-atomic, role) | ✅ |

---

## ⚙️ JavaScript — Módulos do `script.js`

| Módulo | O que faz |
|---|---|
| **Tema** | Alterna as classes `dark` / `light` no `<html>` |
| **Sidebar** | Abre e fecha o menu lateral; o overlay também fecha ao clicar |
| **Accordion** | Expande/recolhe a lista de categorias com troca de ícone |
| **Dropdown** | Abre/fecha o dropdown com o QR Code do WhatsApp |
| **Carrinho** | Incrementa o contador, anima o badge e exibe um toast com o nome da moto adicionada |

---

## 🎨 Organização SCSS

O SASS segue uma estrutura modular com arquivos parciais:

- **`variables.scss`** — CSS custom properties para dark/light theme + breakpoints SASS (`$sm-screen: 40rem`, `$md-screen: 48rem`, `$lg-screen: 64rem`)
- **`resets.scss`** — normalização do CSS padrão do navegador
- **`animations.scss`** — keyframes e classes de animação (ex: `.bump` no badge do carrinho)
- **`components/`** — pasta com os componentes reutilizáveis em arquivos separados (`accordion`, `badge`, `buttons`, `card`, `carousel`, `dropdown-menu`, `toast`), agregados por `components/index.scss`
- **`header.scss`**, **`aside.scss`**, **`main.scss`**, **`footer.scss`** — estilos por seção da página

---

## 🚀 Como Rodar

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- Yarn ou npm

### 📦 Instalação

```bash
yarn install
# ou
npm install
```

### 👀 Compilar SASS (modo watch)

```bash
yarn sass:watch
# ou
npm run sass:watch
```

Abra o `index.html` no navegador (ou use uma extensão como **Live Server** no VS Code).

---

## 👤 Autor

**Gabriel Ribeiro** — RA: 2507390  
Disciplina: Design para Web
