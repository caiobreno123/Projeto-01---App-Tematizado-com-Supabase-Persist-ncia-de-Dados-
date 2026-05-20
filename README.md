# Projeto 01 - Supabase React Native

## Tema
Controle de Medicamentos 💊

## Funcionalidades
- Login e cadastro
- Supabase Auth
- Cadastro de medicamentos
- Lista dinâmica com .map()
- Público e privado
- Tabs
- Logout

## N2
Implementado

## SQL da tabela

```sql
create table medicines (
  id uuid default uuid_generate_v4() primary key,
  name text,
  dosage text,
  is_public boolean default false,
  user_id uuid references auth.users(id),
  created_at timestamp default now()
);
```