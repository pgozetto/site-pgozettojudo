# Pedro Gozetto — Judô

Site oficial de Pedro Gozetto, judoca sub-18 e criador de conteúdo sobre judô. O projeto apresenta a jornada, conquistas, certificados, projetos e formas de contato em uma experiência responsiva.

## Tecnologias

- Next.js
- React e TypeScript
- CSS responsivo e animações com suporte a `prefers-reduced-motion`
- Lucide Icons

## Executar no computador

É necessário ter o Node.js 22 ou superior instalado.

```bash
npm install
npm run dev
```

Depois, abra `http://localhost:3000` no navegador.

## Criar a versão de produção

```bash
npm run build
npm run start
```

O comando de build gera a pasta `out/`, pronta para hospedagens estáticas. As imagens e arquivos públicos estão em `public/`.

## Publicar pelo GitHub e Vercel

1. Envie esta pasta para o repositório [pgozetto/site-pgozettojudo](https://github.com/pgozetto/site-pgozettojudo).
2. Acesse a Vercel e escolha **Add New → Project**.
3. Importe o repositório `site-pgozettojudo`.
4. A Vercel reconhece o Next.js automaticamente. Basta confirmar em **Deploy**.

Após o primeiro deploy, cada alteração enviada para a branch `main` cria uma nova versão pública automaticamente.

## Estrutura principal

```text
app/
  layout.tsx       # Metadados e estrutura global
  page.tsx         # Conteúdo, navegação e interações
  globals.css      # Visual, responsividade e animações
public/            # Fotos, certificados e favicon
```

## Conteúdo editável

As conquistas e certificados ficam no início de `app/page.tsx`, nos blocos `medals` e `certificates`. Para trocar uma imagem, adicione o novo arquivo em `public/` e atualize o caminho correspondente.

## Licença

Uso pessoal de Pedro Gozetto. Todos os direitos reservados.
