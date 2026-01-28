import { NextResponse } from 'next/server';

/**
 * API Route simples para demonstrar testes de integração
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  return NextResponse.json({
    message: name ? `Hello, ${name}!` : 'Hello, World!',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Nome e email são obrigatórios' },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    user: { name, email },
    message: `Usuário ${name} cadastrado com sucesso!`,
  });
}
