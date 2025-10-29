# Landing Page - Carla Evania Estilista

Uma landing page moderna e responsiva para o negócio de costura e estilismo da Carla Evania, desenvolvida com React, TypeScript, Tailwind CSS e Flowbite.

## 📋 Sobre o Projeto

Este projeto é uma landing page profissional para Carla Evania Estilista, apresentando os serviços oferecidos e informações pessoais de forma elegante e moderna. A aplicação foi desenvolvida com foco na experiência do usuário, navegação intuitiva e apresentação visual dos serviços de costura, ajustes, reformas e personalização de roupas.

## ✨ Funcionalidades

- **Design Responsivo**: Adaptável para diferentes tamanhos de tela
- **Interface Moderna**: Design limpo e profissional com tema rosa
- **Navegação Multi-página**: Sistema de roteamento com React Router
- **Páginas Disponíveis**:
  - Landing Page (página inicial com serviços)
  - Sobre Mim (informações pessoais e diferenciais)
- **Apresentação de Serviços**: Cards interativos mostrando os serviços oferecidos
- **Seção Sobre**: Informações pessoais e diferenciais da Carla
- **Integração WhatsApp**: Botão direto para agendamento via WhatsApp
- **Componentes Reutilizáveis**: Estrutura modular com componentes UI customizados
- **Footer Profissional**: Rodapé com informações do desenvolvedor

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal para interface
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.1.7** - Build tool e servidor de desenvolvimento
- **Tailwind CSS 4.1.16** - Framework de estilização
- **React Router DOM 7.9.4** - Roteamento entre páginas

### UI Components
- **Radix UI** - Componentes acessíveis
- **Flowbite React 0.12.10** - Componentes UI adicionais (Footer)
- **Lucide React** - Ícones modernos
- **Class Variance Authority** - Gerenciamento de variantes de classes

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **TypeScript ESLint** - Linting específico para TypeScript

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd LandingPage
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/
│       ├── button.tsx      # Componente de botão
│       ├── card.tsx        # Componente de card
│       ├── separator.tsx   # Separador visual
│       └── Topbar.tsx      # Barra de navegação superior
├── Pages/
│   ├── LandingPage.tsx     # Página principal com serviços
│   └── SobreMimPage.tsx    # Página sobre a Carla
├── lib/
│   └── utils.ts            # Utilitários
├── App.tsx                 # Componente principal com roteamento
└── main.tsx                # Ponto de entrada

public/
├── logo.jpg                # Logo da Carla Evania
└── maquina.png             # Ícone da máquina de costura
```

## 🎨 Páginas da Aplicação

### 🏠 Landing Page (`/`)
- **Serviços Apresentados**:
  1. **Ajustes e Reformas** - Retoques, barras e ajustes para o caimento perfeito
  2. **Peças Sob Medida** - Criação de roupas exclusivas feitas especialmente para você
  3. **Detalhes e Bordados** - Acabamentos e bordados que destacam sua personalidade
  4. **Personalização com Pedras e Rendas** - Customização com pedrarias e recortes de rendas

### 👤 Sobre Mim (`/sobre`)
- **Informações Pessoais**:
  - Quem Sou - Apresentação pessoal
  - Minha Paixão - Dedicação ao trabalho
  - Diferenciais - O que torna o trabalho único
  - Visão de Futuro - Objetivos e metas

## 🎯 Funcionalidades de Contato

- **WhatsApp**: Botão direto para agendamento (55) 55 99699-1914
- **Navegação**: Sistema de roteamento entre páginas
- **Design Profissional**: Interface que transmite confiança e profissionalismo
- **Logo Personalizado**: Imagem da Carla Evania na página principal
- **Ícone Temático**: Máquina de costura no cabeçalho

## 📱 Responsividade

O projeto foi desenvolvido com foco na responsividade, utilizando:
- Grid responsivo para os cards de serviços e informações
- Menu adaptável para dispositivos móveis
- Imagens e componentes que se ajustam automaticamente
- Layout flexível que funciona em diferentes resoluções

## 🎨 Design e Estilo

- **Tema Rosa**: Paleta de cores rosa para transmitir feminilidade e elegância
- **Fonte Personalizada**: Uso da fonte "Great Vibes" para títulos
- **Cards Interativos**: Efeitos hover e transições suaves
- **Imagens Profissionais**: Logo e foto de perfil com bordas estilizadas
- **Footer Integrado**: Rodapé com informações do desenvolvedor

## 👨‍💻 Desenvolvimento

**Desenvolvedor**: Christopher Moreira de Oliveira  
**GitHub**: [Christopher-Moreira](https://github.com/Christopher-Moreira)

## 📄 Licença

Este projeto é privado e todos os direitos são reservados.

---

Para mais informações sobre os serviços ou agendamentos, entre em contato através do WhatsApp disponível na página.