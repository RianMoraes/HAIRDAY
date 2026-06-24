export const apiConfig = { 
// Se estiver rodando no seu PC, usa o localhost. Se estiver na Vercel, usa a URL da Vercel.
  baseURL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3333' // Seu JSON Server local (sem /api)
    : '/api' // Na Vercel, usa a rota relativa que criamos
};