# CFC Treino (v1.7)

App de estudo offline para o Exame de Suficiência do CFC (prova em 13/12/2026): 293 questões oficiais (FGV/CFC 2024.1–2026.2) com explicações, 50 questões autorais, simulados, Foco no peso, guia e fórmulas rápidas.

## Arquivos
- `index.html` + `manifest.webmanifest` + `sw.js` + `icons/` → versão PWA (instalável, funciona offline).
- `CFC-Treino-offline.html` → arquivo único; abre com duplo clique (sem instalar).

## Usar no PC
Duplo clique em `CFC-Treino-offline.html`. Ou, para testar o PWA localmente:
`python -m http.server 8080` dentro desta pasta e abrir http://localhost:8080 (o Chrome oferece "Instalar app").

## Instalar como PWA
O service worker exige HTTPS ou localhost. Instale pelo Chrome/Edge (ícone de instalar na barra) ou, no celular, "Adicionar à tela inicial".

## Atenção
- Material de estudo pessoal: o conteúdo contém questões da FGV/CFC. Mantenha este repositório PRIVADO e não publique nem venda.
- O progresso fica no navegador (localStorage) de cada origem. Ao trocar de arquivo/endereço, use Exportar/Importar backup (JSON) no app.
- Explicações, guia e questões autorais foram escritas por IA: confira com a apostila.
