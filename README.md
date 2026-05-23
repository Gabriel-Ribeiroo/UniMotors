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
│   └── style.css                    # CSS compilado (não editar diretamente)
├── scss/
│   ├── style.scss                   # Arquivo principal (importa os parciais)
│   ├── variables.scss               # Variáveis de cor, tipografia e breakpoints
│   ├── resets.scss                  # Reset / base global
│   ├── animations.scss              # Animações (ex: bump do badge do carrinho)
│   ├── header.scss                  # Estilos do header
│   ├── aside.scss                   # Estilos da sidebar
│   ├── main.scss                    # Estilos da área principal / produtos
│   ├── footer.scss                  # Estilos do footer (links + newsletter)
│   └── components/                  # Componentes reutilizáveis (modulares)
│       ├── index.scss               # Forward de todos os componentes
│       ├── accordion.scss           # Estilos do accordion de categorias
│       ├── badge.scss               # Badge do contador do carrinho
│       ├── buttons.scss             # Botões reutilizáveis
│       ├── card.scss                # Cards de produto
│       ├── carousel.scss            # Carrossel de motos
│       ├── cart.scss                # Drawer lateral do carrinho de compras
│       ├── dropdown-menu.scss       # Dropdown do QR Code do WhatsApp
│       ├── input.scss               # Inputs reutilizáveis (ex: newsletter)
│       ├── month-promotion.scss     # Card de promoção do mês
│       └── toast.scss               # Toast de confirmação
├── js/
│   ├── script.js                    # Entry point — importa e inicializa os módulos
│   ├── theme.js                     # Alternância dark/light no <html>
│   ├── accordion.js                 # Expand/recolhe categorias com troca de ícone
│   ├── carousel.js                  # Controla o carrossel de motos
│   ├── cart.js                      # Lógica do carrinho (add/remover, total, badge)
│   ├── toggle-visibility.js         # Abre/fecha elementos genéricos (sidebar, dropdown, drawer)
│   ├── onKeydown.js                 # Helper para listener de teclas (ex: Esc)
│   └── showCartToast.js             # Exibe o toast de confirmação
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
│   ├── yamaha-yzf-r1s.jpg
│   └── icons/
│       └── trash.svg                # Ícone de remover item do carrinho
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
| Alternância de tema dark/light (persistida no `localStorage`) | ✅ |
| Sidebar com abertura/fechamento | ✅ |
| Fechar sidebar/drawer/dropdown com tecla `Esc` | ✅ |
| Fechar ao clicar fora (click outside) | ✅ |
| Accordion de categorias na sidebar | ✅ |
| Card de promoção do mês (com preço antigo/novo) | ✅ |
| Carrossel de motos | ✅ |
| Cards de produto com botão "Adicionar ao carrinho" | ✅ |
| Drawer lateral do carrinho (lista, total e checkout) | ✅ |
| Remover item do carrinho (ícone de lixeira) | ✅ |
| Contador (badge) com animação `bump` no ícone do carrinho | ✅ |
| Toast de confirmação ao adicionar produto | ✅ |
| Dropdown com QR Code do WhatsApp | ✅ |
| Footer com links e formulário de newsletter | ✅ |
| Responsividade (breakpoints `sm`, `md`, `lg`) | ✅ |
| Acessibilidade (aria-live, aria-atomic, role, labels) | ✅ |

---

## ⚙️ JavaScript — Módulos do `script.js`

| Módulo | O que faz |
|---|---|
| **`theme.js`** | Alterna o atributo `data-theme` (`dark` / `light`) no `<html>` e persiste em `localStorage` |
| **`accordion.js`** | Expande/recolhe a lista de categorias na sidebar com troca de ícone |
| **`toggle-visibility.js`** | Módulo genérico que controla a abertura/fechamento de sidebar, dropdown do WhatsApp e drawer do carrinho — com fechamento via `Esc` e click outside |
| **`cart.js`** | Adiciona/remove itens do carrinho, calcula o total, atualiza o badge animado e dispara o toast |
| **`carousel.js`** | Controla o carrossel de motos |
| **`onKeydown.js`** | Helper de listener de teclas reutilizado pelo `toggle-visibility` |
| **`showCartToast.js`** | Cria, exibe e remove o toast de confirmação com `aria-live` |

---

## 🎨 Organização SCSS

O SASS segue uma estrutura modular com arquivos parciais:

- **`variables.scss`** — CSS custom properties para dark/light theme + breakpoints SASS (`$sm-screen: 40rem`, `$md-screen: 48rem`, `$lg-screen: 64rem`)
- **`resets.scss`** — normalização do CSS padrão do navegador
- **`animations.scss`** — keyframes e classes de animação (ex: `.bump` no badge do carrinho)
- **`components/`** — pasta com os componentes reutilizáveis em arquivos separados (`accordion`, `badge`, `buttons`, `card`, `carousel`, `cart`, `dropdown-menu`, `input`, `month-promotion`, `toast`), agregados por `components/index.scss`
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
