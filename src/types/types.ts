export interface ICategoria  {
  nome: string;
  thumbnail: string;
  header: string;
  id: string;
  descricao: string;
}

export interface IItem {
  titulo: string,
  descricao: string, 
  foto: string,
  preco: number,
  favorito: boolean,
  id: string,
  categoria: string;
}

export interface ICarrinhoItem {
  id: string, 
  quantidade: number
}

export interface PayloadCarrinhoQuantidade {
  id: string, 
  quantidade: number
}