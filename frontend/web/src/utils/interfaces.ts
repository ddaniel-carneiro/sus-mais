export interface LoginForm {
  email: string,
  password: string
}

export interface RegisterForm {
  name: string,
	email: string,
	password: string,
	cpf: string,
	phone: string,
	role_id: number
}

export interface SelectOptions {
  name: string,
  value: string | number
}

export interface User {
  name: string,
  email: string,
  ability: string
}

export interface SvgIcons {
  width?: string,
  height?: string,
  stroke?: string,
  strokeWidth?: string,
  additionalClasses?: string
}

export interface PagesModals {
  create?: boolean,
  edit?: boolean,
  view?: boolean,
  delete?: boolean,
  accept?: boolean,
  refuse?: boolean,
}

export interface Report {
  id: number,
  user_id: number,
  title: string,
  description: string,
  street: string,
  number: string,
  neighborhood: string,
  postal_code: string,
  status_id: number,
  deleted_at: string | null,
  created_at: string,
  updated_at: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null,
  photos: [
    path: string
  ],
  status: {
    name: string
  },
  user: {
    name: string,
    CPF: string,
    email: string,
    phone: string
  }
}

export interface Collection {
  id: number,
  user_id: number,
  street: string,
  number: string,
  neighborhood: string,
  postal_code: string,
  status_id: number,
  deleted_at: string | null,
  created_at: string,
  updated_at: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | null,
  usersInteracting: [
    {
      name: string,
      CPF: string,
      email: string,
      phone: string
    }
  ],
  photos: [
    path: string
  ],
  status: {
    name: string
  },
  user: {
    name: string,
    CPF: string,
    email: string,
    phone: string
  }
}

export interface ReportForm {
  title: string,
  description: string,
  street: string,
  number: string,
  neighborhood: string,
  postal_code: string,
  images: File[]
}

export interface CollectionForm {
  street: string,
  number: string,
  neighborhood: string,
  postal_code: string,
  images: File[]
}
