const { STRAPI_HOST } = process.env;

export async function loginUser(identifier: string, password: string) {
  try {
    const response = await fetch(`/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error?.message || 'Error logging in');
    }

    // Retorna el token y los datos del usuario
    return {
      jwt: data.jwt,
      user: data.user,
    };
  } catch (error: any) {
    console.error('Login error:', error.message);
    throw new Error(error.message || 'Unknown login error');
  }
}
